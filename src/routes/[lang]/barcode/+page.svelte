<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let value = '';
	let format = 'CODE128';
	let width = 2;
	let height = 100;
	let showText = true;
	let canvas: HTMLCanvasElement;
	let JsBarcode: any;
	let error = '';

	const formats = [
		{ value: 'CODE128', label: 'Code 128', placeholder: 'ABC-123' },
		{ value: 'EAN13', label: 'EAN-13', placeholder: '5901234123457' },
		{ value: 'EAN8', label: 'EAN-8', placeholder: '96385074' },
		{ value: 'UPC', label: 'UPC-A', placeholder: '123456789012' },
		{ value: 'CODE39', label: 'Code 39', placeholder: 'CODE39' },
		{ value: 'ITF14', label: 'ITF-14', placeholder: '12345678901231' },
		{ value: 'MSI', label: 'MSI', placeholder: '123456' },
		{ value: 'pharmacode', label: 'Pharmacode', placeholder: '1234' },
		{ value: 'codabar', label: 'Codabar', placeholder: 'A12345B' }
	];

	$: currentFormat = formats.find(f => f.value === format) || formats[0];

	onMount(async () => {
		const module = await import('jsbarcode');
		JsBarcode = module.default;
	});

	$: if (browser && JsBarcode && value && canvas) {
		generateBarcode();
	}

	function generateBarcode() {
		if (!value || !JsBarcode || !canvas) return;
		error = '';
		try {
			JsBarcode(canvas, value, {
				format: format,
				width: width,
				height: height,
				displayValue: showText,
				background: '#ffffff',
				lineColor: '#000000'
			});
		} catch (e) {
			error = t('barcode.error');
		}
	}

	function downloadPNG() {
		if (!canvas || error) return;
		const link = document.createElement('a');
		link.download = `barcode-${format}.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	}
</script>

<svelte:head>
	<title>{t('barcode.title')} - SD.hn</title>
	<meta name="description" content={t('barcode.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('barcode.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('barcode.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Input Section -->
		<div class="space-y-6">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('barcode.format')}
				</label>
				<select
					bind:value={format}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
				>
					{#each formats as fmt}
						<option value={fmt.value}>{fmt.label}</option>
					{/each}
				</select>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('barcode.input')}
				</label>
				<input
					type="text"
					bind:value={value}
					placeholder={currentFormat.placeholder}
					class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('barcode.width')}
					</label>
					<input
						type="range"
						bind:value={width}
						min="1"
						max="5"
						class="w-full"
					/>
					<div class="text-center text-sm text-gray-500">{width}px</div>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('barcode.height')}
					</label>
					<input
						type="range"
						bind:value={height}
						min="50"
						max="200"
						step="10"
						class="w-full"
					/>
					<div class="text-center text-sm text-gray-500">{height}px</div>
				</div>
			</div>

			<div>
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						bind:checked={showText}
						class="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
					/>
					<span class="text-sm text-gray-700 dark:text-dark-300">{t('barcode.showText')}</span>
				</label>
			</div>
		</div>

		<!-- Preview Section -->
		<div class="flex flex-col items-center">
			<div class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-4">{t('barcode.preview')}</div>
			<div class="bg-white p-4 rounded-lg shadow-lg min-w-[280px]">
				{#if value && !error}
					<canvas bind:this={canvas}></canvas>
				{:else if error}
					<div class="w-full py-8 text-center text-red-500">{error}</div>
				{:else}
					<div class="w-full py-8 text-center text-gray-400 dark:text-dark-500">
						{t('barcode.emptyPreview')}
					</div>
				{/if}
			</div>

			{#if value && !error}
				<button
					on:click={downloadPNG}
					class="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
				>
					{t('barcode.download')}
				</button>
			{/if}
		</div>
	</div>
</div>

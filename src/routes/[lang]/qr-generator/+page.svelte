<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let text = '';
	let size = 256;
	let errorLevel: 'L' | 'M' | 'Q' | 'H' = 'M';
	let fgColor = '#000000';
	let bgColor = '#ffffff';
	let canvas: HTMLCanvasElement;
	let QRCode: any;

	onMount(async () => {
		const module = await import('qrcode');
		QRCode = module.default;
	});

	$: if (browser && QRCode && text && canvas) {
		generateQR();
	}

	function generateQR() {
		if (!text || !QRCode || !canvas) return;
		QRCode.toCanvas(canvas, text, {
			width: size,
			margin: 2,
			errorCorrectionLevel: errorLevel,
			color: { dark: fgColor, light: bgColor }
		});
	}

	function downloadPNG() {
		if (!canvas) return;
		const link = document.createElement('a');
		link.download = 'qrcode.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	}

	async function downloadSVG() {
		if (!text || !QRCode) return;
		const svg = await QRCode.toString(text, {
			type: 'svg',
			width: size,
			margin: 2,
			errorCorrectionLevel: errorLevel,
			color: { dark: fgColor, light: bgColor }
		});
		const blob = new Blob([svg], { type: 'image/svg+xml' });
		const link = document.createElement('a');
		link.download = 'qrcode.svg';
		link.href = URL.createObjectURL(blob);
		link.click();
	}

	let copied = false;
	async function copyToClipboard() {
		if (!canvas) return;
		canvas.toBlob(async (blob) => {
			if (blob) {
				await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
				copied = true;
				setTimeout(() => copied = false, 2000);
			}
		});
	}
</script>

<svelte:head>
	<title>{t('qr.title')} - SD.hn</title>
	<meta name="description" content={t('qr.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('qr.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('qr.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Input Section -->
		<div class="space-y-6">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('qr.input')}
				</label>
				<textarea
					bind:value={text}
					placeholder={t('qr.inputPlaceholder')}
					class="w-full h-32 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				></textarea>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('qr.size')}
					</label>
					<select
						bind:value={size}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
					>
						<option value={128}>128 x 128</option>
						<option value={256}>256 x 256</option>
						<option value={512}>512 x 512</option>
						<option value={1024}>1024 x 1024</option>
					</select>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('qr.errorLevel')}
					</label>
					<select
						bind:value={errorLevel}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
					>
						<option value="L">L (7%)</option>
						<option value="M">M (15%)</option>
						<option value="Q">Q (25%)</option>
						<option value="H">H (30%)</option>
					</select>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('qr.fgColor')}
					</label>
					<input
						type="color"
						bind:value={fgColor}
						class="w-full h-10 rounded-lg cursor-pointer"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('qr.bgColor')}
					</label>
					<input
						type="color"
						bind:value={bgColor}
						class="w-full h-10 rounded-lg cursor-pointer"
					/>
				</div>
			</div>
		</div>

		<!-- Preview Section -->
		<div class="flex flex-col items-center">
			<div class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-4">{t('qr.preview')}</div>
			<div class="bg-white p-4 rounded-lg shadow-lg">
				{#if text}
					<canvas bind:this={canvas}></canvas>
				{:else}
					<div class="w-64 h-64 flex items-center justify-center text-gray-400 dark:text-dark-500 text-center">
						{t('qr.emptyPreview')}
					</div>
				{/if}
			</div>

			{#if text}
				<div class="flex flex-wrap gap-2 mt-4 justify-center">
					<button
						on:click={downloadPNG}
						class="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm"
					>
						{t('qr.download')}
					</button>
					<button
						on:click={downloadSVG}
						class="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm"
					>
						{t('qr.downloadSvg')}
					</button>
					<button
						on:click={copyToClipboard}
						class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
					>
						{copied ? t('qr.copied') : t('qr.copy')}
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let ssid = '';
	let password = '';
	let encryption: 'WPA' | 'WEP' | 'nopass' = 'WPA';
	let hidden = false;
	let canvas: HTMLCanvasElement;
	let QRCode: any;

	onMount(async () => {
		const module = await import('qrcode');
		QRCode = module.default;
	});

	$: wifiString = ssid ? generateWifiString() : '';

	function generateWifiString(): string {
		const escapedSsid = ssid.replace(/[\\;,:]/g, '\\$&');
		const escapedPassword = password.replace(/[\\;,:]/g, '\\$&');
		return `WIFI:T:${encryption};S:${escapedSsid};P:${escapedPassword};H:${hidden ? 'true' : 'false'};;`;
	}

	$: if (browser && QRCode && wifiString && canvas) {
		generateQR();
	}

	function generateQR() {
		if (!wifiString || !QRCode || !canvas) return;
		QRCode.toCanvas(canvas, wifiString, {
			width: 256,
			margin: 2,
			errorCorrectionLevel: 'M',
			color: { dark: '#000000', light: '#ffffff' }
		});
	}

	function downloadPNG() {
		if (!canvas) return;
		const link = document.createElement('a');
		link.download = `wifi-${ssid}.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	}
</script>

<svelte:head>
	<title>{t('wifi.title')} - SD.hn</title>
	<meta name="description" content={t('wifi.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('wifi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('wifi.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Input Section -->
		<div class="space-y-6">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('wifi.ssid')}
				</label>
				<input
					type="text"
					bind:value={ssid}
					placeholder={t('wifi.ssidPlaceholder')}
					class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('wifi.password')}
				</label>
				<input
					type="password"
					bind:value={password}
					placeholder={t('wifi.passwordPlaceholder')}
					class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('wifi.encryption')}
				</label>
				<select
					bind:value={encryption}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
				>
					<option value="WPA">WPA/WPA2/WPA3</option>
					<option value="WEP">WEP</option>
					<option value="nopass">None (Open)</option>
				</select>
			</div>

			<div>
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						bind:checked={hidden}
						class="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
					/>
					<span class="text-sm text-gray-700 dark:text-dark-300">{t('wifi.hidden')}</span>
				</label>
			</div>
		</div>

		<!-- Preview Section -->
		<div class="flex flex-col items-center">
			<div class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-4">{t('wifi.preview')}</div>
			<div class="bg-white p-4 rounded-lg shadow-lg">
				{#if ssid}
					<canvas bind:this={canvas}></canvas>
				{:else}
					<div class="w-64 h-64 flex items-center justify-center text-gray-400 dark:text-dark-500 text-center">
						{t('wifi.emptyPreview')}
					</div>
				{/if}
			</div>

			{#if ssid}
				<button
					on:click={downloadPNG}
					class="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
				>
					{t('wifi.download')}
				</button>
			{/if}
		</div>
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let firstName = '';
	let lastName = '';
	let phone = '';
	let email = '';
	let company = '';
	let title = '';
	let website = '';
	let address = '';
	let canvas: HTMLCanvasElement;
	let QRCode: any;

	onMount(async () => {
		const module = await import('qrcode');
		QRCode = module.default;
	});

	$: vCardString = generateVCard();
	$: hasContent = firstName || lastName || phone || email;

	function generateVCard(): string {
		if (!firstName && !lastName && !phone && !email) return '';

		let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
		if (firstName || lastName) vcard += `N:${lastName};${firstName};;;\n`;
		if (firstName || lastName) vcard += `FN:${firstName} ${lastName}\n`;
		if (company) vcard += `ORG:${company}\n`;
		if (title) vcard += `TITLE:${title}\n`;
		if (phone) vcard += `TEL:${phone}\n`;
		if (email) vcard += `EMAIL:${email}\n`;
		if (website) vcard += `URL:${website}\n`;
		if (address) vcard += `ADR:;;${address};;;;\n`;
		vcard += 'END:VCARD';
		return vcard;
	}

	$: if (browser && QRCode && vCardString && canvas) {
		generateQR();
	}

	function generateQR() {
		if (!vCardString || !QRCode || !canvas) return;
		QRCode.toCanvas(canvas, vCardString, {
			width: 256,
			margin: 2,
			errorCorrectionLevel: 'M',
			color: { dark: '#000000', light: '#ffffff' }
		});
	}

	function downloadPNG() {
		if (!canvas) return;
		const name = `${firstName}-${lastName}`.replace(/\s+/g, '-') || 'vcard';
		const link = document.createElement('a');
		link.download = `${name}-qr.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	}
</script>

<svelte:head>
	<title>{t('vcard.title')} - SD.hn</title>
	<meta name="description" content={t('vcard.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('vcard.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('vcard.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Input Section -->
		<div class="space-y-4">
			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('vcard.firstName')}
					</label>
					<input
						type="text"
						bind:value={firstName}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('vcard.lastName')}
					</label>
					<input
						type="text"
						bind:value={lastName}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
					/>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('vcard.phone')}
				</label>
				<input
					type="tel"
					bind:value={phone}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('vcard.email')}
				</label>
				<input
					type="email"
					bind:value={email}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('vcard.company')}
					</label>
					<input
						type="text"
						bind:value={company}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
						{t('vcard.title_field')}
					</label>
					<input
						type="text"
						bind:value={title}
						class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
					/>
				</div>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('vcard.website')}
				</label>
				<input
					type="url"
					bind:value={website}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('vcard.address')}
				</label>
				<input
					type="text"
					bind:value={address}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
			</div>
		</div>

		<!-- Preview Section -->
		<div class="flex flex-col items-center">
			<div class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-4">{t('vcard.preview')}</div>
			<div class="bg-white p-4 rounded-lg shadow-lg">
				{#if hasContent}
					<canvas bind:this={canvas}></canvas>
				{:else}
					<div class="w-64 h-64 flex items-center justify-center text-gray-400 dark:text-dark-500 text-center">
						{t('vcard.emptyPreview')}
					</div>
				{/if}
			</div>

			{#if hasContent}
				<button
					on:click={downloadPNG}
					class="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
				>
					{t('vcard.download')}
				</button>
			{/if}
		</div>
	</div>
</div>

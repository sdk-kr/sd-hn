<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let baseUrl = '';
	let source = '';
	let medium = '';
	let campaign = '';
	let term = '';
	let content = '';

	$: generatedUrl = buildUrl();

	function buildUrl(): string {
		if (!baseUrl || !source || !medium || !campaign) return '';

		try {
			const url = new URL(baseUrl);
			url.searchParams.set('utm_source', source);
			url.searchParams.set('utm_medium', medium);
			url.searchParams.set('utm_campaign', campaign);
			if (term) url.searchParams.set('utm_term', term);
			if (content) url.searchParams.set('utm_content', content);
			return url.toString();
		} catch {
			return '';
		}
	}

	let copied = false;
	function copyUrl() {
		if (generatedUrl) {
			navigator.clipboard.writeText(generatedUrl);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}

	function reset() {
		baseUrl = '';
		source = '';
		medium = '';
		campaign = '';
		term = '';
		content = '';
	}

	const presets = {
		google: { source: 'google', medium: 'cpc' },
		facebook: { source: 'facebook', medium: 'social' },
		twitter: { source: 'twitter', medium: 'social' },
		email: { source: 'newsletter', medium: 'email' },
		linkedin: { source: 'linkedin', medium: 'social' }
	};

	function applyPreset(preset: keyof typeof presets) {
		source = presets[preset].source;
		medium = presets[preset].medium;
	}
</script>

<svelte:head>
	<title>{t('utm.title')} - SD.hn</title>
	<meta name="description" content={t('utm.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('utm.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('utm.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Quick Presets -->
		<div class="flex flex-wrap gap-2 justify-center">
			{#each Object.keys(presets) as preset}
				<button
					on:click={() => applyPreset(preset)}
					class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 rounded-full hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors capitalize"
				>
					{preset}
				</button>
			{/each}
		</div>

		<!-- Base URL -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('utm.baseUrl')} <span class="text-red-500">*</span>
			</label>
			<input
				type="url"
				bind:value={baseUrl}
				placeholder={t('utm.baseUrlPlaceholder')}
				class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			/>
		</div>

		<!-- Required UTM Parameters -->
		<div class="grid md:grid-cols-3 gap-4">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('utm.source')} <span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					bind:value={source}
					placeholder={t('utm.sourcePlaceholder')}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
				<p class="mt-1 text-xs text-gray-500 dark:text-dark-500">{t('utm.sourceHint')}</p>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('utm.medium')} <span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					bind:value={medium}
					placeholder={t('utm.mediumPlaceholder')}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
				<p class="mt-1 text-xs text-gray-500 dark:text-dark-500">{t('utm.mediumHint')}</p>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('utm.campaign')} <span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					bind:value={campaign}
					placeholder={t('utm.campaignPlaceholder')}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
				<p class="mt-1 text-xs text-gray-500 dark:text-dark-500">{t('utm.campaignHint')}</p>
			</div>
		</div>

		<!-- Optional UTM Parameters -->
		<div class="grid md:grid-cols-2 gap-4">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('utm.term')}
				</label>
				<input
					type="text"
					bind:value={term}
					placeholder={t('utm.termPlaceholder')}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
				<p class="mt-1 text-xs text-gray-500 dark:text-dark-500">{t('utm.termHint')}</p>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('utm.content')}
				</label>
				<input
					type="text"
					bind:value={content}
					placeholder={t('utm.contentPlaceholder')}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
				/>
				<p class="mt-1 text-xs text-gray-500 dark:text-dark-500">{t('utm.contentHint')}</p>
			</div>
		</div>

		<!-- Generated URL -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('utm.generatedUrl')}
			</label>
			<div class="relative">
				<textarea
					value={generatedUrl || t('utm.emptyUrl')}
					readonly
					class="w-full h-24 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-dark-100 font-mono text-sm resize-none {!generatedUrl ? 'text-gray-400 dark:text-dark-500' : ''}"
				></textarea>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="flex justify-center gap-4">
			<button
				on:click={copyUrl}
				disabled={!generatedUrl}
				class="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{copied ? t('utm.copied') : t('utm.copy')}
			</button>
			<button
				on:click={reset}
				class="px-6 py-2 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
			>
				{t('utm.reset')}
			</button>
		</div>
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let input = '';
	let separator = '-';
	let lowercase = true;
	let maxLength = 100;
	let removeNumbers = false;

	$: slug = generateSlug(input);

	function generateSlug(text: string): string {
		if (!text) return '';

		let result = text
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w\s-]/g, '')
			.trim();

		if (removeNumbers) {
			result = result.replace(/[0-9]/g, '');
		}

		result = result.replace(/[\s_]+/g, separator);

		if (lowercase) {
			result = result.toLowerCase();
		}

		if (maxLength > 0 && result.length > maxLength) {
			result = result.substring(0, maxLength);
			const lastSep = result.lastIndexOf(separator);
			if (lastSep > maxLength * 0.7) {
				result = result.substring(0, lastSep);
			}
		}

		result = result.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '');

		return result;
	}

	let copied = false;
	function copySlug() {
		if (slug) {
			navigator.clipboard.writeText(slug);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}
</script>

<svelte:head>
	<title>{t('slug.title')} - SD.hn</title>
	<meta name="description" content={t('slug.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('slug.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('slug.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input -->
		<div>
			<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
				{t('slug.input')}
			</label>
			<input
				type="text"
				bind:value={input}
				placeholder={t('slug.inputPlaceholder')}
				class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
			/>
		</div>

		<!-- Options -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('slug.separator')}
				</label>
				<select
					bind:value={separator}
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
				>
					<option value="-">- (Hyphen)</option>
					<option value="_">_ (Underscore)</option>
					<option value="">None</option>
				</select>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
					{t('slug.maxLength')}
				</label>
				<input
					type="number"
					bind:value={maxLength}
					min="0"
					max="500"
					class="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100"
				/>
			</div>
			<div class="flex items-end">
				<label class="flex items-center gap-2 cursor-pointer h-10">
					<input
						type="checkbox"
						bind:checked={lowercase}
						class="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
					/>
					<span class="text-sm text-gray-700 dark:text-dark-300">{t('slug.lowercase')}</span>
				</label>
			</div>
			<div class="flex items-end">
				<label class="flex items-center gap-2 cursor-pointer h-10">
					<input
						type="checkbox"
						bind:checked={removeNumbers}
						class="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
					/>
					<span class="text-sm text-gray-700 dark:text-dark-300">{t('slug.removeNumbers')}</span>
				</label>
			</div>
		</div>

		<!-- Output -->
		<div>
			<div class="flex justify-between items-center mb-2">
				<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
					{t('slug.output')}
				</label>
				{#if slug}
					<span class="text-sm text-gray-500">{slug.length} characters</span>
				{/if}
			</div>
			<div class="relative">
				<input
					type="text"
					value={slug}
					readonly
					class="w-full px-4 py-3 pr-24 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-dark-100 font-mono text-lg"
				/>
				{#if slug}
					<button
						on:click={copySlug}
						class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors text-sm"
					>
						{copied ? t('slug.copied') : t('slug.copy')}
					</button>
				{/if}
			</div>
		</div>

		<!-- Preview -->
		{#if slug}
			<div class="p-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg">
				<div class="text-sm text-gray-500 dark:text-dark-400 mb-2">Preview URL:</div>
				<div class="font-mono text-cyan-600 dark:text-cyan-400 break-all">
					https://example.com/blog/<span class="font-semibold">{slug}</span>
				</div>
			</div>
		{/if}
	</div>
</div>

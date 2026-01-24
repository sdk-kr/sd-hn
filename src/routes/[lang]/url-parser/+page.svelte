<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let urlInput = '';
	let parsedUrl: URL | null = null;
	let error = '';
	let params: [string, string][] = [];

	function parseUrl() {
		error = '';
		parsedUrl = null;
		params = [];

		if (!urlInput.trim()) return;

		try {
			parsedUrl = new URL(urlInput);
			params = Array.from(parsedUrl.searchParams.entries());
		} catch {
			error = t('urlparser.invalidUrl');
		}
	}

	let copied = '';
	function copyValue(key: string, value: string) {
		navigator.clipboard.writeText(value);
		copied = key;
		setTimeout(() => copied = '', 2000);
	}
</script>

<svelte:head>
	<title>{t('urlparser.title')} - SD.hn</title>
	<meta name="description" content={t('urlparser.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('urlparser.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('urlparser.desc')}</p>
	</div>

	<div class="space-y-6">
		<!-- Input Section -->
		<div class="flex gap-4">
			<input
				type="text"
				bind:value={urlInput}
				on:input={parseUrl}
				placeholder={t('urlparser.inputPlaceholder')}
				class="flex-1 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			/>
		</div>

		{#if error}
			<div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
				{error}
			</div>
		{/if}

		{#if parsedUrl}
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden">
				<table class="w-full">
					<tbody>
						{#each [
							['protocol', parsedUrl.protocol],
							['hostname', parsedUrl.hostname],
							['port', parsedUrl.port || '(default)'],
							['pathname', parsedUrl.pathname],
							['search', parsedUrl.search || '(none)'],
							['hash', parsedUrl.hash || '(none)'],
							['origin', parsedUrl.origin]
						] as item}
							<tr class="border-b border-gray-200 dark:border-dark-700 last:border-0">
								<td class="px-4 py-3 font-medium text-gray-700 dark:text-dark-300 bg-gray-50 dark:bg-dark-900 w-32">
									{t(`urlparser.${item[0]}`)}
								</td>
								<td class="px-4 py-3 text-gray-900 dark:text-dark-100 font-mono text-sm break-all">
									{item[1]}
								</td>
								<td class="px-4 py-3 w-20">
									<button
										on:click={() => copyValue(item[0], item[1])}
										class="text-sm text-cyan-500 hover:text-cyan-600"
									>
										{copied === item[0] ? t('common.copied') : t('common.copy')}
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			{#if params.length > 0}
				<div class="mt-6">
					<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
						{t('urlparser.params')}
					</h2>
					<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden">
						<table class="w-full">
							<thead>
								<tr class="bg-gray-50 dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
									<th class="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-dark-300">Key</th>
									<th class="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-dark-300">Value</th>
									<th class="px-4 py-3 w-20"></th>
								</tr>
							</thead>
							<tbody>
								{#each params as [key, value], i}
									<tr class="border-b border-gray-200 dark:border-dark-700 last:border-0">
										<td class="px-4 py-3 font-mono text-sm text-cyan-600 dark:text-cyan-400">{key}</td>
										<td class="px-4 py-3 font-mono text-sm text-gray-900 dark:text-dark-100 break-all">{value}</td>
										<td class="px-4 py-3">
											<button
												on:click={() => copyValue(`param-${i}`, value)}
												class="text-sm text-cyan-500 hover:text-cyan-600"
											>
												{copied === `param-${i}` ? t('common.copied') : t('common.copy')}
											</button>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			{/if}
		{:else if !error && !urlInput}
			<div class="text-center py-12 text-gray-500 dark:text-dark-400">
				{t('urlparser.emptyResult')}
			</div>
		{/if}
	</div>
</div>

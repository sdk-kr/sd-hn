<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let mode: 'encode' | 'decode' = 'encode';
	let input = '';
	let output = '';
	let urlSafe = false;
	let error = '';

	$: {
		error = '';
		if (input) {
			try {
				if (mode === 'encode') {
					output = btoa(unescape(encodeURIComponent(input)));
					if (urlSafe) {
						output = output.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
					}
				} else {
					let decoded = input;
					if (urlSafe) {
						decoded = decoded.replace(/-/g, '+').replace(/_/g, '/');
						const pad = decoded.length % 4;
						if (pad) decoded += '='.repeat(4 - pad);
					}
					output = decodeURIComponent(escape(atob(decoded)));
				}
			} catch {
				output = '';
				error = t('base64url.error');
			}
		} else {
			output = '';
		}
	}

	let copied = false;
	function copyOutput() {
		if (output) {
			navigator.clipboard.writeText(output);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}

	function swapValues() {
		const temp = input;
		input = output;
		output = temp;
		mode = mode === 'encode' ? 'decode' : 'encode';
	}

	function clearAll() {
		input = '';
		output = '';
		error = '';
	}
</script>

<svelte:head>
	<title>{t('base64url.title')} - SD.hn</title>
	<meta name="description" content={t('base64url.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('base64url.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('base64url.desc')}</p>
	</div>

	<!-- Mode Toggle -->
	<div class="flex justify-center mb-6">
		<div class="inline-flex rounded-lg border border-gray-200 dark:border-dark-700 p-1 bg-gray-100 dark:bg-dark-800">
			<button
				on:click={() => mode = 'encode'}
				class="px-4 py-2 rounded-md text-sm font-medium transition-colors {mode === 'encode' ? 'bg-cyan-500 text-white' : 'text-gray-600 dark:text-dark-400 hover:text-gray-900 dark:hover:text-dark-100'}"
			>
				{t('base64url.encode')}
			</button>
			<button
				on:click={() => mode = 'decode'}
				class="px-4 py-2 rounded-md text-sm font-medium transition-colors {mode === 'decode' ? 'bg-cyan-500 text-white' : 'text-gray-600 dark:text-dark-400 hover:text-gray-900 dark:hover:text-dark-100'}"
			>
				{t('base64url.decode')}
			</button>
		</div>
	</div>

	<div class="space-y-4">
		<!-- Input -->
		<div>
			<div class="flex justify-between items-center mb-2">
				<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
					{t('base64url.input')}
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						bind:checked={urlSafe}
						class="w-4 h-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
					/>
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('base64url.urlSafe')}</span>
				</label>
			</div>
			<textarea
				bind:value={input}
				placeholder={t('base64url.inputPlaceholder')}
				class="w-full h-40 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-dark-100 font-mono text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			></textarea>
		</div>

		<!-- Action Buttons -->
		<div class="flex justify-center gap-4">
			<button
				on:click={swapValues}
				class="px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
			>
				{t('base64url.swap')} ↕
			</button>
			<button
				on:click={clearAll}
				class="px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
			>
				{t('base64url.clear')}
			</button>
		</div>

		<!-- Output -->
		<div>
			<div class="flex justify-between items-center mb-2">
				<label class="text-sm font-medium text-gray-700 dark:text-dark-300">
					{t('base64url.output')}
				</label>
				{#if output}
					<button
						on:click={copyOutput}
						class="text-sm text-cyan-500 hover:text-cyan-600"
					>
						{copied ? t('base64url.copied') : t('base64url.copy')}
					</button>
				{/if}
			</div>
			<textarea
				value={output}
				readonly
				class="w-full h-40 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-dark-100 font-mono text-sm"
			></textarea>
		</div>

		{#if error}
			<div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
				{error}
			</div>
		{/if}
	</div>
</div>

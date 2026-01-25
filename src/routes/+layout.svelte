<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { locale, locales, localeNames, type Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import { theme } from '$lib/stores/theme';
	import AdSense from '$lib/components/AdSense.svelte';

	$: t = (key: string) => common[$locale]?.[key] || common['en'][key] || key;

	$: currentLang = $page.params.lang as Locale || 'en';
	$: basePath = `/${currentLang}`;

	let showLangMenu = false;

	onMount(() => {
		theme.init();
	});

	function selectLocale(loc: Locale) {
		const currentPath = $page.url.pathname;
		const pathWithoutLang = currentPath.replace(/^\/(en|ko|ja|zh)/, '');
		const newPath = `/${loc}${pathWithoutLang || ''}`;

		locale.set(loc);
		showLangMenu = false;
		goto(newPath);
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (showLangMenu && !target.closest('.lang-menu')) {
			showLangMenu = false;
		}
	}
</script>

<svelte:head>
	{#each locales as loc}
		<link rel="alternate" hreflang={loc} href="https://qr.sd.gy/{loc}{$page.url.pathname.replace(/^\/(en|ko|ja|zh)/, '')}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="https://qr.sd.gy/en{$page.url.pathname.replace(/^\/(en|ko|ja|zh)/, '')}" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-dark-950 transition-colors">
	<nav class="bg-gray-50 dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 px-4 py-3 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<a href={basePath} class="flex items-center gap-1">
				<span class="text-2xl font-bold text-violet-500">QR</span>
				<span class="text-xl font-semibold text-gray-800 dark:text-dark-100">.SD.gy</span>
			</a>

			<div class="flex items-center gap-4 md:gap-6">
				<a href="{basePath}/qr-generator" class="text-gray-600 dark:text-dark-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm">
					{$locale === 'ko' ? 'QR코드' : $locale === 'ja' ? 'QRコード' : $locale === 'zh' ? '二维码' : 'QR Code'}
				</a>
				<a href="{basePath}/barcode" class="hidden sm:inline text-gray-600 dark:text-dark-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm">
					{$locale === 'ko' ? '바코드' : $locale === 'ja' ? 'バーコード' : $locale === 'zh' ? '条形码' : 'Barcode'}
				</a>
				<a href="{basePath}/utm-builder" class="hidden sm:inline text-gray-600 dark:text-dark-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm">
					UTM
				</a>

				<!-- Theme Toggle -->
				<button
					on:click={() => theme.toggle()}
					class="p-2 text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-100 transition-colors"
					aria-label="Toggle theme"
				>
					{#if $theme === 'dark'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					{/if}
				</button>

				<!-- Language Selector -->
				<div class="relative lang-menu">
					<button
						on:click={() => showLangMenu = !showLangMenu}
						class="flex items-center gap-1 text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-100 transition-colors text-sm"
					>
						<span>{localeNames[$locale]}</span>
						<span class="text-xs">▼</span>
					</button>

					{#if showLangMenu}
						<div class="absolute right-0 top-full mt-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-xl py-1 min-w-[120px]">
							{#each locales as loc}
								<button
									on:click={() => selectLocale(loc)}
									class="w-full text-left px-4 py-2 text-sm transition-colors {$locale === loc ? 'text-cyan-500 bg-gray-100 dark:bg-dark-700' : 'text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:text-gray-900 dark:hover:text-dark-100'}"
								>
									{localeNames[loc]}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</nav>

	<main class="flex-1">
		<slot />
	</main>

	<!-- AdSense - Footer Ad -->
	<div class="max-w-5xl mx-auto px-4 py-4">
		<AdSense type="horizontal" />
	</div>

	<footer class="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 px-4 py-8">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-gray-500 dark:text-dark-400 text-sm">{t('footer.copyright')}</p>
				<div class="flex items-center gap-6 text-sm">
					<a href="{basePath}/about" class="text-gray-500 dark:text-dark-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
						{t('footer.about')}
					</a>
					<a href="{basePath}/faq" class="text-gray-500 dark:text-dark-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
						FAQ
					</a>
					<a href="{basePath}/contact" class="text-gray-500 dark:text-dark-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
						{t('footer.contact')}
					</a>
					<a href="{basePath}/privacy" class="text-gray-500 dark:text-dark-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
						{t('footer.privacy')}
					</a>
					<a href="{basePath}/terms" class="text-gray-500 dark:text-dark-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
						{t('footer.terms')}
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<svelte:window on:click={handleClickOutside} />

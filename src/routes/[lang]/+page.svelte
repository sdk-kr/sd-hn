<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{
			key: 'qr',
			href: 'qr-generator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>`,
			color: 'bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20'
		},
		{
			key: 'barcode',
			href: 'barcode',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4h2v16H3V4zm4 0h1v16H7V4zm3 0h2v16h-2V4zm4 0h3v16h-3V4zm5 0h2v16h-2V4z" /></svg>`,
			color: 'bg-teal-500/10 text-teal-500 dark:bg-teal-500/20'
		},
		{
			key: 'wifi',
			href: 'wifi-qr',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>`,
			color: 'bg-sky-500/10 text-sky-500 dark:bg-sky-500/20'
		},
		{
			key: 'vcard',
			href: 'vcard-qr',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>`,
			color: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20'
		},
		{
			key: 'url',
			href: 'url-parser',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`,
			color: 'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20'
		},
		{
			key: 'base64url',
			href: 'base64-url',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
			color: 'bg-violet-500/10 text-violet-500 dark:bg-violet-500/20'
		},
		{
			key: 'slug',
			href: 'slug-generator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>`,
			color: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20'
		},
		{
			key: 'utm',
			href: 'utm-builder',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
			color: 'bg-pink-500/10 text-pink-500 dark:bg-pink-500/20'
		}
	];
</script>

<svelte:head>
	<title>SD.hn - {t('home.title')}</title>
	<meta name="description" content={t('home.subtitle')} />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400">
			{t('home.subtitle')}
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.href}"
				class="group block p-5 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div class="w-10 h-10 rounded-lg {tool.color} flex items-center justify-center">
						{@html tool.icon}
					</div>
					<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 group-hover:text-cyan-500 transition-colors">
						{t(`home.${tool.key}.title`)}
					</h2>
				</div>
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.key}.desc`)}
				</p>
			</a>
		{/each}
	</div>

	<!-- Features Section -->
	<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '빠른 처리' : lang === 'ja' ? '高速処理' : lang === 'zh' ? '快速处理' : 'Fast Processing'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '브라우저에서 바로 처리되어 빠릅니다' : lang === 'ja' ? 'ブラウザで直接処理するため高速' : lang === 'zh' ? '在浏览器中直接处理，速度快' : 'Generate QR codes and process URLs instantly'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '완벽한 프라이버시' : lang === 'ja' ? '完全なプライバシー' : lang === 'zh' ? '完全私密' : 'Complete Privacy'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '데이터가 서버로 전송되지 않습니다' : lang === 'ja' ? 'データはサーバーに送信されません' : lang === 'zh' ? '数据不会上传到服务器' : 'Your data never leaves your browser'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '100% 무료' : lang === 'ja' ? '100%無料' : lang === 'zh' ? '100% 免费' : '100% Free'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '모든 도구를 무료로 사용할 수 있습니다' : lang === 'ja' ? 'すべてのツールが無料で使えます' : lang === 'zh' ? '所有工具完全免费使用' : 'All tools are free with no limits'}
			</p>
		</div>
	</div>
</div>

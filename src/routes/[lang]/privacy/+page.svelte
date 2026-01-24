<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'Privacy Policy',
			lastUpdated: 'Last updated: January 2025',
			sections: [
				{
					title: 'Data Collection',
					text: 'SDK.is does not collect, store, or transmit any personal data. All tools run entirely in your browser.'
				},
				{
					title: 'Local Processing',
					text: 'All data you enter (JSON, text, etc.) is processed locally in your browser and never leaves your device.'
				},
				{
					title: 'Cookies',
					text: 'We use minimal cookies only to save your preferences (theme, language). No tracking cookies are used.'
				},
				{
					title: 'Third-Party Services',
					text: 'We may use Google AdSense for advertising. Google may use cookies for personalized ads. You can opt out at adssettings.google.com.'
				},
				{
					title: 'Analytics',
					text: 'We may use anonymous analytics to understand usage patterns. No personally identifiable information is collected.'
				},
				{
					title: 'Contact',
					text: 'For privacy-related questions, contact us at hello@sdk.is.'
				}
			]
		},
		ko: {
			title: '개인정보 처리방침',
			lastUpdated: '최종 수정일: 2025년 1월',
			sections: [
				{
					title: '데이터 수집',
					text: 'SDK.is는 개인 데이터를 수집, 저장 또는 전송하지 않습니다. 모든 도구는 브라우저에서 완전히 실행됩니다.'
				},
				{
					title: '로컬 처리',
					text: '입력하신 모든 데이터(JSON, 텍스트 등)는 브라우저에서 로컬로 처리되며 기기를 떠나지 않습니다.'
				},
				{
					title: '쿠키',
					text: '설정 저장(테마, 언어)을 위해 최소한의 쿠키만 사용합니다. 추적 쿠키는 사용하지 않습니다.'
				},
				{
					title: '제3자 서비스',
					text: '광고를 위해 Google AdSense를 사용할 수 있습니다. Google은 맞춤 광고를 위해 쿠키를 사용할 수 있습니다. adssettings.google.com에서 옵트아웃할 수 있습니다.'
				},
				{
					title: '분석',
					text: '사용 패턴을 이해하기 위해 익명 분석을 사용할 수 있습니다. 개인 식별 정보는 수집하지 않습니다.'
				},
				{
					title: '연락처',
					text: '개인정보 관련 문의는 hello@sdk.is로 연락해 주세요.'
				}
			]
		},
		ja: {
			title: 'プライバシーポリシー',
			lastUpdated: '最終更新日: 2025年1月',
			sections: [
				{
					title: 'データ収集',
					text: 'SDK.isは個人データを収集、保存、または送信しません。すべてのツールはブラウザで完全に実行されます。'
				},
				{
					title: 'ローカル処理',
					text: '入力したすべてのデータ（JSON、テキストなど）はブラウザでローカルに処理され、デバイスから離れることはありません。'
				},
				{
					title: 'Cookie',
					text: '設定の保存（テーマ、言語）のみに最小限のCookieを使用します。トラッキングCookieは使用しません。'
				},
				{
					title: 'サードパーティサービス',
					text: '広告にGoogle AdSenseを使用する場合があります。Googleはパーソナライズされた広告にCookieを使用する場合があります。adssettings.google.comでオプトアウトできます。'
				},
				{
					title: '分析',
					text: '使用パターンを理解するために匿名分析を使用する場合があります。個人を特定できる情報は収集しません。'
				},
				{
					title: 'お問い合わせ',
					text: 'プライバシーに関するご質問は hello@sdk.is までご連絡ください。'
				}
			]
		},
		zh: {
			title: '隐私政策',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					title: '数据收集',
					text: 'SDK.is 不收集、存储或传输任何个人数据。所有工具完全在您的浏览器中运行。'
				},
				{
					title: '本地处理',
					text: '您输入的所有数据（JSON、文本等）都在浏览器中本地处理，不会离开您的设备。'
				},
				{
					title: 'Cookie',
					text: '我们仅使用最少的 Cookie 来保存您的偏好设置（主题、语言）。不使用跟踪 Cookie。'
				},
				{
					title: '第三方服务',
					text: '我们可能使用 Google AdSense 进行广告投放。Google 可能使用 Cookie 进行个性化广告。您可以在 adssettings.google.com 选择退出。'
				},
				{
					title: '分析',
					text: '我们可能使用匿名分析来了解使用模式。不收集任何个人身份信息。'
				},
				{
					title: '联系我们',
					text: '如有隐私相关问题，请联系 hello@sdk.is。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.is</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-sm text-gray-500 dark:text-dark-400 mb-8">{t.lastUpdated}</p>

	<div class="space-y-8">
		{#each t.sections as section}
			<section>
				<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{section.title}</h2>
				<p class="text-gray-700 dark:text-dark-300">{section.text}</p>
			</section>
		{/each}
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'About QR.SD.gy',
			subtitle: 'Free QR Code & URL Tools',
			description: 'QR.SD.gy provides free, fast, and privacy-focused QR code and URL tools that work directly in your browser. No uploads, no servers - just instant processing.',
			features: {
				title: 'Our Tools',
				items: [
					'QR Code Generator - Create QR codes for any text or URL with custom colors',
					'Barcode Generator - Generate various barcode formats (Code 128, EAN, UPC, etc.)',
					'WiFi QR Code - Create QR codes for instant WiFi network sharing',
					'vCard QR Code - Generate digital business card QR codes',
					'URL Parser - Parse and analyze URL components in detail',
					'Base64 URL Encoder/Decoder - Encode and decode Base64 URL strings',
					'Slug Generator - Create URL-friendly slugs from any text',
					'UTM Builder - Build URLs with UTM tracking parameters'
				]
			},
			privacy: {
				title: 'Privacy First',
				text: 'All processing happens entirely in your browser. Your data never leaves your device and is never uploaded to any server. We take your privacy seriously.'
			},
			contact: {
				title: 'Contact',
				text: 'For questions or feedback, please visit our contact page.'
			}
		},
		ko: {
			title: 'QR.SD.gy 소개',
			subtitle: '무료 QR코드 & URL 도구',
			description: 'QR.SD.gy는 브라우저에서 바로 작동하는 무료, 빠른, 개인정보 보호 중심의 QR코드 및 URL 도구를 제공합니다. 업로드 없이, 서버 없이 - 즉시 처리.',
			features: {
				title: '도구 소개',
				items: [
					'QR코드 생성기 - 텍스트나 URL로 맞춤 색상 QR코드 생성',
					'바코드 생성기 - 다양한 바코드 형식 생성 (Code 128, EAN, UPC 등)',
					'WiFi QR코드 - WiFi 네트워크 공유용 QR코드 생성',
					'vCard QR코드 - 디지털 명함 QR코드 생성',
					'URL 분석기 - URL 구성 요소 상세 분석',
					'Base64 URL 인코더/디코더 - Base64 URL 문자열 인코딩/디코딩',
					'슬러그 생성기 - 텍스트에서 URL용 슬러그 생성',
					'UTM 빌더 - UTM 추적 매개변수가 포함된 URL 생성'
				]
			},
			privacy: {
				title: '개인정보 보호 우선',
				text: '모든 처리는 브라우저에서 완전히 이루어집니다. 데이터가 기기를 떠나거나 서버로 업로드되지 않습니다. 개인정보 보호를 중요하게 생각합니다.'
			},
			contact: {
				title: '연락처',
				text: '문의사항이나 피드백은 문의 페이지를 방문해 주세요.'
			}
		},
		ja: {
			title: 'QR.SD.gy について',
			subtitle: '無料QRコード＆URLツール',
			description: 'QR.SD.gyは、ブラウザで直接動作する無料、高速、プライバシー重視のQRコードとURLツールを提供します。アップロード不要、サーバー不要 - 即座に処理。',
			features: {
				title: 'ツール紹介',
				items: [
					'QRコード生成器 - テキストやURLからカスタムカラーのQRコードを作成',
					'バーコード生成器 - 各種バーコード形式を生成（Code 128、EAN、UPCなど）',
					'WiFi QRコード - WiFiネットワーク共有用QRコードを作成',
					'vCard QRコード - デジタル名刺QRコードを生成',
					'URLパーサー - URLの構成要素を詳細に分析',
					'Base64 URLエンコーダー/デコーダー - Base64 URL文字列のエンコード/デコード',
					'スラグ生成器 - テキストからURL用スラグを生成',
					'UTMビルダー - UTM追跡パラメータ付きURLを作成'
				]
			},
			privacy: {
				title: 'プライバシー優先',
				text: 'すべての処理はブラウザで完全に行われます。データはデバイスから離れることなく、サーバーにアップロードされることもありません。プライバシーを重視しています。'
			},
			contact: {
				title: 'お問い合わせ',
				text: 'ご質問やフィードバックはお問い合わせページをご覧ください。'
			}
		},
		zh: {
			title: '关于 QR.SD.gy',
			subtitle: '免费QR码和URL工具',
			description: 'QR.SD.gy 提供免费、快速、注重隐私的QR码和URL工具，直接在您的浏览器中运行。无需上传，无需服务器 - 即时处理。',
			features: {
				title: '工具介绍',
				items: [
					'QR码生成器 - 从文本或URL创建自定义颜色的QR码',
					'条形码生成器 - 生成各种条形码格式（Code 128、EAN、UPC等）',
					'WiFi QR码 - 创建WiFi网络共享用QR码',
					'vCard QR码 - 生成数字名片QR码',
					'URL解析器 - 详细分析URL组成部分',
					'Base64 URL编码器/解码器 - Base64 URL字符串的编码/解码',
					'Slug生成器 - 从文本生成URL友好的slug',
					'UTM构建器 - 创建带UTM跟踪参数的URL'
				]
			},
			privacy: {
				title: '隐私优先',
				text: '所有处理完全在您的浏览器中进行。数据永远不会离开您的设备，也永远不会上传到任何服务器。我们非常重视您的隐私。'
			},
			contact: {
				title: '联系我们',
				text: '如有问题或反馈，请访问我们的联系页面。'
			}
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - QR.SD.gy</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-xl text-amber-500 mb-8">{t.subtitle}</p>

	<p class="text-lg text-gray-700 dark:text-dark-300 mb-12">
		{t.description}
	</p>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.features.title}</h2>
		<ul class="space-y-3">
			{#each t.features.items as item}
				<li class="flex items-start gap-3 text-gray-700 dark:text-dark-300">
					<span class="text-amber-500 mt-1">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacy.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.privacy.text}</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contact.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.contact.text}</p>
	</section>
</div>

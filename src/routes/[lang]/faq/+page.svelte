<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	interface FAQ {
		question: string;
		answer: string;
	}

	const content = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'FAQ',
			description: 'Find answers to common questions about QR.SD.gy QR code and URL tools.',
			faqs: [
				{
					question: 'What is QR.SD.gy?',
					answer: 'QR.SD.gy is a collection of free, fast, and privacy-focused QR code and URL tools that run directly in your browser. We offer QR Code Generator, Barcode Generator, WiFi QR, vCard QR, URL Parser, Base64 Encoder, Slug Generator, and UTM Builder.'
				},
				{
					question: 'Is QR.SD.gy free to use?',
					answer: 'Yes, all tools on QR.SD.gy are completely free to use. There are no hidden fees, subscriptions, or premium features.'
				},
				{
					question: 'Is my data safe?',
					answer: 'Absolutely. All QR code generation and URL processing happens entirely in your browser. Your data never leaves your device and is never uploaded to our servers.'
				},
				{
					question: 'What QR code formats can I create?',
					answer: 'You can create standard QR codes for URLs and text, WiFi QR codes for network sharing, and vCard QR codes for contact information. We also support custom colors, sizes, and error correction levels.'
				},
				{
					question: 'What barcode formats are supported?',
					answer: 'We support Code 128, EAN-13, EAN-8, UPC-A, Code 39, ITF-14, MSI, Pharmacode, and Codabar formats.'
				},
				{
					question: 'Can I download QR codes in SVG format?',
					answer: 'Yes, our QR Generator supports both PNG and SVG downloads. SVG format is ideal for print materials as it scales without losing quality.'
				},
				{
					question: 'Which browsers are supported?',
					answer: 'QR.SD.gy works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.'
				},
				{
					question: 'Can I use QR.SD.gy on mobile?',
					answer: 'Yes, QR.SD.gy is fully responsive and works on mobile devices. You can generate and download QR codes directly on your phone.'
				},
				{
					question: 'What error correction level should I use?',
					answer: 'Level M (15%) is recommended for most uses. Use Level H (30%) if you plan to add a logo to your QR code or if it will be used in harsh environments.'
				},
				{
					question: 'How do I track QR code scans?',
					answer: 'Use our UTM Builder to add tracking parameters to your URL before generating the QR code. This allows you to track scans in Google Analytics.'
				}
			] as FAQ[]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: 'FAQ',
			description: 'QR.SD.gy QR코드 및 URL 도구에 대한 일반적인 질문에 대한 답변을 찾아보세요.',
			faqs: [
				{
					question: 'QR.SD.gy란 무엇인가요?',
					answer: 'QR.SD.gy는 브라우저에서 직접 실행되는 무료, 빠른, 개인정보 보호 중심의 QR코드 및 URL 도구 모음입니다. QR코드 생성기, 바코드 생성기, WiFi QR, vCard QR, URL 분석기, Base64 인코더, 슬러그 생성기, UTM 빌더를 제공합니다.'
				},
				{
					question: 'QR.SD.gy는 무료인가요?',
					answer: '네, QR.SD.gy의 모든 도구는 완전히 무료입니다. 숨겨진 비용, 구독료, 프리미엄 기능이 없습니다.'
				},
				{
					question: '제 데이터는 안전한가요?',
					answer: '물론입니다. 모든 QR코드 생성 및 URL 처리는 브라우저에서 완전히 이루어집니다. 데이터는 기기를 떠나지 않으며 서버로 업로드되지 않습니다.'
				},
				{
					question: '어떤 QR코드 형식을 만들 수 있나요?',
					answer: 'URL 및 텍스트용 표준 QR코드, WiFi 네트워크 공유용 WiFi QR코드, 연락처 정보용 vCard QR코드를 만들 수 있습니다. 맞춤 색상, 크기, 오류 정정 수준도 지원합니다.'
				},
				{
					question: '어떤 바코드 형식을 지원하나요?',
					answer: 'Code 128, EAN-13, EAN-8, UPC-A, Code 39, ITF-14, MSI, Pharmacode, Codabar 형식을 지원합니다.'
				},
				{
					question: 'SVG 형식으로 QR코드를 다운로드할 수 있나요?',
					answer: '네, QR 생성기는 PNG과 SVG 다운로드를 모두 지원합니다. SVG 형식은 품질 손실 없이 확대할 수 있어 인쇄물에 적합합니다.'
				},
				{
					question: '어떤 브라우저를 지원하나요?',
					answer: 'QR.SD.gy는 Chrome, Firefox, Safari, Edge를 포함한 모든 최신 브라우저에서 작동합니다.'
				},
				{
					question: '모바일에서 사용할 수 있나요?',
					answer: '네, QR.SD.gy는 완전히 반응형이며 모바일 기기에서 작동합니다. 휴대폰에서 직접 QR코드를 생성하고 다운로드할 수 있습니다.'
				},
				{
					question: '어떤 오류 정정 수준을 사용해야 하나요?',
					answer: '대부분의 용도에는 레벨 M(15%)이 권장됩니다. QR코드에 로고를 추가하거나 가혹한 환경에서 사용할 경우 레벨 H(30%)를 사용하세요.'
				},
				{
					question: 'QR코드 스캔을 추적하려면 어떻게 하나요?',
					answer: 'UTM 빌더를 사용하여 QR코드를 생성하기 전에 URL에 추적 파라미터를 추가하세요. 이를 통해 Google Analytics에서 스캔을 추적할 수 있습니다.'
				}
			] as FAQ[]
		},
		ja: {
			title: 'よくある質問',
			subtitle: 'FAQ',
			description: 'QR.SD.gy QRコードおよびURLツールに関する一般的な質問への回答をご覧ください。',
			faqs: [
				{
					question: 'QR.SD.gy とは何ですか？',
					answer: 'QR.SD.gyは、ブラウザで直接動作する無料、高速、プライバシー重視のQRコードとURLツールのコレクションです。QRコード生成器、バーコード生成器、WiFi QR、vCard QR、URLパーサー、Base64エンコーダー、スラグ生成器、UTMビルダーを提供しています。'
				},
				{
					question: 'QR.SD.gy は無料ですか？',
					answer: 'はい、QR.SD.gyのすべてのツールは完全に無料でご利用いただけます。隠れた料金、サブスクリプション、プレミアム機能はありません。'
				},
				{
					question: '私のデータは安全ですか？',
					answer: 'もちろんです。すべてのQRコード生成とURL処理はブラウザで完全に行われます。データはデバイスから離れることはなく、サーバーにアップロードされることもありません。'
				},
				{
					question: 'どのQRコード形式を作成できますか？',
					answer: 'URLとテキスト用の標準QRコード、WiFiネットワーク共有用のWiFi QRコード、連絡先情報用のvCard QRコードを作成できます。カスタムカラー、サイズ、エラー訂正レベルもサポートしています。'
				},
				{
					question: 'どのバーコード形式がサポートされていますか？',
					answer: 'Code 128、EAN-13、EAN-8、UPC-A、Code 39、ITF-14、MSI、Pharmacode、Codabar形式をサポートしています。'
				},
				{
					question: 'SVG形式でQRコードをダウンロードできますか？',
					answer: 'はい、QRジェネレーターはPNGとSVGの両方のダウンロードをサポートしています。SVG形式は品質を損なわずに拡大できるため、印刷物に最適です。'
				},
				{
					question: 'どのブラウザがサポートされていますか？',
					answer: 'QR.SD.gyはChrome、Firefox、Safari、Edgeを含むすべての最新ブラウザで動作します。'
				},
				{
					question: 'モバイルで使用できますか？',
					answer: 'はい、QR.SD.gyは完全にレスポンシブで、モバイルデバイスで動作します。スマートフォンで直接QRコードを生成してダウンロードできます。'
				},
				{
					question: 'どのエラー訂正レベルを使うべきですか？',
					answer: 'ほとんどの用途にはレベルM（15%）が推奨されます。QRコードにロゴを追加する場合や過酷な環境で使用する場合はレベルH（30%）を使用してください。'
				},
				{
					question: 'QRコードのスキャンを追跡するにはどうすればよいですか？',
					answer: 'UTMビルダーを使用して、QRコードを生成する前にURLにトラッキングパラメータを追加してください。これにより、Google Analyticsでスキャンを追跡できます。'
				}
			] as FAQ[]
		},
		zh: {
			title: '常见问题',
			subtitle: 'FAQ',
			description: '查找有关 QR.SD.gy QR码和URL工具的常见问题解答。',
			faqs: [
				{
					question: '什么是 QR.SD.gy？',
					answer: 'QR.SD.gy 是一系列免费、快速、注重隐私的QR码和URL工具，直接在浏览器中运行。我们提供QR码生成器、条形码生成器、WiFi QR、vCard QR、URL解析器、Base64编码器、Slug生成器和UTM构建器。'
				},
				{
					question: 'QR.SD.gy 是免费的吗？',
					answer: '是的，QR.SD.gy上的所有工具都是完全免费使用的。没有隐藏费用、订阅或高级功能。'
				},
				{
					question: '我的数据安全吗？',
					answer: '绝对安全。所有QR码生成和URL处理完全在浏览器中进行。数据永远不会离开您的设备，也不会上传到服务器。'
				},
				{
					question: '可以创建哪些QR码格式？',
					answer: '您可以创建URL和文本的标准QR码、WiFi网络共享的WiFi QR码以及联系信息的vCard QR码。还支持自定义颜色、尺寸和纠错级别。'
				},
				{
					question: '支持哪些条形码格式？',
					answer: '我们支持Code 128、EAN-13、EAN-8、UPC-A、Code 39、ITF-14、MSI、Pharmacode和Codabar格式。'
				},
				{
					question: '可以以SVG格式下载QR码吗？',
					answer: '是的，QR生成器支持PNG和SVG下载。SVG格式非常适合印刷材料，因为它可以无损缩放。'
				},
				{
					question: '支持哪些浏览器？',
					answer: 'QR.SD.gy适用于所有现代浏览器，包括Chrome、Firefox、Safari和Edge。'
				},
				{
					question: '可以在手机上使用吗？',
					answer: '可以，QR.SD.gy完全响应式，可在移动设备上使用。您可以直接在手机上生成和下载QR码。'
				},
				{
					question: '应该使用哪个纠错级别？',
					answer: '大多数用途建议使用M级（15%）。如果计划在QR码中添加Logo或在恶劣环境中使用，请使用H级（30%）。'
				},
				{
					question: '如何追踪QR码扫描？',
					answer: '使用UTM构建器在生成QR码之前向URL添加追踪参数。这样您可以在Google Analytics中追踪扫描。'
				}
			] as FAQ[]
		}
	};

	$: t = content[lang] || content.en;

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
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

	<div class="space-y-4">
		{#each t.faqs as faq, index}
			<div class="border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden">
				<button
					class="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
					on:click={() => toggle(index)}
					aria-expanded={openIndex === index}
				>
					<span class="font-medium text-gray-900 dark:text-dark-100">{faq.question}</span>
					<svg
						class="w-5 h-5 text-amber-500 transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				{#if openIndex === index}
					<div class="px-6 py-4 bg-white dark:bg-dark-900">
						<p class="text-gray-700 dark:text-dark-300">{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'Contact Us',
			subtitle: 'Get in Touch',
			description: 'Have questions or feedback about our QR code and URL tools? We would love to hear from you.',
			channels: {
				general: {
					title: 'General Inquiries',
					email: 'hello@sd.gy',
					description: 'For general questions about QR.SD.gy and our QR code and URL tools.'
				},
				support: {
					title: 'Technical Support',
					email: 'support@sd.gy',
					description: 'Need help with a specific tool? Report bugs or technical issues here.'
				},
				business: {
					title: 'Business',
					email: 'business@sd.gy',
					description: 'For partnerships, collaborations, and business inquiries.'
				}
			},
			response: {
				title: 'Response Time',
				text: 'We typically respond within 24-48 hours on business days.'
			}
		},
		ko: {
			title: '문의하기',
			subtitle: '연락처',
			description: 'QR코드 및 URL 도구에 대한 질문이나 피드백이 있으신가요? 언제든지 연락해 주세요.',
			channels: {
				general: {
					title: '일반 문의',
					email: 'hello@sd.gy',
					description: 'QR.SD.gy 및 QR코드 및 URL 도구에 대한 일반적인 질문'
				},
				support: {
					title: '기술 지원',
					email: 'support@sd.gy',
					description: '특정 도구에 대한 도움이 필요하신가요? 버그 또는 기술적 문제 보고'
				},
				business: {
					title: '비즈니스',
					email: 'business@sd.gy',
					description: '파트너십, 협업 및 비즈니스 문의'
				}
			},
			response: {
				title: '응답 시간',
				text: '영업일 기준 24-48시간 내에 답변드립니다.'
			}
		},
		ja: {
			title: 'お問い合わせ',
			subtitle: 'ご連絡ください',
			description: 'QRコード・URLツールについてご質問やフィードバックがございましたら、お気軽にご連絡ください。',
			channels: {
				general: {
					title: '一般的なお問い合わせ',
					email: 'hello@sd.gy',
					description: 'QR.SD.gyおよびQRコード・URLツールに関する一般的なご質問'
				},
				support: {
					title: 'テクニカルサポート',
					email: 'support@sd.gy',
					description: '特定のツールに関するヘルプが必要ですか？バグや技術的な問題をご報告ください'
				},
				business: {
					title: 'ビジネス',
					email: 'business@sd.gy',
					description: 'パートナーシップ、コラボレーション、ビジネスに関するお問い合わせ'
				}
			},
			response: {
				title: '返信時間',
				text: '営業日で24〜48時間以内にご返信いたします。'
			}
		},
		zh: {
			title: '联系我们',
			subtitle: '取得联系',
			description: '对我们的QR码和URL工具有问题或反馈？欢迎随时联系我们。',
			channels: {
				general: {
					title: '一般咨询',
					email: 'hello@sd.gy',
					description: '关于 QR.SD.gy 和QR码和URL工具的一般问题'
				},
				support: {
					title: '技术支持',
					email: 'support@sd.gy',
					description: '需要特定工具的帮助？在这里报告错误或技术问题'
				},
				business: {
					title: '商务合作',
					email: 'business@sd.gy',
					description: '合作伙伴关系、协作和商务咨询'
				}
			},
			response: {
				title: '响应时间',
				text: '我们通常在工作日 24-48 小时内回复。'
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

	<div class="space-y-8 mb-12">
		<section class="bg-gray-50 dark:bg-dark-800 rounded-lg p-6">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">{t.channels.general.title}</h2>
			<a href="mailto:{t.channels.general.email}" class="text-amber-500 hover:text-amber-600 font-medium text-lg">
				{t.channels.general.email}
			</a>
			<p class="text-gray-700 dark:text-dark-300 mt-2">{t.channels.general.description}</p>
		</section>

		<section class="bg-gray-50 dark:bg-dark-800 rounded-lg p-6">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">{t.channels.support.title}</h2>
			<a href="mailto:{t.channels.support.email}" class="text-amber-500 hover:text-amber-600 font-medium text-lg">
				{t.channels.support.email}
			</a>
			<p class="text-gray-700 dark:text-dark-300 mt-2">{t.channels.support.description}</p>
		</section>

		<section class="bg-gray-50 dark:bg-dark-800 rounded-lg p-6">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">{t.channels.business.title}</h2>
			<a href="mailto:{t.channels.business.email}" class="text-amber-500 hover:text-amber-600 font-medium text-lg">
				{t.channels.business.email}
			</a>
			<p class="text-gray-700 dark:text-dark-300 mt-2">{t.channels.business.description}</p>
		</section>
	</div>

	<section>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.response.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.response.text}</p>
	</section>
</div>

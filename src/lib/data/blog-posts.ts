import type { Locale } from '$lib/i18n';

export interface BlogPost {
	slug: string;
	title: Record<Locale, string>;
	description: Record<Locale, string>;
	content: Record<Locale, string>;
	date: string;
	category: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'qr-code-history-principles',
		title: { en: 'QR Code History and Principles', ko: 'QR코드 역사와 원리', ja: 'QRコードの歴史と原理', zh: 'QR码历史与原理' },
		description: { en: 'Learn the history of QR codes and how they work.', ko: 'QR코드의 역사와 작동 방식을 알아보세요.', ja: 'QRコードの歴史と仕組みを学びましょう。', zh: '了解QR码的历史及其工作原理。' },
		content: { en: `QR codes were invented in 1994 by Denso Wave, a Toyota subsidiary, to track automotive parts.

## History

- 1994: Invented in Japan
- 1999: Open license released
- 2000s: Mobile phone adoption
- 2010s: Marketing widespread use
- 2020s: COVID accelerated adoption

## How QR Codes Work

QR codes store data in both horizontal and vertical patterns:
1. **Finder patterns** - Three corner squares for orientation
2. **Alignment patterns** - Help correct distortion
3. **Timing patterns** - Define cell coordinates
4. **Format info** - Error correction level
5. **Data area** - Actual encoded content

## Data Capacity

| Type | Max Characters |
|------|---------------|
| Numeric | 7,089 |
| Alphanumeric | 4,296 |
| Binary | 2,953 bytes |

## Error Correction Levels

- L: 7% recovery
- M: 15% recovery
- Q: 25% recovery
- H: 30% recovery

Use our QR Generator to create custom codes.`, ko: `QR코드는 1994년 Toyota 자회사인 Denso Wave에서 자동차 부품 추적을 위해 발명되었습니다.

## 역사

- 1994: 일본에서 발명
- 1999: 오픈 라이선스 공개
- 2000년대: 휴대폰 채택
- 2010년대: 마케팅 광범위 사용
- 2020년대: COVID로 채택 가속화

## QR코드 작동 방식

QR코드는 수평 및 수직 패턴 모두에 데이터를 저장합니다.

QR 생성기를 사용하여 맞춤 코드를 만드세요.`, ja: `QRコードは1994年にトヨタの子会社であるデンソーウェーブが自動車部品の追跡用に発明しました。

QRジェネレーターを使ってカスタムコードを作成しましょう。`, zh: `QR码于1994年由丰田子公司电装发明，用于追踪汽车零件。

使用我们的QR生成器创建自定义代码。` },
		date: '2025-01-20', category: 'qr-code'
	},
	{
		slug: 'wifi-qr-code-creation',
		title: { en: 'How to Create WiFi QR Codes', ko: 'WiFi QR코드 만들기', ja: 'WiFi QRコードの作成方法', zh: '如何创建WiFi QR码' },
		description: { en: 'Create QR codes for easy WiFi sharing with guests.', ko: '게스트와 쉽게 WiFi를 공유하기 위한 QR코드를 만드세요.', ja: 'ゲストと簡単にWiFiを共有するためのQRコードを作成しましょう。', zh: '创建QR码与客人轻松分享WiFi。' },
		content: { en: `WiFi QR codes let guests connect to your network instantly without typing passwords.

## WiFi QR Format

The standard format is:
WIFI:T:WPA;S:NetworkName;P:Password;;

- T: Security type (WPA, WEP, nopass)
- S: Network SSID (name)
- P: Password
- H: Hidden network (true/false)

## Step by Step

1. Find your network name (SSID)
2. Get your password
3. Select security type
4. Generate QR code
5. Print or display

## Use Cases

- Home guests
- Airbnb/Hotels
- Cafes/Restaurants
- Office visitors
- Events

## Tips

- Use a strong password
- Don't share your main network
- Consider a guest network
- Update regularly

Use our WiFi QR Generator for instant codes.`, ko: `WiFi QR코드를 사용하면 비밀번호를 입력하지 않고도 게스트가 네트워크에 즉시 연결할 수 있습니다.

## WiFi QR 형식

표준 형식:
WIFI:T:WPA;S:네트워크이름;P:비밀번호;;

- T: 보안 유형 (WPA, WEP, nopass)
- S: 네트워크 SSID (이름)
- P: 비밀번호
- H: 숨겨진 네트워크 (true/false)

WiFi QR 생성기를 사용하여 즉시 코드를 만드세요.`, ja: `WiFi QRコードを使えば、パスワードを入力せずにゲストがすぐにネットワークに接続できます。

WiFi QRジェネレーターを使って即座にコードを作成しましょう。`, zh: `WiFi QR码让客人无需输入密码即可立即连接网络。

使用我们的WiFi QR生成器即时创建代码。` },
		date: '2025-01-19', category: 'qr-code'
	},
	{
		slug: 'vcard-qr-code-guide',
		title: { en: 'vCard QR Code for Digital Business Cards', ko: 'vCard QR코드 활용법', ja: 'vCard QRコードの活用方法', zh: 'vCard QR码使用指南' },
		description: { en: 'Create digital business cards with vCard QR codes.', ko: 'vCard QR코드로 디지털 명함을 만드세요.', ja: 'vCard QRコードでデジタル名刺を作成しましょう。', zh: '使用vCard QR码创建数字名片。' },
		content: { en: `vCard QR codes store contact information that can be saved directly to phones.

## vCard Fields

Standard fields include:
- Full name
- Organization
- Title/Position
- Phone numbers
- Email addresses
- Website
- Address

## Benefits

1. **Instant contact sharing** - No typing required
2. **Accurate information** - No transcription errors
3. **Professional image** - Modern approach
4. **Eco-friendly** - Reduce paper waste
5. **Easy updates** - Change info anytime

## Best Practices

- Include essential info only
- Test before printing
- Use high error correction
- Add a logo if possible
- Print at appropriate size

## Where to Use

- Business cards
- Email signatures
- Conference badges
- Marketing materials
- Office doors

Use our vCard Generator to create digital business cards.`, ko: `vCard QR코드는 휴대폰에 직접 저장할 수 있는 연락처 정보를 저장합니다.

## vCard 필드

표준 필드:
- 전체 이름
- 조직
- 직함/직위
- 전화번호
- 이메일 주소
- 웹사이트
- 주소

## 장점

1. **즉석 연락처 공유** - 입력 불필요
2. **정확한 정보** - 기록 오류 없음
3. **전문적인 이미지** - 현대적 접근
4. **친환경** - 종이 낭비 감소
5. **쉬운 업데이트** - 언제든 정보 변경

vCard 생성기를 사용하여 디지털 명함을 만드세요.`, ja: `vCard QRコードは、スマートフォンに直接保存できる連絡先情報を格納します。

vCardジェネレーターを使ってデジタル名刺を作成しましょう。`, zh: `vCard QR码存储可以直接保存到手机的联系人信息。

使用我们的vCard生成器创建数字名片。` },
		date: '2025-01-18', category: 'vcard'
	},
	{
		slug: 'url-shortening-benefits',
		title: { en: 'Benefits of URL Shortening', ko: 'URL 단축의 장점', ja: 'URL短縮のメリット', zh: 'URL缩短的好处' },
		description: { en: 'Learn why URL shortening matters and when to use it.', ko: 'URL 단축이 중요한 이유와 언제 사용해야 하는지 알아보세요.', ja: 'URL短縮が重要な理由と、いつ使うべきかを学びましょう。', zh: '了解URL缩短的重要性以及何时使用。' },
		content: { en: `URL shortening makes long links manageable and trackable.

## Why Shorten URLs?

1. **Cleaner appearance** - Professional look
2. **Character limits** - Social media constraints
3. **QR codes** - Simpler codes for short URLs
4. **Tracking** - Click analytics
5. **Branding** - Custom domains

## Use Cases

- Social media posts
- SMS marketing
- Print materials
- Email campaigns
- Presentations

## URL Shortener Features

| Feature | Benefit |
|---------|---------|
| Custom aliases | Memorable links |
| Click tracking | Measure engagement |
| Expiration | Time-limited access |
| Password protection | Secure sharing |
| QR integration | Easy mobile access |

## Best Practices

- Use descriptive aliases
- Track performance
- Set expiration when needed
- Test before sharing

Use our URL Shortener for clean, trackable links.`, ko: `URL 단축은 긴 링크를 관리하고 추적할 수 있게 만듭니다.

## 왜 URL을 단축할까요?

1. **깔끔한 외관** - 전문적인 모습
2. **문자 제한** - 소셜 미디어 제약
3. **QR코드** - 짧은 URL로 더 간단한 코드
4. **추적** - 클릭 분석
5. **브랜딩** - 커스텀 도메인

URL 단축기를 사용하여 깔끔하고 추적 가능한 링크를 만드세요.`, ja: `URL短縮は、長いリンクを管理・追跡可能にします。

URL短縮ツールを使って、きれいで追跡可能なリンクを作成しましょう。`, zh: `URL缩短使长链接变得可管理和可追踪。

使用我们的URL缩短器创建简洁、可追踪的链接。` },
		date: '2025-01-17', category: 'url'
	},
	{
		slug: 'utm-parameters-guide',
		title: { en: 'UTM Parameters Complete Guide', ko: 'UTM 파라미터 가이드', ja: 'UTMパラメータ完全ガイド', zh: 'UTM参数完整指南' },
		description: { en: 'Track marketing campaigns with UTM parameters.', ko: 'UTM 파라미터로 마케팅 캠페인을 추적하세요.', ja: 'UTMパラメータでマーケティングキャンペーンを追跡しましょう。', zh: '使用UTM参数跟踪营销活动。' },
		content: { en: `UTM parameters help track where your traffic comes from.

## The 5 UTM Parameters

1. **utm_source** - Traffic source (google, newsletter)
2. **utm_medium** - Marketing medium (cpc, email, social)
3. **utm_campaign** - Campaign name (summer_sale)
4. **utm_term** - Paid keywords (optional)
5. **utm_content** - A/B testing (optional)

## Example URL

https://example.com/?utm_source=facebook&utm_medium=social&utm_campaign=summer_sale

## Best Practices

- Use lowercase consistently
- Be descriptive but concise
- Create naming conventions
- Document your parameters
- Test tracking before launch

## Where to Use

- Email campaigns
- Social media posts
- Paid advertisements
- Affiliate links
- QR codes

Use our UTM Builder to create tracked URLs.`, ko: `UTM 파라미터는 트래픽 출처를 추적하는 데 도움이 됩니다.

## 5가지 UTM 파라미터

1. **utm_source** - 트래픽 소스 (google, newsletter)
2. **utm_medium** - 마케팅 매체 (cpc, email, social)
3. **utm_campaign** - 캠페인 이름 (summer_sale)
4. **utm_term** - 유료 키워드 (선택)
5. **utm_content** - A/B 테스트 (선택)

UTM 빌더를 사용하여 추적 가능한 URL을 만드세요.`, ja: `UTMパラメータは、トラフィックの出所を追跡するのに役立ちます。

UTMビルダーを使って追跡可能なURLを作成しましょう。`, zh: `UTM参数帮助追踪流量来源。

使用我们的UTM构建器创建可追踪的URL。` },
		date: '2025-01-16', category: 'analytics'
	},
	{
		slug: 'barcode-types-comparison',
		title: { en: 'Barcode Types Comparison', ko: '바코드 종류 비교', ja: 'バーコード種類の比較', zh: '条形码类型比较' },
		description: { en: 'Compare different barcode types and their uses.', ko: '다양한 바코드 유형과 용도를 비교하세요.', ja: 'さまざまなバーコードの種類と用途を比較しましょう。', zh: '比较不同的条形码类型及其用途。' },
		content: { en: `Different barcode types serve different purposes. Here's a comparison.

## 1D Barcodes

### UPC-A
- 12 digits
- Retail products (US/Canada)

### EAN-13
- 13 digits
- International retail

### Code 128
- Variable length
- Shipping, inventory

### Code 39
- Alphanumeric
- Industrial use

## 2D Barcodes

### QR Code
- High capacity
- Mobile-friendly
- Error correction

### Data Matrix
- Small size
- Industrial marking

## Comparison Table

| Type | Capacity | Use Case |
|------|----------|----------|
| UPC | 12 digits | Retail |
| QR | 4296 chars | Marketing |
| Code 128 | Variable | Logistics |
| Data Matrix | 2335 chars | Manufacturing |

Use our Barcode Generator to create any type.`, ko: `다양한 바코드 유형은 서로 다른 목적을 위해 사용됩니다.

## 1D 바코드

### UPC-A
- 12자리
- 소매 제품 (미국/캐나다)

### EAN-13
- 13자리
- 국제 소매

## 2D 바코드

### QR 코드
- 높은 용량
- 모바일 친화적
- 오류 정정

바코드 생성기를 사용하여 모든 유형을 만드세요.`, ja: `さまざまなバーコードタイプは異なる目的に使用されます。

バーコードジェネレーターを使ってあらゆるタイプを作成しましょう。`, zh: `不同的条形码类型有不同的用途。

使用我们的条形码生成器创建任何类型。` },
		date: '2025-01-15', category: 'barcode'
	},
	{
		slug: 'qr-code-design-tips',
		title: { en: 'QR Code Design Tips', ko: 'QR코드 디자인 팁', ja: 'QRコードデザインのコツ', zh: 'QR码设计技巧' },
		description: { en: 'Create visually appealing QR codes that still scan reliably.', ko: '안정적으로 스캔되면서도 시각적으로 매력적인 QR코드를 만드세요.', ja: '確実にスキャンできる視覚的に魅力的なQRコードを作成しましょう。', zh: '创建视觉吸引力且仍能可靠扫描的QR码。' },
		content: { en: `QR codes can be customized while maintaining scannability.

## Design Principles

1. **Maintain contrast** - Dark on light works best
2. **Keep quiet zone** - Border around the code
3. **Don't obscure corners** - Finder patterns must be visible
4. **Test thoroughly** - Check with multiple scanners

## Customization Options

- Custom colors
- Logo in center
- Rounded corners
- Gradient effects
- Frame with text

## Color Guidelines

| Good | Bad |
|------|-----|
| Black on white | Low contrast |
| Dark blue on light | Similar colors |
| Brand colors (high contrast) | Inverted colors |

## Adding Logos

- Keep logo small (< 30% of code)
- Use high error correction (H level)
- Center position only
- Test after adding

## Common Mistakes

1. Too much customization
2. Not testing
3. Printing too small
4. Low resolution export

Use our QR Designer for custom branded codes.`, ko: `QR코드는 스캔 가능성을 유지하면서 맞춤화할 수 있습니다.

## 디자인 원칙

1. **대비 유지** - 밝은 배경에 어두운 색이 가장 좋음
2. **여백 유지** - 코드 주변의 경계
3. **모서리 가리지 않기** - 파인더 패턴이 보여야 함
4. **철저히 테스트** - 여러 스캐너로 확인

QR 디자이너를 사용하여 맞춤 브랜드 코드를 만드세요.`, ja: `QRコードはスキャン可能性を維持しながらカスタマイズできます。

QRデザイナーを使ってカスタムブランドコードを作成しましょう。`, zh: `QR码可以在保持可扫描性的同时进行自定义。

使用我们的QR设计器创建自定义品牌代码。` },
		date: '2025-01-14', category: 'design'
	},
	{
		slug: 'qr-code-marketing',
		title: { en: 'QR Codes in Marketing', ko: '마케팅 QR코드 활용', ja: 'マーケティングでのQRコード活用', zh: '营销中的QR码应用' },
		description: { en: 'Creative ways to use QR codes in marketing campaigns.', ko: '마케팅 캠페인에서 QR코드를 활용하는 창의적인 방법입니다.', ja: 'マーケティングキャンペーンでQRコードを活用する創造的な方法。', zh: '在营销活动中使用QR码的创意方式。' },
		content: { en: `QR codes bridge physical and digital marketing effectively.

## Marketing Use Cases

1. **Product packaging** - Link to tutorials, reviews
2. **Print ads** - Extend with digital content
3. **Business cards** - Digital contact sharing
4. **Restaurant menus** - Contactless ordering
5. **Event tickets** - Easy check-in
6. **Window displays** - 24/7 shopping

## Campaign Ideas

- Exclusive discounts
- Contest entries
- Video content
- Product information
- Social media follows
- App downloads

## Tracking Marketing QR Codes

Track:
- Scan count
- Location data
- Time of scans
- Device types
- Conversion rates

## Best Practices

1. Clear call-to-action
2. Mobile-optimized landing pages
3. Test before printing
4. Track performance
5. Update content regularly

Use our Marketing QR Tool for trackable campaigns.`, ko: `QR코드는 물리적 마케팅과 디지털 마케팅을 효과적으로 연결합니다.

## 마케팅 사용 사례

1. **제품 포장** - 튜토리얼, 리뷰 링크
2. **인쇄 광고** - 디지털 콘텐츠로 확장
3. **명함** - 디지털 연락처 공유
4. **레스토랑 메뉴** - 비접촉 주문
5. **이벤트 티켓** - 쉬운 체크인
6. **쇼윈도** - 24/7 쇼핑

마케팅 QR 도구를 사용하여 추적 가능한 캠페인을 만드세요.`, ja: `QRコードは物理的マーケティングとデジタルマーケティングを効果的につなぎます。

マーケティングQRツールを使って追跡可能なキャンペーンを作成しましょう。`, zh: `QR码有效地连接实体营销和数字营销。

使用我们的营销QR工具创建可追踪的活动。` },
		date: '2025-01-13', category: 'marketing'
	},
	{
		slug: 'qr-code-security',
		title: { en: 'QR Code Security Considerations', ko: 'QR코드 보안 주의사항', ja: 'QRコードのセキュリティ注意事項', zh: 'QR码安全注意事项' },
		description: { en: 'Stay safe when scanning and creating QR codes.', ko: 'QR코드를 스캔하고 생성할 때 안전하게 지내세요.', ja: 'QRコードのスキャンや作成時に安全を確保しましょう。', zh: '扫描和创建QR码时保持安全。' },
		content: { en: `QR codes can be exploited for malicious purposes. Stay informed and safe.

## Potential Risks

1. **Phishing links** - Fake login pages
2. **Malware downloads** - Harmful apps
3. **Payment fraud** - Modified payment codes
4. **Data theft** - Credential harvesting
5. **Tracking** - Privacy concerns

## Safety Tips for Scanning

1. Check URL before opening
2. Use a trusted scanner app
3. Don't scan suspicious codes
4. Verify the source
5. Keep software updated

## Creating Secure QR Codes

- Use HTTPS links
- Avoid URL shorteners for sensitive content
- Don't embed sensitive data
- Monitor for tampering
- Use dynamic QR codes for control

## Red Flags

- QR stickers over original codes
- Codes in suspicious locations
- Unsolicited QR codes
- Pressure to scan quickly

Use our secure QR Generator for safe codes.`, ko: `QR코드는 악의적인 목적으로 악용될 수 있습니다. 정보를 얻고 안전하게 지내세요.

## 잠재적 위험

1. **피싱 링크** - 가짜 로그인 페이지
2. **악성코드 다운로드** - 유해 앱
3. **결제 사기** - 수정된 결제 코드
4. **데이터 도난** - 자격 증명 수집
5. **추적** - 개인정보 우려

## 스캔 시 안전 팁

1. 열기 전 URL 확인
2. 신뢰할 수 있는 스캐너 앱 사용
3. 의심스러운 코드 스캔하지 않기
4. 출처 확인
5. 소프트웨어 최신 상태 유지

안전한 QR 생성기를 사용하여 안전한 코드를 만드세요.`, ja: `QRコードは悪意のある目的で悪用される可能性があります。

安全なQRジェネレーターを使って安全なコードを作成しましょう。`, zh: `QR码可能被用于恶意目的。保持了解并确保安全。

使用我们的安全QR生成器创建安全的代码。` },
		date: '2025-01-12', category: 'security'
	},
	{
		slug: 'business-card-qr-code',
		title: { en: 'Creating QR Codes for Business Cards', ko: '명함 QR코드 만들기', ja: '名刺用QRコードの作成', zh: '创建名片QR码' },
		description: { en: 'Design effective QR codes for your business cards.', ko: '명함을 위한 효과적인 QR코드를 디자인하세요.', ja: '名刺のための効果的なQRコードをデザインしましょう。', zh: '为您的名片设计有效的QR码。' },
		content: { en: `Business card QR codes make networking more efficient.

## What to Include

Essential:
- Name and title
- Company
- Phone
- Email
- Website

Optional:
- Social profiles
- Office address
- Photo

## Size Recommendations

- Minimum: 1.5 × 1.5 cm
- Recommended: 2 × 2 cm
- Quiet zone: 4 modules wide

## Design Tips

1. Match brand colors
2. Add small logo
3. Use high error correction
4. Keep it simple
5. Test print size

## Placement on Card

- Back of card (full space)
- Front corner (compact)
- Alongside contact info

## File Export

- Vector format (SVG, EPS) for printing
- 300+ DPI for high quality
- CMYK color mode

Use our Business Card QR Tool for professional results.`, ko: `명함 QR코드는 네트워킹을 더 효율적으로 만듭니다.

## 포함할 내용

필수:
- 이름과 직함
- 회사
- 전화번호
- 이메일
- 웹사이트

선택:
- 소셜 프로필
- 사무실 주소
- 사진

## 크기 권장

- 최소: 1.5 × 1.5 cm
- 권장: 2 × 2 cm
- 여백: 4 모듈 너비

명함 QR 도구를 사용하여 전문적인 결과를 얻으세요.`, ja: `名刺QRコードはネットワーキングをより効率的にします。

名刺QRツールを使ってプロフェッショナルな結果を得ましょう。`, zh: `名片QR码使社交网络更高效。

使用我们的名片QR工具获得专业效果。` },
		date: '2025-01-11', category: 'business'
	}
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

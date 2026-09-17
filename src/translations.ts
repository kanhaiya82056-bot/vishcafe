export type LanguageKey = 'hi' | 'en' | 'mg' | 'bho' | 'hinglish' | 'ur';

export interface LanguageOption {
  code: LanguageKey;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'mg', name: 'Magahi', nativeName: 'मगही (लोकल)', flag: '🌾' },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', flag: '🚩' },
  { code: 'hinglish', name: 'Hinglish', nativeName: 'Hinglish', flag: '💬' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
];

export const TRANSLATIONS: Record<LanguageKey, {
  topBarTiming: string;
  topBarAddress: string;
  openNow: string;
  businessTitle: string;
  businessSubtitle: string;
  navHome: string;
  navServices: string;
  navBsnl: string;
  navDocs: string;
  navContact: string;
  callBtn: string;
  whatsappBtn: string;
  heroBadge: string;
  heroHeadingPrefix: string;
  heroHeadingHighlight: string;
  heroSubheading: string;
  heroTag1: string;
  heroTag2: string;
  heroTag3: string;
  heroTag4: string;
  heroCtaCall: string;
  heroCtaWhatsapp: string;
  heroCtaInquiry: string;
  heroRibbonAddress: string;
  heroRibbonTiming: string;
  heroRibbonSatisfied: string;

  servicesTag: string;
  servicesTitle: string;
  servicesSubtitle: string;

  card1Title: string;
  card1Subtitle: string;
  card1Badge: string;
  card1Items: string[];

  card2Title: string;
  card2Subtitle: string;
  card2Badge: string;
  card2Items: string[];

  card3Title: string;
  card3Subtitle: string;
  card3Badge: string;
  card3Items: string[];

  cardApplyBtn: string;
  timeGuideBadge: string;
  timeGuideTitle: string;
  timeGuideBtn: string;

  bsnlTag: string;
  bsnlTitle: string;
  bsnlTitleHighlight: string;
  bsnlDesc: string;
  bsnlFeature1Title: string;
  bsnlFeature1Desc: string;
  bsnlFeature2Title: string;
  bsnlFeature2Desc: string;
  bsnlFeature3Title: string;
  bsnlFeature3Desc: string;
  bsnlFeature4Title: string;
  bsnlFeature4Desc: string;
  bsnlBookBtn: string;
  bsnlHelpline: string;
  bsnlPlanBasic: string;
  bsnlSpeed: string;
  bsnlData: string;
  bsnlNotice: string;

  docsTag: string;
  docsTitle: string;
  docsSubtitle: string;
  acc1Title: string;
  acc1Items: string[];
  acc1Tip: string;

  acc2Title: string;
  acc2Items: string[];
  acc2Tip: string;

  acc3Title: string;
  acc3Items: string[];
  acc3Tip: string;

  acc4Title: string;
  acc4Items: string[];
  acc4Tip: string;

  shareDocsBtn: string;

  modalTitle: string;
  modalSubtitle: string;
  modalServiceLabel: string;
  modalNameLabel: string;
  modalNamePlaceholder: string;
  modalPhoneLabel: string;
  modalPhonePlaceholder: string;
  modalNotesLabel: string;
  modalNotesPlaceholder: string;
  modalSubmitBtn: string;
  modalSuccessMsg: string;

  footerTag: string;
  footerHeading: string;
  footerAddressLabel: string;
  footerFullAddress: string;
  footerPhoneLabel: string;
  footerHoursLabel: string;
  footerHoursValue: string;
  footerMapBtn: string;
  footerCopyright: string;
  langSelectLabel: string;

  priceListTag: string;
  priceListTitle: string;
  priceListSubtitle: string;
  priceSearchPlaceholder: string;
  priceTabAll: string;
  priceTabPrint: string;
  priceTabLamination: string;
  priceTabForms: string;
  priceTabBanking: string;
  priceColService: string;
  priceColSpec: string;
  priceColRate: string;
  priceColTime: string;
  priceColAction: string;
  priceGuaranteeNote: string;
  priceBookBtn: string;

  testimonialsTag: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonialsFilterAll: string;
  testimonialsFilterForms: string;
  testimonialsFilterBanking: string;
  testimonialsFilterBsnl: string;
  testimonialsFilterPrint: string;
  testimonialsViewCarousel: string;
  testimonialsViewGrid: string;
  testimonialsAvgRating: string;
  testimonialsRatingCount: string;
  testimonialsVerifiedClient: string;
  testimonialsShareFeedbackBtn: string;
  testimonialsHelpful: string;
  testimonialsBookSameBtn: string;

  galleryTag: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryFilterAll: string;
  galleryFilterWorkspace: string;
  galleryFilterEquipment: string;
  galleryFilterStaff: string;
  galleryFilterTech: string;
  galleryBadgeSafe: string;
  galleryBadgePower: string;
  galleryBadgeSpeed: string;
  galleryViewEnlarge: string;
  galleryVisitBtn: string;
  galleryDirectionsBtn: string;

  paymentTag: string;
  paymentTitle: string;
  paymentSubtitle: string;
  paymentUpiId: string;
  paymentMerchantName: string;
  paymentScanTitle: string;
  paymentScanSubtitle: string;
  paymentAmountLabel: string;
  paymentCustomAmount: string;
  paymentServiceLabel: string;
  paymentCopyBtn: string;
  paymentCopiedBtn: string;
  paymentPayViaApp: string;
  paymentVerifyTitle: string;
  paymentEnterUtr: string;
  paymentVerifyBtn: string;
  paymentReceiptTitle: string;
  paymentDownloadReceipt: string;
  paymentShareWhatsApp: string;
  paymentZeroFee: string;
}> = {
  hi: {
    topBarTiming: 'समय: सुबह 9:00 AM - शाम 5:00 PM (सोमवार - रविवार)',
    topBarAddress: 'ग्राम व पोस्ट - सिरदला, नवादा (बिहार)',
    openNow: 'दुकान खुली है (Open Now)',
    businessTitle: 'विश्वकर्मा इंटरनेट कैफ़े',
    businessSubtitle: 'Vishwakarma Internet Cafe • सिरदला',
    navHome: 'मुख्य पृष्ठ',
    navServices: 'सेवाएँ',
    navBsnl: 'BSNL फाइबर',
    navDocs: 'आवश्यक डॉक्यूमेंट्स',
    navContact: 'संपर्क',
    callBtn: 'कॉल करें',
    whatsappBtn: 'व्हाट्सएप',
    heroBadge: 'सिरदला का नंबर-1 विश्वसनीय डिजिटल केंद्र',
    heroHeadingPrefix: 'सिरदला का नंबर-1 डिजिटल एवं ',
    heroHeadingHighlight: 'ऑनलाइन सर्विस सेंटर',
    heroSubheading: 'ऑनलाइन फॉर्म, आधार बैंकिंग, नया पैन कार्ड, HD प्रिंटिंग और BSNL फाइबर इंटरनेट सेवा — एक ही छत के नीचे तुरंत और शत-प्रतिशत सटीक कार्य।',
    heroTag1: 'त्वरित एवं 100% सटीक फॉर्म',
    heroTag2: 'सुरक्षित आधार बैंकिंग',
    heroTag3: '5 मिनट में फोटो प्रिंट',
    heroTag4: 'BSNL FTTH फाइबर कनेक्शन',
    heroCtaCall: '📞 डायरेक्ट कॉल करें',
    heroCtaWhatsapp: '💬 व्हाट्सएप पर बात करें',
    heroCtaInquiry: '📋 ऑनलाइन फॉर्म पूछताछ',
    heroRibbonAddress: 'सिरदला मुख्य बाज़ार (नवादा)',
    heroRibbonTiming: 'सुबह 9 AM से शाम 5 PM तक खुला',
    heroRibbonSatisfied: '5000+ संतुष्ट स्थानीय ग्राहक',

    servicesTag: 'हमारी मुख्य सेवाएँ',
    servicesTitle: 'सभी ऑनलाइन एवं डिजिटल कार्य एक ही स्थान पर',
    servicesSubtitle: 'सरकारी योजनाओं के फॉर्म भरने से लेकर बैंकिंग, प्रिंटिंग और हाई-स्पीड इंटरनेट कनेक्शन तक की त्वरित सुविधा।',

    card1Title: 'सरकारी ऑनलाइन सेवाएँ',
    card1Subtitle: 'Government Online Services',
    card1Badge: 'सबसे लोकप्रिय',
    card1Items: [
      'आय, जाति एवं निवास प्रमाण पत्र (RTPS)',
      'EWS प्रमाण पत्र व OBC नॉन-क्रीमी लेयर',
      'नया पैन कार्ड (NSDL / UTI - तुरंत 2 घंटे में E-PAN)',
      'सभी सरकारी नौकरी फॉर्म व एडमिट कार्ड डाउनलोड',
      'राशन कार्ड आवेदन, सुधार एवं आयुष्मान भारत कार्ड',
      'पीएम किसान सम्मान निधि KYC व स्टेटस जांच'
    ],

    card2Title: 'बैंकिंग व डिजिटल सेवाएँ',
    card2Subtitle: 'Banking & Digital Services',
    card2Badge: 'तुरंत कैश',
    card2Items: [
      'आधार कार्ड से पैसे निकालें (AePS - सभी बैंक)',
      'बैंक मिनी स्टेटमेंट एवं बैलेंस इन्क्वायरी',
      'HD कलर फोटो प्रिंटआउट व ज़ेरॉक्स (Xerox)',
      'डॉक्यूमेंट लेमिनेशन एवं PVC कार्ड प्रिंटिंग',
      'पासपोर्ट साइज़ फोटो (5 मिनट में 6/12/24 पीस)',
      'मनी ट्रांसफर (किसी भी बैंक में तुरंत ट्रांसफर)'
    ],

    card3Title: 'BSNL FTTH फाइबर ब्रॉडबैंड',
    card3Subtitle: 'BSNL High-Speed Fiber Internet',
    card3Badge: '100 Mbps स्पीड',
    card3Items: [
      'BSNL नया फाइबर कनेक्शन तुरंत बुक करें',
      'अल्ट्रा हाई-स्पीड Dual Band Wi-Fi राउटर सेटअप',
      'फाइबर केबल मेंटेनेंस, स्प्लिसिंग व जॉइंटिंग रिपेयर',
      'मासिक बिल भुगतान एवं स्पीड अपग्रेड सहायता',
      'अनलिमिटेड कॉलिंग + 100 Mbps तक सुपरफास्ट डेटा',
      'दुकान, स्कूल व घर के लिए विशेष प्लान्स'
    ],

    cardApplyBtn: 'सेवा हेतु आवेदन करें',
    timeGuideBadge: '⚡ त्वरित एवं पारदर्शी प्रक्रिया',
    timeGuideTitle: 'अनुमानित समय समय-सारणी (Quick Processing Time)',
    timeGuideBtn: 'ज़रूरी कागजात देखें',

    bsnlTag: 'BSNL FTTH फाइबर ब्रॉडबैंड पार्टनर - सिरदला',
    bsnlTitle: 'सिरदला में अपने घर एवं दुकान पर लगवाएं ',
    bsnlTitleHighlight: 'BSNL सुपरफास्ट फाइबर',
    bsnlDesc: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला का आधिकारिक BSNL फाइबर सर्विस पार्टनर है। हम नया कनेक्शन लगाने से लेकर ऑप्टिकल फाइबर केबल जॉइंटिंग, राउटर कॉन्फ़िगरेशन एवं तुरंत सर्विस रिपेयरिंग की गारंटी देते हैं।',
    bsnlFeature1Title: '100 Mbps तक की स्पीड',
    bsnlFeature1Desc: 'बिना किसी रुकावट के HD वीडियो स्ट्रीमिंग व डाउनलोडिंग',
    bsnlFeature2Title: 'अनलिमिटेड लोकल व STD कॉल',
    bsnlFeature2Desc: 'लैंडलाइन कनेक्शन के साथ बिल्कुल मुफ्त कॉलिंग',
    bsnlFeature3Title: 'त्वरित इंस्टॉलेशन',
    bsnlFeature3Desc: 'आवेदन करने के 24-48 घंटे के अंदर चालू',
    bsnlFeature4Title: 'लोकल सपोर्ट एवं रिपेयर',
    bsnlFeature4Desc: 'सिरदला क्षेत्र के लिए लोकल केबल मेंटेनेंस टीम',
    bsnlBookBtn: 'नया फाइबर कनेक्शन बुक करें',
    bsnlHelpline: 'फाइबर हेल्पलाइन',
    bsnlPlanBasic: 'शुरुआती प्लान',
    bsnlSpeed: 'स्पीड',
    bsnlData: 'डेटा',
    bsnlNotice: 'सिरदला बाज़ार एवं आसपास के ग्रामीण इलाकों में फाइबर कनेक्शन हेतु आज ही संपर्क करें।',

    docsTag: 'जरूरी कागजात की सूची',
    docsTitle: 'आवश्यक दस्तावेज निर्देशिका (Docs Checklist)',
    docsSubtitle: 'दुकान पर आने से पहले नीचे दी गई सूची के अनुसार अपने जरूरी कागजात साथ लाएं ताकि आपका काम तुरंत हो सके।',
    acc1Title: 'आय, जाति एवं निवास प्रमाण पत्र के लिए आवश्यक दस्तावेज',
    acc1Items: [
      'आवेदक का आधार कार्ड (स्पष्ट फोटो व पूरा पता)',
      'हाल ही का खिंचा हुआ 1 पासपोर्ट साइज़ फोटो',
      'चालू मोबाइल नंबर (OTP सत्यापन एवं मैसेज हेतु)',
      'पुराना प्रमाण पत्र (यदि नवीनीकरण या पुनः आवेदन कर रहे हों)',
      'स्व-घोषणा पत्र (दुकान पर उपलब्ध रहेगा)'
    ],
    acc1Tip: 'टिप: आधार कार्ड में मोबाइल नंबर लिंक होने पर प्रक्रिया तेज होती है।',

    acc2Title: 'नया पैन कार्ड (PAN Card) बनवाने के लिए दस्तावेज',
    acc2Items: [
      'आधार कार्ड की ओरिजिनल या फोटोकॉपी',
      'आधार कार्ड में नाम, पिता का नाम और जन्म तिथि सही होनी चाहिए',
      '2 ताज़ा पासपोर्ट साइज रंगीन फोटो',
      'सत्यापन हेतु चालू मोबाइल नंबर एवं ईमेल आईडी'
    ],
    acc2Tip: 'फिंगरप्रिंट या आधार OTP से मात्र 2 घंटे में E-PAN प्राप्त करें!',

    acc3Title: 'आधार बैंकिंग (AePS) से पैसा निकालने के लिए आवश्यक नियम',
    acc3Items: [
      'बैंक खाताधारक का आधार कार्ड नंबर',
      'आधार से जुड़े बैंक का नाम',
      'खाताधारक की स्वयं की उपस्थिति (अंगूठे/फिंगरप्रिंट बायोमेट्रिक सत्यापन हेतु)'
    ],
    acc3Tip: 'कैश निकासी पर तुरंत प्रिंटेड या डिजिटल रसीद दी जाती है।',

    acc4Title: 'BSNL फाइबर इंटरनेट नया कनेक्शन लेने हेतु आवश्यक दस्तावेज',
    acc4Items: [
      'आवेदक का आधार कार्ड फोटोकॉपी',
      '1 पासपोर्ट साइज़ फोटो',
      'कनेक्शन लगाने का सटीक स्थान (घर/दुकान का पता व लैंडमार्क)',
      'सम्पर्क हेतु चालू 10-अंकों का मोबाइल नंबर'
    ],
    acc4Tip: 'बुक करने के 24-48 घंटे के भीतर सिरदला क्षेत्र में कनेक्शन चालू कर दिया जाता है।',

    shareDocsBtn: 'व्हाट्सएप पर यह लिस्ट शेयर करें',

    modalTitle: 'सेवा बुकिंग / ऑनलाइन पूछताछ',
    modalSubtitle: 'अपनी आवश्यक सेवा चुनें, हम तुरंत व्हाट्सएप पर आपसे संपर्क करेंगे।',
    modalServiceLabel: 'सेवा चुनें',
    modalNameLabel: 'आपका पूरा नाम',
    modalNamePlaceholder: 'उदा. राम कुमार',
    modalPhoneLabel: 'मोबाइल नंबर',
    modalPhonePlaceholder: '10 अंकों का मोबाइल नंबर',
    modalNotesLabel: 'कुछ विवरण या सवाल (ऐच्छिक)',
    modalNotesPlaceholder: 'अपनी आवश्यकता के बारे में बताएं...',
    modalSubmitBtn: 'व्हाट्सएप पर भेजें',
    modalSuccessMsg: 'धन्यवाद! आपको व्हाट्सएप पर रीडायरेक्ट किया जा रहा है...',

    footerTag: 'सम्पर्क करें',
    footerHeading: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला',
    footerAddressLabel: 'पूरा पता:',
    footerFullAddress: 'ग्राम व पोस्ट - सिरदला, थाना - सिरदला, जिला - नवादा, बिहार - 805127 (मुख्य बाज़ार, बस स्टैंड के पास)',
    footerPhoneLabel: 'फ़ोन / व्हाट्सएप:',
    footerHoursLabel: 'दुकान का समय:',
    footerHoursValue: 'सुबह 9:00 AM से शाम 5:00 PM (सभी 7 दिन)',
    footerMapBtn: 'गूगल मैप्स पर रास्ता देखें',
    footerCopyright: 'सर्वाधिकार सुरक्षित © 2026 विश्वकर्मा इंटरनेट कैफ़े सिरदला (नवादा)।',
    langSelectLabel: 'भाषा बदलें (Select Language)',

    priceListTag: 'रेट लिस्ट एवं पारदर्शी शुल्क',
    priceListTitle: 'विश्वकर्मा कैफ़े सेवा दर सूची (Price List)',
    priceListSubtitle: 'हमारे केंद्र पर सभी सेवाओं के लिए 100% स्पष्ट, उचित और पारदर्शी दरें। कोई भी छिपा हुआ शुल्क नहीं।',
    priceSearchPlaceholder: 'सेवा का नाम खोजें (उदा. ज़ेरॉक्स, लेमिनेशन, पैन कार्ड, फोटो)...',
    priceTabAll: 'सभी दरें',
    priceTabPrint: 'ज़ेरॉक्स व प्रिंटिंग',
    priceTabLamination: 'लेमिनेशन व स्कैन',
    priceTabForms: 'सरकारी फॉर्म व कार्ड',
    priceTabBanking: 'आधार बैंकिंग व अन्य',
    priceColService: 'सेवा का नाम (Service Name)',
    priceColSpec: 'विवरण / क्वालिटी (Specification)',
    priceColRate: 'अनुमानित दर (Price Rate)',
    priceColTime: 'समय (Est. Time)',
    priceColAction: 'सेवा बुक करें (Action)',
    priceGuaranteeNote: '100% पारदर्शी दर गारंटी — सिरदला बाज़ार में सबसे सही और ईमानदार दरें। कार्य पूर्ण होने पर पक्की रसीद दी जाती है।',
    priceBookBtn: 'बुक करें',

    testimonialsTag: 'स्थानीय ग्राहकों की राय • ग्राहक समीक्षाएं',
    testimonialsTitle: 'सिरदला क्षेत्र के ग्राहकों का अटूट भरोसा',
    testimonialsSubtitle: 'सिरदला बाज़ार, परना, लौंध, बांधी और आसपास के गांवों के छात्रों, किसानों और दुकानदारों का वास्तविक अनुभव।',
    testimonialsFilterAll: 'सभी समीक्षाएं',
    testimonialsFilterForms: 'सरकारी फॉर्म व जॉब्स',
    testimonialsFilterBanking: 'AePS आधार निकासी',
    testimonialsFilterBsnl: 'BSNL फाइबर वाई-फाई',
    testimonialsFilterPrint: 'ज़ेरॉक्स व प्लास्टिक कार्ड',
    testimonialsViewCarousel: 'स्लाइडर (Carousel)',
    testimonialsViewGrid: 'ग्रिड (Grid View)',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ स्थानीय संतुष्ट ग्राहक',
    testimonialsVerifiedClient: 'सत्यापित स्थानीय ग्राहक',
    testimonialsShareFeedbackBtn: 'अपनी समीक्षा व्हाट्सएप पर भेजें',
    testimonialsHelpful: 'उपयोगी',
    testimonialsBookSameBtn: 'यह सेवा बुक करें',

    galleryTag: 'सेंटर की झलक • कार्यस्थल व उपकरण',
    galleryTitle: 'विश्वकर्मा कैफ़े कार्यस्थल, आधुनिक मशीनें व सहयोगी स्टाफ',
    gallerySubtitle: 'सिरदला बाज़ार में स्वच्छ, सुरक्षित व आधुनिक वातावरण। हाई-स्पीड कंप्यूटर, लेज़र प्रिंटर और सेवाभावी स्टाफ जो हर काम में आपका पूरा सहयोग करते हैं।',
    galleryFilterAll: 'सभी तस्वीरें',
    galleryFilterWorkspace: 'कंप्यूटर डेस्क व बैठक',
    galleryFilterEquipment: 'आधुनिक प्रिंटर व मशीनें',
    galleryFilterStaff: 'सहयोगी स्टाफ व सेवा काउंटर',
    galleryFilterTech: 'PVC कार्ड्स व BSNL फाइबर',
    galleryBadgeSafe: 'सुरक्षित व सम्मानजनक माहौल',
    galleryBadgePower: 'पावर बैकअप (नो लाइट कट रुकावट)',
    galleryBadgeSpeed: '100 Mbps BSNL हाई-स्पीड',
    galleryViewEnlarge: 'बड़ा करके देखें',
    galleryVisitBtn: 'दुकान पर पधारें',
    galleryDirectionsBtn: 'गूगल मैप पर रास्ता देखें',

    paymentTag: 'सुरक्षित डिजिटल भुगतान • Instant UPI Payment',
    paymentTitle: 'ऑनलाइन भुगतान करें (7903027843@okbizaxis)',
    paymentSubtitle: 'गूगल पे, फोनपे, पेटीएम या किसी भी UPI ऐप से फॉर्म फीस, फोटोकॉपी, पैन कार्ड या BSNL फाइबर बिल का सुरक्षित भुगतान करें।',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe (विश्वकर्मा इंटरनेट कैफ़े)',
    paymentScanTitle: 'QR कोड स्कैन करके तुरंत भुगतान करें',
    paymentScanSubtitle: 'Google Pay, PhonePe, Paytm, BHIM या किसी भी UPI ऐप से स्कैन करें',
    paymentAmountLabel: 'भुगतान राशि चुनें (Select Amount)',
    paymentCustomAmount: 'अन्य राशि (Custom Amount)',
    paymentServiceLabel: 'सेवा / कार्य का नाम (Purpose)',
    paymentCopyBtn: 'UPI ID कॉपी करें',
    paymentCopiedBtn: 'कॉपी हो गया!',
    paymentPayViaApp: 'UPI ऐप से सीधे खोलें (1-Click Pay)',
    paymentVerifyTitle: 'भुगतान सत्यापन व पक्की डिजिटल रसीद',
    paymentEnterUtr: '12-अंकों का UTR / UPI Ref No दर्ज करें',
    paymentVerifyBtn: 'रसीद जनरेट करें (Verify & Get Receipt)',
    paymentReceiptTitle: 'डिजिटल भुगतान रसीद',
    paymentDownloadReceipt: 'रसीद डाउनलोड / प्रिंट करें',
    paymentShareWhatsApp: 'व्हाट्सएप पर भुगतान की सूचना भेजें',
    paymentZeroFee: '0% अतिरिक्त शुल्क • 100% सुरक्षित NPCI UPI गेटवे'
  },
  en: {
    topBarTiming: 'Hours: 9:00 AM - 5:00 PM (Monday - Sunday)',
    topBarAddress: 'Village & Post - Sirdala, Nawada (Bihar)',
    openNow: 'Shop Open Now',
    businessTitle: 'Vishwakarma Internet Cafe',
    businessSubtitle: 'Vishwakarma Internet Cafe • Sirdala',
    navHome: 'Home',
    navServices: 'Services',
    navBsnl: 'BSNL Fiber',
    navDocs: 'Required Docs',
    navContact: 'Contact Us',
    callBtn: 'Call Now',
    whatsappBtn: 'WhatsApp',
    heroBadge: 'Sirdala #1 Trusted Digital Service Center',
    heroHeadingPrefix: "Sirdala's #1 Digital & ",
    heroHeadingHighlight: 'Online Service Center',
    heroSubheading: 'Online Forms, Aadhaar Banking, PAN Card, Printing, and BSNL Fiber Broadband — Fast and 100% accurate services under one roof.',
    heroTag1: 'Fast & 100% Accurate Forms',
    heroTag2: 'Secure Aadhaar Banking',
    heroTag3: 'Photo Print in 5 Minutes',
    heroTag4: 'BSNL FTTH Fiber Broadband',
    heroCtaCall: '📞 Direct Call Now',
    heroCtaWhatsapp: '💬 Chat on WhatsApp',
    heroCtaInquiry: '📋 Online Form Inquiry',
    heroRibbonAddress: 'Sirdala Main Market (Nawada)',
    heroRibbonTiming: 'Open 9:00 AM to 5:00 PM',
    heroRibbonSatisfied: '5000+ Happy Local Customers',

    servicesTag: 'OUR MAIN SERVICES',
    servicesTitle: 'All Online & Digital Work Under One Roof',
    servicesSubtitle: 'From government online application forms to AePS banking, high-res printing, and BSNL ultra-fast fiber internet.',

    card1Title: 'Government Online Services',
    card1Subtitle: 'Government Portal Services',
    card1Badge: 'Most Popular',
    card1Items: [
      'Income, Caste & Residence Certificates (RTPS)',
      'EWS Certificate & OBC Non-Creamy Layer',
      'New PAN Card (NSDL / UTI - E-PAN in 2 hours)',
      'Govt Job Application Forms & Admit Cards',
      'Ration Card Application, Correction & Ayushman Card',
      'PM Kisan Samman Nidhi KYC & Status Verification'
    ],

    card2Title: 'Banking & Digital Services',
    card2Subtitle: 'Financial & Printing Hub',
    card2Badge: 'Instant Cash',
    card2Items: [
      'Aadhaar Cash Withdrawal (AePS - All Banks)',
      'Bank Mini Statement & Balance Inquiry',
      'HD Color Photo Printing & High-Quality Xerox',
      'Document Lamination & PVC Card Printing',
      'Passport Size Photos (6/12/24 photos in 5 mins)',
      'Money Transfer (Instant IMPS to any Bank)'
    ],

    card3Title: 'BSNL FTTH Fiber Broadband',
    card3Subtitle: 'High-Speed Fiber Internet',
    card3Badge: '100 Mbps Speed',
    card3Items: [
      'Book New BSNL Fiber Connection Instantly',
      'Ultra High-Speed Dual Band Wi-Fi Router Setup',
      'Fiber Cable Splicing, Jointing & Maintenance',
      'Monthly Bill Payment & Speed Upgrade Assistance',
      'Unlimited Calling + Up to 100 Mbps Fast Data',
      'Customized Fiber Plans for Shop, School & Home'
    ],

    cardApplyBtn: 'Apply / Inquiry Now',
    timeGuideBadge: '⚡ FAST & TRANSPARENT PROCESS',
    timeGuideTitle: 'Estimated Processing Time (Quick Guide)',
    timeGuideBtn: 'Check Required Documents',

    bsnlTag: 'BSNL FTTH FIBER BROADBAND PARTNER - SIRDALA',
    bsnlTitle: 'Get Superfast Broadband at Home & Shop in Sirdala with ',
    bsnlTitleHighlight: 'BSNL Fiber Internet',
    bsnlDesc: 'Vishwakarma Internet Cafe is the official BSNL Fiber Service Partner in Sirdala. We guarantee quick installation, optical fiber jointing, router setup, and instant local repair support.',
    bsnlFeature1Title: 'Up to 100 Mbps Speed',
    bsnlFeature1Desc: 'Seamless HD video streaming, gaming, and fast downloads',
    bsnlFeature2Title: 'Unlimited Local & STD Calls',
    bsnlFeature2Desc: 'Free landline voice calling with every fiber plan',
    bsnlFeature3Title: 'Express Installation',
    bsnlFeature3Desc: 'Connection activated within 24-48 hours of booking',
    bsnlFeature4Title: 'Dedicated Local Support',
    bsnlFeature4Desc: 'Local technical maintenance team dedicated for Sirdala',
    bsnlBookBtn: 'Book New Fiber Connection',
    bsnlHelpline: 'Fiber Helpline',
    bsnlPlanBasic: 'Starting Plan',
    bsnlSpeed: 'Speed',
    bsnlData: 'Data',
    bsnlNotice: 'Contact us today for new fiber connections in Sirdala market and surrounding rural villages.',

    docsTag: 'DOCUMENT CHECKLIST',
    docsTitle: 'Required Documents Checklist',
    docsSubtitle: 'Please bring the following original or copy documents to our cafe for instant application processing.',
    acc1Title: 'Documents for Income, Caste & Residence Certificates',
    acc1Items: [
      'Applicant Aadhaar Card (Clear photo & full address)',
      'Recent 1 passport size photograph',
      'Active mobile number (For OTP & Status SMS)',
      'Old certificate copy (if renewing or re-applying)',
      'Self-declaration form (Available at our shop)'
    ],
    acc1Tip: 'Tip: Processing is faster if mobile number is linked to Aadhaar.',

    acc2Title: 'Documents for New PAN Card Application',
    acc2Items: [
      'Original Aadhaar Card or photocopy',
      'Matching Name, Father Name & Date of Birth on Aadhaar',
      '2 fresh passport size colored photos',
      'Active mobile number & email ID for verification'
    ],
    acc2Tip: 'Get instant E-PAN delivered to email in just 2 hours via Fingerprint/OTP!',

    acc3Title: 'Rules for Aadhaar Cash Withdrawal (AePS)',
    acc3Items: [
      'Account holder Aadhaar Card number',
      'Name of the Bank linked with Aadhaar',
      'Physical presence of account holder (for thumb biometric verification)'
    ],
    acc3Tip: 'Instant printed or digital transaction receipt is provided for every withdrawal.',

    acc4Title: 'Documents Required for New BSNL Fiber Connection',
    acc4Items: [
      'Applicant Aadhaar Card photocopy',
      '1 Passport size photograph',
      'Exact installation address (Home/Shop address with landmark)',
      'Active 10-digit contact mobile number'
    ],
    acc4Tip: 'Fiber connection is activated within 24-48 hours in Sirdala area.',

    shareDocsBtn: 'Share Document List on WhatsApp',

    modalTitle: 'Book Service / Online Inquiry',
    modalSubtitle: 'Select your required service and we will contact you immediately on WhatsApp.',
    modalServiceLabel: 'Select Service',
    modalNameLabel: 'Your Full Name',
    modalNamePlaceholder: 'e.g. Ram Kumar',
    modalPhoneLabel: 'Mobile Number',
    modalPhonePlaceholder: '10 digit mobile number',
    modalNotesLabel: 'Details / Questions (Optional)',
    modalNotesPlaceholder: 'Tell us about your requirement...',
    modalSubmitBtn: 'Send on WhatsApp',
    modalSuccessMsg: 'Thank you! Redirecting to WhatsApp...',

    footerTag: 'CONTACT US',
    footerHeading: 'Vishwakarma Internet Cafe Sirdala',
    footerAddressLabel: 'Full Address:',
    footerFullAddress: 'Village & Post - Sirdala, P.S. - Sirdala, Dist - Nawada, Bihar - 805127 (Main Market, Near Bus Stand)',
    footerPhoneLabel: 'Phone / WhatsApp:',
    footerHoursLabel: 'Shop Hours:',
    footerHoursValue: '9:00 AM to 5:00 PM (All 7 Days Open)',
    footerMapBtn: 'Get Directions on Google Maps',
    footerCopyright: 'All Rights Reserved © 2026 Vishwakarma Internet Cafe Sirdala (Nawada).',
    langSelectLabel: 'Select Language',

    priceListTag: 'PRICE LIST & TRANSPARENT CHARGES',
    priceListTitle: 'Vishwakarma Cafe Service Price List',
    priceListSubtitle: '100% clear, affordable, and transparent rates for all services at our center. No hidden fees guaranteed.',
    priceSearchPlaceholder: 'Search service name (e.g., Xerox, Lamination, PAN card, Photo)...',
    priceTabAll: 'All Rates',
    priceTabPrint: 'Xerox & Printing',
    priceTabLamination: 'Lamination & Scan',
    priceTabForms: 'Govt Forms & Cards',
    priceTabBanking: 'Aadhaar Banking & More',
    priceColService: 'Service Name',
    priceColSpec: 'Specification',
    priceColRate: 'Price Rate',
    priceColTime: 'Est. Time',
    priceColAction: 'Action',
    priceGuaranteeNote: '100% Transparent Price Guarantee — Fair and honest pricing in Sirdala Market with printed receipts.',
    priceBookBtn: 'Book Now',

    testimonialsTag: 'LOCAL CLIENT FEEDBACK & REVIEWS',
    testimonialsTitle: 'Trusted by 15,000+ Local Customers in Sirdala',
    testimonialsSubtitle: 'Genuine feedback and experiences from students, farmers, shopkeepers, and families across Sirdala and neighboring areas.',
    testimonialsFilterAll: 'All Reviews',
    testimonialsFilterForms: 'Govt Forms & Jobs',
    testimonialsFilterBanking: 'AePS Aadhaar Cash',
    testimonialsFilterBsnl: 'BSNL Fiber Wi-Fi',
    testimonialsFilterPrint: 'Xerox & Plastic Cards',
    testimonialsViewCarousel: 'Carousel View',
    testimonialsViewGrid: 'Grid View',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ Verified Local Clients',
    testimonialsVerifiedClient: 'Verified Local Client',
    testimonialsShareFeedbackBtn: 'Share Your Feedback on WhatsApp',
    testimonialsHelpful: 'Helpful',
    testimonialsBookSameBtn: 'Book This Service',

    galleryTag: 'CENTER SHOWCASE • WORKSPACE & EQUIPMENT',
    galleryTitle: 'Our Workspace, Modern Machines & Friendly Staff',
    gallerySubtitle: 'Step inside Vishwakarma Internet Cafe in Sirdala. Clean, comfortable, and well-equipped with high-speed computers, heavy-duty digital copiers, and dedicated staff.',
    galleryFilterAll: 'All Photos',
    galleryFilterWorkspace: 'Workspace & Computers',
    galleryFilterEquipment: 'Copiers & Equipment',
    galleryFilterStaff: 'Helpful Staff & Counter',
    galleryFilterTech: 'PVC Cards & BSNL Fiber',
    galleryBadgeSafe: 'Safe & Respectful Ambience',
    galleryBadgePower: 'UPS Inverter Backup (No Power Cuts)',
    galleryBadgeSpeed: '100 Mbps BSNL Fiber Speed',
    galleryViewEnlarge: 'Click to Enlarge',
    galleryVisitBtn: 'Visit Our Center',
    galleryDirectionsBtn: 'Get Directions on Maps',

    paymentTag: 'SECURE DIGITAL PAYMENTS • INSTANT UPI GATEWAY',
    paymentTitle: 'Pay Online via UPI (7903027843@okbizaxis)',
    paymentSubtitle: 'Pay form fees, photocopy, PAN card application, or BSNL fiber bills securely with Google Pay, PhonePe, Paytm, BHIM, or any UPI app.',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe',
    paymentScanTitle: 'Scan QR Code to Pay Instantly',
    paymentScanSubtitle: 'Scan using Google Pay, PhonePe, Paytm, BHIM or any banking app',
    paymentAmountLabel: 'Select Payment Amount',
    paymentCustomAmount: 'Custom Amount',
    paymentServiceLabel: 'Service / Purpose of Payment',
    paymentCopyBtn: 'Copy UPI ID',
    paymentCopiedBtn: 'UPI ID Copied!',
    paymentPayViaApp: 'Launch UPI App (1-Click Pay)',
    paymentVerifyTitle: 'Payment Verification & Official Digital Receipt',
    paymentEnterUtr: 'Enter 12-digit UTR / UPI Reference Number',
    paymentVerifyBtn: 'Verify & Generate Receipt',
    paymentReceiptTitle: 'Official Payment Receipt',
    paymentDownloadReceipt: 'Download / Print Receipt',
    paymentShareWhatsApp: 'Share Payment Proof on WhatsApp',
    paymentZeroFee: '0% Extra Convenience Fee • 100% Secure NPCI UPI'
  },
  mg: {
    topBarTiming: 'समय: बिहान 9:00 AM से साँझ 5:00 PM (सोमवार - रविवार)',
    topBarAddress: 'ग्राम व पोस्ट - सिरदला, नवादा (बिहार)',
    openNow: 'दुकान खुलल हे (Open Now)',
    businessTitle: 'विश्वकर्मा इंटरनेट कैफ़े',
    businessSubtitle: 'Vishwakarma Internet Cafe • सिरदला',
    navHome: 'होम (मुख्य)',
    navServices: 'सब सेवा',
    navBsnl: 'BSNL फाइबर',
    navDocs: 'कागजात लिस्ट',
    navContact: 'संपर्क करीं',
    callBtn: 'कॉल करीं',
    whatsappBtn: 'व्हाट्सएप',
    heroBadge: 'सिरदला के नंबर-1 भरोसेमंद डिजिटल केंद्र',
    heroHeadingPrefix: 'सिरदला के नंबर-1 डिजिटल अउरी ',
    heroHeadingHighlight: 'ऑनलाइन सर्विस सेंटर',
    heroSubheading: 'ऑनलाइन फ़ॉर्म, आधार से रूपया निकासी, नया पैन कार्ड, HD फोटो प्रिंट अउरी BSNL फाइबर नेट — सब काम एक ही जगहा तुरंत अउरी सही-सही!',
    heroTag1: 'तुरंत अउरी 100% सही फॉर्म',
    heroTag2: 'सुरक्षित आधार बैंकिंग',
    heroTag3: '5 मिनट में फोटो प्रिंट',
    heroTag4: 'BSNL FTTH फाइबर नेट',
    heroCtaCall: '📞 डायरेक्ट कॉल करीं',
    heroCtaWhatsapp: '💬 व्हाट्सएप पर बात करीं',
    heroCtaInquiry: '📋 ऑनलाइन फॉर्म पूछ-ताछ',
    heroRibbonAddress: 'सिरदला मुख्य बाज़ार (नवादा)',
    heroRibbonTiming: 'बिहान 9 AM से साँझ 5 PM तक खुलल',
    heroRibbonSatisfied: '5000+ खुशहाल स्थानीय ग्राहक',

    servicesTag: 'हमर मुख्य सेवा',
    servicesTitle: 'सब ऑनलाइन अउरी डिजिटल काम एक ही जगहा',
    servicesSubtitle: 'सरकारी योजना के फॉर्म भरे से लेके आधार से पैसा निकाले, फोटो प्रिंटिंग अउरी BSNL नेट कनेक्शन तक!',

    card1Title: 'सरकारी ऑनलाइन सेवा',
    card1Subtitle: 'Government Online Services',
    card1Badge: 'सबसे हिट',
    card1Items: [
      'आय, जाति अउरी निवास प्रमाण पत्र (RTPS)',
      'EWS अउरी OBC नॉन-क्रीमी लेयर रसीद',
      'नया पैन कार्ड (2 घंटा में ईमेल पर E-PAN)',
      'सब सरकारी नौकरी फॉर्म अउरी एडमिट कार्ड',
      'राशन कार्ड आवेदन, सुधार अउरी आयुष्मान कार्ड',
      'पीएम किसान सम्मान निधि KYC अउरी स्टेटस'
    ],

    card2Title: 'बैंकिंग अउरी डिजिटल काम',
    card2Subtitle: 'Banking & Digital Services',
    card2Badge: 'तुरंत कैश',
    card2Items: [
      'आधार कार्ड से रूपया निकालू (AePS - सब बैंक)',
      'बैंक मिनी स्टेटमेंट अउरी बैलेंस चेक',
      'HD कलर फोटो प्रिंट अउरी ज़ेरॉक्स (Xerox)',
      'कागजात लेमिनेशन अउरी PVC कार्ड प्रिंट',
      'पासपोर्ट साइज़ फोटो (5 मिनट में 6/12/24 गो)',
      'मनी ट्रांसफर (कोनो भी बैंक में तुरंत भेजू)'
    ],

    card3Title: 'BSNL FTTH फाइबर इंटरनेट',
    card3Subtitle: 'BSNL High-Speed Fiber Internet',
    card3Badge: '100 Mbps स्पीड',
    card3Items: [
      'BSNL नया फाइबर कनेक्शन तुरंत बुक करीं',
      'अल्ट्रा हाई-स्पीड Dual Band Wi-Fi राउटर सेटअप',
      'फाइबर तार मेंटेनेंस, कटिंग व जॉइंटिंग रिपेयर',
      'महीना के बिल जमा अउरी स्पीड बढ़ावे के मदद',
      'अनलिमिटेड फ्री कॉलिंग + 100 Mbps तक सुपरनेट',
      'दुकान, स्कूल अउ घर खातिर स्पेशल प्लान'
    ],

    cardApplyBtn: 'काम खातिर आवेदन करीं',
    timeGuideBadge: '⚡ जल्दी अउरी साफ़-सुथरा काम',
    timeGuideTitle: 'काम होवे के समय (Quick Processing Time)',
    timeGuideBtn: 'ज़रूरी कागजात देखीं',

    bsnlTag: 'BSNL FTTH फाइबर ब्रॉडबैंड पार्टनर - सिरदला',
    bsnlTitle: 'सिरदला में अपने घर अउ दुकान पर लगावी ',
    bsnlTitleHighlight: 'BSNL सुपरफास्ट फाइबर',
    bsnlDesc: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला के ऑफिशियल BSNL फाइबर पार्टनर हे। नया कनेक्शन लगावे से लेके तार जोड़ाई अउ तुरंत रिपेयरिंग के फुल गारंटी!',
    bsnlFeature1Title: '100 Mbps तक के स्पीड',
    bsnlFeature1Desc: 'बिना कोनो रुकावट के HD वीडियो अउ डाउनलोडिंग',
    bsnlFeature2Title: 'अनलिमिटेड लोकल व STD कॉल',
    bsnlFeature2Desc: 'लैंडलाइन से बिल्कुल फ्री कॉलिंग सुविधा',
    bsnlFeature3Title: 'तुरंत इंस्टॉलेशन',
    bsnlFeature3Desc: 'बुक करे के 24-48 घंटा में चालू',
    bsnlFeature4Title: 'लोकल मिस्त्री अउ सपोर्ट',
    bsnlFeature4Desc: 'सिरदला इलाका खातिर स्पेशल मेंटेनेंस टीम',
    bsnlBookBtn: 'नया फाइबर कनेक्शन बुक करीं',
    bsnlHelpline: 'फाइबर हेल्पलाइन',
    bsnlPlanBasic: 'शुरुआती प्लान',
    bsnlSpeed: 'स्पीड',
    bsnlData: 'डेटा',
    bsnlNotice: 'सिरदला बाज़ार अउ आसपास के गाँव में फाइबर नेट खातिर आज ही संपर्क करीं।',

    docsTag: 'ज़रूरी कागजात',
    docsTitle: 'कागजात लिस्ट (Docs Checklist)',
    docsSubtitle: 'दुकान पर आवे से पहिले नीचे देल लिस्ट के हिसाब से अपन कागजात साथे लावी ताकि काम हाथों-हाथ हो जाव।',
    acc1Title: 'आय, जाति अउ निवास प्रमाण पत्र खातिर कागजात',
    acc1Items: [
      'आवेदक के आधार कार्ड (साफ़ फोटो व पूरा पता)',
      'हाल के खिंचाल 1 गो पासपोर्ट फोटो',
      'चालू मोबाइल नंबर (OTP अउ मैसेज खातिर)',
      'पुरान रसीद (यदि दोबारा बनावईत होवे)'
    ],
    acc1Tip: 'टिप: आधार में मोबाइल नंबर जुड़ल रहला पर काम जल्दी होवई हे।',

    acc2Title: 'नया पैन कार्ड (PAN Card) बनवावे के कागजात',
    acc2Items: [
      'आधार कार्ड के असली या फोटोकॉपी',
      'आधार में नाम, बाप के नाम अउ जनम तिथि सही होवे के चाही',
      '2 गो ताज़ा पासपोर्ट साइज रंगीन फोटो',
      'चालू मोबाइल नंबर'
    ],
    acc2Tip: 'अंगूठा या आधार OTP से मात्र 2 घंटा में E-PAN पाओ!',

    acc3Title: 'आधार से पैसा निकाले के नियम (AePS)',
    acc3Items: [
      'खाताधारक के आधार नंबर',
      'आधार से जुड़ल बैंक के नाम',
      'खाताधारक के स्वयं उपस्थित होवई (अंगूठा लगावे खातिर)'
    ],
    acc3Tip: 'पैसा निकाले पर तुरंत रसीद देल जावई हे।',

    acc4Title: 'BSNL फाइबर नेट नया कनेक्शन खातिर कागजात',
    acc4Items: [
      'आधार कार्ड फोटोकॉपी',
      '1 गो पासपोर्ट फोटो',
      'घर/दुकान के सटीक पता अउ लैंडमार्क',
      'सम्पर्क करे खातिर चालू मोबाइल नंबर'
    ],
    acc4Tip: 'बुक करे के 24-48 घंटा में सिरदला क्षेत्र में नेट चालू हो जावई हे।',

    shareDocsBtn: 'व्हाट्सएप पर कागजात लिस्ट भेजू',

    modalTitle: 'सेवा बुकिंग / ऑनलाइन पूछताछ',
    modalSubtitle: 'अपन काम चुनीं, हम तुरंत व्हाट्सएप पर संपर्क करब।',
    modalServiceLabel: 'काम चुनीं',
    modalNameLabel: 'अपन पूरा नाम',
    modalNamePlaceholder: 'उदा. राम कुमार',
    modalPhoneLabel: 'मोबाइल नंबर',
    modalPhonePlaceholder: '10 अंक के मोबाइल नंबर',
    modalNotesLabel: 'विवरण (ऐच्छिक)',
    modalNotesPlaceholder: 'अपन काम के बारे में बताईं...',
    modalSubmitBtn: 'व्हाट्सएप पर भेजू',
    modalSuccessMsg: 'धन्यवाद! व्हाट्सएप पर भेजल जा रहल हे...',

    footerTag: 'सम्पर्क करीं',
    footerHeading: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला',
    footerAddressLabel: 'पूरा पता:',
    footerFullAddress: 'ग्राम व पोस्ट - सिरदला, थाना - सिरदला, जिला - नवादा, बिहार - 805127 (मुख्य बाज़ार, बस स्टैंड के नज़दीक)',
    footerPhoneLabel: 'फ़ोन / व्हाट्सएप:',
    footerHoursLabel: 'दुकान के समय:',
    footerHoursValue: 'बिहान 9:00 AM से साँझ 5:00 PM (सातों दिन)',
    footerMapBtn: 'गूगल मैप पर रस्ता देखीं',
    footerCopyright: 'सर्वाधिकार सुरक्षित © 2026 विश्वकर्मा इंटरनेट कैफ़े सिरदला (नवादा)।',
    langSelectLabel: 'भाषा चुनीं (Select Language)',

    priceListTag: 'रेट लिस्ट अउर साफ़-सुथरा रेट',
    priceListTitle: 'विश्वकर्मा कैफ़े रेट लिस्ट (Price List)',
    priceListSubtitle: 'हमार सेंटर पर सब काम के एकदम सही अउर साफ़ रेट हई। कउनो छिपावल चार्ज ना हई।',
    priceSearchPlaceholder: 'सेवा खोजा (उदा. ज़ेरॉक्स, लेमिनेशन, पैन कार्ड, फोटो)...',
    priceTabAll: 'सब रेट',
    priceTabPrint: 'ज़ेरॉक्स अउर प्रिंटिंग',
    priceTabLamination: 'लेमिनेशन अउर स्कैन',
    priceTabForms: 'सरकारी फॉर्म अउर कार्ड',
    priceTabBanking: 'आधार बैंकिंग अउर अन्य',
    priceColService: 'सेवा के नाम',
    priceColSpec: 'विवरण / क्वालिटी',
    priceColRate: 'रेट (Price Rate)',
    priceColTime: 'समय',
    priceColAction: 'बुक करीं',
    priceGuaranteeNote: '100% साफ़ रेट गारंटी — सिरदला बाज़ार में सबसे सही रेट। काम पूरा होइत पक्की रसीद मिलतै।',
    priceBookBtn: 'बुक करीं',

    testimonialsTag: 'स्थानीय ग्राहकन के राय • रिव्यु',
    testimonialsTitle: 'सिरदला क्षेत्र के लोगन के अटूट भरोसा',
    testimonialsSubtitle: 'सिरदला बाज़ार, परना, लौंध, बांधी अउर आसपास के गांव के भाई-बहिन के सच्चा अनुभव।',
    testimonialsFilterAll: 'सब समीक्षा',
    testimonialsFilterForms: 'सरकारी फॉर्म व बहाली',
    testimonialsFilterBanking: 'AePS आधार निकासी',
    testimonialsFilterBsnl: 'BSNL फाइबर वाई-फाई',
    testimonialsFilterPrint: 'ज़ेरॉक्स व प्लास्टिक कार्ड',
    testimonialsViewCarousel: 'स्लाइडर (Carousel)',
    testimonialsViewGrid: 'ग्रिड (Grid View)',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ स्थानीय संतुष्ट ग्राहक',
    testimonialsVerifiedClient: 'सत्यापित लोकल ग्राहक',
    testimonialsShareFeedbackBtn: 'अपन राय व्हाट्सएप पर भेजीं',
    testimonialsHelpful: 'काम के बा',
    testimonialsBookSameBtn: 'ई काम बुक करीं',

    galleryTag: 'सेंटर के झलक • कार्यस्थल व मशीन',
    galleryTitle: 'विश्वकर्मा कैफ़े कार्यस्थल, मशीनें अउर सहयोगी स्टाफ',
    gallerySubtitle: 'सिरदला बाज़ार में साफ़-सुथरा व आधुनिक दुकान। हाई-स्पीड कंप्यूटर, लेज़र प्रिंटर अउर सहयोगी भाई लोग जे हर काम में पूरा मदद करथिन।',
    galleryFilterAll: 'सब फोटो',
    galleryFilterWorkspace: 'कंप्यूटर डेस्क व बैठक',
    galleryFilterEquipment: 'आधुनिक प्रिंटर व मशीन',
    galleryFilterStaff: 'सहयोगी स्टाफ व सेवा काउंटर',
    galleryFilterTech: 'PVC कार्ड्स व BSNL फाइबर',
    galleryBadgeSafe: 'सुरक्षित व सम्मानजनक माहौल',
    galleryBadgePower: 'पावर बैकअप (बिजली कटला पर भी चालू)',
    galleryBadgeSpeed: '100 Mbps BSNL हाई-स्पीड',
    galleryViewEnlarge: 'बड़ा करके देखीं',
    galleryVisitBtn: 'दुकान पर आईब',
    galleryDirectionsBtn: 'गूगल मैप पर रस्ता देखीं',

    paymentTag: 'सुरक्षित डिजिटल भुगतान • UPI पेमेंट',
    paymentTitle: 'ऑनलाइन पैसा भेजीं (7903027843@okbizaxis)',
    paymentSubtitle: 'गूगल पे, फोनपे, पेटीएम या कौनों भी UPI ऐप से फॉर्म फीस, फोटोकॉपी, पैन कार्ड चाहे BSNL बिल के भुगतान करीं।',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe (विश्वकर्मा इंटरनेट कैफ़े)',
    paymentScanTitle: 'QR कोड स्कैन करके तुरंत पैसा भेजीं',
    paymentScanSubtitle: 'Google Pay, PhonePe, Paytm, BHIM या कवनो भी बैंक ऐप से स्कैन करीं',
    paymentAmountLabel: 'पैसा चुनीं (Select Amount)',
    paymentCustomAmount: 'दूसर रकम (Custom Amount)',
    paymentServiceLabel: 'काम के नाम (Purpose)',
    paymentCopyBtn: 'UPI ID कॉपी करीं',
    paymentCopiedBtn: 'कॉपी हो गेलई!',
    paymentPayViaApp: 'UPI ऐप से सीधे खोलीं (1-Click Pay)',
    paymentVerifyTitle: 'भुगतान सत्यापन अउर पक्की डिजिटल रसीद',
    paymentEnterUtr: '12-अंक के UTR / UPI Ref No डालीं',
    paymentVerifyBtn: 'रसीद निकालीं (Verify & Get Receipt)',
    paymentReceiptTitle: 'डिजिटल पेमेंट रसीद',
    paymentDownloadReceipt: 'रसीद डाउनलोड / प्रिंट करीं',
    paymentShareWhatsApp: 'व्हाट्सएप पर पेमेंट के सबूत भेजीं',
    paymentZeroFee: '0% अतिरिक्त चार्ज • 100% सुरक्षित NPCI UPI'
  },
  bho: {
    topBarTiming: 'समय: सबेर 9:00 AM से साँझ 5:00 PM (सोमवार - रविवार)',
    topBarAddress: 'ग्राम व पोस्ट - सिरदला, नवादा (बिहार)',
    openNow: 'दुकान खुलल बा (Open Now)',
    businessTitle: 'विश्वकर्मा इंटरनेट कैफ़े',
    businessSubtitle: 'Vishwakarma Internet Cafe • सिरदला',
    navHome: 'मुख्य पृष्ठ',
    navServices: 'सेवा सब',
    navBsnl: 'BSNL फाइबर',
    navDocs: 'कागजात सूची',
    navContact: 'संपर्क करीं',
    callBtn: 'कॉल करीं',
    whatsappBtn: 'व्हाट्सएप',
    heroBadge: 'सिरदला के नंबर-1 डिजिटल सेवा केंद्र',
    heroHeadingPrefix: 'सिरदला के नंबर-1 डिजिटल अउरी ',
    heroHeadingHighlight: 'ऑनलाइन सर्विस सेन्टर',
    heroSubheading: 'ऑनलाइन फ़ॉर्म, आधार से रूपया निकासी, नया पैन कार्ड, HD प्रिंटिंग अउरी BSNL फाइबर नेट — सब काम एक ही छत के नीचे तुरंत!',
    heroTag1: 'तुरंत अउरी 100% सटीक फॉर्म',
    heroTag2: 'सुरक्षित आधार बैंकिंग',
    heroTag3: '5 मिनट में फोटो प्रिंट',
    heroTag4: 'BSNL FTTH फाइबर कनेक्शन',
    heroCtaCall: '📞 डायरेक्ट कॉल करीं',
    heroCtaWhatsapp: '💬 व्हाट्सएप पर बात करीं',
    heroCtaInquiry: '📋 ऑनलाइन फॉर्म पूछताछ',
    heroRibbonAddress: 'सिरदला मुख्य बाज़ार (नवादा)',
    heroRibbonTiming: 'सबेर 9 AM से साँझ 5 PM तक खुलल',
    heroRibbonSatisfied: '5000+ संतुष्ट स्थानीय ग्राहक',

    servicesTag: 'हमनी के मुख्य सेवाएँ',
    servicesTitle: 'सब ऑनलाइन अउरी डिजिटल काम एक ही जगह',
    servicesSubtitle: 'सरकारी योजना के फॉर्म भरे से लेके आधार बैंकिंग, प्रिंटिंग अउरी BSNL फाइबर इंटरनेट तक।',

    card1Title: 'सरकारी ऑनलाइन सेवाएँ',
    card1Subtitle: 'Government Online Services',
    card1Badge: 'सबसे हिट',
    card1Items: [
      'आय, जाति अउरी निवास प्रमाण पत्र (RTPS)',
      'EWS प्रमाण पत्र व OBC नॉन-क्रीमी लेयर',
      'नया पैन कार्ड (2 घंटा में ईमेल पर E-PAN)',
      'सब सरकारी नौकरी फॉर्म व एडमिट कार्ड',
      'राशन कार्ड आवेदन, सुधार व आयुष्मान कार्ड',
      'पीएम किसान सम्मान निधि KYC व स्टेटस'
    ],

    card2Title: 'बैंकिंग व डिजिटल सेवाएँ',
    card2Subtitle: 'Banking & Digital Services',
    card2Badge: 'तुरंत कैश',
    card2Items: [
      'आधार कार्ड से रूपया निकालीं (AePS - सब बैंक)',
      'बैंक मिनी स्टेटमेंट अउरी बैलेंस चेक',
      'HD कलर फोटो प्रिंटआउट व ज़ेरॉक्स (Xerox)',
      'डॉक्यूमेंट लेमिनेशन व PVC कार्ड प्रिंटिंग',
      'पासपोर्ट साइज़ फोटो (5 मिनट में 6/12/24 गो)',
      'मनी ट्रांसफर (कोनो बैंक में तुरंत ट्रान्सफर)'
    ],

    card3Title: 'BSNL FTTH फाइबर ब्रॉडबैंड',
    card3Subtitle: 'BSNL High-Speed Fiber Internet',
    card3Badge: '100 Mbps स्पीड',
    card3Items: [
      'BSNL नया फाइबर कनेक्शन तुरंत बुक करीं',
      'अल्ट्रा हाई-स्पीड Dual Band Wi-Fi राउटर सेटअप',
      'फाइबर केबल मेंटेनेंस, कटिंग व जॉइंटिंग रिपेयर',
      'मासिक बिल भुगतान व स्पीड अपग्रेड सहायता',
      'अनलिमिटेड कॉलिंग + 100 Mbps तक सुपरफास्ट डेटा',
      'दुकान, स्कूल व घर खातिर विशेष प्लान'
    ],

    cardApplyBtn: 'सेवा खातिर आवेदन करीं',
    timeGuideBadge: '⚡ त्वरित अउरी पारदर्शी काम',
    timeGuideTitle: 'अनुमानित समय समय-सारणी (Quick Processing Time)',
    timeGuideBtn: 'ज़रूरी कागजात देखीं',

    bsnlTag: 'BSNL FTTH फाइबर ब्रॉडबैंड पार्टनर - सिरदला',
    bsnlTitle: 'सिरदला में अपना घर अउरी दुकान पर लगवावीं ',
    bsnlTitleHighlight: 'BSNL सुपरफास्ट फाइबर',
    bsnlDesc: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला के ऑफिशियल BSNL फाइबर सर्विस पार्टनर बा। नया कनेक्शन से लेके फाइबर केबल जॉइंटिंग अउरी तुरंत सर्विस रिपेयर के गारंटी!',
    bsnlFeature1Title: '100 Mbps तक के स्पीड',
    bsnlFeature1Desc: 'बिना कोनो रुकावट के HD वीडियो अउरी डाउनलोडिंग',
    bsnlFeature2Title: 'अनलिमिटेड लोकल व STD कॉल',
    bsnlFeature2Desc: 'लैंडलाइन कनेक्शन के साथ बिल्कुल मुफ्त कॉलिंग',
    bsnlFeature3Title: 'त्वरित इंस्टॉलेशन',
    bsnlFeature3Desc: 'आवेदन करे के 24-48 घंटा में चालू',
    bsnlFeature4Title: 'लोकल सपोर्ट व रिपेयर',
    bsnlFeature4Desc: 'सिरदला क्षेत्र खातिर लोकल मेंटेनेंस टीम',
    bsnlBookBtn: 'नया फाइबर कनेक्शन बुक करीं',
    bsnlHelpline: 'फाइबर हेल्पलाइन',
    bsnlPlanBasic: 'शुरुआती प्लान',
    bsnlSpeed: 'स्पीड',
    bsnlData: 'डेटा',
    bsnlNotice: 'सिरदला बाज़ार अउरी आसपास के गाँव में फाइबर कनेक्शन खातिर आज ही संपर्क करीं।',

    docsTag: 'ज़रूरी कागजात की सूची',
    docsTitle: 'आवश्यक दस्तावेज सूची (Docs Checklist)',
    docsSubtitle: 'दुकान पर आवे से पहिले नीचे देहल सूची के अनुसार अपना ज़रूरी कागजात साथे लावीं।',
    acc1Title: 'आय, जाति व निवास प्रमाण पत्र खातिर दस्तावेज',
    acc1Items: [
      'आवेदक के आधार कार्ड (साफ़ फोटो व पूरा पता)',
      'हाल के खिंचल 1 गो पासपोर्ट साइज़ फोटो',
      'चालू मोबाइल नंबर (OTP सत्यापन खातिर)',
      'पुराना प्रमाण पत्र (यदि रीन्यूअल होवे)'
    ],
    acc1Tip: 'टिप: आधार कार्ड में मोबाइल नंबर लिंक भइला पर काम तेज़ी से होला।',

    acc2Title: 'नया पैन कार्ड बनवावे खातिर दस्तावेज',
    acc2Items: [
      'आधार कार्ड के ओरिजिनल या फोटोकॉपी',
      'आधार में नाम, पिता जी के नाम और जन्म तिथि सही होखे के चाही',
      '2 गो ताज़ा पासपोर्ट साइज रंगीन फोटो',
      'चालू मोबाइल नंबर'
    ],
    acc2Tip: 'अंगूठा या आधार OTP से मात्र 2 घंटा में E-PAN प्राप्त करीं!',

    acc3Title: 'आधार बैंकिंग (AePS) से पैसा निकाले के नियम',
    acc3Items: [
      'खाताधारक के आधार नंबर',
      'आधार से जुड़ल बैंक के नाम',
      'खाताधारक के स्वयं उपस्थित होखल'
    ],
    acc3Tip: 'कैश निकासी पर तुरंत प्रिंटेड रसीद दिहल जाला।',

    acc4Title: 'BSNL फाइबर इंटरनेट नया कनेक्शन खातिर दस्तावेज',
    acc4Items: [
      'आधार कार्ड फोटोकॉपी',
      '1 गो पासपोर्ट साइज़ फोटो',
      'कनेक्शन लगावे के सटीक स्थान (घर/दुकान के पता)',
      'सम्पर्क खातिर चालू मोबाइल नंबर'
    ],
    acc4Tip: 'बुक करे के 24-48 घंटा में सिरदला क्षेत्र में कनेक्शन चालू कर दिहल जाला।',

    shareDocsBtn: 'व्हाट्सएप पर सूची शेयर करीं',

    modalTitle: 'सेवा बुकिंग / ऑनलाइन पूछताछ',
    modalSubtitle: 'अपना आवश्यक सेवा चुनीं, हमनी तुरंत व्हाट्सएप पर संपर्क करब।',
    modalServiceLabel: 'सेवा चुनीं',
    modalNameLabel: 'रउआ पूरा नाम',
    modalNamePlaceholder: 'उदा. राम कुमार',
    modalPhoneLabel: 'मोबाइल नंबर',
    modalPhonePlaceholder: '10 अंक के मोबाइल नंबर',
    modalNotesLabel: 'कुछ विवरण या सवाल (ऐच्छिक)',
    modalNotesPlaceholder: 'अपना जरूरत के बारे में बताईं...',
    modalSubmitBtn: 'व्हाट्सएप पर भेजीं',
    modalSuccessMsg: 'धन्यवाद! व्हाट्सएप पर रीडायरेक्ट कइल जा रहल बा...',

    footerTag: 'सम्पर्क करीं',
    footerHeading: 'विश्वकर्मा इंटरनेट कैफ़े सिरदला',
    footerAddressLabel: 'पूरा पता:',
    footerFullAddress: 'ग्राम व पोस्ट - सिरदला, थाना - सिरदला, जिला - नवादा, बिहार - 805127 (मुख्य बाज़ार, बस स्टैंड के पास)',
    footerPhoneLabel: 'फ़ोन / व्हाट्सएप:',
    footerHoursLabel: 'दुकान के समय:',
    footerHoursValue: 'सबेर 9:00 AM से साँझ 5:00 PM (सातो दिन)',
    footerMapBtn: 'गूगल मैप्स पर रास्ता देखीं',
    footerCopyright: 'सर्वाधिकार सुरक्षित © 2026 विश्वकर्मा इंटरनेट कैफ़े सिरदला (नवादा)।',
    langSelectLabel: 'भाषा चुनीं (Select Language)',

    priceListTag: 'रेट लिस्ट अउरी पारदर्शी दर',
    priceListTitle: 'विश्वकर्मा कैफ़े सेवा रेट सूची (Price List)',
    priceListSubtitle: 'हमरा दुकान पर सब सेवा खातिर 100% साफ़ अउरी वाज़िब रेट बा। कवनो हिडन चार्ज ना लागल।',
    priceSearchPlaceholder: 'सेवा के नाम खोजीं (उदा. ज़ेरॉक्स, लेमिनेशन, पैन कार्ड)...',
    priceTabAll: 'सब रेट',
    priceTabPrint: 'ज़ेरॉक्स अउरी प्रिंटिंग',
    priceTabLamination: 'लेमिनेशन व स्कैन',
    priceTabForms: 'सरकारी फॉर्म व कार्ड',
    priceTabBanking: 'आधार बैंकिंग अउरी अन्य',
    priceColService: 'सेवा के नाम',
    priceColSpec: 'विवरण / क्वालिटी',
    priceColRate: 'रेट (Price Rate)',
    priceColTime: 'समय',
    priceColAction: 'बुक करीं',
    priceGuaranteeNote: '100% पारदर्शी रेट गारंटी — सिरदला बाज़ार में सबसे बढ़िया अउरी साफ़ रेट।',
    priceBookBtn: 'बुक करीं',

    testimonialsTag: 'स्थानीय ग्राहकन के राय • कस्टमर रिव्यु',
    testimonialsTitle: 'सिरदला इलाका के लोगन के मजबूत भरोसा',
    testimonialsSubtitle: 'सिरदला बाज़ार, परना, लौंध, बांधी अउरी पास-पड़ोस के गांव के छात्रन, किसानन अउर व्यापारियन के साफ़ अनुभव।',
    testimonialsFilterAll: 'सभ समीक्षा',
    testimonialsFilterForms: 'सरकारी फॉर्म व बहाली',
    testimonialsFilterBanking: 'AePS आधार निकासी',
    testimonialsFilterBsnl: 'BSNL फाइबर वाई-फाई',
    testimonialsFilterPrint: 'ज़ेरॉक्स व प्लास्टिक कार्ड',
    testimonialsViewCarousel: 'स्लाइडर (Carousel)',
    testimonialsViewGrid: 'ग्रिड (Grid View)',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ स्थानीय संतुष्ट ग्राहक',
    testimonialsVerifiedClient: 'सत्यापित लोकल ग्राहक',
    testimonialsShareFeedbackBtn: 'अपन राय व्हाट्सएप पर भेजीं',
    testimonialsHelpful: 'मददगार',
    testimonialsBookSameBtn: 'ई काम बुक करीं',

    galleryTag: 'सेंटर के झलक • कार्यस्थल व मशीनरी',
    galleryTitle: 'विश्वकर्मा कैफ़े कार्यस्थल, मशीनें अउरी मददगार स्टाफ',
    gallerySubtitle: 'सिरदला बाज़ार में साफ़-सुथरा व आधुनिक दुकान। हाई-स्पीड कंप्यूटर, लेज़र प्रिंटर अउरी सेवाभावी साथी जे हर काम में पूरा सहयोग करेलन।',
    galleryFilterAll: 'सभ फोटो',
    galleryFilterWorkspace: 'कंप्यूटर डेस्क व बैठक',
    galleryFilterEquipment: 'आधुनिक प्रिंटर व मशीन',
    galleryFilterStaff: 'मददगार स्टाफ व सेवा काउंटर',
    galleryFilterTech: 'PVC कार्ड्स व BSNL फाइबर',
    galleryBadgeSafe: 'सुरक्षित व सम्मानजनक माहौल',
    galleryBadgePower: 'पावर बैकअप (बिजली कटला पर भी चालू)',
    galleryBadgeSpeed: '100 Mbps BSNL हाई-स्पीड',
    galleryViewEnlarge: 'बड़ा करके देखीं',
    galleryVisitBtn: 'दुकान पर आईब',
    galleryDirectionsBtn: 'गूगल मैप पर रस्ता देखीं',

    paymentTag: 'सुरक्षित डिजिटल भुगतान • Instant UPI Gateway',
    paymentTitle: 'ऑनलाइन भुगतान करीं (7903027843@okbizaxis)',
    paymentSubtitle: 'गूगल पे, फोनपे, पेटीएम या कवनो भी UPI ऐप से फॉर्म फीस, फोटोकॉपी, पैन कार्ड चाहे BSNL बिल के भुगतान करीं।',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe (विश्वकर्मा इंटरनेट कैफ़े)',
    paymentScanTitle: 'QR कोड स्कैन करके तुरंत भुगतान करीं',
    paymentScanSubtitle: 'Google Pay, PhonePe, Paytm, BHIM या कवनो भी बैंक ऐप से स्कैन करीं',
    paymentAmountLabel: 'पैसा चुनीं (Select Amount)',
    paymentCustomAmount: 'दूसर रकम (Custom Amount)',
    paymentServiceLabel: 'काम के नाम (Purpose)',
    paymentCopyBtn: 'UPI ID कॉपी करीं',
    paymentCopiedBtn: 'कॉपी हो गईल!',
    paymentPayViaApp: 'UPI ऐप से सीधे खोलीं (1-Click Pay)',
    paymentVerifyTitle: 'भुगतान सत्यापन अउरी पक्की डिजिटल रसीद',
    paymentEnterUtr: '12-अंक के UTR / UPI Ref No दर्ज करीं',
    paymentVerifyBtn: 'रसीद जनरेट करीं (Verify & Get Receipt)',
    paymentReceiptTitle: 'डिजिटल पेमेंट रसीद',
    paymentDownloadReceipt: 'रसीद डाउनलोड / प्रिंट करीं',
    paymentShareWhatsApp: 'व्हाट्सएप पर पेमेंट के सबूत भेजीं',
    paymentZeroFee: '0% अतिरिक्त चार्ज • 100% सुरक्षित NPCI UPI'
  },
  hinglish: {
    topBarTiming: 'Timing: 9:00 AM - 5:00 PM (Monday - Sunday)',
    topBarAddress: 'Gram & Post - Sirdala, Nawada (Bihar)',
    openNow: 'Dukaan Khuli Hai (Open Now)',
    businessTitle: 'Vishwakarma Internet Cafe',
    businessSubtitle: 'Vishwakarma Internet Cafe • Sirdala',
    navHome: 'Home',
    navServices: 'Services',
    navBsnl: 'BSNL Fiber',
    navDocs: 'Required Docs',
    navContact: 'Contact Us',
    callBtn: 'Call Karein',
    whatsappBtn: 'WhatsApp',
    heroBadge: 'Sirdala Ka No.1 Digital Center',
    heroHeadingPrefix: 'Sirdala Ka No.1 Digital & ',
    heroHeadingHighlight: 'Online Service Center',
    heroSubheading: 'Online Form, Aadhaar Cash Withdrawal, PAN Card, Photo Printing & BSNL Fiber Broadband — Ek hi jagah fast and 100% accurate work.',
    heroTag1: 'Fast & 100% Accurate Forms',
    heroTag2: 'Secure Aadhaar Banking',
    heroTag3: '5 Mins Photo Print',
    heroTag4: 'BSNL FTTH Fiber Broadband',
    heroCtaCall: '📞 Direct Call Karein',
    heroCtaWhatsapp: '💬 WhatsApp Par Baat Karein',
    heroCtaInquiry: '📋 Online Form Inquiry',
    heroRibbonAddress: 'Sirdala Main Market (Nawada)',
    heroRibbonTiming: 'Morning 9 AM to Evening 5 PM Open',
    heroRibbonSatisfied: '5000+ Happy Local Customers',

    servicesTag: 'HAMARI SERVICES',
    servicesTitle: 'Sabhi Online Aur Digital Work Ek Hi Jagah',
    servicesSubtitle: 'Sarkari online application forms se lekar Aadhaar banking, Xerox printing, aur BSNL high-speed fiber broadband.',

    card1Title: 'Sarkari Online Services',
    card1Subtitle: 'Government Online Services',
    card1Badge: 'Sabse Popular',
    card1Items: [
      'Aaye, Jati & Niwas Certificate (RTPS)',
      'EWS Certificate & OBC Non-Creamy Layer',
      'Naya PAN Card (2 Ghante Me E-PAN Email Par)',
      'Sabhi Govt Job Forms & Admit Cards',
      'Ration Card Apply, Correction & Ayushman Card',
      'PM Kisan Samman Nidhi KYC & Status Check'
    ],

    card2Title: 'Banking & Digital Services',
    card2Subtitle: 'Financial & Printing Hub',
    card2Badge: 'Instant Cash',
    card2Items: [
      'Aadhaar Card Se Paise Nikalein (AePS - Sabhi Bank)',
      'Bank Mini Statement & Balance Inquiry',
      'HD Color Photo Printout & Quality Xerox',
      'Document Lamination & PVC Card Printing',
      'Passport Size Photo (5 mins me 6/12/24 photos)',
      'Money Transfer (Kisi bhi bank me instant IMPS)'
    ],

    card3Title: 'BSNL FTTH Fiber Broadband',
    card3Subtitle: 'High-Speed Fiber Broadband',
    card3Badge: '100 Mbps Speed',
    card3Items: [
      'BSNL Naya Fiber Connection Instant Book Karein',
      'Ultra High-Speed Dual Band Wi-Fi Router Setup',
      'Fiber Cable Splicing, Jointing & Maintenance Repair',
      'Monthly Bill Payment & Speed Upgrade Help',
      'Unlimited Calling + Up to 100 Mbps Fast Data',
      'Shop, School & Home ke liye special plans'
    ],

    cardApplyBtn: 'Service Ke Liye Apply Karein',
    timeGuideBadge: '⚡ FAST & TRANSPARENT PROCESS',
    timeGuideTitle: 'Estimated Processing Time (Quick Guide)',
    timeGuideBtn: 'Zaroori Documents Dekhein',

    bsnlTag: 'BSNL FTTH FIBER BROADBAND PARTNER - SIRDALA',
    bsnlTitle: 'Sirdala Me Apne Ghar Aur Dukaan Par Lagwayein ',
    bsnlTitleHighlight: 'BSNL Superfast Fiber',
    bsnlDesc: 'Vishwakarma Internet Cafe Sirdala ka official BSNL Fiber Service Partner hai. Naya connection setup se lekar cable jointing, router configuration aur local repair ki full guarantee.',
    bsnlFeature1Title: '100 Mbps Tak Ki Speed',
    bsnlFeature1Desc: 'Bina kisi interruption ke HD video streaming & downloading',
    bsnlFeature2Title: 'Unlimited Local & STD Calls',
    bsnlFeature2Desc: 'Landline connection ke saath free voice calling',
    bsnlFeature3Title: 'Fast Installation',
    bsnlFeature3Desc: 'Booking ke 24-48 ghante me active',
    bsnlFeature4Title: 'Local Maintenance Support',
    bsnlFeature4Desc: 'Sirdala area ke liye dedicated technical repair team',
    bsnlBookBtn: 'Naya Fiber Connection Book Karein',
    bsnlHelpline: 'Fiber Helpline',
    bsnlPlanBasic: 'Starting Plan',
    bsnlSpeed: 'Speed',
    bsnlData: 'Data',
    bsnlNotice: 'Sirdala market aur aas-paas ke gaon me fiber internet ke liye aaj hi contact karein.',

    docsTag: 'ZAROORI DOCUMENTS',
    docsTitle: 'Required Documents List',
    docsSubtitle: 'Dukaan par aane se pehle niche diye gaye documents saath le aayein taaki aapka kaam turant ho sake.',
    acc1Title: 'Aaye, Jati & Niwas Certificate Ke Liye Documents',
    acc1Items: [
      'Applicant Aadhaar Card (Clear photo & full address)',
      'Recent 1 passport size photograph',
      'Active mobile number (OTP & SMS ke liye)',
      'Old certificate copy (agar renew karna ho)'
    ],
    acc1Tip: 'Tip: Aadhaar card me mobile number link hone par kaam fast hota hai.',

    acc2Title: 'Naya PAN Card Banwane Ke Liye Documents',
    acc2Items: [
      'Aadhaar Card original ya photocopy',
      'Aadhaar me Name, Father Name & DOB sahi honi chahiye',
      '2 fresh passport size color photos',
      'Active mobile number'
    ],
    acc2Tip: 'Fingerprint ya Aadhaar OTP se sirf 2 ghante me E-PAN paayein!',

    acc3Title: 'Aadhaar Banking (AePS) Se Cash Nikalne Ke Rules',
    acc3Items: [
      'Account holder ka Aadhaar Card number',
      'Aadhaar se linked Bank ka naam',
      'Account holder ki physical presence (thumb verify ke liye)'
    ],
    acc3Tip: 'Cash withdrawal par instant printed receipt di jaati hai.',

    acc4Title: 'BSNL Fiber Internet Connection Ke Documents',
    acc4Items: [
      'Applicant Aadhaar Card photocopy',
      '1 Passport size photo',
      'Installation address (Ghar/Dukaan ka landmark)',
      'Contact active 10-digit mobile number'
    ],
    acc4Tip: 'Book karne ke 24-48 ghante me Sirdala me net start ho jaata hai.',

    shareDocsBtn: 'WhatsApp Par List Share Karein',

    modalTitle: 'Service Booking / Online Inquiry',
    modalSubtitle: 'Apni zaroori service select karein, hum turant WhatsApp par contact karenge.',
    modalServiceLabel: 'Service Select Karein',
    modalNameLabel: 'Aapka Full Name',
    modalNamePlaceholder: 'ex. Ram Kumar',
    modalPhoneLabel: 'Mobile Number',
    modalPhonePlaceholder: '10 digit mobile number',
    modalNotesLabel: 'Details / Questions (Optional)',
    modalNotesPlaceholder: 'Apni requirement batayein...',
    modalSubmitBtn: 'WhatsApp Par Bhejein',
    modalSuccessMsg: 'Thank you! WhatsApp par redirect kiya ja raha hai...',

    footerTag: 'CONTACT US',
    footerHeading: 'Vishwakarma Internet Cafe Sirdala',
    footerAddressLabel: 'Full Address:',
    footerFullAddress: 'Gram & Post - Sirdala, P.S. - Sirdala, Dist - Nawada, Bihar - 805127 (Main Market, Near Bus Stand)',
    footerPhoneLabel: 'Phone / WhatsApp:',
    footerHoursLabel: 'Shop Timings:',
    footerHoursValue: '9:00 AM to 5:00 PM (Open All 7 Days)',
    footerMapBtn: 'Google Maps Par Location Dekhein',
    footerCopyright: 'All Rights Reserved © 2026 Vishwakarma Internet Cafe Sirdala (Nawada).',
    langSelectLabel: 'Language Select Karein',

    priceListTag: 'RATE LIST & TRANSPARENT PRICING',
    priceListTitle: 'Vishwakarma Cafe Service Price List',
    priceListSubtitle: 'Hamare center par sabhi services ke liye 100% clear aur reasonable rates. Zero hidden charges!',
    priceSearchPlaceholder: 'Service name search karein (e.g. Xerox, Lamination, PAN Card, Photo)...',
    priceTabAll: 'All Rates',
    priceTabPrint: 'Xerox & Printing',
    priceTabLamination: 'Lamination & Scan',
    priceTabForms: 'Govt Forms & Cards',
    priceTabBanking: 'Aadhaar Banking & More',
    priceColService: 'Service Name',
    priceColSpec: 'Specification',
    priceColRate: 'Price Rate',
    priceColTime: 'Est. Time',
    priceColAction: 'Book Service',
    priceGuaranteeNote: '100% Transparent Price Guarantee — Sirdala market mein best & honest pricing with bill receipt.',
    priceBookBtn: 'Book Now',

    testimonialsTag: 'LOCAL CLIENT FEEDBACK & REVIEWS',
    testimonialsTitle: 'Sirdala Ke 15,000+ Customers Ka Bharosa',
    testimonialsSubtitle: 'Sirdala market, Parna, Loundh, Bandhi aur aas-paas ke students, farmers aur shopkeepers ke sachhe reviews.',
    testimonialsFilterAll: 'All Reviews',
    testimonialsFilterForms: 'Govt Forms & Jobs',
    testimonialsFilterBanking: 'AePS Aadhaar Cash',
    testimonialsFilterBsnl: 'BSNL Fiber Wi-Fi',
    testimonialsFilterPrint: 'Xerox & Plastic Cards',
    testimonialsViewCarousel: 'Carousel View',
    testimonialsViewGrid: 'Grid View',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ Verified Local Clients',
    testimonialsVerifiedClient: 'Verified Local Client',
    testimonialsShareFeedbackBtn: 'Apna Review WhatsApp Par Bhejein',
    testimonialsHelpful: 'Helpful',
    testimonialsBookSameBtn: 'Yeh Service Book Karein',

    galleryTag: 'CENTER SHOWCASE • WORKSPACE & MACHINES',
    galleryTitle: 'Vishwakarma Cafe Workspace, Machines & Helpful Staff',
    gallerySubtitle: 'Sirdala market mein saaf, comfortable aur modern setup. High-speed computers, digital copiers aur dedicated staff jo aapki har form aur print mein help karte hain.',
    galleryFilterAll: 'All Photos',
    galleryFilterWorkspace: 'Workspace & Computers',
    galleryFilterEquipment: 'Copiers & Printers',
    galleryFilterStaff: 'Helpful Staff & Counter',
    galleryFilterTech: 'PVC Cards & BSNL Fiber',
    galleryBadgeSafe: 'Safe & Respectful Ambience',
    galleryBadgePower: 'UPS Inverter Backup (No Light Cut Issue)',
    galleryBadgeSpeed: '100 Mbps BSNL Fiber Speed',
    galleryViewEnlarge: 'Bada Karke Dekhein',
    galleryVisitBtn: 'Dukaan Par Visit Karein',
    galleryDirectionsBtn: 'Google Maps Par Raasta Dekhein',

    paymentTag: 'SECURE DIGITAL PAYMENT • INSTANT UPI GATEWAY',
    paymentTitle: 'Online Payment Karein (7903027843@okbizaxis)',
    paymentSubtitle: 'Google Pay, PhonePe, Paytm ya kisi bhi UPI app se online form fees, xerox, PAN card ya BSNL bill ka secure payment karein.',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe (Verified Axis Merchant)',
    paymentScanTitle: 'QR Code Scan Karke Turant Pay Karein',
    paymentScanSubtitle: 'Google Pay, PhonePe, Paytm, BHIM ya kisi bhi bank app se scan karein',
    paymentAmountLabel: 'Payment Amount Select Karein',
    paymentCustomAmount: 'Custom Amount (₹)',
    paymentServiceLabel: 'Service / Payment Purpose',
    paymentCopyBtn: 'Copy UPI ID',
    paymentCopiedBtn: 'UPI ID Copied!',
    paymentPayViaApp: 'UPI App Se Direct Kholein (1-Click Pay)',
    paymentVerifyTitle: 'Payment Verification & Pakki Digital Receipt',
    paymentEnterUtr: '12-Digit UTR / UPI Ref No Enter Karein',
    paymentVerifyBtn: 'Verify Karein & Receipt Paayein',
    paymentReceiptTitle: 'Official Digital Payment Receipt',
    paymentDownloadReceipt: 'Receipt Download / Print Karein',
    paymentShareWhatsApp: 'WhatsApp Par Payment Proof Bhejein',
    paymentZeroFee: '0% Extra Charge • 100% Secure NPCI UPI'
  },
  ur: {
    topBarTiming: 'اوقات: صبح 9:00 بجے سے شام 5:00 بجے تک (پیر - اتوار)',
    topBarAddress: 'گرام و پوسٹ - سرڈالہ، نودادہ (بہار)',
    openNow: 'دوکان کھلی ہے (Open Now)',
    businessTitle: 'وشوکرما انٹرنیٹ کیفے',
    businessSubtitle: 'Vishwakarma Internet Cafe • سرڈالہ',
    navHome: 'صفحہ اول',
    navServices: 'خدمات',
    navBsnl: 'BSNL فائبر',
    navDocs: 'ضروری دستاویزات',
    navContact: 'رابطہ کریں',
    callBtn: 'کال کریں',
    whatsappBtn: 'واٹس ایپ',
    heroBadge: 'سرڈالہ کا نمبر 1 ڈیجیٹل سروس سینٹر',
    heroHeadingPrefix: 'سرڈالہ کا نمبر 1 ڈیجیٹل اور ',
    heroHeadingHighlight: 'آن لائن سروس سینٹر',
    heroSubheading: 'آن لائن فارم، آدھار بینکنگ، نیا پین کارڈ، پرنٹنگ اور BSNL فائبر انٹرنیٹ — ایک ہی جگہ فوری اور درست کام۔',
    heroTag1: 'فوری اور 100% درست فارم',
    heroTag2: 'محفوظ آدھار بینکنگ',
    heroTag3: '5 منٹ میں فوٹو پرنٹ',
    heroTag4: 'BSNL FTTH فائبر انٹرنیٹ',
    heroCtaCall: '📞 ڈائریکٹ کال کریں',
    heroCtaWhatsapp: '💬 واٹس ایپ پر بات کریں',
    heroCtaInquiry: '📋 آن لائن فارم انکوائری',
    heroRibbonAddress: 'سرڈالہ مین بازار (نودادہ)',
    heroRibbonTiming: 'صبح 9 بجے سے شام 5 بجے تک کھلا',
    heroRibbonSatisfied: '5000+ مطمئن گاہک',

    servicesTag: 'ہماری اہم خدمات',
    servicesTitle: 'تمام آن لائن اور ڈیجیٹل کام ایک ہی جگہ',
    servicesSubtitle: 'سکاری فارموں سے لے کر بینکنگ، پرنٹنگ اور تیز رفتار انٹرنیٹ تک۔',

    card1Title: 'سرکاری آن لائن خدمات',
    card1Subtitle: 'Government Online Services',
    card1Badge: 'سب سے مقبول',
    card1Items: [
      'آمدنی، ذات اور رہائشی سرٹیفکیٹ (RTPS)',
      'EWS سرٹیفکیٹ اور OBC نان کریمی لیئر',
      'نیا پین کارڈ (2 گھنٹے میں ای-پین)',
      'تمام سرکاری ملازمت کے فارم اور ایڈمٹ کارڈ',
      'راشن کارڈ اور آیوFolder کارڈ',
      'پی ایم کسان سمّان نیدھی KYC'
    ],

    card2Title: 'بینکنگ اور ڈیجیٹل خدمات',
    card2Subtitle: 'Banking & Digital Services',
    card2Badge: 'فوری کیش',
    card2Items: [
      'آدھار کارڈ سے پیسے نکالیں (AePS - تمام بینک)',
      'بینک منی سٹیٹمنٹ اور بیلنس کی جانچ',
      'HD کلر فوٹو پرنٹ اور زیراکس',
      'دستاویزات لیمینیشن اور PVC کارڈ پرنٹ',
      'پاسپورٹ سائز فوٹو (5 منٹ میں)',
      'منی ٹرانسفر (فوری بینک ٹرانسفر)'
    ],

    card3Title: 'BSNL FTTH فائبر براڈبینڈ',
    card3Subtitle: 'BSNL High-Speed Fiber Internet',
    card3Badge: '100 Mbps اسپیڈ',
    card3Items: [
      'BSNL نیا فائبر کنکشن بک کریں',
      'الٹرا ہائی اسپیڈ Wi-Fi راؤٹر سیٹ اپ',
      'فائبر کیبل کی دیکھ بھال اور مرمت',
      'ماہانہ بل کی ادائیگی اور اسپیڈ اپ گریڈ',
      'لامحدود کالنگ + 100 Mbps تک ڈیٹا',
      'دوکان اور گھر کے لیے خصوصی پلانز'
    ],

    cardApplyBtn: 'خدمت کے لیے اپلائی کریں',
    timeGuideBadge: '⚡ فوری اور شفاف طریقہ کار',
    timeGuideTitle: 'تخمینی وقت (Quick Processing Time)',
    timeGuideBtn: 'ضروری دستاویزات دیکھیں',

    bsnlTag: 'BSNL FTTH فائبر براڈبینڈ پارٹنر - سرڈالہ',
    bsnlTitle: 'سرڈالہ میں اپنے گھر اور دوکان پر لگوائیں ',
    bsnlTitleHighlight: 'BSNL سپر فاسٹ فائبر',
    bsnlDesc: 'وشوکرما انٹرنیٹ کیفے سرڈالہ کا باضابطہ BSNL فائبر پارٹنر ہے۔ ہم نیا کنکشن لگانے اور فوری مرمت کی ضمانت دیتے ہیں۔',
    bsnlFeature1Title: '100 Mbps تک اسپیڈ',
    bsnlFeature1Desc: 'بغیر کسی رکاوٹ کے HD ویڈیو اسٹریمنگ',
    bsnlFeature2Title: 'انلمیٹڈ کالنگ',
    bsnlFeature2Desc: 'لینڈ لائن کے ساتھ بالکل مفت کالنگ',
    bsnlFeature3Title: 'فوری انسٹالیشن',
    bsnlFeature3Desc: '24-48 گھنٹے کے اندر فعال',
    bsnlFeature4Title: 'لوکل سپورٹ',
    bsnlFeature4Desc: 'سرڈالہ کے لیے مقامی ٹیکنیکل ٹیم',
    bsnlBookBtn: 'نیا فائبر کنکشن بک کریں',
    bsnlHelpline: 'فائبر ہیلپ لائن',
    bsnlPlanBasic: 'ابتدائی پلان',
    bsnlSpeed: 'اسپیڈ',
    bsnlData: 'ڈیٹا',
    bsnlNotice: 'سرڈالہ اور آس پاس کے علاقوں کے لیے آج ہی رابطہ کریں۔',

    docsTag: 'ضروری دستاویزات',
    docsTitle: 'دستاویزات کی فہرست (Docs Checklist)',
    docsSubtitle: 'دوکان پر آنے سے پہلے درج ذیل دستاویزات ساتھ لائیں۔',
    acc1Title: 'آمدنی، ذات اور رہائشی سرٹیفکیٹ کے لیے',
    acc1Items: [
      'آدھار کارڈ (صاف تصویر اور مکمل پتہ)',
      '1 تازہ پاسپورٹ سائز فوٹو',
      'موبائل نمبر (OTP کے لیے)'
    ],
    acc1Tip: 'ٹپ: آدھار کے ساتھ موبائل نمبر لنک ہونے سے کام جلدی ہوتا ہے۔',

    acc2Title: 'نیا پین کارڈ بنوانے کے لیے',
    acc2Items: [
      'آدھار کارڈ کی کاپی',
      'آدھار میں نام اور تاریخ پیدائش درست ہونی چاہیے',
      '2 تازہ پاسپورٹ فوٹو',
      'موبائل نمبر'
    ],
    acc2Tip: 'فنگر پرنٹ سے صرف 2 گھنٹے میں ای-پین حاصل کریں!',

    acc3Title: 'آدھار بینکنگ (AePS) کے لیے ضروری قواعد',
    acc3Items: [
      'آدھار کارڈ نمبر',
      'بینک کا نام',
      'اکاؤنٹ ہولڈر کی موجودگی (انگوٹھے کے نشان کے لیے)'
    ],
    acc3Tip: 'پیسے نکالنے پر فوری پرنٹ شدہ رسید دی جاتی ہے۔',

    acc4Title: 'BSNL فائبر کنکشن کے لیے دستاویزات',
    acc4Items: [
      'آدھار کارڈ کاپی',
      '1 پاسپورٹ فوٹو',
      'مکمل پتہ',
      'موبائل نمبر'
    ],
    acc4Tip: '24-48 گھنٹے میں کنکشن چالو ہو جاتا ہے۔',

    shareDocsBtn: 'واٹس ایپ پر فہرست شیئر کریں',

    modalTitle: 'سروس بکنگ / آن لائن انکوائری',
    modalSubtitle: 'خدمت کا انتخاب کریں، ہم واٹس ایپ پر رابطہ کریں گے۔',
    modalServiceLabel: 'خدمت منتخب کریں',
    modalNameLabel: 'آپ کا پورا نام',
    modalNamePlaceholder: 'مثلاً رام کمار',
    modalPhoneLabel: 'موبائل نمبر',
    modalPhonePlaceholder: '10 ہندسوں کا موبائل نمبر',
    modalNotesLabel: 'تفصیلات (اختیاری)',
    modalNotesPlaceholder: 'اپنی ضرورت بتائیں...',
    modalSubmitBtn: 'واٹس ایپ پر بھیجیں',
    modalSuccessMsg: 'شکریہ! واٹس ایپ پر ری ڈائریکٹ کیا جا رہا ہے...',

    footerTag: 'رابطہ کریں',
    footerHeading: 'وشوکرما انٹرنیٹ کیفے سرڈالہ',
    footerAddressLabel: 'مکمل پتہ:',
    footerFullAddress: 'گرام و پوسٹ - سرڈالہ، نودادہ، بہار - 805127 (مین بازار، بس اسٹینڈ کے پاس)',
    footerPhoneLabel: 'فون / واٹس ایپ:',
    footerHoursLabel: 'دوکان کے اوقات:',
    footerHoursValue: 'صبح 9:00 بجے سے شام 5:00 بجے تک',
    footerMapBtn: 'گوگل میپس پر راستہ دیکھیں',
    footerCopyright: 'جملہ حقوق محفوظ ہیں © 2026 وشوکرما انٹرنیٹ کیفے سرڈالہ۔',
    langSelectLabel: 'زبان منتخب کریں',

    priceListTag: 'ریٹ لسٹ اور شفاف قیمتیں',
    priceListTitle: 'وشوکرما کیفے سروس ریٹ لسٹ',
    priceListSubtitle: 'تمام خدمات کے لیے 100% واضح، مناسب اور شفاف قیمتیں۔ کوئی چھپا ہوا چارج نہیں!',
    priceSearchPlaceholder: 'سروس کا نام تلاش کریں (مثلاً فوٹو کاپی، لیمینیشن، پین کارڈ)...',
    priceTabAll: 'تمام قیمتیں',
    priceTabPrint: 'فوٹو کاپی اور پرنٹنگ',
    priceTabLamination: 'لیمینیشن اور اسکین',
    priceTabForms: 'سرکاری فارم اور کارڈ',
    priceTabBanking: 'آدھار بینکنگ اور دیگر',
    priceColService: 'خدمت کا نام',
    priceColSpec: 'تفصیل / کوالٹی',
    priceColRate: 'قیمت (Price Rate)',
    priceColTime: 'وقت',
    priceColAction: 'بک کریں',
    priceGuaranteeNote: '100% شفاف قیمت کی ضمانت — سرڈالہ میں بہترین اور ایماندارانہ قیمتیں۔',
    priceBookBtn: 'بک کریں',

    testimonialsTag: 'مقامی صارفین کی آراء • ریویوز',
    testimonialsTitle: 'سرڈالہ کے 15,000+ صارفین کا بھروسہ',
    testimonialsSubtitle: 'سرڈالہ بازار اور قریبی دیہاتوں کے طلباء، کسانوں اور تاجروں کے حقیقی اور شفاف تاثرات۔',
    testimonialsFilterAll: 'تمام جائزے',
    testimonialsFilterForms: 'سرکاری فارم و ملازمت',
    testimonialsFilterBanking: 'آدھار کیش نکالنا',
    testimonialsFilterBsnl: 'BSNL فائبر انٹرنیٹ',
    testimonialsFilterPrint: 'فوٹو کاپی اور پلاسٹک کارڈ',
    testimonialsViewCarousel: 'سلائیڈر (Carousel)',
    testimonialsViewGrid: 'گرڈ (Grid View)',
    testimonialsAvgRating: '4.9 / 5.0',
    testimonialsRatingCount: '250+ مطمئن مقامی صارفین',
    testimonialsVerifiedClient: 'تصدیق شدہ مقامی صارف',
    testimonialsShareFeedbackBtn: 'اپنی رائے واٹس ایپ پر بھیجیں',
    testimonialsHelpful: 'مددگار',
    testimonialsBookSameBtn: 'یہ سروس بک کریں',

    galleryTag: 'مرکز کی جھلکیاں • ورک اسپیس اور آلات',
    galleryTitle: 'وشوکرما کیفے ورک اسپیس، جدید مشینیں اور دوستانہ عملہ',
    gallerySubtitle: 'سرڈالہ بازار میں صاف ستھرا اور جدید ماحول۔ تیز رفتار کمپیوٹرز، ڈیجیٹل پرنٹرز اور مددگار عملہ جو آپ کے ہر کام میں بھرپور تعاون کرتا ہے۔',
    galleryFilterAll: 'تمام تصاویر',
    galleryFilterWorkspace: 'کمپیوٹر ڈیسک اور بیٹھنے کی جگہ',
    galleryFilterEquipment: 'جدید پرنٹرز اور مشینیں',
    galleryFilterStaff: 'مددگار عملہ اور کاؤنٹر',
    galleryFilterTech: 'PVC کارڈز اور BSNL فائبر',
    galleryBadgeSafe: 'محفوظ اور باوقار ماحول',
    galleryBadgePower: 'پاور بیک اپ (بجلی جانے پر بھی کام جاری)',
    galleryBadgeSpeed: '100 Mbps BSNL تیز رفتار',
    galleryViewEnlarge: 'بڑا کر کے دیکھیں',
    galleryVisitBtn: 'دوکان پر تشریف لائیں',
    galleryDirectionsBtn: 'گوگل میپ پر راستہ دیکھیں',

    paymentTag: 'محفوظ ڈیجیٹل ادائیگیاں • فوری UPI گیٹ وے',
    paymentTitle: 'آن لائن ادائیگی کریں (7903027843@okbizaxis)',
    paymentSubtitle: 'گوگل پے، فون پے، پے ٹی ایم یا کسی بھی UPI ایپ کے ذریعے فارم فیس، فوٹو کاپی، پین کارڈ یا BSNL بل کی محفوظ ادائیگی کریں۔',
    paymentUpiId: '7903027843@okbizaxis',
    paymentMerchantName: 'Vishwakarma Internet Cafe (وشوکرما انٹرنیٹ کیفے)',
    paymentScanTitle: 'QR کوڈ اسکین کر کے فوری ادائیگی کریں',
    paymentScanSubtitle: 'Google Pay, PhonePe, Paytm, BHIM یا کسی بھی بینک ایپ سے اسکین کریں',
    paymentAmountLabel: 'رقم منتخب کریں (Select Amount)',
    paymentCustomAmount: 'دیگر رقم (Custom Amount)',
    paymentServiceLabel: 'کام / سروس کا نام (Purpose)',
    paymentCopyBtn: 'UPI ID کاپی کریں',
    paymentCopiedBtn: 'کاپی ہو گئی!',
    paymentPayViaApp: 'UPI ایپ سے براہ راست کھولیں (1-Click Pay)',
    paymentVerifyTitle: 'ادائیگی کی تصدیق اور پکی ڈیجیٹل رسید',
    paymentEnterUtr: '12-ہندسوں کا UTR / UPI Ref No درج کریں',
    paymentVerifyBtn: 'رسید بنائیں (Verify & Get Receipt)',
    paymentReceiptTitle: 'سرکاری ڈیجیٹل رسید',
    paymentDownloadReceipt: 'رسید ڈاؤن لوڈ / پرنٹ کریں',
    paymentShareWhatsApp: 'واٹس ایپ پر رسید اور ثبوت بھیجیں',
    paymentZeroFee: '0% اضافی فیس • 100% محفوظ NPCI UPI'
  }
};

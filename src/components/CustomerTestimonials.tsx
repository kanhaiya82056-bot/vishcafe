import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  ThumbsUp,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal,
  Share2,
  ArrowRight,
  ShieldCheck,
  MessageSquareHeart,
  Calendar
} from 'lucide-react';
import { LanguageKey, TRANSLATIONS } from '../translations';

export interface TestimonialItem {
  id: string;
  nameHi: string;
  nameEn: string;
  roleHi: string;
  roleEn: string;
  villageHi: string;
  villageEn: string;
  serviceHi: string;
  serviceEn: string;
  category: 'forms' | 'banking' | 'bsnl' | 'print';
  rating: number;
  feedbackHi: string;
  feedbackEn: string;
  badgeHi: string;
  badgeEn: string;
  badgeColor: string;
  dateHi: string;
  dateEn: string;
  avatarBg: string;
  avatarInitial: string;
  helpfulCount: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    nameHi: 'राकेश कुमार',
    nameEn: 'Rakesh Kumar',
    roleHi: 'छात्र (BPSC शिक्षक अभ्यर्थी)',
    roleEn: 'Student (BPSC Aspirant)',
    villageHi: 'सिरदला बाज़ार (Sirdala Market)',
    villageEn: 'Sirdala Market, Nawada',
    serviceHi: 'BPSC शिक्षक भर्ती ऑनलाइन फॉर्म',
    serviceEn: 'BPSC Teacher Recruitment Form',
    category: 'forms',
    rating: 5,
    feedbackHi: 'मैंने BPSC शिक्षक बहाली का फॉर्म यहाँ से भरवाया था। फोटो, साइन और सभी डॉक्यूमेंट एकदम सही साइज में बिना किसी त्रुटि के अपलोड हुए और समय पर एडमिट कार्ड आ गया। सर्वर स्लो होने पर भी भैया ने धैर्यपूर्वक फॉर्म फाइनल किया। सिरदला का सबसे भरोसेमंद केंद्र है।',
    feedbackEn: 'I filled my BPSC teacher recruitment form here. Photo, signature, and all documents were compressed and uploaded in exact specifications without any error. Got my admit card smoothly. Highly reliable cyber cafe in Sirdala!',
    badgeHi: '100% सही फॉर्म सबमिशन',
    badgeEn: '100% Accurate Submission',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    dateHi: '3 दिन पहले',
    dateEn: '3 days ago',
    avatarBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white',
    avatarInitial: 'रा',
    helpfulCount: 38
  },
  {
    id: 'test-2',
    nameHi: 'रामेश्वर महतो',
    nameEn: 'Rameshwar Mahto',
    roleHi: 'किसान भाई',
    roleEn: 'Farmer',
    villageHi: 'ग्राम - परना, सिरदला',
    villageEn: 'Parna Village, Sirdala',
    serviceHi: 'PM किसान सम्मान निधि e-KYC & AePS निकासी',
    serviceEn: 'PM Kisan e-KYC & AePS Cash',
    category: 'banking',
    rating: 5,
    feedbackHi: 'बैंक में लंबी लाइन लगाने से छुट्टी मिल गई। यहाँ फिंगरप्रिंट लगाकर पीएम किसान का पैसा तुरंत 2 मिनट में मिल गया और साथ में साफ-सुथरी प्रिंटेड पर्ची भी दी गई। कोई भी फालतू पैसा नहीं काटा गया, बिल्कुल ईमानदार व सच्चा काम है।',
    feedbackEn: 'Saved me from long bank queues. Got my PM Kisan money withdrawn through fingerprint in just 2 minutes with a printed slip. Zero hidden deductions, completely honest service!',
    badgeHi: 'तुरंत कैश व पक्की रसीद',
    badgeEn: 'Instant Cash & Printed Slip',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    dateHi: '5 दिन पहले',
    dateEn: '5 days ago',
    avatarBg: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white',
    avatarInitial: 'रा',
    helpfulCount: 45
  },
  {
    id: 'test-3',
    nameHi: 'अमित वर्णवाल',
    nameEn: 'Amit Barnwal',
    roleHi: 'दुकानदार (किराना एवं जनरल स्टोर)',
    roleEn: 'General Merchant',
    villageHi: 'रजौली रोड, सिरदला',
    villageEn: 'Rajauli Road, Sirdala',
    serviceHi: 'BSNL भारत फाइबर (FTTH) नया कनेक्शन',
    serviceEn: 'BSNL Bharat Fiber 100 Mbps',
    category: 'bsnl',
    rating: 5,
    feedbackHi: 'मेरी दुकान और घर के लिए BSNL फाइबर 100 Mbps का कनेक्शन लगवाया। बुकिंग के मात्र 24 घंटे के अंदर टीम ने आकर पूरा सेटअप कर दिया। अब CCTV कैमरा और ऑनलाइन बिलिंग बिना रुके सुपरफास्ट चल रहे हैं। बहुत बढ़िया सर्विस!',
    feedbackEn: 'Got BSNL 100 Mbps Fiber connection for my shop and home. Within 24 hours of booking, installation was completed. CCTV and online billing run smoothly without buffering now.',
    badgeHi: '24 घंटे में सुपरफास्ट इंस्टॉलेशन',
    badgeEn: '24 Hr Rapid Installation',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    dateHi: '1 हफ्ता पहले',
    dateEn: '1 week ago',
    avatarBg: 'bg-gradient-to-br from-cyan-600 to-blue-700 text-white',
    avatarInitial: 'अ',
    helpfulCount: 29
  },
  {
    id: 'test-4',
    nameHi: 'प्रीति कुमारी',
    nameEn: 'Priti Kumari',
    roleHi: 'छात्रा (स्नातक पार्ट-2)',
    roleEn: 'College Student (BA Part-2)',
    villageHi: 'मेसकौर रोड, सिरदला',
    villageEn: 'Meskaur Road, Sirdala',
    serviceHi: 'तत्काल 2 घंटे में पैन कार्ड & RTPS आय/जाति',
    serviceEn: 'Tatkal 2-Hr PAN & RTPS Cert',
    category: 'forms',
    rating: 5,
    feedbackHi: 'स्कॉलरशिप आवेदन की अंतिम तिथि पास थी और मुझे तुरंत जाति और आय प्रमाण पत्र चाहिए था। विश्वकर्मा कैफ़े पर बायोमेट्रिक से अप्लाई हुआ और 2 घंटे में ई-पैन कार्ड भी बन गया। समय पर छात्रवृत्ति का फॉर्म भरा गया, बहुत धन्यवाद!',
    feedbackEn: 'Needed caste and income certificates urgently for scholarship. Vishwakarma Cafe applied biometrically and I also got my E-PAN in 2 hours. Submitted my scholarship right on time!',
    badgeHi: '2 घंटे में E-PAN कार्ड',
    badgeEn: '2-Hr Fast E-PAN',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    dateHi: '1 हफ्ता पहले',
    dateEn: '1 week ago',
    avatarBg: 'bg-gradient-to-br from-purple-600 to-pink-700 text-white',
    avatarInitial: 'प्री',
    helpfulCount: 33
  },
  {
    id: 'test-5',
    nameHi: 'मोहम्मद इरफ़ान',
    nameEn: 'Md. Irfan',
    roleHi: 'शिक्षक (हाई स्कूल सिरदला)',
    roleEn: 'High School Teacher',
    villageHi: 'बस स्टैंड के पास, सिरदला',
    villageEn: 'Near Bus Stand, Sirdala',
    serviceHi: '500 पेज परीक्षा प्रश्न-पत्र ज़ेरॉक्स व लेमिनेशन',
    serviceEn: '500-Page Exam Xerox & Binding',
    category: 'print',
    rating: 5,
    feedbackHi: 'स्कूल की अर्धवार्षिक परीक्षा के लिए 500 प्रतियों की तत्काल फोटोकॉपी और क्वेश्चन पेपर सेट कराने थे। हाई-स्पीड मशीनों से मात्र 15 मिनट में काम हो गया। लिखावट एकदम गहरी और साफ थी। सिरदला बाज़ार में सबसे किफायती थोक रेट मिला।',
    feedbackEn: 'Needed 500 exam paper copies immediately. Completed in just 15 minutes using high-speed digital copiers. Ultra crisp print quality and the best bulk pricing in town.',
    badgeHi: 'थोक ज़ेरॉक्स व सुपर स्पीड',
    badgeEn: 'Bulk Xerox & Best Rates',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    dateHi: '2 हफ्ते पहले',
    dateEn: '2 weeks ago',
    avatarBg: 'bg-gradient-to-br from-slate-700 to-slate-900 text-white',
    avatarInitial: 'इ',
    helpfulCount: 26
  },
  {
    id: 'test-6',
    nameHi: 'सुनीता देवी',
    nameEn: 'Sunita Devi',
    roleHi: 'गृहिणी',
    roleEn: 'Homemaker',
    villageHi: 'लौंध, सिरदला',
    villageEn: 'Loundh Village, Sirdala',
    serviceHi: 'आयुष्मान भारत कार्ड डाउनलोड व PVC प्लास्टिक कार्ड',
    serviceEn: 'Ayushman Bharat PVC Smart Card',
    category: 'print',
    rating: 5,
    feedbackHi: 'पूरे परिवार के 5 सदस्यों का आयुष्मान कार्ड तुरंत पोर्टल से निकलवाकर मजबूत प्लास्टिक (PVC) कार्ड पर प्रिंट करवा लिया। अब कागज़ भीगने या फटने का कोई डर नहीं है। बहुत ही शिष्टाचार और सम्मानपूर्वक काम करते हैं।',
    feedbackEn: 'Printed waterproof PVC smart cards for all 5 members of my family for Ayushman Bharat. No worries about paper damage now. Very respectful and helpful staff.',
    badgeHi: 'वाटरप्रूफ PVC स्मार्ट कार्ड',
    badgeEn: 'Waterproof Smart PVC Card',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    dateHi: '3 हफ्ते पहले',
    dateEn: '3 weeks ago',
    avatarBg: 'bg-gradient-to-br from-rose-600 to-orange-700 text-white',
    avatarInitial: 'सु',
    helpfulCount: 41
  },
  {
    id: 'test-7',
    nameHi: 'विकास कुमार',
    nameEn: 'Vikas Kumar',
    roleHi: 'रेलवे एवं SSC परीक्षार्थी',
    roleEn: 'SSC & Railway Aspirant',
    villageHi: 'बांधी, सिरदला',
    villageEn: 'Bandhi Village, Sirdala',
    serviceHi: 'रेलवे ALP भर्ती ऑनलाइन आवेदन',
    serviceEn: 'Railway ALP Online Form',
    category: 'forms',
    rating: 5,
    feedbackHi: 'रेलवे फॉर्म में फोटो बैकग्राउंड और सिग्नेचर साइज में थोड़ी भी गलती होने पर फॉर्म रिजेक्ट हो जाता है। यहाँ भैया ने लाइव फोटो खींचकर गाइडलाइंस के अनुसार पूरा फॉर्म भरा और चालान भी तुरंत कट गया। 100% संतुष्टि!',
    feedbackEn: 'Railway recruitment forms get rejected if photo background has issues. They clicked live photo and cropped it strictly to official guidelines. 100% satisfied!',
    badgeHi: 'सटीक फोटो व बिना त्रुटि चालान',
    badgeEn: 'Accurate Photo & Challan',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    dateHi: '1 महीना पहले',
    dateEn: '1 month ago',
    avatarBg: 'bg-gradient-to-br from-teal-600 to-blue-800 text-white',
    avatarInitial: 'वि',
    helpfulCount: 22
  },
  {
    id: 'test-8',
    nameHi: 'दीपक सिंह',
    nameEn: 'Deepak Singh',
    roleHi: 'स्थानीय ठेकेदार व व्यवसायी',
    roleEn: 'Local Contractor & Trader',
    villageHi: 'चौक बाज़ार, सिरदला',
    villageEn: 'Chowk Market, Sirdala',
    serviceHi: 'ज़मीन का नक्शा / डीड HD स्कैन व A3 लेमिनेशन',
    serviceEn: 'Land Map HD Scan & A3 Lamination',
    category: 'print',
    rating: 5,
    feedbackHi: 'हमारे पुराने पुश्तैनी ज़मीन के कागज़ात और नक़्शे खराब हो रहे थे। यहाँ 600 DPI पर HD स्कैन कराकर WhatsApp पर PDF लिया और बड़े A3 साइज में थिक लेमिनेशन करा दिया। अब कागजात सालों साल सुरक्षित रहेंगे।',
    feedbackEn: 'Got my ancestral land maps and deeds scanned at 600 DPI HD PDF and laminated in heavy A3 thick pouch. Highly valuable service for preserving legal documents.',
    badgeHi: 'A3 हैवी प्रोटेक्शन लेमिनेशन',
    badgeEn: 'A3 Heavy Pouch Protection',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    dateHi: '1 महीना पहले',
    dateEn: '1 month ago',
    avatarBg: 'bg-gradient-to-br from-amber-700 to-stone-900 text-white',
    avatarInitial: 'दी',
    helpfulCount: 35
  }
];

interface CustomerTestimonialsProps {
  currentLang: LanguageKey;
  openBookingModal: (serviceName?: string) => void;
  whatsappNumber: string;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  currentLang,
  openBookingModal,
  whatsappNumber,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
  const isEnglish = currentLang === 'en' || currentLang === 'hinglish';

  // Display mode: 'carousel' or 'grid'
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Category filter: 'all', 'forms', 'banking', 'bsnl', 'print'
  const [activeFilter, setActiveFilter] = useState<'all' | 'forms' | 'banking' | 'bsnl' | 'print'>('all');

  // Carousel slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Helpful state tracker (local client interaction)
  const [helpfulLikes, setHelpfulLikes] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    TESTIMONIALS_DATA.forEach((item) => {
      initial[item.id] = { count: item.helpfulCount, liked: false };
    });
    return initial;
  });

  const handleHelpfulClick = (id: string) => {
    setHelpfulLikes((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
    });
  };

  // Filter items
  const filteredList = useMemo(() => {
    if (activeFilter === 'all') return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Handle responsive slides per page (1 on mobile, 2 on tablet, 3 on desktop)
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalPages = Math.ceil(filteredList.length / itemsPerSlide) || 1;

  // Reset slide if currentSlide exceeds bounds
  useEffect(() => {
    if (currentSlide >= totalPages) {
      setCurrentSlide(0);
    }
  }, [totalPages, currentSlide]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel' || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, viewMode, totalPages]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  // Visible items in current carousel page
  const visibleCarouselItems = useMemo(() => {
    const startIndex = currentSlide * itemsPerSlide;
    return filteredList.slice(startIndex, startIndex + itemsPerSlide);
  }, [filteredList, currentSlide, itemsPerSlide]);

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Trust Score Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-xs border border-emerald-200 mb-3.5 shadow-2xs">
              <MessageSquareHeart className="w-4 h-4 text-emerald-600" />
              <span>{t.testimonialsTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {t.testimonialsTitle}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium mt-3 leading-relaxed">
              {t.testimonialsSubtitle}
            </p>
          </div>

          {/* Sirdala Market Trust Rating Badge */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-lg shrink-0 flex items-center gap-5">
            <div className="text-center border-r border-slate-100 pr-5">
              <div className="text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-1">
                <span>{t.testimonialsAvgRating}</span>
              </div>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-400 block mt-1">
                {t.testimonialsRatingCount}
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% कार्य सफलता दर</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>पक्की रसीद व ईमानदार दरें</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>सिरदला बाज़ार का विश्वसनीय नाम</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & View Mode Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => {
                setActiveFilter('all');
                setCurrentSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{t.testimonialsFilterAll}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                {TESTIMONIALS_DATA.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveFilter('forms');
                setCurrentSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFilter === 'forms'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>📄 {t.testimonialsFilterForms}</span>
            </button>

            <button
              onClick={() => {
                setActiveFilter('banking');
                setCurrentSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFilter === 'banking'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>💳 {t.testimonialsFilterBanking}</span>
            </button>

            <button
              onClick={() => {
                setActiveFilter('bsnl');
                setCurrentSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFilter === 'bsnl'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>📶 {t.testimonialsFilterBsnl}</span>
            </button>

            <button
              onClick={() => {
                setActiveFilter('print');
                setCurrentSlide(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFilter === 'print'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>🖨️ {t.testimonialsFilterPrint}</span>
            </button>
          </div>

          {/* View Mode Toggle (Carousel vs Grid) & Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-white text-slate-900 shadow-2xs font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title={t.testimonialsViewCarousel}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.testimonialsViewCarousel}</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-2xs font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title={t.testimonialsViewGrid}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.testimonialsViewGrid}</span>
              </button>
            </div>

            {/* Previous & Next buttons for carousel mode */}
            {viewMode === 'carousel' && totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-2xs active:scale-95"
                  aria-label="Previous Reviews"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-2xs active:scale-95"
                  aria-label="Next Reviews"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* TESTIMONIALS DISPLAY: CAROUSEL OR GRID */}
        {viewMode === 'carousel' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCarouselItems.map((item) => {
                const name = isEnglish ? item.nameEn : item.nameHi;
                const role = isEnglish ? item.roleEn : item.roleHi;
                const village = isEnglish ? item.villageEn : item.villageHi;
                const service = isEnglish ? item.serviceEn : item.serviceHi;
                const feedback = isEnglish ? item.feedbackEn : item.feedbackHi;
                const badge = isEnglish ? item.badgeEn : item.badgeHi;
                const date = isEnglish ? item.dateEn : item.dateHi;
                const helpfulState = helpfulLikes[item.id] || { count: item.helpfulCount, liked: false };

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Decorative accent quote mark */}
                    <div className="absolute top-4 right-6 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                      <Quote className="w-14 h-14 rotate-180 opacity-80" />
                    </div>

                    <div>
                      {/* Rating & Service Tag */}
                      <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${item.badgeColor} shadow-2xs`}>
                          {badge}
                        </span>
                      </div>

                      {/* Service Name Label */}
                      <div className="mb-3 relative z-10">
                        <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block">
                          सेवा: {service}
                        </span>
                      </div>

                      {/* Feedback Quote */}
                      <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6 relative z-10">
                        "{feedback}"
                      </p>
                    </div>

                    {/* Reviewer Details Footer */}
                    <div className="pt-4 border-t border-slate-100 relative z-10">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-2xl ${item.avatarBg} flex items-center justify-center font-black text-sm shrink-0 shadow-sm`}>
                            {item.avatarInitial}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                                {name}
                              </h4>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" title={t.testimonialsVerifiedClient} />
                            </div>
                            <span className="text-xs text-slate-500 font-medium block">
                              {role}
                            </span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="text-right">
                          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{date}</span>
                          </span>
                        </div>
                      </div>

                      {/* Village/Location & Helpful Button */}
                      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-50">
                        <span className="flex items-center gap-1 font-semibold text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span className="truncate max-w-[160px]">{village}</span>
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleHelpfulClick(item.id)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                              helpfulState.liked
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                            }`}
                            title="Helpful feedback"
                          >
                            <ThumbsUp className={`w-3 h-3 ${helpfulState.liked ? 'fill-blue-600 text-blue-600' : ''}`} />
                            <span>{helpfulState.count}</span>
                          </button>

                          <button
                            onClick={() => openBookingModal(service)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                            title={t.testimonialsBookSameBtn}
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === i ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide page ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* CSS GRID VIEW (All Reviews in Responsive 3-Column Grid) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((item) => {
              const name = isEnglish ? item.nameEn : item.nameHi;
              const role = isEnglish ? item.roleEn : item.roleHi;
              const village = isEnglish ? item.villageEn : item.villageHi;
              const service = isEnglish ? item.serviceEn : item.serviceHi;
              const feedback = isEnglish ? item.feedbackEn : item.feedbackHi;
              const badge = isEnglish ? item.badgeEn : item.badgeHi;
              const date = isEnglish ? item.dateEn : item.dateHi;
              const helpfulState = helpfulLikes[item.id] || { count: item.helpfulCount, liked: false };

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-6 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                    <Quote className="w-14 h-14 rotate-180 opacity-80" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${item.badgeColor} shadow-2xs`}>
                        {badge}
                      </span>
                    </div>

                    <div className="mb-3 relative z-10">
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block">
                        सेवा: {service}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6 relative z-10">
                      "{feedback}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl ${item.avatarBg} flex items-center justify-center font-black text-sm shrink-0 shadow-sm`}>
                          {item.avatarInitial}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                              {name}
                            </h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" title={t.testimonialsVerifiedClient} />
                          </div>
                          <span className="text-xs text-slate-500 font-medium block">
                            {role}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{date}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-50">
                      <span className="flex items-center gap-1 font-semibold text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate max-w-[160px]">{village}</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleHelpfulClick(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                            helpfulState.liked
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <ThumbsUp className={`w-3 h-3 ${helpfulState.liked ? 'fill-blue-600 text-blue-600' : ''}`} />
                          <span>{helpfulState.count}</span>
                        </button>

                        <button
                          onClick={() => openBookingModal(service)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                          title={t.testimonialsBookSameBtn}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM CTA: Share Review & Sirdala Local Trust Ribbon */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-blue-800/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0 border border-emerald-500/30 mx-auto sm:mx-0">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base sm:text-lg">
                क्या आपने भी विश्वकर्मा कैफ़े से सेवा ली है?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                अपनी बहुमूल्य राय या समीक्षा सीधे व्हाट्सएप पर साझा करें। हम आपके अनुभव का स्वागत करते हैं!
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('नमस्ते विश्वकर्मा कैफ़े, मैं अपनी ग्राहक समीक्षा (Feedback) देना चाहता हूँ:')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all active:scale-95 text-center shrink-0 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>{t.testimonialsShareFeedbackBtn}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

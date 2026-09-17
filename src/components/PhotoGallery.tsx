import React, { useState, useMemo, useEffect } from 'react';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Wifi,
  MapPin,
  CheckCircle2,
  Info,
  PhoneCall,
  Sparkles,
  Printer,
  Users,
  Monitor,
  CreditCard,
  Share2
} from 'lucide-react';
import { LanguageKey, TRANSLATIONS } from '../translations';

// Import generated local images
import workspaceImg from '../assets/images/cafe_workspace_1789627893833.jpg';
import equipmentImg from '../assets/images/cafe_equipment_1789627911858.jpg';
import staffImg from '../assets/images/cafe_staff_1789627929402.jpg';
import customerDeskImg from '../assets/images/cafe_customer_desk_1789627946573.jpg';
import cardPrintingImg from '../assets/images/cafe_card_printing_1789627962707.jpg';
import bsnlSetupImg from '../assets/images/cafe_bsnl_setup_1789627979182.jpg';

export interface GalleryPhotoItem {
  id: string;
  imageSrc: string;
  category: 'workspace' | 'equipment' | 'staff' | 'tech';
  titleHi: string;
  titleEn: string;
  captionHi: string;
  captionEn: string;
  badgeHi: string;
  badgeEn: string;
  badgeColor: string;
  specListHi: string[];
  specListEn: string[];
  relatedService: string;
}

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'photo-1',
    imageSrc: workspaceImg,
    category: 'workspace',
    titleHi: 'आधुनिक कंप्यूटर वर्कस्टेशन व स्वच्छ बैठक व्यवस्था',
    titleEn: 'Modern Computer Workstations & Clean Seating',
    captionHi: 'सिरदला बाज़ार में हाई-स्पीड इंटरनेट युक्त कंप्यूटर डेस्क जहाँ छात्र व नागरिक आसानी से ऑनलाइन फॉर्म, परीक्षा परिणाम और आवश्यक आवेदन कर सकते हैं।',
    captionEn: 'Ergonomic, clean computer desks with high-speed internet where students and citizens can fill exam forms, view results, and browse government portals.',
    badgeHi: 'स्वच्छ व वातानुकूलित बैठक',
    badgeEn: 'Clean & Comfortable Space',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    specListHi: ['हाई-स्पीड LED मॉनिटर', 'आरामदायक चेयर बैठक', 'UPS इन्वर्टर बैकअप सिस्टम'],
    specListEn: ['High-speed LED Monitors', 'Ergonomic Client Seating', 'UPS Inverter Power Backup'],
    relatedService: 'इंटरनेट सर्फिंग व ऑनलाइन फॉर्म'
  },
  {
    id: 'photo-2',
    imageSrc: equipmentImg,
    category: 'equipment',
    titleHi: 'हैवी-ड्यूटी डिजिटल फोटोकॉपियर व थर्मल लेमिनेशन',
    titleEn: 'Heavy-Duty Digital Copiers & Thermal Lamination',
    captionHi: 'कैनन और एचपी के हाई-स्पीड डिजिटल कॉपियर्स से त्वरित व गहरा ब्लैक/व्हाइट ज़ेरॉक्स, 600 DPI एचडी कलर प्रिंटिंग और 125 माइक्रोन थिक लेमिनेशन।',
    captionEn: 'Industrial-grade Canon & HP digital copiers delivering ultra-sharp black & white photocopies, 600 DPI photo prints, and 125-micron heavy lamination.',
    badgeHi: '600 DPI क्रिस्प डिजिटल प्रिंटिंग',
    badgeEn: '600 DPI Crisp Digital Output',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    specListHi: ['प्रति मिनट 45+ पेज क्षमता', 'A4 / Legal / A3 साइज सपोर्ट', '125 माइक्रोन पाउच प्रोटेक्शन'],
    specListEn: ['45+ Pages/min Speed', 'A4 / Legal / A3 Size Support', '125 Micron Pouch Protection'],
    relatedService: 'ज़ेरॉक्स, प्रिंटिंग व लेमिनेशन'
  },
  {
    id: 'photo-3',
    imageSrc: staffImg,
    category: 'staff',
    titleHi: 'अनुभवी, विनम्र व कुशल तकनीकी संचालक',
    titleEn: 'Friendly, Certified & Courteous Operator',
    captionHi: 'हमारे संचालक सरकारी व प्रतियोगी परीक्षाओं के नियमों से भलीभांति परिचित हैं। फोटो, हस्ताक्षर और डाक्यूमेंट्स को बिना त्रुटि सटीक अपलोड कराते हैं।',
    captionEn: 'Our experienced operator is well-versed with official recruitment guidelines, ensuring exact document compression, spelling checks, and error-free submission.',
    badgeHi: '100% त्रुटिहीन फॉर्म सबमिशन',
    badgeEn: '100% Error-Free Assistance',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    specListHi: ['दस्तावेज़ रीसाइज़िंग विशेषज्ञ', 'विनम्र व धैर्यवान परामर्श', 'तुरंत पक्की रसीद व प्रिंट'],
    specListEn: ['Document Compression Pro', 'Patient & Polite Guidance', 'Instant Printed Receipt'],
    relatedService: 'सरकारी भर्ती व ऑनलाइन आवेदन'
  },
  {
    id: 'photo-4',
    imageSrc: customerDeskImg,
    category: 'staff',
    titleHi: 'ग्राहक सेवा काउंटर व आधार AePS बैंकिंग सहायता',
    titleEn: 'Customer Service Counter & AePS Cash Desk',
    captionHi: 'बायोमेट्रिक फिंगरप्रिंट स्कैनर द्वारा आधार कार्ड से तुरंत सुरक्षित नकद निकासी, पीएम किसान e-KYC और सरकारी योजनाओं का पारदर्शी लाभ।',
    captionEn: 'Secure biometric Aadhaar Enabled Payment System (AePS) cash withdrawals, PM Kisan e-KYC, and transparent government scheme assistance with zero waiting.',
    badgeHi: 'सुरक्षित बायोमेट्रिक बैंकिंग',
    badgeEn: 'Secure Biometric Cash Desk',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    specListHi: ['तत्काल फिंगरप्रिंट कैश', 'निःशुल्क बैलेंस चेक पर्ची', 'बिना बैंक लाइन लगाए सेवा'],
    specListEn: ['Instant Fingerprint Cash', 'Free Balance Slip', 'No Bank Queues Required'],
    relatedService: 'आधार AePS नकद निकासी'
  },
  {
    id: 'photo-5',
    imageSrc: cardPrintingImg,
    category: 'tech',
    titleHi: 'वाटरप्रूफ PVC प्लास्टिक स्मार्ट कार्ड प्रिंटिंग मशीन',
    titleEn: 'Waterproof PVC Plastic Smart Card Printing',
    captionHi: 'आधार कार्ड, पैन कार्ड, आयुष्मान गोल्डन कार्ड और वोटर आईडी का ओरिजिनल जैसा मजबूत प्लास्टिक स्मार्ट कार्ड। न पानी से खराब होगा, न फटेगा।',
    captionEn: 'Thermal PVC plastic card printer producing durable, water-resistant, pocket-sized smart cards for Aadhaar, PAN, Ayushman Bharat, and Voter IDs.',
    badgeHi: 'आजीवन टिकाऊ व वाटरप्रूफ',
    badgeEn: 'Durable & Pocket-Friendly',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    specListHi: ['हाई-ग्लॉस लेमिनेशन लेयर', 'स्कैन होने योग्य QR कोड', 'मूल कार्ड जैसी मोटाई'],
    specListEn: ['High-Gloss Protective Layer', 'Scannable Official QR Codes', 'Standard Heavy Thickness'],
    relatedService: 'PVC प्लास्टिक स्मार्ट कार्ड'
  },
  {
    id: 'photo-6',
    imageSrc: bsnlSetupImg,
    category: 'tech',
    titleHi: 'BSNL भारत फाइबर 100 Mbps ब्रॉडबैंड नेटवर्क',
    titleEn: 'BSNL Bharat Fiber 100 Mbps High-Speed Wi-Fi',
    captionHi: 'विश्वकर्मा कैफ़े BSNL का अधिकृत पार्टनर है। हमारे सेंटर पर 100 Mbps हाई-स्पीड फाइबर इंटरनेट लगा है, जिससे बड़े सरकारी फॉर्म बिना सर्वर एरर तुरंत जमा होते हैं।',
    captionEn: 'Vishwakarma Cafe is an authorized BSNL partner. Our center operates on uninterrupted 100 Mbps Fiber with dual-band Wi-Fi, preventing server timeout errors.',
    badgeHi: '100 Mbps अनइंटरप्टेड स्पीड',
    badgeEn: 'Zero Server Timeout Lag',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    specListHi: ['अधिकृत BSNL बुकिंग केंद्र', 'डुअल-बैंड 5GHz वाई-फाई', '24 घंटे में नया फाइबर कनेक्शन'],
    specListEn: ['Authorized BSNL Partner', 'Dual-Band 5GHz Wi-Fi', '24-Hour Home Installation'],
    relatedService: 'BSNL भारत फाइबर कनेक्शन'
  }
];

interface PhotoGalleryProps {
  currentLang: LanguageKey;
  openBookingModal: (serviceName?: string) => void;
  whatsappNumber: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  currentLang,
  openBookingModal,
  whatsappNumber
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
  const isEnglish = currentLang === 'en' || currentLang === 'hinglish';

  const [activeTab, setActiveTab] = useState<'all' | 'workspace' | 'equipment' | 'staff' | 'tech'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    if (activeTab === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === activeTab);
  }, [activeTab]);

  // Lightbox navigation
  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : (prev as number) - 1));
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev as number) + 1) % filteredPhotos.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 font-extrabold text-xs border border-blue-500/30 mb-3.5 shadow-2xs">
              <Camera className="w-4 h-4 text-cyan-400" />
              <span>{t.galleryTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t.galleryTitle}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-medium mt-3 leading-relaxed">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Quick Center Trust Highlight Box */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/80 shadow-lg shrink-0 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl shrink-0 border border-blue-500/30">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  लोकेशन (Address)
                </span>
                <span className="text-sm font-extrabold text-white block">
                  राजीव गांधी सेवा केंद्र के पास, सिरदला बाज़ार
                </span>
                <span className="text-xs text-cyan-300 font-medium">
                  नवादा (बिहार) • 805127
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Sirdala,Nawada,Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-sm shrink-0 flex items-center gap-1.5"
            >
              <span>{t.galleryDirectionsBtn}</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <span>{t.galleryFilterAll}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 text-white">
              {GALLERY_PHOTOS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('workspace')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'workspace'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.galleryFilterWorkspace}</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'equipment'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.galleryFilterEquipment}</span>
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'staff'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{t.galleryFilterStaff}</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'tech'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>{t.galleryFilterTech}</span>
          </button>
        </div>

        {/* PHOTO GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const title = isEnglish ? photo.titleEn : photo.titleHi;
            const caption = isEnglish ? photo.captionEn : photo.captionHi;
            const badge = isEnglish ? photo.badgeEn : photo.badgeHi;
            const specs = isEnglish ? photo.specListEn : photo.specListHi;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="bg-slate-800/90 rounded-3xl border border-slate-700/80 overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Zoom overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={photo.imageSrc}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shadow-md backdrop-blur-xs ${photo.badgeColor}`}>
                      {badge}
                    </span>
                  </div>

                  {/* Hover Enlarge Hint Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 font-extrabold text-xs flex items-center gap-2 shadow-lg backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span>{t.galleryViewEnlarge}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4 line-clamp-3">
                      {caption}
                    </p>
                  </div>

                  {/* Key Specifications / Highlights Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-700/80 text-slate-300 text-[11px] font-semibold flex items-center gap-1 border border-slate-600/50"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">
                        सेवा: <span className="text-cyan-300 font-bold">{photo.relatedService}</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openBookingModal(photo.relatedService);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-[11px] transition-colors"
                      >
                        {t.priceBookBtn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Pillars of Center Trust (Safe, Power, Speed, Transparent) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg shrink-0">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">24×7 पावर बैकअप</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                हैवी इन्वर्टर व UPS सिस्टम; बिजली जाने पर भी फॉर्म और प्रिंटिंग नहीं रुकती।
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">पारिवारिक व सुरक्षित</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                छात्राओं, महिलाओं व बुजुर्गों के लिए पूर्णतः आदरपूर्ण व साफ-सुथरा माहौल।
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg shrink-0">
              <Wifi className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">100 Mbps BSNL फाइबर</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                सुपरफास्ट ब्राडबैंड कनेक्टिविटी; हैवी फाइल्स व एडमिट कार्ड तुरंत डाउनलोड।
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg shrink-0">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white">पक्की रसीद व बिल</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                हर आवेदन व सरकारी सेवा पूर्ण होने पर बाकायदा मुद्रित पर्ची प्रदान की जाती है।
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM VISIT CALLOUT BANNER */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/60 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-2xl shrink-0 border border-cyan-500/30 mx-auto sm:mx-0">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base sm:text-lg">
                सिरदला बाज़ार में आज ही पधारें!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                राजीव गांधी सेवा केंद्र के निकट, सिरदला (नवादा) • सुबह 9:00 AM से शाम 5:00 PM तक खुला।
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:9122345678"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all border border-slate-600 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>कॉल करें</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('नमस्ते विश्वकर्मा कैफ़े, मैं आपके सिरदला केंद्र पर आना चाहता हूँ:')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>व्हाट्सएप पर लोकेशन लें</span>
            </a>
          </div>
        </div>

      </div>

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${currentPhoto.badgeColor}`}>
                  {isEnglish ? currentPhoto.badgeEn : currentPhoto.badgeHi}
                </span>
                <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                  {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Image & Nav Buttons */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden max-h-[55vh]">
              <img
                src={currentPhoto.imageSrc}
                alt={isEnglish ? currentPhoto.titleEn : currentPhoto.titleHi}
                referrerPolicy="no-referrer"
                className="max-h-[55vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg active:scale-95"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-all shadow-lg active:scale-95"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black text-white">
                  {isEnglish ? currentPhoto.titleEn : currentPhoto.titleHi}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {isEnglish ? currentPhoto.captionEn : currentPhoto.captionHi}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-stretch sm:self-auto">
                <button
                  onClick={() => {
                    const service = currentPhoto.relatedService;
                    setSelectedPhotoIndex(null);
                    openBookingModal(service);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-colors"
                >
                  {t.priceBookBtn}
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`नमस्ते, मुझे आपकी गैलरी तस्वीर "${isEnglish ? currentPhoto.titleEn : currentPhoto.titleHi}" और सेवा "${currentPhoto.relatedService}" के बारे में जानना है:`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>पूछताछ करें</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

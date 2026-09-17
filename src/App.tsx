import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Zap,
  Wifi,
  FileText,
  CreditCard,
  Printer,
  Sparkles,
  Search,
  Send,
  ExternalLink,
  Award,
  Users,
  Copy,
  Check,
  AlertCircle,
  Globe,
  Languages,
  ChevronRight
} from 'lucide-react';
import { LANGUAGES, TRANSLATIONS, LanguageKey } from './translations';
import { PriceListTable } from './components/PriceListTable';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { PhotoGallery } from './components/PhotoGallery';
import { UpiPaymentGateway } from './components/UpiPaymentGateway';
import { CscServicesList } from './components/CscServicesList';
import { CscAiChatbot } from './components/CscAiChatbot';

export default function App() {
  // Language State
  const [currentLang, setCurrentLang] = useState<LanguageKey>('hi');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // AI Chatbot State
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatPreloadQuery, setAiChatPreloadQuery] = useState<string | undefined>(undefined);

  const handleOpenAiChat = (query?: string) => {
    setAiChatPreloadQuery(query);
    setAiChatOpen(true);
  };

  // Payment Gateway Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentDefaultAmount, setPaymentDefaultAmount] = useState<number>(50);
  const [paymentDefaultService, setPaymentDefaultService] = useState<string>('');

  // Form State
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNotes, setUserNotes] = useState('');

  const phoneNumber = '+917903027843';
  const formattedPhone = '+91 79030 27843';
  const whatsappNumber = '917903027843';
  const upiId = '7903027843@okbizaxis';

  // Load language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('v_cafe_lang') as LanguageKey;
    if (saved && TRANSLATIONS[saved]) {
      setCurrentLang(saved);
    }
  }, []);

  const changeLanguage = (lang: LanguageKey) => {
    setCurrentLang(lang);
    localStorage.setItem('v_cafe_lang', lang);
    setLangDropdownOpen(false);
    
    // Update document title and lang attribute
    document.documentElement.lang = lang;
    if (lang === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
  const isRtl = currentLang === 'ur';

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(formattedPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const openBookingModal = (serviceName?: string) => {
    setSelectedService(serviceName || t.card1Title);
    setBookingModalOpen(true);
    setFormSubmitted(false);
  };

  const openPaymentModal = (amount?: number, service?: string) => {
    if (amount) setPaymentDefaultAmount(amount);
    if (service) setPaymentDefaultService(service);
    setPaymentModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    // Send via WhatsApp
    const message = `*${encodeURIComponent(t.modalTitle)} - ${encodeURIComponent(t.businessTitle)}*%0A%0A*Name:* ${encodeURIComponent(userName)}%0A*Phone:* ${encodeURIComponent(userPhone)}%0A*Service:* ${encodeURIComponent(selectedService)}%0A*Notes:* ${encodeURIComponent(userNotes || 'No notes')}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setUserName('');
      setUserPhone('');
      setUserNotes('');
      setFormSubmitted(false);
    }, 1500);
  };

  const services = [
    {
      id: 'govt-services',
      title: t.card1Title,
      subtitle: t.card1Subtitle,
      badge: t.card1Badge,
      iconClass: 'fa-solid fa-landmark text-blue-600',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100 text-blue-700',
      items: t.card1Items
    },
    {
      id: 'banking-digital',
      title: t.card2Title,
      subtitle: t.card2Subtitle,
      badge: t.card2Badge,
      iconClass: 'fa-solid fa-wallet text-emerald-600',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-700',
      items: t.card2Items
    },
    {
      id: 'bsnl-fiber',
      title: t.card3Title,
      subtitle: t.card3Subtitle,
      badge: t.card3Badge,
      iconClass: 'fa-solid fa-wifi text-cyan-600',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-200',
      iconBg: 'bg-cyan-100 text-cyan-700',
      items: t.card3Items
    }
  ];

  const accordions = [
    {
      title: t.acc1Title,
      icon: 'fa-regular fa-file-lines',
      content: t.acc1Items,
      tip: t.acc1Tip
    },
    {
      title: t.acc2Title,
      icon: 'fa-regular fa-address-card',
      content: t.acc2Items,
      tip: t.acc2Tip
    },
    {
      title: t.acc3Title,
      icon: 'fa-solid fa-fingerprint',
      content: t.acc3Items,
      tip: t.acc3Tip
    },
    {
      title: t.acc4Title,
      icon: 'fa-solid fa-network-wired',
      content: t.acc4Items,
      tip: t.acc4Tip
    }
  ];

  const pricingGuides = [
    { name: t.card1Title, time: currentLang === 'en' ? '5-10 Days' : '5 - 10 कार्य दिवस', icon: 'fa-file-invoice' },
    { name: t.card1Items[2], time: currentLang === 'en' ? '2 Hours (Instant)' : '2 घंटे में ईमेल पर', icon: 'fa-id-card' },
    { name: t.card2Items[0], time: currentLang === 'en' ? 'Instant (1 Min)' : 'तुरंत (1 मिनट)', icon: 'fa-money-bill-wave' },
    { name: t.card3Title, time: currentLang === 'en' ? '24-48 Hours' : '24-48 घंटे में एक्टिव', icon: 'fa-wifi' },
    { name: t.card2Items[2], time: currentLang === 'en' ? 'Hand-to-Hand' : 'तुरंत हाथों-हाथ', icon: 'fa-print' }
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 ${isRtl ? 'rtl' : 'ltr'}`}>
      
      {/* 1. TOP ANNOUNCEMENT BAR & LANGUAGE SWITCHER */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{t.topBarTiming}</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>{t.topBarAddress}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-700/50 font-medium text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.openNow}
            </span>

            {/* MULTI-LANGUAGE SELECTOR DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-slate-700 transition-colors shadow-sm"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{LANGUAGES.find(l => l.code === currentLang)?.nativeName}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className={`absolute ${isRtl ? 'left-0' : 'right-0'} top-full mt-1.5 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn`}>
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                    <span>{t.langSelectLabel}</span>
                    <Languages className="w-3 h-3 text-cyan-400" />
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${
                        currentLang === lang.code
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </span>
                      {currentLang === lang.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* QUICK LANGUAGE PILLS BAR (For Super Easy 1-Tap Switching) */}
      <div className="bg-slate-800 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-700 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 whitespace-nowrap">
          <span className="text-slate-400 font-bold hidden sm:inline-flex items-center gap-1">
            <Languages className="w-3 h-3 text-cyan-400" /> Language:
          </span>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`px-2.5 py-0.5 rounded-md font-bold transition-all text-xs ${
                currentLang === lang.code
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              <span className="mr-1">{lang.flag}</span>
              <span>{lang.nativeName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. STICKY NAVBAR WITH GRAPHICAL DESIGN */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Graphical Brand Logo + Business Emblem */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="relative">
                {/* Glowing ring animation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 p-1 shadow-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-inner">
                    <i className="fa-solid fa-laptop-code text-xl text-white drop-shadow-md"></i>
                  </div>
                </div>
                {/* Live Online Dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {t.businessTitle}
                  </span>
                  <span className="hidden sm:inline-flex bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                    DIGITAL
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-500 tracking-wide flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  <span>{t.businessSubtitle}</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Rich Graphic Tabs */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              
              <a 
                href="#home" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-house"></i>
                </span>
                <span>{t.navHome}</span>
              </a>

              <a 
                href="#services" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100 relative"
              >
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <span>{t.navServices}</span>
                <span className="bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-widest shadow-xs">
                  HOT
                </span>
              </a>

              <a 
                href="#csc-services" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-amber-900 bg-amber-50/90 hover:bg-amber-100 font-bold text-sm transition-all border border-amber-200/80 shadow-2xs relative"
              >
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs shadow-xs group-hover:scale-105 transition-transform">
                  🏛️
                </span>
                <span>CSC सेवाएं (30+)</span>
                <span className="bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-widest shadow-xs">
                  NEW
                </span>
              </a>

              <button
                type="button"
                onClick={() => handleOpenAiChat()}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-900 bg-gradient-to-r from-amber-300 via-orange-200 to-amber-300 hover:from-amber-400 hover:to-orange-300 font-extrabold text-sm transition-all border border-amber-400/80 shadow-xs cursor-pointer active:scale-95"
              >
                <span className="w-7 h-7 rounded-lg bg-slate-950 text-amber-400 flex items-center justify-center text-xs shadow-xs group-hover:scale-110 transition-transform">
                  🤖
                </span>
                <span>CSC AI सहायक</span>
                <span className="bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-widest shadow-xs">
                  24/7
                </span>
              </button>

              <a 
                href="#price-list" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 font-bold text-sm transition-all border border-emerald-200/80 shadow-2xs"
              >
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs group-hover:scale-105 transition-transform">
                  <i className="fa-solid fa-[#]">₹</i>
                </span>
                <span>रेट लिस्ट (Prices)</span>
              </a>

              <a 
                href="#bsnl-fiber" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-cyan-950 bg-cyan-50/90 hover:bg-cyan-100/90 font-bold text-sm transition-all border border-cyan-200 shadow-2xs relative"
              >
                <span className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-xs shadow-xs group-hover:scale-110 transition-transform">
                  <Wifi className="w-4 h-4" />
                </span>
                <span>{t.navBsnl}</span>
                <span className="bg-cyan-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  100 Mbps
                </span>
              </a>

              <a 
                href="#quick-docs" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-file-shield"></i>
                </span>
                <span>{t.navDocs}</span>
              </a>

              <a 
                href="#payment" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-qrcode"></i>
                </span>
                <span>पेमेंट (UPI)</span>
              </a>

              <a 
                href="#gallery" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-camera"></i>
                </span>
                <span>तस्वीरें (Gallery)</span>
              </a>

              <a 
                href="#testimonials" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>रिव्यु (Reviews)</span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-1.5 py-0.2 rounded-full flex items-center gap-0.5 border border-amber-200">
                  ★ 4.9
                </span>
              </a>

              <a 
                href="#contact" 
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 font-bold text-sm transition-all border border-transparent hover:border-blue-100"
              >
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center text-xs transition-colors shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span>{t.navContact}</span>
              </a>

            </nav>

            {/* Right Desktop CTA Action Buttons with Graphical Badges */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => openPaymentModal()}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all border border-slate-700"
                title="UPI ऑनलाइन भुगतान करें (7903027843@okbizaxis)"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-[10px]">
                  ₹
                </div>
                <span>UPI Pay</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Instant
                </span>
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.modalSubtitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 transition-all border border-emerald-400/30"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </div>
                <span>{t.whatsappBtn}</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-95 transition-all border border-blue-400/30"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{t.callBtn}</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2.5 rounded-2xl bg-slate-100 text-slate-800 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 focus:outline-none transition-all shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-blue-600" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* SUB-NAVBAR QUICK GRAPHICAL CATEGORY LAUNCHER (Horizontal Scroll Chips) */}
        <div className="bg-slate-900 border-t border-slate-800 text-slate-200 py-2 px-4 overflow-x-auto shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-bold whitespace-nowrap">
            
            <span className="text-slate-400 flex items-center gap-1.5 shrink-0 pr-2 border-r border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span className="hidden sm:inline">त्वरित सेवाएँ:</span>
            </span>

            <a
              href="#csc-services"
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 transition-all shadow-md shrink-0"
            >
              <span>🏛️</span>
              <span>CSC डिजिटल सेवा केंद्र (30+ सेवाएं)</span>
              <span className="bg-slate-950 text-amber-300 text-[9px] px-1.5 py-0.2 rounded font-bold">
                LIST
              </span>
            </a>

            <button
              onClick={() => handleOpenAiChat()}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>🤖</span>
              <span>CSC AI सहायक से पूछें</span>
              <span className="bg-slate-950 text-amber-300 text-[9px] px-1.5 py-0.2 rounded font-bold">
                LIVE
              </span>
            </button>

            <button
              onClick={() => openBookingModal(t.card1Title)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-200 border border-slate-700/80 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-landmark"></i>
              </span>
              <span>{t.card1Title}</span>
            </button>

            <button
              onClick={() => openBookingModal(t.card2Items[0])}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-200 border border-slate-700/80 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-fingerprint"></i>
              </span>
              <span>आधार कैश निकासी</span>
            </button>

            <button
              onClick={() => openBookingModal(t.card1Items[2])}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-200 border border-slate-700/80 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-id-card"></i>
              </span>
              <span>नया पैन कार्ड (E-PAN)</span>
            </button>

            <button
              onClick={() => openBookingModal(t.card2Items[2])}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-purple-600 hover:text-white text-slate-200 border border-slate-700/80 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-print"></i>
              </span>
              <span>फोटो व ज़ेरॉक्स प्रिंट</span>
            </button>

            <a
              href="#bsnl-fiber"
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-900 to-slate-800 hover:from-cyan-600 hover:to-blue-600 text-cyan-200 hover:text-white border border-cyan-700/60 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-cyan-500 text-slate-950 flex items-center justify-center text-[10px] font-black">
                <Wifi className="w-3 h-3" />
              </span>
              <span>BSNL FTTH 100 Mbps</span>
            </a>

            <a
              href="#quick-docs"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-2 transition-all shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-slate-700 text-slate-300 flex items-center justify-center text-[10px]">
                <i className="fa-regular fa-folder-open"></i>
              </span>
              <span>कागजात चैकलिस्ट</span>
            </a>

            <a
              href="#payment"
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-900/90 to-teal-900/90 hover:from-emerald-600 hover:to-teal-600 text-emerald-200 hover:text-white border border-emerald-500/40 flex items-center gap-2 transition-all shadow-xs shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-black">
                ₹
              </span>
              <span>UPI पेमेंट (7903027843@okbizaxis)</span>
            </a>

            <a
              href="#gallery"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-indigo-300 border border-indigo-500/30 flex items-center gap-2 transition-all shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-camera"></i>
              </span>
              <span>फ़ोटो गैलरी व सेटअप</span>
            </a>

            <a
              href="#testimonials"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-600 hover:text-white text-amber-300 border border-amber-500/30 flex items-center gap-2 transition-all shrink-0"
            >
              <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-star"></i>
              </span>
              <span>ग्राहक रिव्यू (★ 4.9)</span>
            </a>

          </div>
        </div>

        {/* Graphical Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 text-slate-100 border-b-4 border-blue-600 shadow-2xl px-4 pt-4 pb-8 animate-fadeIn">
            
            {/* Header Status Card inside Menu */}
            <div className="bg-gradient-to-r from-slate-800 to-blue-950 p-4 rounded-2xl border border-slate-700 mb-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                  {t.businessTitle}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {t.topBarTiming}
                </span>
              </div>
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                OPEN
              </span>
            </div>

            {/* Language Selection Grid inside mobile menu */}
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/80 mb-4">
              <div className="text-xs font-bold text-slate-300 mb-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.langSelectLabel}</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold text-center border transition-all flex flex-col items-center gap-0.5 ${
                      currentLang === lang.code
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-[11px]">{lang.nativeName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Graphical Navigation Grid Items */}
            <nav className="grid grid-cols-1 gap-2.5">
              
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-base">
                    <i className="fa-solid fa-house"></i>
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold">{t.navHome}</span>
                    <span className="text-[11px] text-slate-400 font-normal">विश्वकर्मा इंटरनेट कैफ़े होम</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-base">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold">{t.navServices}</span>
                    <span className="text-[11px] text-slate-400 font-normal">ऑनलाइन फॉर्म, AePS, प्रिंटिंग</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href="#csc-services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/90 to-slate-900 border border-amber-500/60 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
                    🏛️
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold">CSC डिजिटल सेवा केंद्र (30+ सेवाएं)</span>
                      <span className="bg-amber-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded font-black">
                        ALL
                      </span>
                    </div>
                    <span className="text-[11px] text-amber-300 font-normal">राशन कार्ड, दाखिल-खारिज, ई-श्रम, पेंशन, इंश्योरेंस</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenAiChat();
                }}
                className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-slate-900 border border-amber-400/90 text-white font-bold flex items-center justify-between group transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 flex items-center justify-center text-lg shadow-md">
                    🤖
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-amber-300">CSC AI सहायक (चैटबॉट)</span>
                      <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-black">
                        24x7
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-300 font-normal">राशन कार्ड, दाखिल-खारिज व योजनाओं की AI जानकारी</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </button>

              <a
                href="#price-list"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-700/60 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base font-black">
                    ₹
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold">दर सूची (Price List)</span>
                      <span className="bg-emerald-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded-full font-black">
                        100% साफ़ रेट
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-300 font-normal">ज़ेरॉक्स, लेमिनेशन, फ़ॉर्म, AePS बैंकिंग रेट</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-emerald-400" />
              </a>

              <a
                href="#bsnl-fiber"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950 to-slate-900 border border-cyan-700/60 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-base">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold">{t.navBsnl}</span>
                      <span className="bg-cyan-500 text-slate-950 text-[10px] px-2 py-0.2 rounded-full font-black">
                        100 Mbps
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-300 font-normal">नया कनेक्शन व केबल रिपेयर</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </a>

              <a
                href="#quick-docs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base">
                    <i className="fa-solid fa-file-shield"></i>
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold">{t.navDocs}</span>
                    <span className="text-[11px] text-slate-400 font-normal">आय/जाति/निवास व पैन कार्ड कागजात</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href="#payment"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-slate-900 border border-emerald-500/40 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-base font-black">
                    ₹
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-sm font-extrabold">ऑनलाइन पेमेंट (UPI Payment)</span>
                      <span className="bg-emerald-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded font-black">
                        0% Fee
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-300/80 font-mono font-medium">7903027843@okbizaxis</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/30 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-base">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold">फ़ोटो गैलरी (Photo Gallery)</span>
                    <span className="text-[11px] text-indigo-300/80 font-normal">कार्यस्थल, आधुनिक मशीनें व सहयोगी स्टाफ</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/80 to-slate-900 border border-amber-500/30 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-base">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-sm font-extrabold">ग्राहक समीक्षाएँ (Reviews)</span>
                      <span className="bg-amber-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded-full font-black">
                        ★ 4.9
                      </span>
                    </div>
                    <span className="text-[11px] text-amber-300/80 font-normal">सिरदला क्षेत्र के 250+ स्थानीय ग्राहकों की राय</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-base">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold">{t.navContact}</span>
                    <span className="text-[11px] text-slate-400 font-normal">सिरदला मुख्य बाज़ार पता व मैप</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-red-400 transition-colors" />
              </a>

            </nav>

            {/* Mobile Call & WhatsApp Graphical Action Grid */}
            <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-800">
              <a
                href={`tel:${phoneNumber}`}
                className="py-3.5 px-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callBtn}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.modalSubtitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>{t.whatsappBtn}</span>
              </a>
            </div>

          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">

        {/* 3. HERO SECTION (Mobile Optimized Banner) */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white py-16 lg:py-24">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
          
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-bold text-cyan-200 tracking-wide">
                  {t.heroBadge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-6">
                {t.heroHeadingPrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200">
                  {t.heroHeadingHighlight}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
                {t.heroSubheading}
              </p>

              {/* Key Highlights Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs sm:text-sm font-semibold">
                <span className="bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.heroTag1}
                </span>
                <span className="bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  {t.heroTag2}
                </span>
                <span className="bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-slate-200">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {t.heroTag3}
                </span>
                <span className="bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-slate-200">
                  <Wifi className="w-4 h-4 text-sky-400" />
                  {t.heroTag4}
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <Phone className="w-5 h-5 text-blue-100 group-hover:rotate-12 transition-transform" />
                  <span>{t.heroCtaCall}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.modalSubtitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
                  <span>{t.heroCtaWhatsapp}</span>
                </a>

                <button
                  onClick={() => openBookingModal()}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-slate-200 hover:bg-slate-800 font-bold text-base transition-all active:scale-95"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{t.heroCtaInquiry}</span>
                </button>
              </div>

              {/* Quick Contact Ribbon */}
              <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>{t.heroRibbonAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{t.heroRibbonTiming}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>{t.heroRibbonSatisfied}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100/80 px-3.5 py-1 rounded-full">
                {t.servicesTag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
                {t.servicesTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium">
                {t.servicesSubtitle}
              </p>
            </div>

            {/* Grid Layout (1 col mobile, 3 col desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-3xl p-7 border ${service.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient}`}></div>

                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                        <i className={`${service.iconClass} text-2xl`}></i>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
                      {service.subtitle}
                    </p>

                    <ul className="space-y-3.5 mb-8">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => openBookingModal(service.title)}
                      type="button"
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-blue-600 transition-colors shadow-sm active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>{t.cardApplyBtn}</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-200 flex items-center justify-center"
                      title="WhatsApp Inquiry"
                    >
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Price List Table Component */}
            <PriceListTable
              currentLang={currentLang}
              openBookingModal={openBookingModal}
              whatsappNumber={whatsappNumber}
              onPayOnline={openPaymentModal}
            />

            {/* Quick Time Guide Banner */}
            <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                      {t.timeGuideBadge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      {t.timeGuideTitle}
                    </h3>
                  </div>
                  <a
                    href="#quick-docs"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-sm hover:bg-cyan-300 transition-colors shrink-0"
                  >
                    <span>{t.timeGuideBtn}</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {pricingGuides.map((guide, idx) => (
                    <div key={idx} className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                          <i className={`fa-solid ${guide.icon}`}></i>
                        </div>
                        <span className="text-xs font-bold text-slate-200 line-clamp-2">
                          {guide.name}
                        </span>
                      </div>
                      <div className="text-xs font-extrabold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-800/40 text-center">
                        ⏳ {guide.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CSC DIGITAL SEVA KENDRA - COMPREHENSIVE SERVICES DIRECTORY */}
        <section id="csc-services" className="py-16 bg-slate-50 border-t border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CscServicesList
              currentLang={currentLang}
              openBookingModal={openBookingModal}
              whatsappNumber={whatsappNumber}
              onPayOnline={openPaymentModal}
              onOpenAiChat={handleOpenAiChat}
            />
          </div>
        </section>

        {/* BSNL FIBER SECTION */}
        <section id="bsnl-fiber" className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs">
                  <Wifi className="w-4 h-4 text-cyan-600" />
                  <span>{t.bsnlTag}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {t.bsnlTitle}
                  <span className="text-cyan-600">{t.bsnlTitleHighlight}</span>
                </h2>

                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {t.bsnlDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0 font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.bsnlFeature1Title}</h4>
                      <p className="text-xs text-slate-500">{t.bsnlFeature1Desc}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.bsnlFeature2Title}</h4>
                      <p className="text-xs text-slate-500">{t.bsnlFeature2Desc}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.bsnlFeature3Title}</h4>
                      <p className="text-xs text-slate-500">{t.bsnlFeature3Desc}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                      <i className="fa-solid fa-tools"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.bsnlFeature4Title}</h4>
                      <p className="text-xs text-slate-500">{t.bsnlFeature4Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => openBookingModal(t.card3Title)}
                    type="button"
                    className="px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
                  >
                    <Wifi className="w-4 h-4" />
                    <span>{t.bsnlBookBtn}</span>
                  </button>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{t.bsnlHelpline}: {formattedPhone}</span>
                  </a>
                </div>
              </div>

              {/* Decorative Visual Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-cyan-800/40">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center text-xl font-black">
                        BSNL
                      </div>
                      <div>
                        <h4 className="font-black text-white text-base">Bharat Fiber (FTTH)</h4>
                        <p className="text-xs text-cyan-300">Sirdala Nawada Network</p>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold border border-emerald-500/30">
                      Active
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700/80 flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-300">{t.bsnlPlanBasic}</span>
                      <span className="text-lg font-black text-cyan-400">₹399 / Mo</span>
                    </div>
                    <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700/80 flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-300">{t.bsnlSpeed}</span>
                      <span className="text-base font-extrabold text-white">Up to 100 Mbps</span>
                    </div>
                    <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700/80 flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-300">{t.bsnlData}</span>
                      <span className="text-base font-extrabold text-emerald-400">Unlimited</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-700/50 text-xs text-cyan-200 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{t.bsnlNotice}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. UPI PAYMENT GATEWAY (Instant QR, Any App, 0% Fee) */}
        <section id="payment" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <UpiPaymentGateway
              currentLang={currentLang}
              whatsappNumber={whatsappNumber}
              defaultAmount={50}
            />
          </div>
        </section>

        {/* 6. QUICK DOCS GUIDE (Mobile Friendly Accordion) */}
        <section id="quick-docs" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 px-3.5 py-1 rounded-full">
                {t.docsTag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3 tracking-tight">
                {t.docsTitle}
              </h2>
              <p className="text-slate-600 text-base">
                {t.docsSubtitle}
              </p>
            </div>

            <div className="space-y-4">
              {accordions.map((acc, index) => {
                const isOpen = activeAccordion === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      type="button"
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-blue-600'} flex items-center justify-center shrink-0 transition-colors`}>
                          <i className={`${acc.icon} text-lg`}></i>
                        </div>
                        <span className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                          {acc.title}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                        <ul className="space-y-2.5 mb-4 mt-2">
                          {acc.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                          <i className="fa-solid fa-lightbulb text-amber-600 text-sm"></i>
                          <span>{acc.tip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.docsTitle + ' - WhatsApp Request')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-sm hover:bg-emerald-700 transition-all active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>{t.shareDocsBtn}</span>
              </a>
            </div>

          </div>
        </section>

        {/* 6. PHOTO GALLERY (WORKSPACE, EQUIPMENT & FRIENDLY STAFF) */}
        <PhotoGallery
          currentLang={currentLang}
          openBookingModal={openBookingModal}
          whatsappNumber={whatsappNumber}
        />

        {/* 7. CUSTOMER TESTIMONIALS & LOCAL REVIEWS */}
        <CustomerTestimonials
          currentLang={currentLang}
          openBookingModal={openBookingModal}
          whatsappNumber={whatsappNumber}
        />

        {/* 8. FOOTER & CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                    {t.footerTag}
                  </span>
                  <h2 className="text-3xl font-black text-white mt-3 mb-2">
                    {t.footerHeading}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t.businessSubtitle}
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                    <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-0.5">{t.footerAddressLabel}</strong>
                      <span className="text-slate-300 leading-snug">{t.footerFullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                      <div>
                        <strong className="block text-white mb-0.5">{t.footerPhoneLabel}</strong>
                        <span className="text-slate-300">{formattedPhone}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      type="button"
                      className="p-2 rounded-lg bg-slate-700 text-slate-200 hover:text-white hover:bg-slate-600 transition-colors"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white mb-0.5">{t.footerHoursLabel}</strong>
                      <span className="text-slate-300">{t.footerHoursValue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t.callBtn}</span>
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>{t.whatsappBtn}</span>
                  </a>
                </div>
              </div>

              {/* Google Map Embed Placeholder */}
              <div className="lg:col-span-7">
                <div className="bg-slate-800 rounded-3xl p-3 border border-slate-700 shadow-2xl h-full flex flex-col">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/80 mb-2">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span>गूगल मैप लोकेशन (Sirdala, Nawada)</span>
                    </span>
                    <a
                      href="https://maps.google.com/?q=Sirdala,Nawada,Bihar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                    >
                      <span>{t.footerMapBtn}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="relative flex-1 min-h-[300px] rounded-2xl overflow-hidden bg-slate-950">
                    <iframe
                      title="Vishwakarma Internet Cafe Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14502.584119932147!2d85.4500!3d24.6200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3798a3f5a0001%3A0x123456789abcdef!2sSirdala%2C%20Bihar%20805127!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 filter opacity-90 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>{t.footerCopyright}</p>
              <div className="flex items-center gap-4">
                <a href="#home" className="hover:text-cyan-400 transition-colors">{t.navHome}</a>
                <span>•</span>
                <a href="#services" className="hover:text-cyan-400 transition-colors">{t.navServices}</a>
                <span>•</span>
                <a href="#price-list" className="hover:text-cyan-400 transition-colors">रेट लिस्ट (Prices)</a>
                <span>•</span>
                <a href="#payment" className="hover:text-cyan-400 transition-colors">ऑनलाइन पेमेंट (UPI)</a>
                <span>•</span>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">फ़ोटो गैलरी (Gallery)</a>
                <span>•</span>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">ग्राहक समीक्षाएँ (★ 4.9)</a>
                <span>•</span>
                <a href="#bsnl-fiber" className="hover:text-cyan-400 transition-colors">{t.navBsnl}</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 5. FLOATING MOBILE BUTTONS (Fixed at Bottom) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between pointer-events-none md:hidden">
        
        {/* Direct Call Button (Bottom Left) */}
        <a
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-blue-600 text-white font-extrabold text-xs shadow-xl shadow-blue-600/40 border border-blue-400/30 hover:bg-blue-700 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{t.callBtn}</span>
        </a>

        {/* UPI Pay Floating Button (Middle) */}
        <button
          type="button"
          onClick={() => openPaymentModal()}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-slate-900 text-white font-extrabold text-xs shadow-xl shadow-slate-950/60 border border-slate-700 hover:bg-slate-800 active:scale-95 transition-all"
        >
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-[9px]">
            ₹
          </span>
          <span>UPI Pay</span>
        </button>

        {/* Floating WhatsApp Button (Bottom Right) */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.modalSubtitle)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white font-extrabold text-xs shadow-xl shadow-emerald-600/40 border border-emerald-400/30 hover:bg-emerald-700 active:scale-95 transition-all"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>{t.whatsappBtn}</span>
        </a>

      </div>

      {/* ONLINE BOOKING / INQUIRY MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {t.businessTitle}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                {t.modalTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t.modalSubtitle}
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{t.modalSuccessMsg}</h4>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.modalServiceLabel}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {selectedService && (
                      <option value={selectedService}>{selectedService}</option>
                    )}
                    <optgroup label="CSC डिजिटल सेवा केंद्र">
                      <option value="नया राशन कार्ड (CSC Ration Card)">नया राशन कार्ड (CSC Ration Card)</option>
                      <option value="दाखिल खारिज व लगान रसीद (Bihar Bhumi)">दाखिल खारिज व लगान रसीद (Bihar Bhumi)</option>
                      <option value="ई-श्रम कार्ड पंजीकरण व सुधार">ई-श्रम कार्ड पंजीकरण व सुधार</option>
                      <option value="आयुष्मान भारत कार्ड (5 लाख मुफ़्त इलाज)">आयुष्मान भारत कार्ड (5 लाख मुफ़्त इलाज)</option>
                      <option value="वृद्धा / विधवा / दिव्यांग पेंशन (SSPMIS)">वृद्धा / विधवा / दिव्यांग पेंशन (SSPMIS)</option>
                      <option value="IRCTC ट्रेन टिकट बुकिंग (तत्काल व सामान्य)">IRCTC ट्रेन टिकट बुकिंग (तत्काल व सामान्य)</option>
                      <option value="गाड़ी व बाइक बीमा (Motor Insurance)">गाड़ी व बाइक बीमा (Motor Insurance)</option>
                      <option value="सारथी ड्राइविंग लाइसेंस (Sarathi DL)">सारथी ड्राइविंग लाइसेंस (Sarathi DL)</option>
                      <option value="टेली-लॉ (Tele-Law फ्री कानूनी सलाह)">टेली-लॉ (Tele-Law फ्री कानूनी सलाह)</option>
                      <option value="बिजली बिल भुगतान (SBPDCL)">बिजली बिल भुगतान (SBPDCL)</option>
                    </optgroup>
                    <optgroup label="ऑनलाइन फॉर्म व सेवाएं">
                      <option value="आय, जाति, निवास प्रमाण पत्र (RTPS)">आय, जाति, निवास प्रमाण पत्र (RTPS)</option>
                      <option value="नया पैन कार्ड (NSDL / UTI PAN)">नया पैन कार्ड (NSDL / UTI PAN)</option>
                      <option value="आधार से कैश निकासी (AePS Banking)">आधार से कैश निकासी (AePS Banking)</option>
                      <option value="BSNL FTTH हाई स्पीड फाइबर">BSNL FTTH हाई स्पीड फाइबर</option>
                      <option value="ज़ेरॉक्स व लेमिनेशन प्रिंटिंग">ज़ेरॉक्स व लेमिनेशन प्रिंटिंग</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.modalNameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={t.modalNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.modalPhoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.modalPhonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.modalNotesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder={t.modalNotesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 flex items-center justify-center gap-2 mt-2"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{t.modalSubmitBtn}</span>
                </button>

                <div className="relative my-3 flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-slate-400 text-xs font-bold uppercase tracking-wider">या (Or)</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setBookingModalOpen(false);
                    openPaymentModal(50, selectedService);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 border border-slate-700"
                >
                  <i className="fa-solid fa-qrcode text-emerald-400 text-sm"></i>
                  <span>सीधे UPI से फीस भुगतान करें (7903027843@okbizaxis)</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* UPI PAYMENT GATEWAY POPUP MODAL */}
      {paymentModalOpen && (
        <UpiPaymentGateway
          currentLang={currentLang}
          whatsappNumber={whatsappNumber}
          isModal={true}
          onClose={() => setPaymentModalOpen(false)}
          defaultAmount={paymentDefaultAmount}
          defaultService={paymentDefaultService}
        />
      )}

      {/* CSC AI CHATBOT (Floating & External triggerable) */}
      <CscAiChatbot
        openBookingModal={openBookingModal}
        whatsappNumber={whatsappNumber}
        isOpenExternal={aiChatOpen}
        onCloseExternal={() => {
          setAiChatOpen(false);
          setAiChatPreloadQuery(undefined);
        }}
        preloadQuery={aiChatPreloadQuery}
      />

    </div>
  );
}

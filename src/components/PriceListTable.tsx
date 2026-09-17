import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Tag, X, Clock, HelpCircle } from 'lucide-react';
import { LanguageKey, TRANSLATIONS } from '../translations';

export interface PriceItem {
  id: string;
  category: 'printing' | 'lamination' | 'forms' | 'banking' | 'csc';
  icon: string;
  iconBg: string;
  titleHi: string;
  titleEn: string;
  specHi: string;
  specEn: string;
  priceRateHi: string;
  priceRateEn: string;
  estTimeHi: string;
  estTimeEn: string;
  badge?: string;
  badgeColor?: string;
  popular?: boolean;
}

export const PRICE_LIST_ITEMS: PriceItem[] = [
  // 1. PRINTING & XEROX
  {
    id: 'xerox-bw-single',
    category: 'printing',
    icon: 'fa-solid fa-print',
    iconBg: 'bg-blue-100 text-blue-600',
    titleHi: 'A4 ब्लैक एंड व्हाइट ज़ेरॉक्स (Single Side)',
    titleEn: 'A4 B&W Xerox (Single Side)',
    specHi: 'A4 सादा पेपर (75 GSM Standard Paper)',
    specEn: 'A4 Plain Paper (75 GSM Standard Paper)',
    priceRateHi: '₹2.00 - ₹3.00 / पेज',
    priceRateEn: '₹2.00 - ₹3.00 / page',
    estTimeHi: '1 मिनट',
    estTimeEn: '1 Min',
    badge: 'बेसिक दर',
    badgeColor: 'bg-slate-100 text-slate-700'
  },
  {
    id: 'xerox-bw-double',
    category: 'printing',
    icon: 'fa-solid fa-copy',
    iconBg: 'bg-indigo-100 text-indigo-600',
    titleHi: 'A4 ब्लैक एंड व्हाइट ज़ेरॉक्स (Both Sides)',
    titleEn: 'A4 B&W Xerox (Double Sided)',
    specHi: 'A4 दोनों तरफ प्रिंट (Back-to-Back High Speed)',
    specEn: 'A4 Double Sided Print (Back-to-Back)',
    priceRateHi: '₹4.00 - ₹5.00 / पेज',
    priceRateEn: '₹4.00 - ₹5.00 / page',
    estTimeHi: '1 मिनट',
    estTimeEn: '1 Min',
    popular: true
  },
  {
    id: 'print-color-plain',
    category: 'printing',
    icon: 'fa-solid fa-file-image',
    iconBg: 'bg-emerald-100 text-emerald-600',
    titleHi: 'A4 HD कलर प्रिंट आउट (Plain Paper)',
    titleEn: 'A4 HD Color Print (Plain Paper)',
    specHi: '80 GSM ब्राइट व्हाइट फोटो क्वालिटी पेपर',
    specEn: '80 GSM Bright White Photo Quality Paper',
    priceRateHi: '₹10.00 / पेज',
    priceRateEn: '₹10.00 / page',
    estTimeHi: '1 मिनट',
    estTimeEn: '1 Min'
  },
  {
    id: 'print-color-glossy',
    category: 'printing',
    icon: 'fa-solid fa-image',
    iconBg: 'bg-purple-100 text-purple-600',
    titleHi: 'A4 प्रीमियम फोटो प्रिंट (Glossy Paper)',
    titleEn: 'A4 Premium Photo Print (Glossy Paper)',
    specHi: '180-210 GSM ग्लॉसी फोटो पेपर',
    specEn: '180-210 GSM Glossy Photo Paper',
    priceRateHi: '₹20.00 - ₹30.00 / फोटो',
    priceRateEn: '₹20.00 - ₹30.00 / photo',
    estTimeHi: '2 मिनट',
    estTimeEn: '2 Mins'
  },
  {
    id: 'passport-photo-6',
    category: 'printing',
    icon: 'fa-solid fa-id-badge',
    iconBg: 'bg-amber-100 text-amber-600',
    titleHi: 'पासपोर्ट साइज़ फोटो (6 प्रति सेट)',
    titleEn: 'Passport Size Photo (6 Copies Set)',
    specHi: 'HD डिजिटल कैमरे से क्लिक व ग्लॉसी प्रिंट',
    specEn: 'Instant Click & HD Glossy Print',
    priceRateHi: '₹30.00 (6 फ़ोटो)',
    priceRateEn: '₹30.00 (6 Photos)',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins',
    popular: true,
    badge: 'फास्ट 5 Min',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'passport-photo-12',
    category: 'printing',
    icon: 'fa-solid fa-users-rectangle',
    iconBg: 'bg-cyan-100 text-cyan-600',
    titleHi: 'पासपोर्ट साइज़ फोटो (12 प्रति सेट)',
    titleEn: 'Passport Size Photo (12 Copies Set)',
    specHi: 'प्रीमियम कटिंग व बैकग्राउंड एडिट',
    specEn: 'Premium Cut & Background Edit',
    priceRateHi: '₹50.00 (12 फ़ोटो)',
    priceRateEn: '₹50.00 (12 Photos)',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins'
  },
  {
    id: 'pvc-card-print',
    category: 'printing',
    icon: 'fa-solid fa-credit-card',
    iconBg: 'bg-red-100 text-red-600',
    titleHi: 'PVC स्मार्ट प्लास्टिक कार्ड प्रिंट',
    titleEn: 'PVC Plastic Smart Card Print',
    specHi: 'आधार / पैन / आयुष्मान प्लास्टिक कार्ड (Waterproof)',
    specEn: 'Aadhaar / PAN / Ayushman PVC (Waterproof)',
    priceRateHi: '₹50.00 - ₹60.00 / कार्ड',
    priceRateEn: '₹50.00 - ₹60.00 / card',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins',
    popular: true,
    badge: 'लोकप्रिय PVC',
    badgeColor: 'bg-red-100 text-red-700'
  },

  // 2. LAMINATION & SCANNING
  {
    id: 'lamination-a4',
    category: 'lamination',
    icon: 'fa-solid fa-shield-halved',
    iconBg: 'bg-blue-100 text-blue-600',
    titleHi: 'A4 डॉक्यूमेंट हैवी लेमिनेशन',
    titleEn: 'A4 Document Heavy Lamination',
    specHi: '125 माइक्रोन थिक प्रोटेक्शन लेमिनेशन पाउच',
    specEn: '125 Micron Thick Protective Pouch',
    priceRateHi: '₹20.00 - ₹30.00 / पेज',
    priceRateEn: '₹20.00 - ₹30.00 / page',
    estTimeHi: '3 मिनट',
    estTimeEn: '3 Mins'
  },
  {
    id: 'lamination-small',
    category: 'lamination',
    icon: 'fa-solid fa-id-card',
    iconBg: 'bg-emerald-100 text-emerald-600',
    titleHi: 'छोटा कार्ड लेमिनेशन (Small Card)',
    titleEn: 'Small Card Lamination (Pocket Size)',
    specHi: 'आधार, वोटर आईडी, ड्राइविंग लाइसेंस, अंकपत्र',
    specEn: 'Aadhaar, Voter ID, DL, Marksheet',
    priceRateHi: '₹10.00 - ₹15.00 / कार्ड',
    priceRateEn: '₹10.00 - ₹15.00 / card',
    estTimeHi: '2 मिनट',
    estTimeEn: '2 Mins'
  },
  {
    id: 'lamination-a3',
    category: 'lamination',
    icon: 'fa-solid fa-certificate',
    iconBg: 'bg-purple-100 text-purple-600',
    titleHi: 'A3 बड़ा सर्टिफिकेट / नक़्शा लेमिनेशन',
    titleEn: 'A3 Large Certificate / Map Lamination',
    specHi: 'अंकपत्र, जमीन के कागजात व नक्शा (Ultra Durable)',
    specEn: 'Marksheets, Land Maps (Ultra Durable)',
    priceRateHi: '₹50.00 / पेज',
    priceRateEn: '₹50.00 / page',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins'
  },
  {
    id: 'scan-color-pdf',
    category: 'lamination',
    icon: 'fa-solid fa-file-pdf',
    iconBg: 'bg-teal-100 text-teal-600',
    titleHi: 'HD डॉक्यूमेंट स्कैनिंग व PDF निर्माण',
    titleEn: 'HD Document Scanning & PDF Creation',
    specHi: '600 DPI हाई-क्वालिटी स्कैन व व्हाट्सएप शेयर',
    specEn: '600 DPI High-Res Scan & WhatsApp Share',
    priceRateHi: '₹10.00 / स्कैन पेज',
    priceRateEn: '₹10.00 / scan page',
    estTimeHi: '2 मिनट',
    estTimeEn: '2 Mins'
  },

  // 3. GOVT FORMS & CARDS
  {
    id: 'form-rtps-cert',
    category: 'forms',
    icon: 'fa-solid fa-landmark',
    iconBg: 'bg-amber-100 text-amber-600',
    titleHi: 'आय, जाति एवं निवास प्रमाण पत्र (RTPS)',
    titleEn: 'Income, Caste & Residence Cert (RTPS)',
    specHi: 'बिहार ऑनलाइन RTPS अंचल/अनुमंडल स्तर आवेदन',
    specEn: 'Bihar Online RTPS Portal Application',
    priceRateHi: '₹50.00 - ₹70.00 / आवेदन',
    priceRateEn: '₹50.00 - ₹70.00 / application',
    estTimeHi: '24-48 घंटे',
    estTimeEn: '24-48 Hours',
    popular: true,
    badge: '100% सही',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'form-pan-card',
    category: 'forms',
    icon: 'fa-solid fa-address-card',
    iconBg: 'bg-indigo-100 text-indigo-600',
    titleHi: 'नया पैन कार्ड आवेदन (NSDL / UTI)',
    titleEn: 'New PAN Card Application (NSDL / UTI)',
    specHi: 'बायोमेट्रिक से 2 घंटे में E-PAN + भौतिक कार्ड',
    specEn: 'Fingerprint Biometric (2-hr E-PAN + Physical)',
    priceRateHi: '₹150.00 - ₹200.00',
    priceRateEn: '₹150.00 - ₹200.00',
    estTimeHi: '2 घंटे में E-PAN',
    estTimeEn: '2 Hrs E-PAN',
    popular: true,
    badge: '2 Hr E-PAN',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'form-govt-jobs',
    category: 'forms',
    icon: 'fa-solid fa-pen-to-square',
    iconBg: 'bg-blue-100 text-blue-600',
    titleHi: 'सरकारी नौकरी ऑनलाइन फ़ॉर्म (SSC/Railway/BPSC)',
    titleEn: 'Govt Job Online Application (SSC/Railway)',
    specHi: 'त्रुटिरहित 100% सटीक फॉर्म सबमिशन व चालान',
    specEn: 'Error-Free 100% Accurate Submission',
    priceRateHi: '₹50.00 - ₹100.00 / फॉर्म',
    priceRateEn: '₹50.00 - ₹100.00 / form',
    estTimeHi: '15 मिनट',
    estTimeEn: '15 Mins'
  },
  {
    id: 'form-ews-obc',
    category: 'forms',
    icon: 'fa-solid fa-stamp',
    iconBg: 'bg-cyan-100 text-cyan-600',
    titleHi: 'EWS प्रमाण पत्र व OBC नॉन-क्रीमी लेयर',
    titleEn: 'EWS Certificate & OBC Non-Creamy Layer',
    specHi: 'अंचल व अनुमंडल स्तरीय आधिकारिक ऑनलाइन आवेदन',
    specEn: 'Block & Subdivision Level Application',
    priceRateHi: '₹60.00 - ₹80.00',
    priceRateEn: '₹60.00 - ₹80.00',
    estTimeHi: '24-48 घंटे',
    estTimeEn: '24-48 Hours'
  },
  {
    id: 'form-ayushman-card',
    category: 'forms',
    icon: 'fa-solid fa-heart-pulse',
    iconBg: 'bg-emerald-100 text-emerald-600',
    titleHi: 'आयुष्मान भारत कार्ड डाउनलोड व PVC प्रिंट',
    titleEn: 'Ayushman Card Download & PVC Print',
    specHi: '₹5 लाख मुफ़्त इलाज कार्ड + प्लास्टिक प्रिंट',
    specEn: '₹5 Lakh Free Treatment Card + PVC Print',
    priceRateHi: '₹50.00 / कार्ड',
    priceRateEn: '₹50.00 / card',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins'
  },
  {
    id: 'form-pm-kisan-kyc',
    category: 'forms',
    icon: 'fa-solid fa-wheat-awn',
    iconBg: 'bg-amber-100 text-amber-600',
    titleHi: 'पीएम किसान ई-केवाईसी व स्टेटस चेक',
    titleEn: 'PM Kisan e-KYC & Status Verification',
    specHi: 'बायोमेट्रिक फिंगरप्रिंट सत्यापन',
    specEn: 'Biometric Fingerprint Verification',
    priceRateHi: '₹30.00 - ₹50.00',
    priceRateEn: '₹30.00 - ₹50.00',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins'
  },

  // 4. BANKING & SERVICES
  {
    id: 'banking-aeps-cash',
    category: 'banking',
    icon: 'fa-solid fa-hand-holding-dollar',
    iconBg: 'bg-emerald-100 text-emerald-600',
    titleHi: 'आधार से कैश निकासी (AePS Banking)',
    titleEn: 'Aadhaar Cash Withdrawal (AePS)',
    specHi: 'सभी बैंक खाता (एसबीआई, पीएनबी, बैंक ऑफ बड़ौदा आदि)',
    specEn: 'All Bank Accounts (SBI, PNB, BOB, etc.)',
    priceRateHi: 'निःशुल्क / बैंक दर',
    priceRateEn: 'Free / Bank Rate',
    estTimeHi: '2 मिनट',
    estTimeEn: '2 Mins',
    popular: true,
    badge: 'मुफ़्त रसीद',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'banking-balance-check',
    category: 'banking',
    icon: 'fa-solid fa-receipt',
    iconBg: 'bg-sky-100 text-sky-600',
    titleHi: 'बैंक बैलेंस जांच व मिनी स्टेटमेंट',
    titleEn: 'Bank Balance Check & Mini Statement',
    specHi: 'प्रिंटेड रसीद के साथ तुरंत मिनी स्टेटमेंट',
    specEn: 'Instant Mini Statement with Printed Slip',
    priceRateHi: 'मुफ़्त (FREE)',
    priceRateEn: 'FREE',
    estTimeHi: '1 मिनट',
    estTimeEn: '1 Min'
  },
  {
    id: 'bsnl-fiber-booking',
    category: 'banking',
    icon: 'fa-solid fa-wifi',
    iconBg: 'bg-cyan-100 text-cyan-600',
    titleHi: 'BSNL FTTH नया फाइबर इंटरनेट कनेक्शन',
    titleEn: 'BSNL FTTH New Fiber Internet Connection',
    specHi: '100 Mbps सुपरफास्ट स्पीड सिरदला क्षेत्र',
    specEn: '100 Mbps Ultra Fast Speed Sirdala',
    priceRateHi: 'निःशुल्क बुकिंग',
    priceRateEn: 'Free Booking',
    estTimeHi: '24-48 घंटे में इंस्टाल',
    estTimeEn: '24-48 Hr Setup',
    popular: true,
    badge: 'BSNL Fiber',
    badgeColor: 'bg-cyan-100 text-cyan-800'
  },

  // 5. CSC DIGITAL SEVA KENDRA SERVICES
  {
    id: 'csc-ration-card-price',
    category: 'csc',
    icon: 'fa-solid fa-wheat-awn-circle-exclamation',
    iconBg: 'bg-amber-100 text-amber-600',
    titleHi: 'नया राशन कार्ड आवेदन / नाम जोड़ना',
    titleEn: 'New Ration Card / Add Member',
    specHi: 'बिहार खाद्य पोर्टल नया आवेदन, सुधार व सूची चेक',
    specEn: 'Bihar Food Portal Application & Verification',
    priceRateHi: '₹80.00 - ₹100.00',
    priceRateEn: '₹80.00 - ₹100.00',
    estTimeHi: '15 मिनट में आवेदन',
    estTimeEn: '15 Mins Apply',
    popular: true,
    badge: 'CSC राशन सेवा',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'csc-e-shram-price',
    category: 'csc',
    icon: 'fa-solid fa-helmet-safety',
    iconBg: 'bg-orange-100 text-orange-600',
    titleHi: 'ई-श्रम कार्ड नया पंजीकरण व अपडेट',
    titleEn: 'E-Shram Card Registration & Update',
    specHi: '₹2 लाख दुर्घटना बीमा सरकारी कार्ड + लेमिनेटेड प्रिंट',
    specEn: 'Govt Worker Card + Laminated Print',
    priceRateHi: '₹30.00 - ₹50.00',
    priceRateEn: '₹30.00 - ₹50.00',
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins',
    badge: 'हाथों-हाथ कार्ड',
    badgeColor: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'csc-dakhil-kharij-price',
    category: 'csc',
    icon: 'fa-solid fa-map-location-dot',
    iconBg: 'bg-stone-100 text-stone-700',
    titleHi: 'दाखिल खारिज व ऑनलाइन लगान रसीद (Bihar Bhumi)',
    titleEn: 'Land Mutation & Revenue Receipt',
    specHi: 'ऑनलाइन लगान रसीद, परिमार्जन व LPC प्रमाण पत्र',
    specEn: 'Online Land Tax Receipt & LPC Certificate',
    priceRateHi: '₹30.00 (रसीद) / ₹100.00 (दाखिल खारिज)',
    priceRateEn: '₹30.00 (Receipt) / ₹100.00 (Mutation)',
    estTimeHi: '5 मिनट में रसीद',
    estTimeEn: '5 Mins Receipt',
    popular: true
  },
  {
    id: 'csc-irctc-ticket-price',
    category: 'csc',
    icon: 'fa-solid fa-train',
    iconBg: 'bg-blue-100 text-blue-700',
    titleHi: 'IRCTC ट्रेन टिकट बुकिंग (तत्काल व सामान्य)',
    titleEn: 'IRCTC Train Ticket Booking (Tatkal & General)',
    specHi: 'सीएससी अधिकृत एजेंट - कन्फर्म सीट व तत्काल टिकट',
    specEn: 'CSC Authorised Agent - Confirmed & Tatkal Tickets',
    priceRateHi: 'रेलवे किराया + सीएससी शुल्क',
    priceRateEn: 'Rail Fare + CSC Fee',
    estTimeHi: '5 - 10 मिनट',
    estTimeEn: '5 - 10 Mins',
    popular: true,
    badge: 'IRCTC अधिकृत',
    badgeColor: 'bg-blue-100 text-blue-900'
  },
  {
    id: 'csc-vehicle-insurance-price',
    category: 'csc',
    icon: 'fa-solid fa-motorcycle',
    iconBg: 'bg-emerald-100 text-emerald-700',
    titleHi: 'गाड़ी व बाइक बीमा (Motor Insurance)',
    titleEn: 'Bike & Car Insurance (Third Party/Comprehensive)',
    specHi: 'ट्रैफिक चालान से राहत! 5 मिनट में पॉलिसी प्रिंट',
    specEn: 'Instant Policy Printout & Save from Fines',
    priceRateHi: 'कंपनी दर (No Extra Fee)',
    priceRateEn: 'Official Rate (No Extra Fee)',
    estTimeHi: '5 मिनट में पॉलिसी',
    estTimeEn: '5 Mins Policy',
    popular: true,
    badge: '5 Min में पॉलिसी',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'csc-driving-license-price',
    category: 'csc',
    icon: 'fa-solid fa-id-card',
    iconBg: 'bg-rose-100 text-rose-700',
    titleHi: 'सारथी ड्राइविंग लाइसेंस (लर्निंग व परमानेंट DL)',
    titleEn: 'Driving License Application (Sarathi)',
    specHi: 'लर्निंग लाइसेंस ऑनलाइन टेस्ट स्लॉट बुकिंग व फॉर्म',
    specEn: 'Learners License Slot Booking & Form Apply',
    priceRateHi: '₹100.00 + सरकारी चालान',
    priceRateEn: '₹100.00 + Govt Challan',
    estTimeHi: 'तुरंत आवेदन',
    estTimeEn: 'Instant Apply'
  },
  {
    id: 'csc-pension-price',
    category: 'csc',
    icon: 'fa-solid fa-person-cane',
    iconBg: 'bg-teal-100 text-teal-800',
    titleHi: 'वृद्धा, विधवा एवं दिव्यांग पेंशन (SSPMIS)',
    titleEn: 'Old Age & Social Security Pension',
    specHi: 'बिहार सामाजिक सुरक्षा पेंशन ऑनलाइन आवेदन',
    specEn: 'Bihar Social Welfare Pension Application',
    priceRateHi: '₹50.00 सेवा शुल्क',
    priceRateEn: '₹50.00 Service Fee',
    estTimeHi: '10 मिनट में फॉर्म',
    estTimeEn: '10 Mins Form'
  },
  {
    id: 'csc-tele-law-price',
    category: 'csc',
    icon: 'fa-solid fa-scale-balanced',
    iconBg: 'bg-purple-100 text-purple-700',
    titleHi: 'टेली-लॉ (Tele-Law) सुप्रीम कोर्ट वकीलों से सलाह',
    titleEn: 'Tele-Law Free Legal Advice',
    specHi: 'कानूनी, जमीन व पारिवारिक मामलों में फ्री परामर्श',
    specEn: 'Free Legal Advice on Land & Family Matters',
    priceRateHi: 'पूरी तरह मुफ़्त (FREE)',
    priceRateEn: 'Completely FREE',
    estTimeHi: 'तुरंत अपॉइंटमेंट',
    estTimeEn: 'Instant Slot',
    badge: '100% मुफ़्त',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'csc-electricity-bill-price',
    category: 'csc',
    icon: 'fa-solid fa-bolt',
    iconBg: 'bg-yellow-100 text-yellow-700',
    titleHi: 'बिजली बिल भुगतान व नया कनेक्शन (SBPDCL)',
    titleEn: 'Electricity Bill Payment & New Connection',
    specHi: 'साउथ बिहार पावर डिस्ट्रीब्यूशन - तुरंत मुद्रित रसीद',
    specEn: 'SBPDCL Bill Pay with Instant Printed Receipt',
    priceRateHi: 'मुफ़्त (0% चार्ज) / नया कनेक्शन ₹50',
    priceRateEn: 'Free (0% Fee) / New Conn ₹50',
    estTimeHi: '1 मिनट',
    estTimeEn: '1 Min',
    badge: '0% चार्ज',
    badgeColor: 'bg-yellow-100 text-yellow-800'
  }
];

interface PriceListTableProps {
  currentLang: LanguageKey;
  openBookingModal: (serviceName?: string) => void;
  whatsappNumber: string;
  onPayOnline?: (amount?: number, service?: string) => void;
}

export const PriceListTable: React.FC<PriceListTableProps> = ({
  currentLang,
  openBookingModal,
  whatsappNumber,
  onPayOnline,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
  const isEnglish = currentLang === 'en' || currentLang === 'hinglish';

  const [activeTab, setActiveTab] = useState<'all' | 'printing' | 'lamination' | 'forms' | 'banking' | 'csc'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Count items per category
  const categoryCounts = useMemo(() => {
    return {
      all: PRICE_LIST_ITEMS.length,
      printing: PRICE_LIST_ITEMS.filter((i) => i.category === 'printing').length,
      lamination: PRICE_LIST_ITEMS.filter((i) => i.category === 'lamination').length,
      forms: PRICE_LIST_ITEMS.filter((i) => i.category === 'forms').length,
      banking: PRICE_LIST_ITEMS.filter((i) => i.category === 'banking').length,
      csc: PRICE_LIST_ITEMS.filter((i) => i.category === 'csc').length,
    };
  }, []);

  // Filter items based on activeTab and searchQuery
  const filteredItems = useMemo(() => {
    return PRICE_LIST_ITEMS.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesTab;

      const title = (isEnglish ? item.titleEn : item.titleHi).toLowerCase();
      const spec = (isEnglish ? item.specEn : item.specHi).toLowerCase();
      const price = (isEnglish ? item.priceRateEn : item.priceRateHi).toLowerCase();

      return matchesTab && (title.includes(q) || spec.includes(q) || price.includes(q));
    });
  }, [activeTab, searchQuery, isEnglish]);

  return (
    <div id="price-list" className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      
      {/* Background Subtle Accent Decoration */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200/60 mb-3">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.priceListTag}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {t.priceListTitle}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed">
            {t.priceListSubtitle}
          </p>
        </div>

        {/* Live Search Input Box */}
        <div className="w-full md:w-80 relative shrink-0">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.priceSearchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                title="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>⚡ {t.priceTabAll}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {categoryCounts.all}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('printing')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'printing'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>🖨️ {t.priceTabPrint}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'printing' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {categoryCounts.printing}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('lamination')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'lamination'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>🛡️ {t.priceTabLamination}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'lamination' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {categoryCounts.lamination}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('forms')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'forms'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>📄 {t.priceTabForms}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'forms' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {categoryCounts.forms}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('banking')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'banking'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>💳 {t.priceTabBanking}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'banking' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {categoryCounts.banking}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('csc')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shadow-2xs ${
            activeTab === 'csc'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
              : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200/60'
          }`}
        >
          <span>🏛️ CSC डिजिटल सेवा</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${activeTab === 'csc' ? 'bg-white/20 text-white' : 'bg-amber-200 text-amber-900'}`}>
            {categoryCounts.csc}
          </span>
        </button>
      </div>

      {/* Results Counter / Filter Indicator */}
      {searchQuery && (
        <div className="mb-4 text-xs font-bold text-slate-500 flex items-center justify-between bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
          <span>
            🔍 "{searchQuery}" के लिए <strong className="text-blue-600">{filteredItems.length}</strong> परिणाम मिले
          </span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-blue-600 hover:underline font-bold"
          >
            सभी दिखाएं
          </button>
        </div>
      )}

      {/* DESKTOP TABULAR VIEW (Hidden on Mobile) */}
      <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white text-xs uppercase font-extrabold tracking-wider">
              <th className="py-4 px-6 rounded-tl-2xl">{t.priceColService}</th>
              <th className="py-4 px-6">{t.priceColSpec}</th>
              <th className="py-4 px-6">{t.priceColRate}</th>
              <th className="py-4 px-6">{t.priceColTime}</th>
              <th className="py-4 px-6 text-right rounded-tr-2xl">{t.priceColAction}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm font-medium">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400">
                  <div className="max-w-xs mx-auto text-center">
                    <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-slate-600">कोई सेवा नहीं मिली</p>
                    <p className="text-xs text-slate-400 mt-1">कृपया दूसरा शब्द खोजें या फ़िल्टर रीसेट करें।</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredItems.map((item, idx) => {
                const title = isEnglish ? item.titleEn : item.titleHi;
                const spec = isEnglish ? item.specEn : item.specHi;
                const price = isEnglish ? item.priceRateEn : item.priceRateHi;
                const time = isEnglish ? item.estTimeEn : item.estTimeHi;

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-blue-50/50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                    }`}
                  >
                    {/* Service Name & Icon */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-base shrink-0 shadow-xs`}>
                          <i className={item.icon}></i>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-900 leading-snug">
                              {title}
                            </span>
                            {item.popular && (
                              <span className="bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-widest">
                                HOT
                              </span>
                            )}
                          </div>
                          {item.badge && (
                            <span className={`inline-block mt-0.5 text-[10px] font-bold px-2 py-0.2 rounded-md ${item.badgeColor || 'bg-slate-100 text-slate-600'}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Specification */}
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm font-semibold">
                      {spec}
                    </td>

                    {/* Price Rate Badge */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 font-extrabold text-sm border border-emerald-200 shadow-2xs">
                        <Tag className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{price}</span>
                      </span>
                    </td>

                    {/* Est Time */}
                    <td className="py-4 px-6 whitespace-nowrap text-xs font-bold text-slate-500">
                      <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{time}</span>
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-4 px-6 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        {onPayOnline && (
                          <button
                            type="button"
                            onClick={() => {
                              // Extract first number in price if available
                              const match = price.match(/\d+/);
                              const parsedAmount = match ? parseInt(match[0], 10) : 50;
                              onPayOnline(parsedAmount, title);
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 font-bold text-xs transition-colors shadow-2xs flex items-center gap-1"
                            title="UPI से सीधे ऑनलाइन भुगतान करें"
                          >
                            <i className="fa-solid fa-qrcode text-[11px]"></i>
                            <span>UPI Pay</span>
                          </button>
                        )}

                        <button
                          onClick={() => openBookingModal(title)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-xs transition-colors shadow-xs active:scale-95 flex items-center gap-1.5"
                        >
                          <span>{t.priceBookBtn}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>

                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`नमस्ते, मुझे "${title}" के बारे में पूछना है।`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                          title="WhatsApp Inquiry"
                        >
                          <i className="fa-brands fa-whatsapp text-sm"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW (Optimized for touch screens) */}
      <div className="lg:hidden space-y-3">
        {filteredItems.length === 0 ? (
          <div className="py-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm font-bold text-slate-600">कोई सेवा नहीं मिली</p>
            <p className="text-xs text-slate-400 mt-1">दूसरा शब्द खोजें</p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const title = isEnglish ? item.titleEn : item.titleHi;
            const spec = isEnglish ? item.specEn : item.specHi;
            const price = isEnglish ? item.priceRateEn : item.priceRateHi;
            const time = isEnglish ? item.estTimeEn : item.estTimeHi;

            return (
              <div
                key={item.id}
                className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center text-sm shrink-0 shadow-2xs`}>
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm leading-tight">
                          {title}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">
                          {spec}
                        </span>
                      </div>
                    </div>

                    {item.popular && (
                      <span className="bg-amber-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-widest shrink-0">
                        HOT
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t.priceColRate}
                    </span>
                    <span className="text-sm font-black text-emerald-700">
                      {price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-lg">
                      ⏳ {time}
                    </span>

                    {onPayOnline && (
                      <button
                        type="button"
                        onClick={() => {
                          const match = price.match(/\d+/);
                          const parsedAmount = match ? parseInt(match[0], 10) : 50;
                          onPayOnline(parsedAmount, title);
                        }}
                        className="px-2.5 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-600 text-emerald-800 hover:text-white font-black text-xs transition-colors flex items-center gap-1"
                        title="UPI Pay"
                      >
                        <i className="fa-solid fa-qrcode text-[10px]"></i>
                        <span>पे</span>
                      </button>
                    )}

                    <button
                      onClick={() => openBookingModal(title)}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-extrabold text-xs shadow-xs active:scale-95 flex items-center gap-1"
                    >
                      <span>{t.priceBookBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Transparency Guarantee Card Banner */}
      <div className="mt-8 bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 rounded-2xl p-4 sm:p-6 text-white border border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0 border border-emerald-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              100% TRANSPARENT PRICING GUARANTEE
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 leading-snug">
              {t.priceGuaranteeNote}
            </p>
          </div>
        </div>

        <button
          onClick={() => openBookingModal('सामान्य पूछताछ / दर जानकारी')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shrink-0 text-center"
        >
          पूछताछ करें
        </button>
      </div>

    </div>
  );
};

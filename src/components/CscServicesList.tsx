import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  FileCheck,
  ShieldCheck,
  Building2,
  Landmark,
  FileText,
  CreditCard,
  HeartPulse,
  Train,
  Scale,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  BadgeCheck,
  PhoneCall,
  Smartphone,
  Info,
  Bot
} from 'lucide-react';
import { LanguageKey, TRANSLATIONS } from '../translations';

export interface CscServiceItem {
  id: string;
  category: 'g2c' | 'banking' | 'insurance' | 'travel' | 'utility';
  categoryLabelHi: string;
  categoryLabelEn: string;
  titleHi: string;
  titleEn: string;
  portal: string;
  portalCode: string;
  icon: string;
  iconBg: string;
  shortDescHi: string;
  shortDescEn: string;
  requiredDocsHi: string[];
  requiredDocsEn: string[];
  estTimeHi: string;
  estTimeEn: string;
  feeHi: string;
  feeEn: string;
  approxFeeNum: number;
  popular?: boolean;
  highlightBadge?: string;
  highlightColor?: string;
}

export const CSC_SERVICES_DATA: CscServiceItem[] = [
  // 1. G2C - GOVERNMENT TO CITIZEN SERVICES
  {
    id: 'csc-income-cert',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'आय प्रमाण पत्र (Income Certificate)',
    titleEn: 'Income Certificate (RTPS Bihar)',
    portal: 'RTPS Bihar (ServicePlus)',
    portalCode: 'RTPS-01',
    icon: 'fa-solid fa-file-invoice-dollar',
    iconBg: 'bg-emerald-100 text-emerald-700',
    shortDescHi: 'छात्रवृत्ति, सरकारी नौकरी, राशन कार्ड व बैंक लोन के लिए आधिकारिक अंचल/अनुमंडल आय प्रमाण पत्र।',
    shortDescEn: 'Official Block/Subdivision level income certificate for scholarship, jobs, and schemes.',
    requiredDocsHi: ['आधार कार्ड', 'स्वप्रमाणित शपथ पत्र / आय विवरण', 'पासपोर्ट फोटो', 'मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', 'Self-Declaration Form', 'Passport Photo', 'Mobile Number'],
    estTimeHi: '5 - 10 कार्य दिवस (तत्काल उपलब्ध)',
    estTimeEn: '5 - 10 Working Days',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50,
    popular: true,
    highlightBadge: 'सर्वाधिक जरूरी',
    highlightColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'csc-caste-cert',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'जाति प्रमाण पत्र (Caste Certificate)',
    titleEn: 'Caste Certificate (SC/ST/OBC/EBC)',
    portal: 'RTPS Bihar (ServicePlus)',
    portalCode: 'RTPS-02',
    icon: 'fa-solid fa-id-card-clip',
    iconBg: 'bg-blue-100 text-blue-700',
    shortDescHi: 'आरक्षण लाभ, छात्रवृत्ति एवं सरकारी योजनाओं के लिए डिजिटल हस्ताक्षरित जाति प्रमाण पत्र।',
    shortDescEn: 'Digitally signed caste certificate for reservation, colleges, and state schemes.',
    requiredDocsHi: ['आधार कार्ड', 'खतियान/जमीन रसीद (आवश्यकतानुसार)', 'फोटो', 'सक्रिय मोबाइल'],
    requiredDocsEn: ['Aadhaar Card', 'Land Record/Khatiyan (if needed)', 'Photo', 'Mobile Number'],
    estTimeHi: '5 - 10 कार्य दिवस',
    estTimeEn: '5 - 10 Working Days',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50,
    popular: true
  },
  {
    id: 'csc-residence-cert',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'निवास प्रमाण पत्र (Residential Certificate)',
    titleEn: 'Residential / Domicile Certificate',
    portal: 'RTPS Bihar (ServicePlus)',
    portalCode: 'RTPS-03',
    icon: 'fa-solid fa-house-chimney-user',
    iconBg: 'bg-indigo-100 text-indigo-700',
    shortDescHi: 'बिहार राज्य के स्थायी निवासी होने का आधिकारिक डिजिटल प्रमाण पत्र।',
    shortDescEn: 'Official domicile proof issued by Block/Circle officer with QR verification.',
    requiredDocsHi: ['आधार कार्ड', 'बिजली बिल / राशन कार्ड (वैकल्पिक)', 'पासपोर्ट साइज फोटो'],
    requiredDocsEn: ['Aadhaar Card', 'Electricity Bill / Ration Card (optional)', 'Passport Photo'],
    estTimeHi: '5 - 10 कार्य दिवस',
    estTimeEn: '5 - 10 Working Days',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50,
    popular: true
  },
  {
    id: 'csc-ration-card',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'राशन कार्ड (नया आवेदन, संशोधन व नाम जोड़ना)',
    titleEn: 'Ration Card (New, Correction, Member Add)',
    portal: 'खाद्य एवं उपभोक्ता संरक्षण विभाग बिहार',
    portalCode: 'EPDS-BIHAR',
    icon: 'fa-solid fa-wheat-awn-circle-exclamation',
    iconBg: 'bg-amber-100 text-amber-700',
    shortDescHi: 'नया राशन कार्ड ऑनलाइन आवेदन, परिवार के नए सदस्यों का नाम जोड़ना, नाम हटाना व पता सुधार।',
    shortDescEn: 'New Ration Card online application, add/remove family members, correction.',
    requiredDocsHi: ['परिवार की संयुक्त फोटो', 'सभी सदस्यों के आधार कार्ड', 'बैंक पासबुक (मुखिया का)', 'निवास व आय प्रमाण पत्र'],
    requiredDocsEn: ['Family Joint Photo', 'All Members Aadhaar Cards', 'Head of Family Bank Passbook', 'Income/Residence Proof'],
    estTimeHi: '15 - 30 दिन (अंचल सत्यापन)',
    estTimeEn: '15 - 30 Days',
    feeHi: '₹80.00 - ₹100.00',
    feeEn: '₹80.00 - ₹100.00',
    approxFeeNum: 80,
    popular: true,
    highlightBadge: 'राशन कार्ड सेवा',
    highlightColor: 'bg-amber-100 text-amber-900'
  },
  {
    id: 'csc-ayushman-card',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'आयुष्मान भारत कार्ड (₹5 लाख मुफ्त इलाज कार्ड)',
    titleEn: 'Ayushman Bharat Golden Card (PMJAY)',
    portal: 'National Health Authority (PMJAY)',
    portalCode: 'PMJAY-NHA',
    icon: 'fa-solid fa-heart-pulse',
    iconBg: 'bg-rose-100 text-rose-700',
    shortDescHi: 'प्रतिवर्ष ₹5 लाख तक का सरकारी व प्राइवेट अस्पतालों में पूरी तरह मुफ़्त इलाज। हाथों-हाथ ई-केवाईसी व PVC कार्ड।',
    shortDescEn: 'Up to ₹5 Lakh free medical treatment per year. Instant biometric e-KYC & PVC print.',
    requiredDocsHi: ['राशन कार्ड या PMJAY सूची पत्र', 'आधार कार्ड', 'आधार लिंक मोबाइल'],
    requiredDocsEn: ['Ration Card / PMJAY Letter', 'Aadhaar Card', 'Linked Mobile'],
    estTimeHi: '5 - 10 मिनट में PVC प्रिंट',
    estTimeEn: '5 - 10 Mins Instant',
    feeHi: '₹50.00 PVC कार्ड प्रिंट',
    feeEn: '₹50.00 PVC Card Print',
    approxFeeNum: 50,
    popular: true,
    highlightBadge: '₹5 लाख मुफ़्त',
    highlightColor: 'bg-rose-100 text-rose-900'
  },
  {
    id: 'csc-e-shram',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'ई-श्रम कार्ड (E-Shram Card पंजीयन व अपडेट)',
    titleEn: 'E-Shram Card Registration & Profile Update',
    portal: 'Ministry of Labour & Employment',
    portalCode: 'E-SHRAM-GOV',
    icon: 'fa-solid fa-helmet-safety',
    iconBg: 'bg-orange-100 text-orange-700',
    shortDescHi: 'असंगठित क्षेत्र के कामगारों, किसानों, मजदूरों के लिए ₹2 लाख दुर्घटना बीमा एवं सरकारी योजना कार्ड।',
    shortDescEn: 'Govt card for unorganized workers with ₹2 lakh accident coverage and welfare schemes.',
    requiredDocsHi: ['आधार कार्ड', 'बैंक खाता पासबुक', 'आधार लिंक मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', 'Bank Passbook', 'Aadhaar Linked Mobile'],
    estTimeHi: '5 मिनट (हाथों-हाथ लेमिनेटेड कार्ड)',
    estTimeEn: '5 Mins Instant',
    feeHi: '₹30.00 - ₹50.00 प्रिंट सहित',
    feeEn: '₹30.00 - ₹50.00 with Print',
    approxFeeNum: 50
  },
  {
    id: 'csc-pm-kisan',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'पीएम किसान सम्मान निधि (e-KYC व नया पंजीकरण)',
    titleEn: 'PM Kisan Samman Nidhi (e-KYC & Reg)',
    portal: 'Ministry of Agriculture (pmkisan.gov.in)',
    portalCode: 'PM-KISAN',
    icon: 'fa-solid fa-seedling',
    iconBg: 'bg-lime-100 text-lime-800',
    shortDescHi: '₹6,000/- सालाना किसान सहायता राशि। बायोमेट्रिक फिंगरप्रिंट e-KYC, नया किसान रजिस्ट्रेशन व लैंड सीडिंग।',
    shortDescEn: '₹6,000/yr farmer support. Biometric fingerprint e-KYC, new registration, land seeding check.',
    requiredDocsHi: ['आधार कार्ड', 'जमीन की वर्तमान लगान रसीद/LPC', 'बैंक पासबुक', 'मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', 'Current Land Receipt/LPC', 'Bank Passbook', 'Mobile'],
    estTimeHi: '5 मिनट e-KYC',
    estTimeEn: '5 Mins e-KYC',
    feeHi: '₹30.00 - ₹50.00',
    feeEn: '₹30.00 - ₹50.00',
    approxFeeNum: 40,
    popular: true,
    highlightBadge: '₹6,000 सालाना',
    highlightColor: 'bg-lime-100 text-lime-900'
  },
  {
    id: 'csc-pan-card',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'नया पैन कार्ड व सुधार (UTI / NSDL PAN Card)',
    titleEn: 'New PAN Card & Correction (UTI/NSDL)',
    portal: 'Protean NSDL / UTIITSL Portal',
    portalCode: 'PAN-NSDL',
    icon: 'fa-solid fa-credit-card',
    iconBg: 'bg-purple-100 text-purple-700',
    shortDescHi: 'फिंगरप्रिंट या OTP से मात्र 2 घंटे में e-PAN प्राप्त करें + मूल प्लास्टिक पैन कार्ड डाक द्वारा घर तक।',
    shortDescEn: 'Biometric fingerprint or OTP: Instant e-PAN in 2 hours + physical card delivered by post.',
    requiredDocsHi: ['आधार कार्ड', '2 पासपोर्ट साइज फोटो', 'मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', '2 Passport Photos', 'Mobile Number'],
    estTimeHi: '2 घंटे में e-PAN / 7 दिन में मूल कार्ड',
    estTimeEn: '2 Hrs e-PAN / 7 Days Physical',
    feeHi: '₹150.00 - ₹200.00 (सरकारी चालान सहित)',
    feeEn: '₹150.00 - ₹200.00 (All Incl)',
    approxFeeNum: 160,
    popular: true,
    highlightBadge: '2 Hr E-PAN',
    highlightColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'csc-voter-id',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'वोटर कार्ड (नया पहचान पत्र, सुधार व PVC डाउनलोड)',
    titleEn: 'Voter ID (New EPIC, Correction, PVC Card)',
    portal: 'Election Commission of India (ECI / NVSP)',
    portalCode: 'ECI-VOTER',
    icon: 'fa-solid fa-check-to-slot',
    iconBg: 'bg-cyan-100 text-cyan-700',
    shortDescHi: '18 वर्ष पूर्ण होने पर नया वोटर कार्ड आवेदन (Form 6), नाम/पता सुधार (Form 8) व हाई क्वालिटी PVC वोटर कार्ड।',
    shortDescEn: 'New voter card (Form 6), correction in name/address (Form 8), and high-res PVC print.',
    requiredDocsHi: ['आधार कार्ड या जन्म प्रमाण पत्र', '1 पासपोर्ट फोटो', 'परिवार के किसी सदस्य का वोटर नंबर'],
    requiredDocsEn: ['Aadhaar / Birth Proof', '1 Passport Photo', 'Family Member EPIC No'],
    estTimeHi: 'तत्काल आवेदन / PVC प्रिंट 5 मिनट',
    estTimeEn: 'Instant Apply / PVC in 5 Mins',
    feeHi: '₹50.00 - ₹60.00',
    feeEn: '₹50.00 - ₹60.00',
    approxFeeNum: 50
  },
  {
    id: 'csc-land-mutation',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'दाखिल खारिज, लगान रसीद व LPC (Bihar Bhumi)',
    titleEn: 'Land Mutation, Revenue Receipt & LPC',
    portal: 'राजस्व एवं भूमि सुधार विभाग बिहार (Bihar Bhumi)',
    portalCode: 'BIHAR-BHUMI',
    icon: 'fa-solid fa-map-location-dot',
    iconBg: 'bg-stone-100 text-stone-700',
    shortDescHi: 'ऑनलाइन लगान रसीद काटना, ऑनलाइन दाखिल खारिज (Mutation), परिमार्जन व LPC प्रमाण पत्र आवेदन।',
    shortDescEn: 'Online land tax receipt, online mutation, parimarjan rectification, and LPC certificate.',
    requiredDocsHi: ['जमीन केवाला / दस्तावेज', 'पिछली लगान रसीद', 'आधार कार्ड', 'मोबाइल नंबर'],
    requiredDocsEn: ['Deed / Kewala Document', 'Previous Land Receipt', 'Aadhaar Card', 'Mobile'],
    estTimeHi: 'ऑनलाइन रसीद 5 मिनट / LPC 15 दिन',
    estTimeEn: 'Receipt in 5 Mins / LPC 15 Days',
    feeHi: '₹30.00 (रसीद) / ₹100.00 (दाखिल खारिज)',
    feeEn: '₹30.00 (Receipt) / ₹100.00 (Mutation)',
    approxFeeNum: 50,
    popular: true
  },
  {
    id: 'csc-pension',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'सामाजिक सुरक्षा पेंशन (वृद्धा, विधवा, दिव्यांग पेंशन)',
    titleEn: 'Social Security Pension (Old Age, Widow)',
    portal: 'SSPMIS Social Welfare Dept Bihar',
    portalCode: 'SSPMIS-PENSION',
    icon: 'fa-solid fa-person-cane',
    iconBg: 'bg-teal-100 text-teal-800',
    shortDescHi: 'मुख्यमंत्री वृद्धजन पेंशन, विधवा पेंशन व दिव्यांग पेंशन का ऑनलाइन रजिस्ट्रेशन व वार्षिक जीवन प्रमाण पत्र।',
    shortDescEn: 'Elderly pension (60+ yrs), widow pension, disability pension apply and annual life certificate.',
    requiredDocsHi: ['आधार कार्ड', 'बैंक पासबुक', 'वोटर कार्ड', 'पासपोर्ट फोटो', 'सहमति पत्र'],
    requiredDocsEn: ['Aadhaar Card', 'Bank Passbook', 'Voter ID', 'Passport Photo', 'Consent'],
    estTimeHi: 'आवेदन तुरंत / 15-20 दिन में स्वीकृति',
    estTimeEn: 'Instant Apply / Approval in 15-20 Days',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50
  },
  {
    id: 'csc-birth-death',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'जन्म एवं मृत्यु प्रमाण पत्र (Birth & Death Registration)',
    titleEn: 'Birth & Death Certificate (Civil Reg)',
    portal: 'CRS OrgI Portal / Block Nagar Parishad',
    portalCode: 'CRS-BIRTH',
    icon: 'fa-solid fa-baby',
    iconBg: 'bg-pink-100 text-pink-700',
    shortDescHi: 'अस्पताल/घर पर हुए जन्म व मृत्यु का आधिकारिक निबंधन एवं सरकारी डिजिटल प्रमाण पत्र डाउनलोड।',
    shortDescEn: 'Official civil registration for birth/death and digitally verified certificate download.',
    requiredDocsHi: ['माता-पिता/मृतक का आधार कार्ड', 'अस्पताल डिस्चार्ज स्लिप / मुखिया सत्यापन'],
    requiredDocsEn: ['Parents / Deceased Aadhaar', 'Hospital Slip / Gram Panchayat verification'],
    estTimeHi: '7 - 14 कार्य दिवस',
    estTimeEn: '7 - 14 Working Days',
    feeHi: '₹60.00 - ₹80.00',
    feeEn: '₹60.00 - ₹80.00',
    approxFeeNum: 70
  },
  {
    id: 'csc-pmay-awas',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'प्रधानमंत्री आवास योजना (PMAY ग्रामीण व शहरी सूची)',
    titleEn: 'PM Awas Yojana (PMAY Beneficiary Status)',
    portal: 'Ministry of Rural Development (AwaasSoft)',
    portalCode: 'PMAY-GRAMIN',
    icon: 'fa-solid fa-house-lock',
    iconBg: 'bg-sky-100 text-sky-700',
    shortDescHi: 'पीएम आवास सूची में नाम चेक, FTO पेमेंट स्टेटस, जियो टैगिंग स्टेटस व नया आवास सहायता फॉर्म।',
    shortDescEn: 'PMAY housing beneficiary list verification, installment FTO status & geo-tagging details.',
    requiredDocsHi: ['आधार कार्ड', 'जॉब कार्ड नंबर (यदि उपलब्ध)', 'बैंक पासबुक'],
    requiredDocsEn: ['Aadhaar Card', 'Job Card Number (if available)', 'Bank Passbook'],
    estTimeHi: 'तुरंत जांच (2 मिनट)',
    estTimeEn: 'Instant (2 Mins)',
    feeHi: '₹20.00 - ₹30.00 प्रिंट सहित',
    feeEn: '₹20.00 - ₹30.00 with Print',
    approxFeeNum: 30
  },
  {
    id: 'csc-electricity-bill',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'बिजली बिल भुगतान व नया कनेक्शन (SBPDCL)',
    titleEn: 'Electricity Bill Pay & New Connection (SBPDCL)',
    portal: 'South Bihar Power Distribution (SBPDCL / Suvidha)',
    portalCode: 'SBPDCL-BIHAR',
    icon: 'fa-solid fa-bolt',
    iconBg: 'bg-yellow-100 text-yellow-700',
    shortDescHi: 'साउथ बिहार पावर का बिजली बिल भुगतान, तत्काल प्रिंटेड रसीद व नया घरेलू/कृषि कनेक्शन आवेदन (हर घर बिजली)।',
    shortDescEn: 'Instant SBPDCL electricity bill payment with official receipt & new connection application.',
    requiredDocsHi: ['CA नंबर / पुराना बिल', 'नये कनेक्शन हेतु: आधार, फोटो, जमीन रसीद'],
    requiredDocsEn: ['CA Number / Old Bill', 'For New Connection: Aadhaar, Photo, Land Receipt'],
    estTimeHi: '1 मिनट में बिल भुगतान',
    estTimeEn: '1 Min Instant Pay',
    feeHi: 'बिल भुगतान मुफ़्त (0% Fee) / नया कनेक्शन ₹50',
    feeEn: 'Free Bill Pay (0% Fee) / New Conn ₹50',
    approxFeeNum: 50,
    popular: true
  },
  {
    id: 'csc-police-character',
    category: 'g2c',
    categoryLabelHi: 'सरकारी सेवा (G2C)',
    categoryLabelEn: 'Govt Service (G2C)',
    titleHi: 'चरित्र प्रमाण पत्र (Bihar Police Character Certificate)',
    titleEn: 'Police Character / Verification Certificate',
    portal: 'Bihar Police ServicePlus Portal',
    portalCode: 'BIHAR-POLICE',
    icon: 'fa-solid fa-shield-cat',
    iconBg: 'bg-slate-100 text-slate-800',
    shortDescHi: 'सरकारी नौकरी, सीएसपी बैंक मित्र, ठेकेदारी, पासपोर्ट व निजी कंपनियों के लिए ऑनलाइन पुलिस सत्यापन।',
    shortDescEn: 'Online police verification for govt jobs, bank CSP, contractor license, and passport.',
    requiredDocsHi: ['आधार कार्ड', 'पासपोर्ट साइज फोटो', 'निवास प्रमाण पत्र', 'सक्रिय मोबाइल'],
    requiredDocsEn: ['Aadhaar Card', 'Passport Photo', 'Residence Proof', 'Active Mobile'],
    estTimeHi: '10 - 15 कार्य दिवस',
    estTimeEn: '10 - 15 Days',
    feeHi: '₹60.00 - ₹80.00',
    feeEn: '₹60.00 - ₹80.00',
    approxFeeNum: 70
  },

  // 2. BANKING & DIGIPAY SERVICES
  {
    id: 'csc-aeps-cash',
    category: 'banking',
    categoryLabelHi: 'बैंकिंग व डीजीपे',
    categoryLabelEn: 'Banking & DigiPay',
    titleHi: 'आधार कार्ड से कैश निकासी (DigiPay AePS ATM)',
    titleEn: 'Aadhaar Cash Withdrawal (DigiPay AePS)',
    portal: 'CSC DigiPay / NPCI Micro ATM',
    portalCode: 'DIGIPAY-AEPS',
    icon: 'fa-solid fa-hand-holding-dollar',
    iconBg: 'bg-emerald-100 text-emerald-700',
    shortDescHi: 'किसी भी बैंक खाते (SBI, PNB, BOB, Canara, Gramin Bank) से फिंगरप्रिंट लगाकर तुरंत सुरक्षित कैश निकासी।',
    shortDescEn: 'Withdraw cash from any bank using Aadhaar biometric authentication. Safe & instant.',
    requiredDocsHi: ['आधार नंबर', 'बैंक का नाम', 'अंगूठे का निशान (बायोमेट्रिक)'],
    requiredDocsEn: ['Aadhaar Number', 'Bank Name', 'Fingerprint Biometric'],
    estTimeHi: '1 मिनट में कैश हाथों-हाथ',
    estTimeEn: '1 Min Instant Cash',
    feeHi: 'पूरी तरह निःशुल्क (FREE) + प्रिंटेड रसीद',
    feeEn: 'Completely FREE + Printed Slip',
    approxFeeNum: 0,
    popular: true,
    highlightBadge: '0% चार्ज - मुफ़्त',
    highlightColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'csc-money-transfer',
    category: 'banking',
    categoryLabelHi: 'बैंकिंग व डीजीपे',
    categoryLabelEn: 'Banking & DigiPay',
    titleHi: 'मनी ट्रांसफर (DMT - देश के किसी भी बैंक में पैसे भेजें)',
    titleEn: 'Domestic Money Transfer (Instant IMPS/NEFT)',
    portal: 'DigiPay / Bank CSP DMT Gateway',
    portalCode: 'DMT-IMPS',
    icon: 'fa-solid fa-money-bill-transfer',
    iconBg: 'bg-blue-100 text-blue-700',
    shortDescHi: 'भारत के किसी भी बैंक खाते में सेकंडों में सुरक्षित पैसे ट्रांसफर करें (24x7 तत्काल IMPS)।',
    shortDescEn: 'Instant 24x7 bank-to-bank money transfer to any account in India with SMS confirmation.',
    requiredDocsHi: ['प्राप्तकर्ता का खाता नंबर', 'IFSC कोड', 'मोबाइल नंबर'],
    requiredDocsEn: ['Beneficiary Account No', 'IFSC Code', 'Mobile Number'],
    estTimeHi: 'तुरंत (1 मिनट)',
    estTimeEn: 'Instant (1 Min)',
    feeHi: 'बैंक नियमानुसार न्यूनतम चार्ज (1%)',
    feeEn: 'Nominal Bank Charge (1%)',
    approxFeeNum: 50,
    popular: true
  },
  {
    id: 'csc-account-opening',
    category: 'banking',
    categoryLabelHi: 'बैंकिंग व डीजीपे',
    categoryLabelEn: 'Banking & DigiPay',
    titleHi: 'नया बैंक खाता खोलना (Savings & Zero Balance)',
    titleEn: 'Bank Savings Account Opening (Video KYC/Bio)',
    portal: 'CSC Banking Partner (HDFC / ICICI / SBI / Airtel)',
    portalCode: 'BANK-AC',
    icon: 'fa-solid fa-piggy-bank',
    iconBg: 'bg-sky-100 text-sky-700',
    shortDescHi: 'जीरो बैलेंस सेविंग्स अकाउंट, तुरंत खाता संख्या, डेबिट कार्ड व मोबाइल बैंकिंग सुविधा।',
    shortDescEn: 'Zero-balance bank savings account with instant account number, debit card & net banking.',
    requiredDocsHi: ['आधार कार्ड', 'पैन कार्ड', 'पासपोर्ट फोटो', 'आधार लिंक मोबाइल'],
    requiredDocsEn: ['Aadhaar Card', 'PAN Card', 'Passport Photo', 'Aadhaar Mobile'],
    estTimeHi: '15 - 20 मिनट',
    estTimeEn: '15 - 20 Mins',
    feeHi: '₹50.00 - ₹100.00 सेवा शुल्क',
    feeEn: '₹50.00 - ₹100.00 Fee',
    approxFeeNum: 80
  },
  {
    id: 'csc-fastag',
    category: 'banking',
    categoryLabelHi: 'बैंकिंग व डीजीपे',
    categoryLabelEn: 'Banking & DigiPay',
    titleHi: 'नया फास्टैग जारी करना व रिचार्ज (NETC FASTag)',
    titleEn: 'FASTag Sale, Activation & Instant Recharge',
    portal: 'NHAI / NPCI FASTag CSC Portal',
    portalCode: 'FASTAG-NETC',
    icon: 'fa-solid fa-car',
    iconBg: 'bg-violet-100 text-violet-700',
    shortDescHi: 'गाड़ी, बस, ट्रक के लिए ओरिजिनल फास्टैग स्टिकर, तुरंत एक्टिवेशन और किसी भी फास्टैग का रिचार्ज।',
    shortDescEn: 'Original FASTag sticker for cars, trucks with instant toll activation and balance recharge.',
    requiredDocsHi: ['गाड़ी की RC (Registration Certificate)', 'मालिक का आधार कार्ड', 'मोबाइल नंबर'],
    requiredDocsEn: ['Vehicle RC', 'Owner Aadhaar Card', 'Mobile Number'],
    estTimeHi: '10 मिनट में एक्टिव',
    estTimeEn: '10 Mins Activation',
    feeHi: '₹100.00 + रिचार्ज राशि',
    feeEn: '₹100.00 + Recharge Amount',
    approxFeeNum: 100
  },
  {
    id: 'csc-pm-mudra',
    category: 'banking',
    categoryLabelHi: 'बैंकिंग व डीजीपे',
    categoryLabelEn: 'Banking & DigiPay',
    titleHi: 'पीएम मुद्रा लोन व KCC (Kisan Credit Card)',
    titleEn: 'PM Mudra Loan & Kisan Credit Card (KCC)',
    portal: 'Udyamimitra / Jan Samarth Portal',
    portalCode: 'JAN-SAMARTH',
    icon: 'fa-solid fa-briefcase',
    iconBg: 'bg-indigo-100 text-indigo-700',
    shortDescHi: 'दुकान, व्यापार व खेती के लिए ₹50,000 से ₹10 लाख तक के सरकारी लोन हेतु ऑनलाइन सहायता व फॉर्म।',
    shortDescEn: 'Jan Samarth portal registration for business Mudra loan (Shishu/Kishor) & KCC agriculture loan.',
    requiredDocsHi: ['आधार कार्ड', 'पैन कार्ड', '6 माह का बैंक स्टेटमेंट', 'दुकान/जमीन का विवरण'],
    requiredDocsEn: ['Aadhaar Card', 'PAN Card', '6-Month Bank Statement', 'Business/Land Proof'],
    estTimeHi: '24 घंटे में फाइलिंग',
    estTimeEn: '24 Hr Filing',
    feeHi: '₹100.00 - ₹150.00',
    feeEn: '₹100.00 - ₹150.00',
    approxFeeNum: 100
  },

  // 3. INSURANCE SERVICES
  {
    id: 'csc-vehicle-insurance',
    category: 'insurance',
    categoryLabelHi: 'सीएससी बीमा सेवा',
    categoryLabelEn: 'CSC Insurance',
    titleHi: 'वाहन बीमा (मोटरसाइकिल, ऑटो, कार व ट्रैक्टर इंश्योरेंस)',
    titleEn: 'Motor Insurance (Bike, Car, Commercial)',
    portal: 'CSC Insurance (IFFCO-TOKIO / HDFC ERGO / Bajaj)',
    portalCode: 'INS-MOTOR',
    icon: 'fa-solid fa-motorcycle',
    iconBg: 'bg-amber-100 text-amber-700',
    shortDescHi: 'ट्रैफिक पुलिस चालान से बचें! 5 मिनट में थर्ड पार्टी या कंप्रिहेंसिव इंश्योरेंस पॉलिसी प्रिंट प्राप्त करें।',
    shortDescEn: 'Save from heavy traffic fines. Instant 3rd party & comprehensive vehicle insurance policy print.',
    requiredDocsHi: ['गाड़ी की RC', 'पुरानी पॉलिसी कॉपी (यदि हो)', 'मालिक का आधार व मोबाइल'],
    requiredDocsEn: ['Vehicle RC', 'Old Policy Copy (if any)', 'Owner Aadhaar & Mobile'],
    estTimeHi: '5 मिनट में पॉलिसी प्रिंट',
    estTimeEn: '5 Mins Instant Policy',
    feeHi: 'कंपनी दर + कोई छिपा शुल्क नहीं',
    feeEn: 'Official Premium Rate',
    approxFeeNum: 50,
    popular: true,
    highlightBadge: '5 Min में पॉलिसी',
    highlightColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'csc-pmjjby-pmsby',
    category: 'insurance',
    categoryLabelHi: 'सीएससी बीमा सेवा',
    categoryLabelEn: 'CSC Insurance',
    titleHi: 'प्रधानमंत्री जीवन ज्योति व सुरक्षा बीमा (PMJJBY / PMSBY)',
    titleEn: 'Govt Micro Insurance (₹2 Lakh Life/Accident)',
    portal: 'Financial Services Dept / National Portal',
    portalCode: 'GOV-INS',
    icon: 'fa-solid fa-user-shield',
    iconBg: 'bg-emerald-100 text-emerald-800',
    shortDescHi: '₹2 लाख का जीवन बीमा सिर्फ ₹436/साल (PMJJBY) और ₹2 लाख दुर्घटना बीमा सिर्फ ₹20/साल (PMSBY)।',
    shortDescEn: 'Govt life insurance of ₹2 lakh at ₹436/yr & accident cover of ₹2 lakh at ₹20/yr.',
    requiredDocsHi: ['आधार कार्ड', 'बैंक पासबुक', 'नॉमिनी का नाम व आधार'],
    requiredDocsEn: ['Aadhaar Card', 'Bank Passbook', 'Nominee Aadhaar Details'],
    estTimeHi: '5 मिनट',
    estTimeEn: '5 Mins',
    feeHi: 'सरकारी प्रीमियम मात्र',
    feeEn: 'Govt Premium Only',
    approxFeeNum: 30
  },
  {
    id: 'csc-crop-insurance',
    category: 'insurance',
    categoryLabelHi: 'सीएससी बीमा सेवा',
    categoryLabelEn: 'CSC Insurance',
    titleHi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY)',
    titleEn: 'PM Fasal Bima Yojana (Crop Loss Cover)',
    portal: 'Ministry of Agriculture (pmfby.gov.in)',
    portalCode: 'PMFBY-CROP',
    icon: 'fa-solid fa-wheat-awn',
    iconBg: 'bg-lime-100 text-lime-800',
    shortDescHi: 'बाढ़, सुखाड़ या प्राकृतिक आपदा में फसल नुकसान पर सरकारी मुआवजा बीमा दावा।',
    shortDescEn: 'Financial compensation for flood, drought, or natural calamity crop damage.',
    requiredDocsHi: ['जमीन की अद्यतन रसीद/LPC', 'फसल बुआई स्व-घोषणा पत्र', 'बैंक पासबुक', 'आधार'],
    requiredDocsEn: ['Current Land Receipt/LPC', 'Sowing Certificate', 'Bank Passbook', 'Aadhaar'],
    estTimeHi: '10 मिनट',
    estTimeEn: '10 Mins',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50
  },

  // 4. TRAVEL & TICKETING
  {
    id: 'csc-irctc-train',
    category: 'travel',
    categoryLabelHi: 'यात्रा व टिकट',
    categoryLabelEn: 'Travel & Ticketing',
    titleHi: 'IRCTC ट्रेन टिकट बुकिंग (कन्फर्म सीट व तत्काल टिकट)',
    titleEn: 'IRCTC Rail Ticket Booking (CSC Agent)',
    portal: 'IRCTC CSC Authorised Rail Portal',
    portalCode: 'IRCTC-CSC',
    icon: 'fa-solid fa-train',
    iconBg: 'bg-blue-100 text-blue-700',
    shortDescHi: 'सीएससी अधिकृत रेलवे टिकट एजेंसी। सामान्य, तत्काल व महिला कोटे की कन्फर्म ट्रेन टिकट बुकिंग।',
    shortDescEn: 'Authorised IRCTC rail ticketing. Confirmed Sleeper, 3AC, 2AC & Tatkal train tickets.',
    requiredDocsHi: ['यात्रियों के नाम, उम्र व लिंग', 'यात्रा की तारीख व स्टेशन', 'आधार कार्ड (पहचान हेतु)'],
    requiredDocsEn: ['Passenger Names, Age, Gender', 'Travel Date & Station', 'ID Proof'],
    estTimeHi: '5 - 10 मिनट में टिकट',
    estTimeEn: '5 - 10 Mins Instant',
    feeHi: 'रेलवे किराया + सीएससी अधिकृत शुल्क',
    feeEn: 'Official Fare + CSC Fee',
    approxFeeNum: 50,
    popular: true,
    highlightBadge: 'IRCTC अधिकृत',
    highlightColor: 'bg-blue-100 text-blue-900'
  },
  {
    id: 'csc-air-bus-ticket',
    category: 'travel',
    categoryLabelHi: 'यात्रा व टिकट',
    categoryLabelEn: 'Travel & Ticketing',
    titleHi: 'हवाई जहाज़ (Flight) व बस टिकट बुकिंग',
    titleEn: 'Flight Ticket & Luxury Bus Booking',
    portal: 'CSC Safar / RedBus Travel Portal',
    portalCode: 'CSC-TRAVEL',
    icon: 'fa-solid fa-plane-departure',
    iconBg: 'bg-sky-100 text-sky-700',
    shortDescHi: 'पटना, गया, दिल्ली, मुंबई, कोलकाता फ्लाइट टिकट व बिहार-झारखंड AC स्लीपर बस टिकट बुकिंग।',
    shortDescEn: 'Cheapest domestic flight tickets & luxury AC sleeper bus seats across Bihar, Delhi, Kolkata.',
    requiredDocsHi: ['यात्री का पूरा नाम (सरकारी आईडी अनुसार)', 'मोबाइल नंबर व ईमेल'],
    requiredDocsEn: ['Passenger Full Name as per ID', 'Mobile & Email'],
    estTimeHi: '5 - 10 मिनट',
    estTimeEn: '5 - 10 Mins',
    feeHi: 'न्यूनतम सुविधा शुल्क (Best Rate)',
    feeEn: 'Lowest Convenience Fee',
    approxFeeNum: 80
  },

  // 5. EDUCATION, LEGAL & CITIZEN UTILITY
  {
    id: 'csc-tele-law',
    category: 'utility',
    categoryLabelHi: 'विधिक व शिक्षा',
    categoryLabelEn: 'Legal & Utility',
    titleHi: 'टेली-लॉ (Tele-Law - मुफ्त कानूनी सलाह सेवा)',
    titleEn: 'Tele-Law (Free Online Legal Consultation)',
    portal: 'Ministry of Law & Justice, Govt of India',
    portalCode: 'TELE-LAW',
    icon: 'fa-solid fa-scale-balanced',
    iconBg: 'bg-purple-100 text-purple-700',
    shortDescHi: 'जमीन विवाद, पारिवारिक मामले, दहेज या आपराधिक मामलों में सुप्रीम कोर्ट/हाई कोर्ट के वकीलों से फ्री सलाह।',
    shortDescEn: 'Free video/voice consultation with Supreme Court & High Court lawyers on legal matters.',
    requiredDocsHi: ['आधार कार्ड', 'केस से संबंधित कागजात (यदि हों)', 'मोबाइल नंबर'],
    requiredDocsEn: ['Aadhaar Card', 'Case Papers (if any)', 'Mobile Number'],
    estTimeHi: 'तुरंत अपॉइंटमेंट बुक',
    estTimeEn: 'Instant Appointment',
    feeHi: 'सरकार द्वारा पूरी तरह मुफ़्त (FREE)',
    feeEn: 'Completely FREE by Govt',
    approxFeeNum: 0,
    popular: true,
    highlightBadge: 'मुफ़्त कानूनी सलाह',
    highlightColor: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'csc-driving-license',
    category: 'utility',
    categoryLabelHi: 'विधिक व शिक्षा',
    categoryLabelEn: 'Legal & Utility',
    titleHi: 'सारथी ड्राइविंग लाइसेंस (लर्निंग व परमानेंट DL फॉर्म)',
    titleEn: 'Driving License (Sarathi Parivahan LL & DL)',
    portal: 'Ministry of Road Transport (Sarathi Parivahan)',
    portalCode: 'SARATHI-DL',
    icon: 'fa-solid fa-id-card',
    iconBg: 'bg-rose-100 text-rose-700',
    shortDescHi: 'लर्निंग लाइसेंस ऑनलाइन टेस्ट स्लॉट बुकिंग, स्थायी ड्राइविंग लाइसेंस, रिन्यूअल व RC पता सुधार।',
    shortDescEn: 'Learning License apply, slot booking, permanent driving license & vehicle RC services.',
    requiredDocsHi: ['आधार कार्ड (मोबाइल लिंक)', '10वीं अंकपत्र या जन्म प्रमाण', 'पासपोर्ट फोटो', 'ब्लड ग्रुप'],
    requiredDocsEn: ['Aadhaar Linked Mobile', '10th Marksheet/Birth Proof', 'Passport Photo', 'Blood Group'],
    estTimeHi: 'तुरंत आवेदन व स्लॉट बुक',
    estTimeEn: 'Instant Apply & Slot',
    feeHi: '₹100.00 + सरकारी चालान',
    feeEn: '₹100.00 + Govt Challan',
    approxFeeNum: 100,
    popular: true
  },
  {
    id: 'csc-passport-seva',
    category: 'utility',
    categoryLabelHi: 'विधिक व शिक्षा',
    categoryLabelEn: 'Legal & Utility',
    titleHi: 'पासपोर्ट सेवा केंद्र आवेदन (Passport Seva Kendra)',
    titleEn: 'Passport Seva Kendra Online Application',
    portal: 'Ministry of External Affairs (passportindia.gov.in)',
    portalCode: 'MEA-PASSPORT',
    icon: 'fa-solid fa-passport',
    iconBg: 'bg-indigo-100 text-indigo-700',
    shortDescHi: 'नया पासपोर्ट आवेदन, तत्काल पासपोर्ट, रिन्यूअल व नवादा/गया/पटना PSK अपॉइंटमेंट स्लॉट बुकिंग।',
    shortDescEn: 'Fresh passport application, Tatkaal passport, appointment slot booking for Gaya/Patna PSK.',
    requiredDocsHi: ['आधार कार्ड', 'पैन कार्ड', '10वीं मार्कशीट / शैक्षिक प्रमाण', 'वोटर कार्ड / बैंक पासबुक'],
    requiredDocsEn: ['Aadhaar Card', 'PAN Card', '10th Marksheet/Degree', 'Voter ID / Bank Passbook'],
    estTimeHi: 'सटीक 100% फॉर्म सबमिशन',
    estTimeEn: 'Accurate Form Submission',
    feeHi: '₹150.00 - ₹200.00 सेवा शुल्क',
    feeEn: '₹150.00 - ₹200.00 Fee',
    approxFeeNum: 150
  },
  {
    id: 'csc-computer-course',
    category: 'utility',
    categoryLabelHi: 'विधिक व शिक्षा',
    categoryLabelEn: 'Legal & Utility',
    titleHi: 'सीएससी कंप्यूटर साक्षरता व BCC/CCC कोर्स',
    titleEn: 'CSC Basic Computer Course (BCC / CCC Cert)',
    portal: 'CSC Academy & NIELIT Certification',
    portalCode: 'CSC-ACADEMY',
    icon: 'fa-solid fa-graduation-cap',
    iconBg: 'bg-teal-100 text-teal-800',
    shortDescHi: 'सरकारी नौकरियों हेतु अधिकृत कंप्यूटर सर्टिफिकेट, बेसिक कंप्यूटर ज्ञान व ऑनलाइन परीक्षा।',
    shortDescEn: 'Govt recognized computer certificate for jobs, basic MS Office training & online exam.',
    requiredDocsHi: ['आधार कार्ड', 'शैक्षणिक मार्कशीट', 'पासपोर्ट फोटो', 'मोबाइल'],
    requiredDocsEn: ['Aadhaar Card', 'Academic Marksheet', 'Passport Photo', 'Mobile'],
    estTimeHi: 'प्रवेश तुरंत',
    estTimeEn: 'Instant Enrollment',
    feeHi: 'सीएससी एकेडमी अधिकृत फीस',
    feeEn: 'CSC Academy Nominal Fee',
    approxFeeNum: 200
  },
  {
    id: 'csc-jeevan-pramaan',
    category: 'utility',
    categoryLabelHi: 'विधिक व शिक्षा',
    categoryLabelEn: 'Legal & Utility',
    titleHi: 'डिजिटल जीवन प्रमाण पत्र (Jeevan Pramaan for Pensioners)',
    titleEn: 'Digital Life Certificate (Jeevan Pramaan)',
    portal: 'Department of Pension & Pensioners Welfare',
    portalCode: 'JEEVAN-PRAMAAN',
    icon: 'fa-solid fa-fingerprint',
    iconBg: 'bg-emerald-100 text-emerald-800',
    shortDescHi: 'पेंशनरों को बैंक/ट्रेजरी जाने की जरूरत नहीं! घर बैठे बायोमेट्रिक से जीवन प्रमाण पत्र जारी व रसीद।',
    shortDescEn: 'No need to visit bank or treasury! Biometric digital life certificate with instant printout.',
    requiredDocsHi: ['आधार कार्ड', 'पेंशन PPO नंबर', 'पेंशन बैंक खाता पासबुक', 'मोबाइल'],
    requiredDocsEn: ['Aadhaar Card', 'PPO Number', 'Pension Bank Passbook', 'Mobile'],
    estTimeHi: '2 मिनट (तुरंत रसीद)',
    estTimeEn: '2 Mins Instant',
    feeHi: '₹50.00 सेवा शुल्क',
    feeEn: '₹50.00 Service Fee',
    approxFeeNum: 50,
    popular: true
  }
];

interface CscServicesListProps {
  currentLang: LanguageKey;
  openBookingModal: (serviceName?: string) => void;
  whatsappNumber: string;
  onPayOnline?: (amount?: number, service?: string) => void;
  onOpenAiChat?: (query?: string) => void;
}

export const CscServicesList: React.FC<CscServicesListProps> = ({
  currentLang,
  openBookingModal,
  whatsappNumber,
  onPayOnline,
  onOpenAiChat
}) => {
  const isEnglish = currentLang === 'en' || currentLang === 'hinglish';
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'g2c' | 'banking' | 'insurance' | 'travel' | 'utility'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDocsId, setExpandedDocsId] = useState<string | null>(null);

  // Count items per category
  const counts = useMemo(() => {
    return {
      all: CSC_SERVICES_DATA.length,
      g2c: CSC_SERVICES_DATA.filter(i => i.category === 'g2c').length,
      banking: CSC_SERVICES_DATA.filter(i => i.category === 'banking').length,
      insurance: CSC_SERVICES_DATA.filter(i => i.category === 'insurance').length,
      travel: CSC_SERVICES_DATA.filter(i => i.category === 'travel').length,
      utility: CSC_SERVICES_DATA.filter(i => i.category === 'utility').length,
    };
  }, []);

  // Filtered list based on tab and search
  const filteredServices = useMemo(() => {
    return CSC_SERVICES_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      return (
        item.titleHi.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.portal.toLowerCase().includes(q) ||
        item.portalCode.toLowerCase().includes(q) ||
        item.shortDescHi.toLowerCase().includes(q) ||
        item.shortDescEn.toLowerCase().includes(q) ||
        item.requiredDocsHi.some(d => d.toLowerCase().includes(q)) ||
        item.requiredDocsEn.some(d => d.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const toggleDocs = (id: string) => {
    setExpandedDocsId(prev => prev === id ? null : id);
  };

  return (
    <div id="csc-services" className="pt-8 pb-16">
      
      {/* CSC Header Showcase */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white border border-blue-800/40 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30">
                CSC
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    डिजिटल सेवा केंद्र (CSC Digital Seva)
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    ऑथराइज्ड VLE सेंटर
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                  विश्वकर्मा इंटरनेट कैफ़े सिरदला • कॉमन सर्विस सेंटर (CSC E-Governance Services India)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenAiChat?.()}
                className="flex items-center gap-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-orange-300 px-4 py-2 rounded-2xl shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-300"
              >
                <Bot className="w-4 h-4 text-slate-950" />
                <span>CSC AI सहायक से पूछें</span>
                <span className="bg-slate-950 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-bold">24x7</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-2 rounded-2xl">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>कुल <strong className="text-amber-400">{CSC_SERVICES_DATA.length}+</strong> आधिकारिक सेवाएँ उपलब्ध</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            भारत सरकार (MeitY) एवं बिहार सरकार की सभी जन कल्याणकारी, बैंकिंग, राशन कार्ड, आय-जाति-निवास, पीएम किसान, आयुष्मान कार्ड व रेलवे टिकट सेवाएँ अब एक ही छत के नीचे 100% सही व त्वरित गति से प्राप्त करें।
          </p>

          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>बायोमेट्रिक फिंगरप्रिंट e-KYC</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/50">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>हाथों-हाथ मूल प्लास्टिक कार्ड (PVC)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/50">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% सरकारी चालान व रसीद</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-700/50">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>सिरदला बाजार में तत्काल सुविधा</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSC AI Assistant Interactive Help Banner */}
      <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 rounded-3xl p-5 sm:p-6 border border-amber-300/80 shadow-md mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  CSC AI सहायक: किसी भी सेवा की तुरंत जानकारी पाएं
                </h4>
                <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  AI Live
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                राशन कार्ड, दाखिल-खारिज, ई-श्रम, आयुष्मान कार्ड, पेंशन या IRCTC टिकट के आवश्यक कागजात व नियम AI से पूछें।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenAiChat?.()}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-black text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0 active:scale-95 cursor-pointer"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span>AI चैटबॉट खोलें</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-amber-300 font-bold">LIVE</span>
          </button>
        </div>

        {/* Quick prompt suggestions */}
        <div className="mt-4 pt-3 border-t border-amber-200/60 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-amber-950 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>त्वरित सवाल:</span>
          </span>
          {[
            'राशन कार्ड कैसे बनवाएं?',
            'दाखिल खारिज के कागजात?',
            'आयुष्मान 5 लाख कार्ड लाभ?',
            'ई-श्रम 2 लाख बीमा?',
            'ट्रेन तत्काल टिकट समय?'
          ].map((q, qIdx) => (
            <button
              key={qIdx}
              type="button"
              onClick={() => onOpenAiChat?.(q)}
              className="text-xs font-bold bg-white text-slate-800 hover:bg-amber-500 hover:text-slate-950 border border-amber-200 px-3 py-1.5 rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="CSC सेवा खोजें (उदा. राशन कार्ड, आय, किसान, AePS, IRCTC)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs hover:bg-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Result Counter */}
          <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 self-end md:self-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>दिखाई जा रही सेवाएँ: </span>
            <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-black">
              {filteredServices.length}
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 mt-2 border-t border-slate-100 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>सभी CSC सेवाएँ</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'}`}>
              {counts.all}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('g2c')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'g2c'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>सरकारी सेवाएँ (G2C Govt)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'g2c' ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-900'}`}>
              {counts.g2c}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('banking')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'banking'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>बैंकिंग व डीजीपे (DigiPay AePS)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'banking' ? 'bg-white/20 text-white' : 'bg-emerald-200 text-emerald-900'}`}>
              {counts.banking}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('insurance')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'insurance'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>बीमा सेवाएँ (Insurance)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'insurance' ? 'bg-white/20 text-white' : 'bg-amber-200 text-amber-900'}`}>
              {counts.insurance}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('travel')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'travel'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30 scale-105'
                : 'bg-cyan-50 text-cyan-900 hover:bg-cyan-100'
            }`}
          >
            <Train className="w-3.5 h-3.5" />
            <span>ट्रेन व यात्रा (IRCTC/Travel)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'travel' ? 'bg-white/20 text-white' : 'bg-cyan-200 text-cyan-900'}`}>
              {counts.travel}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('utility')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === 'utility'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105'
                : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>विधिक व शिक्षा (Legal/DL/Edu)</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === 'utility' ? 'bg-white/20 text-white' : 'bg-purple-200 text-purple-900'}`}>
              {counts.utility}
            </span>
          </button>
        </div>
      </div>

      {/* Services Grid (2 Columns on Medium, 3 Columns on Large) */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
          <Info className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-slate-800 mb-1">कोई सेवा नहीं मिली</h4>
          <p className="text-sm text-slate-500 mb-4">
            '{searchQuery}' के लिए कोई परिणाम नहीं है। कृपया दूसरा नाम खोजें या 'सभी सेवाएँ' चुनें।
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700"
          >
            सभी CSC सेवाएँ देखें
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((item) => {
            const isDocsOpen = expandedDocsId === item.id;
            const title = isEnglish ? item.titleEn : item.titleHi;
            const desc = isEnglish ? item.shortDescEn : item.shortDescHi;
            const fee = isEnglish ? item.feeEn : item.feeHi;
            const time = isEnglish ? item.estTimeEn : item.estTimeHi;
            const docs = isEnglish ? item.requiredDocsEn : item.requiredDocsHi;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  item.category === 'g2c' ? 'bg-blue-500' :
                  item.category === 'banking' ? 'bg-emerald-500' :
                  item.category === 'insurance' ? 'bg-amber-500' :
                  item.category === 'travel' ? 'bg-cyan-500' : 'bg-purple-500'
                }`}></div>

                <div>
                  {/* Card Header: Icon + Badge + Portal */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform`}>
                      <i className={item.icon}></i>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {item.highlightBadge && (
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${item.highlightColor || 'bg-blue-100 text-blue-800'} border border-black/5`}>
                          ★ {item.highlightBadge}
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                        {item.portalCode}
                      </span>
                    </div>
                  </div>

                  {/* Title & Portal */}
                  <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                    {title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.portal}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {desc}
                  </p>

                  {/* Pricing & Time Badges */}
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">
                        ₹
                      </span>
                      <span className="font-extrabold text-slate-800">{fee}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{time}</span>
                    </div>
                  </div>

                  {/* Collapsible Required Documents Accordion */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleDocs(item.id)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100/70 hover:bg-slate-100 text-[11px] font-bold text-slate-700 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>आवश्यक दस्तावेज़ ({docs.length})</span>
                      </span>
                      {isDocsOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>

                    {isDocsOpen && (
                      <div className="mt-2 p-3 rounded-2xl bg-blue-50/50 border border-blue-100 text-[11px] space-y-1.5 animate-fadeIn">
                        <span className="block font-bold text-blue-900 text-[10px] uppercase tracking-wide">
                          कैफ़े लाते समय आवश्यक दस्तावेज़:
                        </span>
                        <ul className="space-y-1">
                          {docs.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-1.5 text-slate-700 font-medium">
                              <span className="text-emerald-600 font-bold shrink-0">✓</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openBookingModal(title)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-xs text-center transition-colors shadow-xs active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>आवेदन करें</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenAiChat?.(`${title} के आवश्यक कागजात, सरकारी नियम और दुकान पर बनवाने की क्या प्रक्रिया है?`)}
                    className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-500 text-amber-800 hover:text-slate-950 transition-colors border border-amber-200 flex items-center justify-center cursor-pointer group/aibtn"
                    title="इस सेवा के बारे में AI से पूछें"
                  >
                    <Bot className="w-4 h-4 text-amber-700 group-hover/aibtn:text-slate-950" />
                  </button>

                  {onPayOnline && (
                    <button
                      type="button"
                      onClick={() => onPayOnline(item.approxFeeNum > 0 ? item.approxFeeNum : 50, title)}
                      className="px-2.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-black text-xs transition-colors border border-emerald-200 flex items-center gap-1 cursor-pointer"
                      title="UPI से फीस जमा करें"
                    >
                      <i className="fa-solid fa-qrcode text-[11px]"></i>
                      <span className="hidden sm:inline">पे</span>
                    </button>
                  )}

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`नमस्ते, मुझे "${title}" (CSC सेवा) के बारे में जानकारी और ऑनलाइन आवेदन करवाना है। कृपया जरूरी दस्तावेज बताएं।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-200 flex items-center justify-center"
                    title="WhatsApp पर पूछें"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CSC Helplines & Direct Support Banner */}
      <div className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-blue-600/30">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div>
            <h4 className="text-lg font-black text-white">क्या आप किसी विशेष CSC सेवा के बारे में पूछना चाहते हैं?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              सिरदला बाजार में हमारी दुकान पर आएं या सीधे फोन/व्हाट्सएप पर सहायता प्राप्त करें।
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={() => openBookingModal('CSC Digital Seva Inquiry')}
            className="flex-1 md:flex-initial px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>ऑनलाइन पूछताछ फॉर्म</span>
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('नमस्ते विश्वकर्मा इंटरनेट कैफ़े, मुझे CSC डिजिटल सेवा केंद्र की सेवाओं के बारे में जानकारी चाहिए।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>WhatsApp चैट</span>
          </a>
        </div>
      </div>

    </div>
  );
};

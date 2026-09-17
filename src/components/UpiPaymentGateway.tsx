import React, { useState, useEffect, useRef } from 'react';
import { 
  QrCode, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone, 
  Receipt, 
  Printer, 
  Share2, 
  Sparkles, 
  ArrowRight,
  Info,
  CheckCircle2,
  RefreshCw,
  Clock,
  Lock,
  X
} from 'lucide-react';
import QRCode from 'qrcode';
import { TRANSLATIONS, LanguageKey } from '../translations';

interface UpiPaymentGatewayProps {
  currentLang: LanguageKey;
  defaultAmount?: number;
  defaultService?: string;
  whatsappNumber?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const PRESET_AMOUNTS = [
  { amount: 20, label: '₹20', desc: 'फोटो / लेमिनेशन / ज़ेरॉक्स' },
  { amount: 50, label: '₹50', desc: 'ऑनलाइन फॉर्म / एडमिट कार्ड' },
  { amount: 100, label: '₹100', desc: 'सरकारी परीक्षा फॉर्म / पैन कार्ड' },
  { amount: 200, label: '₹200', desc: 'PVC स्मार्ट कार्ड / सुधार' },
  { amount: 500, label: '₹500', desc: 'BSNL फाइबर बिल / डिपॉजिट' },
  { amount: 1000, label: '₹1000', desc: 'एडवांस / कॉम्बो कार्य' },
];

const PRESET_SERVICES = [
  'ऑनलाइन फॉर्म आवेदन शुल्क (Online Form Fee)',
  'नया पैन कार्ड / पैन सुधार शुल्क (PAN Card)',
  'PVC स्मार्ट कार्ड (Aadhaar / Ayushman Card)',
  'कलर प्रिंटिंग व ज़ेरॉक्स शुल्क (Printing & Xerox)',
  'BSNL भारत फाइबर बिल भुगतान (BSNL Fiber Bill)',
  'आय, जाति व निवास प्रमाण पत्र (Govt Certificates)',
  'आधार बैंकिंग नकद निकासी शुल्क (AePS Banking)',
  'अन्य डिजिटल सेवा शुल्क (Other Service)'
];

export const UpiPaymentGateway: React.FC<UpiPaymentGatewayProps> = ({
  currentLang,
  defaultAmount = 50,
  defaultService = 'ऑनलाइन फॉर्म आवेदन शुल्क (Online Form Fee)',
  whatsappNumber = '917903027843',
  isModal = false,
  onClose
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.hi;
  const MERCHANT_UPI = '7903027843@okbizaxis';
  const MERCHANT_NAME = 'Vishwakarma Internet Cafe';
  const MERCHANT_MOBILE = '+91 7903027843';

  // State
  const [amount, setAmount] = useState<number | string>(defaultAmount);
  const [customAmountActive, setCustomAmountActive] = useState(false);
  const [servicePurpose, setServicePurpose] = useState<string>(defaultService);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isGeneratingQr, setIsGeneratingQr] = useState(false);
  const [qrExpirySeconds, setQrExpirySeconds] = useState(300); // 5 minutes validity
  const [activeTab, setActiveTab] = useState<'qr' | 'apps' | 'verify' | 'receipt'>('qr');
  const [receipt, setReceipt] = useState<{
    id: string;
    date: string;
    time: string;
    amount: number;
    purpose: string;
    customerName: string;
    customerPhone: string;
    utrNumber: string;
  } | null>(null);

  const receiptRef = useRef<HTMLDivElement>(null);

  // Sync default values when changed from outside
  useEffect(() => {
    if (defaultAmount) {
      setAmount(defaultAmount);
      const isPreset = PRESET_AMOUNTS.some(p => p.amount === defaultAmount);
      setCustomAmountActive(!isPreset);
    }
    if (defaultService) {
      setServicePurpose(defaultService);
    }
  }, [defaultAmount, defaultService]);

  // Generate UPI URI
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) || 0 : amount;
  const upiTransactionNote = `${servicePurpose || 'Online Service Fee'}${customerName ? ' - ' + customerName : ''}`.slice(0, 50);
  
  // Standard NPCI UPI URI Scheme
  const upiString = `upi://pay?pa=${MERCHANT_UPI}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${numericAmount > 0 ? numericAmount.toFixed(2) : ''}&cu=INR&tn=${encodeURIComponent(upiTransactionNote)}`;

  // Generate QR Code with qrcode library
  useEffect(() => {
    let isMounted = true;
    setIsGeneratingQr(true);

    QRCode.toDataURL(upiString, {
      width: 360,
      margin: 2,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (isMounted) {
          setQrCodeUrl(url);
          setIsGeneratingQr(false);
          setQrExpirySeconds(300); // reset 5-minute timer
        }
      })
      .catch((err) => {
        console.error('QR Code Generation Error:', err);
        if (isMounted) {
          setIsGeneratingQr(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [upiString]);

  // Countdown timer for QR validity
  useEffect(() => {
    const timer = setInterval(() => {
      setQrExpirySeconds((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Copy UPI ID to Clipboard
  const handleCopyUpi = () => {
    navigator.clipboard.writeText(MERCHANT_UPI).then(() => {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    });
  };

  // Verify and Generate Receipt
  const handleGenerateReceipt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!utrNumber.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('hi-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString('hi-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const newReceipt = {
      id: `VIC-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
      date: formattedDate,
      time: formattedTime,
      amount: numericAmount,
      purpose: servicePurpose,
      customerName: customerName.trim() || 'ग्राहक (Customer)',
      customerPhone: customerPhone.trim() || '-',
      utrNumber: utrNumber.trim(),
    };

    setReceipt(newReceipt);
    setActiveTab('receipt');
  };

  // Print Receipt
  const handlePrintReceipt = () => {
    window.print();
  };

  // Share Receipt on WhatsApp
  const handleShareOnWhatsApp = () => {
    if (!receipt) return;
    const msg = `*विश्वकर्मा इंटरनेट कैफ़े - भुगतान सूचना*\n` +
      `------------------------------------\n` +
      `रसीद संख्या: ${receipt.id}\n` +
      `तारीख: ${receipt.date} (${receipt.time})\n` +
      `ग्राहक नाम: ${receipt.customerName}\n` +
      `मोबाइल: ${receipt.customerPhone}\n` +
      `सेवा / कार्य: ${receipt.purpose}\n` +
      `भुगतान राशि: ₹${receipt.amount}\n` +
      `UPI ID: ${MERCHANT_UPI}\n` +
      `UTR / Ref No: ${receipt.utrNumber}\n` +
      `स्थिति: भुगतान सफल (Verified)\n` +
      `------------------------------------\n` +
      `सिरदला, नवादा (बिहार) - Vishwakarma Internet Cafe`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Container wrapper styling
  const content = (
    <div className={`bg-white rounded-3xl ${isModal ? 'p-6 sm:p-8 max-w-3xl w-full max-h-[92vh] overflow-y-auto' : 'p-6 sm:p-10 shadow-xl border border-slate-200/80'}`}>
      
      {/* Header bar */}
      <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.paymentTag}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
              NPCI UPI 2.0 Verified
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.paymentTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            {t.paymentSubtitle}
          </p>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close Payment Modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Merchant VPA & Trust Card */}
      <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-lg relative overflow-hidden">
        {/* Background decorative patterns */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"></div>
        <div className="absolute right-6 top-4 opacity-15 hidden sm:block">
          <i className="fa-brands fa-google-pay text-6xl"></i>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                मर्चेंट खाता (Official Merchant VPA)
              </span>
              <span className="px-2 py-0.2 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-bold border border-emerald-400/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Axis Bank Active
              </span>
            </div>
            
            <div className="text-xl sm:text-2xl font-black text-white mt-1 font-mono tracking-wide">
              {MERCHANT_UPI}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1.5">
              <span><strong>नाम:</strong> {MERCHANT_NAME}</span>
              <span>•</span>
              <span><strong>मोबाइल:</strong> {MERCHANT_MOBILE}</span>
            </div>
          </div>

          <button
            onClick={handleCopyUpi}
            type="button"
            className="self-start sm:self-center flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs transition-all border border-white/20 shadow-sm backdrop-blur-sm"
          >
            {copiedUpi ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">{t.paymentCopiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-300" />
                <span>{t.paymentCopyBtn}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Step 1: Select Amount & Service Purpose */}
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. {t.paymentAmountLabel} *
          </label>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {PRESET_AMOUNTS.map((item) => {
              const isSelected = !customAmountActive && numericAmount === item.amount;
              return (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => {
                    setAmount(item.amount);
                    setCustomAmountActive(false);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm ring-2 ring-blue-600/30'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80 text-slate-700'
                  }`}
                >
                  <span className="block text-base sm:text-lg font-black">{item.label}</span>
                  <span className="block text-[10px] text-slate-500 truncate mt-0.5" title={item.desc}>
                    {item.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom Amount Input */}
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCustomAmountActive(true)}
              className={`text-xs font-bold px-3 py-2 rounded-xl transition-all border ${
                customAmountActive
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {t.paymentCustomAmount}
            </button>

            {customAmountActive && (
              <div className="flex-1 relative max-w-xs animate-fadeIn">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-base">
                  ₹
                </span>
                <input
                  type="number"
                  min="1"
                  max="50000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="राशि दर्ज करें (जैसे 150)"
                  className="w-full pl-8 pr-4 py-2 rounded-xl border border-blue-400 bg-blue-50/30 font-bold text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            )}
          </div>
        </div>

        {/* Purpose of Payment */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            2. {t.paymentServiceLabel}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <select
              value={servicePurpose}
              onChange={(e) => setServicePurpose(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {PRESET_SERVICES.map((srv, idx) => (
                <option key={idx} value={srv}>
                  {srv}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="ग्राहक का नाम / रोल नंबर / नोट (वैकल्पिक)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Tabs: QR Code vs Mobile Apps vs Verification / Receipt */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2 p-1 bg-slate-100/90 rounded-2xl mb-6 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'qr'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>QR कोड स्कैन</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('apps')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'apps'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>1-Click UPI ऐप्स</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('verify')}
            className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'verify' || activeTab === 'receipt'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>पक्की रसीद</span>
          </button>
        </div>

        {/* Tab 1: QR Code Scanner */}
        {activeTab === 'qr' && (
          <div className="max-w-md mx-auto text-center animate-fadeIn space-y-4">
            
            <div className="bg-gradient-to-b from-slate-50 to-blue-50/40 p-6 rounded-3xl border-2 border-dashed border-blue-300 relative inline-block shadow-sm">
              
              {/* Dynamic QR Display */}
              <div className="relative bg-white p-3 rounded-2xl shadow-md border border-slate-200 inline-block">
                {isGeneratingQr ? (
                  <div className="w-64 h-64 flex items-center justify-center text-slate-400">
                    <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
                  </div>
                ) : qrCodeUrl ? (
                  <div className="relative">
                    <img
                      src={qrCodeUrl}
                      alt={`UPI QR Code for ${MERCHANT_UPI} amount ${numericAmount}`}
                      className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-xl"
                    />
                    
                    {/* Centered Brand / UPI Badge */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-lg border-2 border-blue-600 flex items-center justify-center p-1">
                        <span className="font-black text-blue-700 text-xs tracking-tighter leading-tight text-center">
                          VIC<br/><span className="text-[8px] text-emerald-600 font-bold">UPI</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center text-sm text-red-500">
                    QR कोड लोड नहीं हो सका
                  </div>
                )}

                {/* Amount Stamp on QR */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>देय राशि (Pay Amount):</span>
                  <span className="text-base text-blue-700 font-black">
                    ₹{numericAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Timer and Validity */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>QR कोड वैधता:</span>
                <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                  {formatTimer(qrExpirySeconds)}
                </span>
              </div>
            </div>

            {/* Supported payment apps logos */}
            <div>
              <p className="text-xs text-slate-500 font-semibold mb-2">
                {t.paymentScanSubtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-200">
                  <i className="fa-brands fa-google-pay text-base text-blue-600"></i> Google Pay
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-200">
                  <span className="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black">पे</span> PhonePe
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-200">
                  <span className="text-cyan-600 font-black text-xs">Paytm</span>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-200">
                  BHIM UPI
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                  Any Bank App
                </span>
              </div>
            </div>

            {/* Next step to get receipt */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between gap-3 text-left">
              <div>
                <span className="font-bold block">पेमेंट पूरा करने के बाद?</span>
                <span className="text-slate-600 text-[11px]">UTR / Ref No डालकर अपनी पक्की डिजिटल रसीद प्राप्त करें।</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('verify')}
                className="px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs whitespace-nowrap hover:bg-emerald-700 transition-colors shadow-xs"
              >
                रसीद लें &rarr;
              </button>
            </div>

          </div>
        )}

        {/* Tab 2: 1-Click Mobile UPI App Launch */}
        {activeTab === 'apps' && (
          <div className="max-w-lg mx-auto animate-fadeIn space-y-4">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span>मोबाइल उपयोगकर्ताओं के लिए 1-क्लिक भुगतान</span>
              </div>
              <p className="text-slate-600">
                नीचे दिए गए किसी भी ऐप बटन पर क्लिक करें। आपका UPI ऐप सीधे <strong>₹{numericAmount}</strong> के साथ <strong>{MERCHANT_UPI}</strong> पर खुल जाएगा।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Google Pay */}
              <a
                href={upiString}
                className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 flex items-center justify-between group transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    <i className="fa-brands fa-google-pay text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-900">Google Pay</span>
                    <span className="text-[11px] text-slate-500">GPay से सीधे पे करें</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>

              {/* PhonePe */}
              <a
                href={upiString}
                className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 flex items-center justify-between group transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                    पे
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-900">PhonePe</span>
                    <span className="text-[11px] text-slate-500">PhonePe से सीधे पे करें</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Paytm */}
              <a
                href={upiString}
                className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 flex items-center justify-between group transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    Paytm
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-900">Paytm UPI</span>
                    <span className="text-[11px] text-slate-500">पेटीएम वॉलेट या बैंक</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Generic UPI */}
              <a
                href={upiString}
                className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 flex items-center justify-between group transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    UPI
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-900">कौनों भी UPI ऐप</span>
                    <span className="text-[11px] text-slate-500">BHIM, Cred, Amazon Pay</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Direct Copy VPA Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  यदि ऐप स्वतः न खुले तो UPI ID कॉपी करें:
                </span>
                <span className="text-sm font-black text-slate-900 font-mono">
                  {MERCHANT_UPI}
                </span>
              </div>
              <button
                onClick={handleCopyUpi}
                type="button"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-blue-600 transition-colors shrink-0"
              >
                {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedUpi ? 'कॉपी हो गया' : 'कॉपी करें'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Verification & Receipt Form */}
        {activeTab === 'verify' && (
          <div className="max-w-md mx-auto animate-fadeIn">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-4">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Info className="w-4 h-4 text-amber-600" />
                <span>{t.paymentVerifyTitle}</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                भुगतान सफल होने पर आपके Google Pay / PhonePe स्क्रीन पर 12-अंकों का <strong>UTR / UPI Ref Number</strong> आता है (उदा: 426178923401)। उसे यहाँ दर्ज करें।
              </p>
            </div>

            <form onSubmit={handleGenerateReceipt} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  12-अंक का UTR / UPI Reference Number *
                </label>
                <input
                  type="text"
                  required
                  pattern="[0-9]{10,16}"
                  placeholder="उदा: 426178923401"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 font-mono font-bold text-slate-900 text-base tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  आपके UPI ऐप के ट्रांजेक्शन डिटेल में 12 डिजिट नंबर मिलता है।
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    ग्राहक का नाम *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="आपका पूरा नाम"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    मोबाइल नंबर *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-अंकों का मोबाइल"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
                <span>पुष्टि राशि: <strong>₹{numericAmount.toFixed(2)}</strong></span>
                <span className="truncate max-w-[180px]">सेवा: <strong>{servicePurpose}</strong></span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.paymentVerifyBtn}</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: Verified Digital Receipt */}
        {activeTab === 'receipt' && receipt && (
          <div className="max-w-lg mx-auto animate-fadeIn space-y-4">
            
            {/* Printable Digital Receipt Card */}
            <div
              ref={receiptRef}
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-500 shadow-xl relative overflow-hidden text-slate-800"
            >
              {/* Paid Watermark Stamp */}
              <div className="absolute right-4 top-4 border-2 border-emerald-600 text-emerald-600 font-black text-xs px-3 py-1 rounded-lg rotate-[-8deg] uppercase tracking-wider bg-emerald-50/80 shadow-xs">
                ✓ VERIFIED & PAID
              </div>

              {/* Receipt Header */}
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    V
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-slate-900 leading-tight">
                      {MERCHANT_NAME}
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      मुख्य बाज़ार, सिरदला, नवादा (बिहार) - 805127
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Summary Grid */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">रसीद संख्या (Receipt No):</span>
                  <span className="font-mono font-bold text-slate-900">{receipt.id}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">दिनांक व समय (Date & Time):</span>
                  <span className="font-semibold text-slate-800">{receipt.date}, {receipt.time}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">ग्राहक का नाम (Payer):</span>
                  <span className="font-bold text-slate-900">{receipt.customerName}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">मोबाइल (Mobile):</span>
                  <span className="font-mono font-semibold text-slate-800">{receipt.customerPhone}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">सेवा / कार्य (Service):</span>
                  <span className="font-bold text-slate-900 text-right max-w-[200px]">{receipt.purpose}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">मर्चेंट UPI ID:</span>
                  <span className="font-mono font-bold text-blue-600">{MERCHANT_UPI}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">UTR / UPI Ref Number:</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {receipt.utrNumber}
                  </span>
                </div>

                {/* Big Paid Amount Box */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between mt-4">
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
                      कुल प्राप्त राशि (Total Paid)
                    </span>
                    <span className="text-xs text-emerald-400 font-bold">
                      0% सुविधा शुल्क
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                    ₹{receipt.amount.toFixed(2)}
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-slate-400 text-center">
                  यह कंप्यूटर जनित डिजिटल रसीद है। किसी भी असुविधा पर संपर्क करें: +91 7903027843
                </div>
              </div>

            </div>

            {/* Receipt Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrintReceipt}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>{t.paymentDownloadReceipt}</span>
              </button>

              <button
                type="button"
                onClick={handleShareOnWhatsApp}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>व्हाट्सएप पर भेजें</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setUtrNumber('');
                  setActiveTab('qr');
                }}
                className="text-xs text-blue-600 hover:underline font-bold"
              >
                &larr; दूसरा नया भुगतान करें (Pay Another)
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Trust Footer Notice */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.paymentZeroFee}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span>मर्चेंट आईडी: 7903027843@okbizaxis</span>
        </div>
      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
        {content}
      </div>
    );
  }

  return (
    <section id="payment" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};

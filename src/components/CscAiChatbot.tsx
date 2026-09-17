import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Bot, 
  User, 
  Sparkles, 
  RotateCcw, 
  PhoneCall, 
  ExternalLink, 
  Copy, 
  Check, 
  Maximize2, 
  Minimize2, 
  Mic, 
  MicOff,
  FileText,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    type: 'booking' | 'whatsapp' | 'call';
    label: string;
    value: string;
  };
}

interface CscAiChatbotProps {
  openBookingModal: (serviceName?: string) => void;
  whatsappNumber: string;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  preloadQuery?: string;
}

const POPULAR_CSC_PROMPTS = [
  { icon: '🌾', label: 'नया राशन कार्ड के कागजात', query: 'नया राशन कार्ड बनवाने के लिए क्या-क्या कागजात और नियम हैं?' },
  { icon: '📜', label: 'दाखिल खारिज व लगान रसीद', query: 'दाखिल खारिज और ऑनलाइन जमीन की लगान रसीद कैसे कटेगी?' },
  { icon: '🏥', label: 'आयुष्मान कार्ड (5 लाख इलाज)', query: 'आयुष्मान भारत कार्ड कैसे बनेगा और इसका लाभ कैसे मिलेगा?' },
  { icon: '👷', label: 'ई-श्रम कार्ड व 2 लाख बीमा', query: 'ई-श्रम कार्ड बनाने के फायदे और आवश्यक डॉक्यूमेंट क्या हैं?' },
  { icon: '👵', label: 'वृद्धा व विधवा पेंशन', query: 'मुख्यमंत्री वृद्धजन और विधवा पेंशन के लिए कौन से कागजात चाहिए?' },
  { icon: '🚆', label: 'IRCTC तत्काल टिकट टाइमिंग', query: 'ट्रेन की तत्काल टिकट का समय क्या है और कैसे बुकिंग होगी?' },
  { icon: '🏍️', label: 'गाड़ी व बाइक बीमा (5 Min)', query: 'बाइक का इंश्योरेंस कितने समय में बनेगा और चालान से कैसे बचें?' },
  { icon: '⚖️', label: 'टेली-लॉ (मुफ़्त वकील सलाह)', query: 'टेली-लॉ (Tele-Law) से मुफ़्त कानूनी सलाह कैसे ले सकते हैं?' }
];

const INITIAL_GREETING = `🙏 **नमस्कार! मैं विश्वकर्मा सीएससी एआई सहायक हूँ।**

सिरदला के विश्वकर्मा इंटरनेट कैफ़े व सीएससी डिजिटल सेवा केंद्र की ओर से आपका स्वागत है!
आप मुझसे किसी भी सरकारी योजना या सीएससी सेवा के बारे में पूछ सकते हैं:

• **राशन कार्ड** (नया आवेदन, नाम जोड़ना)
• **बिहार भूमि** (दाखिल-खारिज, ऑनलाइन लगान रसीद, परिमार्जन)
• **आयुष्मान कार्ड** (₹5 लाख मुफ़्त इलाज)
• **ई-श्रम कार्ड** व **सामाजिक पेंशन**
• **IRCTC ट्रेन टिकट** व **बाइक इंश्योरेंस**

नीचे दिए गए सुझावों में से चुनें या अपना सवाल टाइप करें!`;

export const CscAiChatbot: React.FC<CscAiChatbotProps> = ({
  openBookingModal,
  whatsappNumber,
  isOpenExternal,
  onCloseExternal,
  preloadQuery
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      text: INITIAL_GREETING,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Sync external open request
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
      if (isOpenExternal) {
        setHasUnread(false);
      }
    }
  }, [isOpenExternal]);

  // Handle preload query from service cards
  useEffect(() => {
    if (preloadQuery && preloadQuery.trim()) {
      setIsOpen(true);
      handleSendMessage(preloadQuery.trim());
    }
  }, [preloadQuery]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Voice recognition support setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'hi-IN';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputMessage(transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('आपके ब्राउज़र में आवाज़ पहचान (Voice Input) की सुविधा उपलब्ध नहीं है। कृपया टाइप करें।');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
        setIsListening(false);
      }
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history for context
      const historyPayload = newMessages.slice(-6).map((m) => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch('/api/csc-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: query,
          conversationHistory: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || 'माफ़ करें, जानकारी प्राप्त नहीं हो सकी। कृपया सीधे कॉल या व्हाट्सएप 7903027843 पर संपर्क करें।';

      // Detect relevant action based on query
      let action: ChatMessage['suggestedAction'] = undefined;
      const lowerQ = query.toLowerCase();
      if (lowerQ.includes('राशन') || lowerQ.includes('ration')) {
        action = { type: 'booking', label: 'राशन कार्ड के लिए आवेदन फॉर्म भरें', value: 'नया राशन कार्ड (CSC Ration Card)' };
      } else if (lowerQ.includes('दाखिल') || lowerQ.includes('लगान') || lowerQ.includes('bhumi')) {
        action = { type: 'booking', label: 'दाखिल खारिज / लगान रसीद सेवा चुनें', value: 'दाखिल खारिज व लगान रसीद (Bihar Bhumi)' };
      } else if (lowerQ.includes('आयुष्मान') || lowerQ.includes('ayushman')) {
        action = { type: 'booking', label: 'आयुष्मान कार्ड के लिए अपॉइंटमेंट लें', value: 'आयुष्मान भारत कार्ड (5 लाख मुफ़्त इलाज)' };
      } else if (lowerQ.includes('श्रम') || lowerQ.includes('shram')) {
        action = { type: 'booking', label: 'ई-श्रम कार्ड के लिए आवेदन करें', value: 'ई-श्रम कार्ड पंजीकरण व सुधार' };
      } else if (lowerQ.includes('ट्रेन') || lowerQ.includes('ticket')) {
        action = { type: 'booking', label: 'ट्रेन टिकट बुकिंग का अनुरोध भेजें', value: 'IRCTC ट्रेन टिकट बुकिंग (तत्काल व सामान्य)' };
      } else if (lowerQ.includes('बीमा') || lowerQ.includes('insurance') || lowerQ.includes('गाड़ी')) {
        action = { type: 'booking', label: 'गाड़ी बीमा तुरंत बनवाएं', value: 'गाड़ी व बाइक बीमा (Motor Insurance)' };
      } else {
        action = { type: 'whatsapp', label: 'कन्हैया विश्वकर्मा से व्हाट्सएप पर बात करें', value: query };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: action
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: `🙏 सिरदला के विश्वकर्मा इंटरनेट कैफ़े व सीएससी केंद्र पर यह सेवा उपलब्ध है।
आवश्यक कागजात और तुरंत काम के लिए आप सीधे प्रो. कन्हैया विश्वकर्मा से संपर्क कर सकते हैं:
📞 **7903027843** (कॉल व व्हाट्सएप)
📍 ब्लॉक रोड, सिरदला (नवादा, बिहार)`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'call',
          label: 'सीधे कॉल करें (7903027843)',
          value: '7903027843'
        }
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: INITIAL_GREETING,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) {
      onCloseExternal();
    }
  };

  const formatMessageText = (content: string) => {
    // Split by lines to render cleanly
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold rendering **text**
      const formattedLine = line.split(/(\*\*.*?\*\*)/g).map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-amber-500 font-bold">•</span>
            <span className="flex-1">{formattedLine}</span>
          </div>
        );
      }

      if (/^\d+\./.test(line.trim())) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-blue-600 font-bold">{line.trim().match(/^\d+\./)?.[0]}</span>
            <span className="flex-1">{line.replace(/^\d+\.\s*/, '')}</span>
          </div>
        );
      }

      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-0.5 leading-relaxed">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Bottom Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
          {/* Teaser pill */}
          <div 
            onClick={() => {
              setIsOpen(true);
              setHasUnread(false);
            }}
            className="cursor-pointer bg-slate-900/95 text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-lg border border-amber-400/40 backdrop-blur-md flex items-center gap-2 hover:bg-slate-900 transition-all hover:scale-105 animate-bounce"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-amber-300">🏛️ CSC AI सहायक</span>
            <span className="text-slate-300 font-normal">| कोई भी सवाल पूछें</span>
          </div>

          <button
            id="open-csc-ai-chatbot-btn"
            onClick={() => {
              setIsOpen(true);
              setHasUnread(false);
            }}
            aria-label="Open CSC AI Chatbot"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-500 text-white flex items-center justify-center shadow-xl shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105 active:scale-95 transition-all relative border-2 border-white/80"
          >
            <Bot className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </button>
        </div>
      )}

      {/* CHAT WINDOW / MODAL */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-white shadow-2xl border border-slate-200 overflow-hidden ${
            isExpanded 
              ? 'inset-3 sm:inset-6 rounded-3xl' 
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[460px] h-[85vh] sm:h-[640px] max-h-[92vh] rounded-3xl'
          }`}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-4 flex items-center justify-between border-b border-amber-500/30 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                    विश्वकर्मा CSC AI सहायक
                  </h3>
                  <span className="bg-amber-500/30 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-amber-400/30">
                    24/7 लाइव
                  </span>
                </div>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                  <span>सिरदला डिजिटल सेवा केंद्र</span>
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  <span className="text-emerald-400 font-bold">Online</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="चैट रीसेट करें"
                className="w-8 h-8 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "छोटा करें" : "बड़ा करें"}
                className="hidden sm:flex w-8 h-8 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 items-center justify-center transition-colors"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClose}
                title="बंद करें"
                className="w-8 h-8 rounded-xl text-slate-300 hover:text-white hover:bg-red-500/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* QUICK PROMPT CHIPS BAR */}
          <div className="bg-amber-50/70 border-b border-amber-200/60 px-3 py-2 shrink-0 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-amber-900 shrink-0 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>पूछें:</span>
            </span>
            {POPULAR_CSC_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="text-[11px] font-semibold text-slate-800 bg-white hover:bg-amber-100 hover:text-amber-900 border border-amber-200/80 rounded-full px-2.5 py-1 whitespace-nowrap transition-all shadow-2xs shrink-0 flex items-center gap-1"
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3.5 text-sm shadow-xs ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                  }`}
                >
                  <div className="space-y-1">
                    {msg.role === 'user' ? (
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="text-xs sm:text-sm text-slate-800">
                        {formatMessageText(msg.text)}
                      </div>
                    )}
                  </div>

                  {/* ACTION RECOMMENDATION BUTTON */}
                  {msg.suggestedAction && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                      {msg.suggestedAction.type === 'booking' && (
                        <button
                          onClick={() => {
                            openBookingModal(msg.suggestedAction?.value);
                            handleClose();
                          }}
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{msg.suggestedAction.label}</span>
                        </button>
                      )}

                      {msg.suggestedAction.type === 'whatsapp' && (
                        <a
                          href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(`नमस्ते कन्हैया जी, मुझे CSC सेवा के बारे में जानकारी चाहिए: ${msg.suggestedAction.value}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>व्हाट्सएप पर पूछें</span>
                        </a>
                      )}

                      {msg.suggestedAction.type === 'call' && (
                        <a
                          href={`tel:${whatsappNumber}`}
                          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>कॉल करें (7903027843)</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* FOOTER OF BUBBLE */}
                  <div className={`mt-2 flex items-center justify-between text-[10px] ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-600'}`}>
                    <span>{msg.timestamp}</span>
                    {msg.role === 'assistant' && (
                      <button
                        onClick={() => copyToClipboard(msg.text, msg.id)}
                        className="hover:text-slate-700 flex items-center gap-1 p-0.5"
                        title="उत्तर कॉपी करें"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">कॉपी हुआ</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>कॉपी</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isLoading && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-xs font-semibold text-slate-500 ml-1">विश्वकर्मा एआई उत्तर तैयार कर रहा है...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FORM */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="राशन कार्ड, दाखिल खारिज, आयुष्मान आदि के बारे में पूछें..."
                  disabled={isLoading}
                  className="w-full pl-3.5 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={toggleListening}
                  title={isListening ? "आवाज़ सुनना बंद करें" : "बोलकर पूछें (Voice)"}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'text-slate-400 hover:text-amber-600 hover:bg-slate-100'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>सटीक सरकारी नियम व सिरदला सीएससी दर</span>
              </span>
              <a
                href={`tel:${whatsappNumber}`}
                className="text-amber-700 hover:underline font-bold flex items-center gap-1"
              >
                <PhoneCall className="w-2.5 h-2.5" />
                <span>हेल्पलाइन: 7903027843</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

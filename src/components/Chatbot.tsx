import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Sparkles } from 'lucide-react';
import Button from './Button';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! Welcome to Classic Skin Therapists. I am the Classic Skin Assistant. How can I help you today? You can ask me about treatments, booking, or our location.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulated Bot Response
    setTimeout(() => {
      let botResponse = "I can help you with that! Would you like to book a free consultation so one of our professional therapists can examine your skin?";
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('acne') || lowerInput.includes('pimples') || lowerInput.includes('breakouts')) {
        botResponse = "Thank you for sharing. Classic Skin Therapists offers specialized Acne Control Facial treatments and consultations designed to understand your specific skin needs. Would you like to book a free consultation?";
      } else if (lowerInput.includes('facial') || lowerInput.includes('face')) {
        botResponse = "We offer several premium facial treatments including Hydra Facials, Deep Cleansing Facials, and Medical Facials. A quick consultation can help us recommend the best option for your skin type.";
      } else if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
        botResponse = "Excellent! You can book an appointment by clicking the WhatsApp button below or visiting our Contact page.";
      } else if (lowerInput.includes('where') || lowerInput.includes('location')) {
        botResponse = "We are located along Ntinda-Kiwatule Road, opposite Sals Hotel, Kampala, Uganda.";
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-pink-700 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Open chat"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-stone-100"
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center border-2 border-white/10">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Classic Skin Assistant</h3>
                  <p className="text-[10px] text-pink-300 font-medium">Online | Always here to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-900 flex flex-col gap-4 text-xs">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-pink-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 text-white rounded-2xl rounded-tl-none px-4 py-4 shadow-sm flex items-center gap-1.5">
                    <motion.div className="w-2 h-2 bg-pink-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-2 h-2 bg-pink-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 bg-pink-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Pre-defined Actions */}
            <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
               <button 
                 onClick={() => setInput("I have acne problems")}
                 className="inline-flex text-[10px] font-bold uppercase tracking-wider border border-pink-500/30 text-pink-300 bg-pink-500/10 rounded-full px-3 py-1.5 hover:bg-pink-500/20 transition-colors"
               >
                 I have acne problems
               </button>
               <button 
                 onClick={() => setInput("I want a facial")}
                 className="inline-flex text-[10px] font-bold uppercase tracking-wider border border-pink-500/30 text-pink-300 bg-pink-500/10 rounded-full px-3 py-1.5 hover:bg-pink-500/20 transition-colors"
               >
                 I want a facial
               </button>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-800 text-white border-none rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-pink-500 placeholder-slate-400"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-700 transition-colors"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

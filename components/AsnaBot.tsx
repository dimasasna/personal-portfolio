"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AsnaBotDict {
  title: string;
  subtitle: string;
  placeholder: string;
  send: string;
  typing: string;
  error: string;
  welcome: string;
  suggestions: string[];
}

interface AsnaBotProps {
  dict: AsnaBotDict;
  locale: string;
}

export default function AsnaBot({ dict, locale }: AsnaBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Initialize welcome message ONCE when first opened
  useEffect(() => {
    if (isOpen && !initialized) {
      setMessages([{ role: "assistant", content: dict.welcome }]);
      setShowSuggestions(true);
      setInitialized(true);
    }
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMessage: Message = { role: "user", content: text.trim() };

      // Capture current messages snapshot before any async operations
      setMessages((prev) => {
        const updatedMessages = [...prev, userMessage];
        // Kick off the fetch with the updated messages
        void fetchReply(updatedMessages);
        return [...updatedMessages, { role: "assistant", content: "" }];
      });

      setInput("");
      setIsTyping(true);
      setShowSuggestions(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isTyping]
  );

  // Separate async function to avoid closure issues
  const fetchReply = async (updatedMessages: Message[]) => {
    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, locale }),
        signal: abortRef.current.signal,
      });

      const data = await res.json();

      if (!res.ok || !data.reply) {
        throw new Error(data.error || "API error");
      }

      // Typewriter effect — reveal text character by character
      const fullText: string = data.reply;
      const delay = fullText.length > 100 ? 8 : 15;

      for (let i = 0; i < fullText.length; i++) {
        const snapshot = fullText.slice(0, i + 1);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: snapshot };
          return updated;
        });
        await new Promise((r) => setTimeout(r, delay));
      }

      setHasUnread(false);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: dict.error,
        };
        return updated;
      });
    } finally {
      setIsTyping(false);
      abortRef.current = null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    abortRef.current?.abort();
    setIsOpen(false);
  };

  // Mobile: top-right (below status bar). Desktop: bottom-right.
  const MOBILE_BTN = "top-[3.5rem] right-4 w-12 h-12";
  const DESKTOP_BTN = "md:bottom-6 md:top-auto md:right-6 md:w-14 md:h-14";
  const MOBILE_PANEL = "top-[5.25rem] right-4 w-[92vw] max-w-[360px]";
  const DESKTOP_PANEL = "md:top-auto md:bottom-6 md:right-6 md:w-[360px] md:max-w-none";

  return (
    <>
      {/* Floating toggle button — hidden when chat is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="asnabot-toggle"
            aria-label="Open ASNA Bot chat"
            onClick={handleOpen}
            className={`fixed ${MOBILE_BTN} ${DESKTOP_BTN} z-50 rounded-full shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden`}
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulse ring */}
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
            {/* Unread badge */}
            {hasUnread && (
              <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-brand-pink rounded-full border-2 border-white z-20" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="asnabot-panel"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={`fixed ${MOBILE_PANEL} ${DESKTOP_PANEL} z-50 flex flex-col`}
            style={{
              height: "min(520px, calc(100svh - 11rem))",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(139,92,246,0.15)",
            }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-brand-card" style={{ backdropFilter: "blur(20px)" }} />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 px-4 py-3 border-b border-brand-text/[0.08]">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm text-brand-text">{dict.title}</p>
                <p className="text-xs text-brand-text/50 truncate">{dict.subtitle}</p>
              </div>
              <button
                id="asnabot-close"
                onClick={handleClose}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full flex items-center justify-center text-brand-text/50 hover:text-brand-text hover:bg-brand-text/10 transition-all cursor-pointer"
              >
                <ChevronDown className="w-4 h-4 md:hidden" />
                <X className="w-4 h-4 hidden md:block" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(139,92,246,0.35) transparent",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
                    >
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-medium ${
                      msg.role === "user"
                        ? "text-white rounded-br-md"
                        : "bg-brand-text/[0.06] text-brand-text rounded-bl-md border border-brand-text/[0.08]"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }
                        : {}
                    }
                  >
                    {msg.content || (
                      <span className="flex gap-1 py-0.5">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            className="w-1.5 h-1.5 rounded-full bg-brand-purple"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                          />
                        ))}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Suggested questions */}
              {showSuggestions && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {dict.suggestions.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(suggestion)}
                      className="px-3 py-1.5 text-xs font-bold rounded-full border border-brand-purple/30 text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="relative z-10 px-4 py-3 border-t border-brand-text/[0.08]">
              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  id="asnabot-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={dict.placeholder}
                  rows={1}
                  disabled={isTyping}
                  className="flex-1 px-4 py-2.5 bg-brand-text/[0.05] border border-brand-text/10 rounded-2xl text-sm text-brand-text placeholder:text-brand-text/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple/50 resize-none transition-all font-medium disabled:opacity-50"
                  style={{ maxHeight: "80px", lineHeight: "1.5" }}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.style.height = "auto";
                    el.style.height = Math.min(el.scrollHeight, 80) + "px";
                  }}
                />
                <motion.button
                  type="submit"
                  id="asnabot-send"
                  disabled={!input.trim() || isTyping}
                  aria-label={dict.send}
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </form>
              <p className="text-center text-[10px] text-brand-text/25 mt-2 font-medium">
                Powered by AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

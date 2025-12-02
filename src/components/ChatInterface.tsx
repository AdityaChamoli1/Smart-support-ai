import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickActions from "./QuickActions";
import TypingIndicator from "./TypingIndicator";
import { useChat } from "@/hooks/useChat";
import { cn } from "@/lib/utils";

const WelcomeMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-center px-6 py-8"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 0.4 }}
      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"
    >
      <span className="text-3xl">👋</span>
    </motion.div>
    <h2 className="text-lg font-semibold text-foreground mb-2">Welcome to Support!</h2>
    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
      I'm your AI assistant, here to help with orders, refunds, account issues, and more. 
      How can I assist you today?
    </p>
  </motion.div>
);

const ChatInterface = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isLoading && messages.length > 0 && messages[messages.length - 1]?.role === "user") {
      setShowTyping(true);
    } else {
      setShowTyping(false);
    }
  }, [isLoading, messages]);

  const hasMessages = messages.length > 0;
  const lastMessage = messages[messages.length - 1];
  const isStreaming = isLoading && lastMessage?.role === "assistant" && lastMessage.content !== "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto h-[calc(100vh-4rem)] max-h-[700px] flex flex-col bg-card rounded-3xl shadow-2xl shadow-black/10 border border-border/50 overflow-hidden"
    >
      <ChatHeader />
      
      <ScrollArea 
        className="flex-1 px-4 py-4"
        ref={scrollRef}
      >
        <div className="space-y-4">
          {!hasMessages && <WelcomeMessage />}
          
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
                isStreaming={isStreaming && index === messages.length - 1}
              />
            ))}
          </AnimatePresence>

          <AnimatePresence>
            {showTyping && <TypingIndicator />}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {!hasMessages && (
        <QuickActions onSelect={sendMessage} disabled={isLoading} />
      )}

      <div className="relative">
        {hasMessages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-12 right-4"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={clearMessages}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              New Chat
            </Button>
          </motion.div>
        )}
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </motion.div>
  );
};

export default ChatInterface;

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

const ChatMessage = ({ role, content, isStreaming }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex gap-3 w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md"
        >
          <Bot className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl shadow-sm",
          isUser
            ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-br-md"
            : "bg-card text-card-foreground border border-border/50 rounded-bl-md"
        )}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {content}
          {isStreaming && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 ml-1 bg-current rounded-sm"
            />
          )}
        </div>
      </div>

      {isUser && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-accent-coral to-accent-coral/80 flex items-center justify-center shadow-md"
        >
          <User className="w-5 h-5 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChatMessage;

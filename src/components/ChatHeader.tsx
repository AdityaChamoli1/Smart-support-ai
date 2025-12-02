import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

const ChatHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 px-6 py-5"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="relative flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="relative"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Bot className="w-7 h-7 text-primary-foreground" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-primary"
          />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-primary-foreground">AI Support Assistant</h1>
            <Sparkles className="w-4 h-4 text-primary-foreground/70" />
          </div>
          <p className="text-sm text-primary-foreground/70">Powered by NLP & Deep Learning</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatHeader;

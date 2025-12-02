import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex gap-3 items-start"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
        <Bot className="w-5 h-5 text-primary-foreground" />
      </div>
      
      <div className="bg-card border border-border/50 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-muted-foreground/60"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;

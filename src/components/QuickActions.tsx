import { motion } from "framer-motion";
import { Package, RefreshCw, User, Wrench, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionsProps {
  onSelect: (query: string) => void;
  disabled?: boolean;
}

const actions = [
  { icon: Package, label: "Track Order", query: "Where is my order? I'd like to track my package." },
  { icon: RefreshCw, label: "Refund Status", query: "I need help with a refund for my recent purchase." },
  { icon: User, label: "Account Help", query: "I'm having issues with my account." },
  { icon: Wrench, label: "Technical Support", query: "I'm experiencing technical issues with the app." },
  { icon: HelpCircle, label: "General Help", query: "I have a general question about your services." },
];

const QuickActions = ({ onSelect, disabled }: QuickActionsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="px-4 pb-4"
    >
      <p className="text-xs text-muted-foreground mb-3 font-medium">Quick Actions</p>
      <div className="flex flex-wrap gap-2">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            onClick={() => onSelect(action.query)}
            disabled={disabled}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium",
              "bg-secondary/50 hover:bg-secondary text-secondary-foreground",
              "border border-border/30 hover:border-border/50",
              "transition-all duration-200 hover:shadow-sm",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <action.icon className="w-3.5 h-3.5" />
            {action.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;

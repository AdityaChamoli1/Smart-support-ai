import { Helmet } from "react-helmet-async";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Support | Smart Assistant</title>
        <meta name="description" content="Get instant help from our AI-powered customer support chatbot. Fast, friendly, and available 24/7 for orders, refunds, account issues, and more." />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-coral/5 rounded-full blur-3xl" />
        </div>
        
        <ChatInterface />
      </main>
    </>
  );
};

export default Index;

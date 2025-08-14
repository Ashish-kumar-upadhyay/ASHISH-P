import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingHireButton = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        onClick={scrollToContact} 
        size="lg" 
        className="bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-full p-4 shadow-premium text-center"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Hire Me
      </Button>
    </div>
  );
};

export default FloatingHireButton;
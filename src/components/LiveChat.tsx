import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const handleSendMessage = () => {
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(`Hi Ashish! I'm ${name} (${email}). ${message}`);
    window.open(`https://wa.me/919695005395?text=${whatsappMessage}`, '_blank');

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
    toast({
      title: "Message Sent!",
      description: "Redirecting to WhatsApp. I'll respond shortly!"
    });
  };
  const handleCall = () => {
    window.open('tel:+919695005395', '_self');
  };
  const handleEmail = () => {
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Hi Ashish,\n\nI'm interested in discussing a project with you.\n\nBest regards,\n${name || 'Your Name'}`);
    window.open(`mailto:ashishkumarupadhyay0328@gmail.com?subject=${subject}&body=${body}`, '_self');
  };
  return <>
      {/* Chat Toggle Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" initial={{
      scale: 0
    }} animate={{
      scale: 1
    }} transition={{
      delay: 2
    }}>
        
        
        {/* Pulse Animation */}
        
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} transition={{
        duration: 0.3
      }} className="fixed bottom-24 right-6 z-50 w-80 md:w-96">
            <Card className="bg-gradient-card backdrop-blur-md border-glass-border shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Ashish Kumar</h3>
                    <p className="text-xs text-green-400">● Online - Usually responds in minutes</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Welcome Message */}
              <div className="p-4 border-b border-glass-border">
                <div className="bg-primary/10 rounded-lg p-3 mb-3">
                  <p className="text-sm">
                    👋 Hi there! I'm Ashish, a full-stack developer. How can I help you today?
                  </p>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCall} className="flex-1 bg-glass border-glass-border">
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleEmail} className="flex-1 bg-glass border-glass-border">
                    <Mail className="w-3 h-3 mr-1" />
                    Email
                  </Button>
                </div>
              </div>

              {/* Chat Form */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="bg-glass border-glass-border text-sm" />
                  <Input placeholder="Your email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-glass border-glass-border text-sm" />
                </div>
                
                <Textarea placeholder="How can I help you? (e.g., I need a website for my business, I want to discuss pricing, etc.)" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="bg-glass border-glass-border text-sm resize-none" />
                
                <Button onClick={handleSendMessage} className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" size="sm">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 5 minutes during business hours
                </p>
              </div>
            </Card>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default LiveChat;
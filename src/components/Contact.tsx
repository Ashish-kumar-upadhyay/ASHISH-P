import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Copy } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:ashishkumarupadhyay0328@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    toast({
      title: "Email client opened",
      description: "Your message has been prepared in your email client."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const copyEmail = () => {
    navigator.clipboard.writeText("ashishkumarupadhyay0328@gmail.com");
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard."
    });
  };
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Ashish! I'm interested in discussing a project with you.");
    window.open(`https://wa.me/919695005395?text=${message}`, '_blank');
  };
  return <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h3 className="font-playfair text-3xl font-semibold mb-6">Let's Work Together</h3>
            <p className="font-poppins text-muted-foreground mb-8 leading-relaxed text-lg">
              Ready to bring your vision to life? I'd love to hear about your project and 
              discuss how we can create something amazing together.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">ashishkumarupadhyay0328@gmail.com</p>
                    <Button variant="ghost" size="sm" onClick={copyEmail} className="h-8 w-8 p-0 hover:bg-primary/10">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919695005395" className="text-muted-foreground hover:text-accent transition-colors">+91 7987665254</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary-glow/20 group-hover:bg-primary-glow/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-glow" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/Ashish-kumar-upadhyay" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ashish-kumar-upadhyay-071499284/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-accent/20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <button onClick={openWhatsApp} className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-green-500/20 transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>

            <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <Card className="bg-gradient-card backdrop-blur-md border-glass-border shadow-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="bg-glass border-glass-border focus:border-primary" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="your@email.com" className="bg-glass border-glass-border focus:border-primary" required />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." rows={5} className="bg-glass border-glass-border focus:border-primary resize-none" required />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;
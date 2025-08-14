import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  Palette,
  MessageCircle,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "Complete web applications with modern technologies like React, Node.js, and databases.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Implementation"],
      pricing: "₹15,000 - ₹50,000",
      duration: "2-8 weeks",
      popular: true
    },
    {
      icon: Smartphone,
      title: "E-commerce Solutions",
      description: "Custom online stores with payment integration, inventory management, and admin panels.",
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Analytics Dashboard"],
      pricing: "₹25,000 - ₹75,000",
      duration: "3-10 weeks",
      popular: false
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud integration.",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Authentication Systems"],
      pricing: "₹10,000 - ₹35,000",
      duration: "1-6 weeks",
      popular: false
    },
    {
      icon: Palette,
      title: "UI/UX Design & Development",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers.",
      features: ["Modern Design", "User Research", "Prototyping", "Responsive Layouts"],
      pricing: "₹8,000 - ₹25,000",
      duration: "1-4 weeks",
      popular: false
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up existing websites and applications for better user experience.",
      features: ["Speed Optimization", "Code Refactoring", "Database Optimization", "Caching Implementation"],
      pricing: "₹5,000 - ₹20,000",
      duration: "1-3 weeks",
      popular: false
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored solutions for unique business requirements and specialized needs.",
      features: ["Custom Features", "Third-party Integrations", "Automation Tools", "Ongoing Support"],
      pricing: "₹20,000 - ₹1,00,000",
      duration: "4-16 weeks",
      popular: false
    }
  ];

  const openWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi Ashish, I am interested in your ${service}.`);
    window.open(`https://wa.me/917987665254?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Services & Pricing
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional development services tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 bg-gradient-card backdrop-blur-md border-glass-border shadow-card hover:shadow-glow hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 h-full flex flex-col group cursor-pointer ${
                service.popular ? 'ring-2 ring-primary/30 hover:ring-primary/50' : 'hover:ring-1 hover:ring-primary/20'
              }`}>
                {service.popular && (
                  <Badge className="bg-gradient-primary text-white border-0 w-fit mb-4">
                    Most Popular
                  </Badge>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                </div>
                
                <p className="font-poppins text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price Range:</span>
                    <span className="font-semibold text-primary">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Timeline:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full bg-gradient-primary hover:shadow-glow hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group/button"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover/button:animate-pulse" />
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-card backdrop-blur-md border-glass-border shadow-card max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-6">
              Have a unique project in mind? Let's discuss your requirements and create a tailored solution that fits your budget and timeline.
            </p>
            <Button 
              onClick={() => openWhatsApp("Custom Project Discussion")}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discuss Custom Project
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
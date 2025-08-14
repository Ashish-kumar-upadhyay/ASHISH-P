import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-glass-border bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="font-playfair text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ashish Kumar Upadhyay
            </h3>
            <p className="font-poppins text-muted-foreground max-w-md mx-auto">
              Full Stack Developer crafting premium digital experiences
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-upadhyay-071499284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-accent/20 transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@ashish.dev"
              className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="pt-8 border-t border-glass-border">
            <p className="font-poppins text-sm text-muted-foreground">
              © 2024 Ashish Kumar Upadhyay. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
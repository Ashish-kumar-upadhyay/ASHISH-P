import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }} />
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="font-playfair text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent md:text-8xl">
            Ashish Kumar Upadhyay
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="font-poppins text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed md:text-lg font-extrabold">
            Crafting smooth digital experiences with a touch of luxury.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-poppins font-medium px-8 py-6 text-lg" onClick={scrollToProjects}>
              Explore Projects
            </Button>
            <Button variant="outline" size="lg" className="border-glass-border bg-glass backdrop-blur-md hover:bg-primary/10 font-poppins font-medium px-8 py-6 text-lg" onClick={scrollToContact}>
              Let's Work Together
            </Button>
          </motion.div>
          
          <motion.div className="flex justify-center gap-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ashish-kumar-upadhyay-071499284/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass-border hover:bg-accent/20 transition-all duration-300 hover:shadow-glow">
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1
      }}>
          <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{
      animationDelay: '0s'
    }} />
      <motion.div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{
      animationDelay: '2s'
    }} />
      <motion.div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{
      animationDelay: '4s'
    }} />
    </section>;
};
export default Hero;
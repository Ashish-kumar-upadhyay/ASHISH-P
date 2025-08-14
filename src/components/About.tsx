import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-poppins text-lg text-foreground mb-6 leading-relaxed">
              I'm a React-based full-stack developer with a passion for creating high-quality digital products. 
              I help clients and companies build exceptional user experiences using cutting-edge technologies 
              like React, Firebase, Node.js, and MongoDB.
            </p>
            
            <p className="font-poppins text-lg text-muted-foreground mb-8 leading-relaxed">
              With a focus on performance, scalability, and beautiful design, I transform ideas into 
              powerful digital solutions that drive business growth and user engagement.
            </p>

            <Card className="bg-gradient-card backdrop-blur-md border-glass-border shadow-card p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Dubai Luxury Project</h3>
                  <p className="text-muted-foreground">
                    Successfully completed a 40K budget Dubai-based luxury perfume website project, 
                    delivering premium user experience with advanced animations and e-commerce functionality.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-card backdrop-blur-md border-glass-border shadow-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl">Global Experience</h3>
              </div>
              <p className="text-muted-foreground">
                Worked with clients worldwide, delivering solutions across different industries 
                and cultural contexts.
              </p>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-md border-glass-border shadow-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-accent/20">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-xl">Quality Focused</h3>
              </div>
              <p className="text-muted-foreground">
                Committed to delivering pixel-perfect designs with clean, maintainable code 
                and optimal performance.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-lg bg-glass backdrop-blur-md border border-glass-border">
                <div className="font-playfair text-3xl font-bold text-primary mb-2">15+</div>
                <div className="font-poppins text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-glass backdrop-blur-md border border-glass-border">
                <div className="font-playfair text-3xl font-bold text-accent mb-2">100%</div>
                <div className="font-poppins text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
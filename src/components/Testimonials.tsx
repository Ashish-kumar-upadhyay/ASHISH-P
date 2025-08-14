import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      company: "Dubai, UAE",
      content: "Ashish delivered an exceptional e-commerce platform that exceeded our expectations. The luxury perfume site he created has a premium feel and sophisticated animations that perfectly capture our brand essence. Outstanding work!",
      rating: 5,
      project: "Nomani Perfume",
      amount: "₹40,000"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "Singapore",
      content: "Working with Ashish was a game-changer for our recipe platform. His attention to detail and ability to implement complex features like real-time data synchronization made our app stand out in the market.",
      rating: 5,
      project: "Kitchen Recipe App",
      amount: "₹25,000"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Medical Practice Owner",
      company: "Mumbai, India",
      content: "The appointment booking system Ashish built transformed our clinic operations. Patients love the seamless booking experience, and we've seen a 40% increase in online appointments.",
      rating: 5,
      project: "Doctor Appointment System",
      amount: "₹30,000"
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      company: "Bangalore, India",
      content: "The employee task management system has revolutionized how we track productivity. The analytics dashboard and points system have increased team engagement by 60%.",
      rating: 5,
      project: "Task Management System",
      amount: "₹35,000"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied clients who trusted me with their digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-card backdrop-blur-md border-glass-border shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-poppins text-foreground leading-relaxed text-lg mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-gradient-primary">
                      <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-2">
                      {testimonial.amount}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
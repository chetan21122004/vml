import { Card } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import Scene3D from './Scene3D';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const stats = [
    { icon: Award, number: "25+", label: "Years Experience", color: "text-primary" },
    { icon: Users, number: "500+", label: "Happy Clients", color: "text-primary" },
    { icon: MapPin, number: "50+", label: "Global Routes", color: "text-primary" },
    { icon: Clock, number: "99%", label: "On-Time Delivery", color: "text-primary" }
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-gradient">VML India</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted logistics partner with decades of experience in delivering excellence across global supply chains.
          </motion.p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and cost-effective logistics solutions that connect businesses 
                to global markets while maintaining the highest standards of safety and customer service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading global logistics provider, recognized for our commitment to innovation, 
                sustainability, and delivering exceptional value to our clients worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Safe and secure transportation of all cargo types</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Transparent pricing and real-time tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">24/7 customer support and communication</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Environmentally responsible shipping practices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 lg:p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
                <div className="flex justify-center mb-3 lg:mb-4">
                  <div className="bg-primary-light rounded-full p-3 lg:p-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`h-6 w-6 lg:h-8 lg:w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1 lg:mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
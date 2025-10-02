import { Shield, Clock, Globe, Users, Award, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyChooseUs = () => {
  const whyRef = useRef(null);
  const isInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const reasons = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security protocols and comprehensive insurance coverage ensure your cargo is protected throughout the journey.",
      features: ["Cargo Insurance", "Security Tracking", "Risk Management"]
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Our commitment to punctuality with 99.8% on-time delivery rate ensures your business operations run smoothly.",
      features: ["Real-time Tracking", "Proactive Updates", "Reliable Scheduling"]
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide presence with strategic partnerships across 150+ countries for seamless international logistics.",
      features: ["150+ Countries", "Local Expertise", "Strategic Partners"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated logistics professionals with years of experience providing personalized solutions for your unique needs.",
      features: ["Industry Experts", "Personal Service", "Custom Solutions"]
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Recognized excellence with 50+ industry awards and certifications, demonstrating our commitment to quality service.",
      features: ["ISO Certified", "Industry Awards", "Quality Standards"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support ensuring you always have assistance when you need it most.",
      features: ["24/7 Availability", "Multi-language", "Instant Response"]
    }
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-slide for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, currentSlide]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">VML India</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in the logistics industry and why thousands of businesses trust us with their shipping needs
            </p>
          </motion.div>
        </div>

        {/* Reasons Layout - Grid for Desktop, Carousel for Mobile */}
        {isMobile ? (
          /* Mobile Carousel */
          <div className="relative">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reasons.map((reason, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-xl border border-transparent hover:border-primary/20 mx-2"
                    >
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="bg-primary/10 group-hover:bg-primary rounded-full p-3 w-12 h-12 flex items-center justify-center transition-all duration-300">
                          <reason.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                          {reason.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-1">
                        {reason.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-xs text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary scale-125' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-transparent hover:border-primary/20"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-primary/10 group-hover:bg-primary rounded-full p-4 w-16 h-16 flex items-center justify-center transition-all duration-300">
                    <reason.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {reason.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {reason.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the VML India Difference
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made us their trusted logistics partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Free Quote
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

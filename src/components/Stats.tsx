import { Package, Users, Globe, Clock, TrendingUp, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Stats = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Counter animation effect
  useEffect(() => {
    if (!isInView) return;
    
    const targets = [25000, 5000, 150, 99];
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters(targets.map(target => 
        Math.floor(target * Math.min(progress, 1))
      ));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [isInView]);

  // Carousel functions for mobile
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stats.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(stats.length / 2)) % Math.ceil(stats.length / 2));
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
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, currentSlide]);

  const stats = [
    {
      icon: Package,
      value: "25K+",
      label: "Shipments Delivered",
      description: "Successfully completed shipments worldwide",
      color: "text-blue-500"
    },
    {
      icon: Users,
      value: "5,000+",
      label: "Happy Clients",
      description: "Trusted by businesses globally",
      color: "text-green-500"
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries Served",
      description: "Global reach and presence",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      value: "99.8%",
      label: "On-Time Delivery",
      description: "Reliable and punctual service",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "50+",
      label: "Industry Awards",
      description: "Recognition for excellence",
      color: "text-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
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
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak for our commitment to excellence and reliability in logistics services
            </p>
          </motion.div>
        </div>

        {/* Stats Layout - Grid for Desktop, Carousel for Mobile */}
        {isMobile ? (
          /* Mobile Carousel - Show 2 stats per slide */
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
                {Array.from({ length: Math.ceil(stats.length / 2) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.slice(slideIndex * 2, slideIndex * 2 + 2).map((stat, index) => (
                        <motion.div
                          key={slideIndex * 2 + index}
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-primary/20"
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative text-center">
                            {/* Icon */}
                            <div className="mb-3">
                              <div className="bg-slate-50 group-hover:bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center transition-colors duration-300 mx-auto">
                                <stat.icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                              </div>
                            </div>

                            {/* Value */}
                            <div className="mb-3">
                              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
                                {stat.value}
                              </h3>
                              <h4 className="text-sm font-semibold text-slate-700 mb-1">
                                {stat.label}
                              </h4>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {stat.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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
                {Array.from({ length: Math.ceil(stats.length / 2) }, (_, index) => (
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
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="bg-slate-50 group-hover:bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center transition-colors duration-300">
                      <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <h3 className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </h3>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      {stat.label}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the reliability and excellence that thousands of businesses trust
            </p>
            <button className="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

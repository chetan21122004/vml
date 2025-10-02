import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ship, Plane, Package, FileCheck, Container, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import heroImage from '@/assets/hero-container-ship.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import warehouseImage from '@/assets/warehouse-operations.jpg';
import containerTruck from '@/assets/container-truck.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });
  const { scrollY } = useScroll();
  
  // Enhanced parallax with spring physics
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const springY = useSpring(y, { stiffness: 100, damping: 30, mass: 1 });
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

  const services = [
    {
      icon: Ship,
      title: "Sea Freight Solutions",
      subtitle: "Global Ocean Shipping",
      description: "Cost-effective ocean freight with FCL and LCL options connecting major ports worldwide",
      image: heroImage,
      path: "/services/sea-freight",
      stats: ["25K+ Containers", "150+ Ports", "99% Success Rate"]
    },
    {
      icon: Plane,
      title: "Air Freight Express",
      subtitle: "Fast Air Cargo Services",
      description: "Express air freight for time-sensitive shipments with priority handling and tracking",
      image: cargoPlane,
      path: "/services/air-freight",
      stats: ["24-48hr Delivery", "Global Network", "Secure Handling"]
    },
    {
      icon: Package,
      title: "Freight Forwarding",
      subtitle: "Complete Logistics Management",
      description: "End-to-end logistics solutions with multi-modal transport and customs expertise",
      image: warehouseImage,
      path: "/services/freight-forwarding",
      stats: ["Multi-Modal", "Door-to-Door", "Expert Team"]
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      subtitle: "Expert CHA Services",
      description: "Professional customs handling with complete documentation and compliance management",
      image: warehouseImage,
      path: "/services/customs-clearance",
      stats: ["Licensed CHA", "Fast Clearance", "Full Compliance"]
    },
    {
      icon: Container,
      title: "Container Solutions",
      subtitle: "Flexible Container Booking",
      description: "Comprehensive container services with various sizes and specialized equipment options",
      image: containerTruck,
      path: "/services/container-booking",
      stats: ["All Sizes", "Special Equipment", "Guaranteed Space"]
    },
    {
      icon: Truck,
      title: "Transportation Services",
      subtitle: "Reliable Inland Transport",
      description: "Modern fleet with GPS tracking for safe and timely door-to-door delivery services",
      image: containerTruck,
      path: "/services/transportation",
      stats: ["GPS Tracked", "Modern Fleet", "24/7 Support"]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentService = services[currentSlide];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }
    })
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Static Background with Parallax */}
       <motion.div 
         className="absolute inset-0"
         style={{ y }}
       >
        <img
          src={heroImage}
          alt="Container ship at sunset"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"
        />
      </motion.div>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-16 lg:pt-20">
            {/* Left Content - Dynamic Service Info */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Service Badge */}
              <motion.div 
                className="inline-flex items-center space-x-2 lg:space-x-3 bg-white/10 backdrop-blur-md px-4 lg:px-6 py-2 lg:py-3 rounded-full mb-6 lg:mb-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <currentService.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                <span className="text-white font-medium text-sm lg:text-base">{currentService.subtitle}</span>
              </motion.div>

              {/* Dynamic Title */}
              <motion.h1 
                className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {currentService.title.split(' ')[0]}
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary text-2xl via-blue-400 to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {currentService.title.split(' ').slice(1).join(' ')}
                </motion.span>
              </motion.h1>

              {/* Dynamic Description */}
              <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed max-w-lg">
                {currentService.description}
              </p>

              {/* Dynamic Stats */}
              <div className="flex flex-wrap gap-2 lg:gap-4 mb-6 lg:mb-8">
                {currentService.stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg border border-white/20">
                    <span className="text-white font-medium text-xs lg:text-sm">{stat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link to={currentService.path}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="hidden sm:inline">Explore {currentService.title}</span>
                    <span className="sm:hidden">Explore Service</span>
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </Link>
                <a href="#contact">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Mobile Service Navigation */}
            <div className="lg:hidden mt-8">
              <div className="flex justify-center space-x-2 mb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <div className="text-center">
                <span className="text-white/70 text-sm">
                  {currentSlide + 1} of {services.length} Services
                </span>
              </div>
            </div>

            {/* Right Content - Service Image Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Service Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[85%]">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="bg-primary rounded-full p-1.5">
                        <currentService.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{currentService.title}</h3>
                        <p className="text-primary font-medium text-xs">{currentService.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {currentService.stats.map((stat, index) => (
                        <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
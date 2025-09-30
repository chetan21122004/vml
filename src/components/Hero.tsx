import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ship, Plane, Package, FileCheck, Container, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '@/assets/hero-container-ship.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import warehouseImage from '@/assets/warehouse-operations.jpg';
import containerTruck from '@/assets/container-truck.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Static Background */}
       <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Container ship at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
            {/* Left Content - Dynamic Service Info */}
            <div className="text-left">
              {/* Service Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
                <currentService.icon className="h-6 w-6 text-primary" />
                <span className="text-white font-medium">{currentService.subtitle}</span>
              </div>

              {/* Dynamic Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                <span className="block">{currentService.title.split(' ')[0]}</span>
                <span className="block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                  {currentService.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              {/* Dynamic Description */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                {currentService.description}
              </p>

              {/* Dynamic Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {currentService.stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="text-white font-medium text-sm">{stat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={currentService.path}>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore {currentService.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#contact">
                  <Button 
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Service Image Card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Service Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary rounded-full p-2">
                        <currentService.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{currentService.title}</h3>
                        <p className="text-primary font-medium text-sm">{currentService.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {currentService.stats.map((stat, index) => (
                        <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
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
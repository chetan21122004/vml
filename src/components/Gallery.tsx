import containerTruck from '@/assets/container-truck.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import heroImage from '@/assets/hero-container-ship.jpg';
import warehouseOps from '@/assets/warehouse-operations.jpg';
import logisticsWarehouse from '@/assets/logistics-warehouse.jpg';
import customsClearance from '@/assets/customs-clearance.jpg';
import freightForwarding from '@/assets/freight-forwarding.jpg';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryItems = [
    {
      image: heroImage,
      title: "Sea Freight Operations",
      description: "Modern port facilities with advanced cargo handling"
    },
    {
      image: cargoPlane,
      title: "Air Freight Services",
      description: "Express air cargo for time-sensitive deliveries"
    },
    {
      image: freightForwarding,
      title: "Freight Forwarding",
      description: "Comprehensive logistics coordination and management"
    },
    {
      image: customsClearance,
      title: "Customs Clearance",
      description: "Expert CHA services for seamless cargo clearance"
    },
    {
      image: logisticsWarehouse,
      title: "Container Booking",
      description: "Efficient container management and booking services"
    },
    {
      image: containerTruck,
      title: "Transportation Services",
      description: "Reliable ground transportation and distribution"
    }
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
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

  return (
    <section ref={galleryRef} id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our professional logistics operations across air, sea, and land transportation networks.
          </p>
        </div>

        {/* Gallery Layout - Grid for Desktop, Carousel for Mobile */}
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
                {galleryItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer mx-2"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                      </div>

                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-base font-bold mb-2 group-hover:text-primary-light transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300"></div>
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
                {galleryItems.map((_, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
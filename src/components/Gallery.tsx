import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ZoomIn, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Featured carousel images (first 4 images)
  const featuredImages = [
    {
      image: "/gallery/1.jpg",
      title: "Modern Port Operations",
      description: "State-of-the-art container handling facilities with advanced logistics infrastructure",
      category: "Sea Freight"
    },
    {
      image: "/gallery/2.jpg",
      title: "Air Cargo Excellence",
      description: "Express air freight services with priority handling and global reach",
      category: "Air Freight"
    },
    {
      image: "/gallery/3.jpg",
      title: "Warehouse Management",
      description: "Advanced warehouse operations with automated systems and quality control",
      category: "Warehousing"
    },
    {
      image: "/gallery/4.jpg",
      title: "Transportation Network",
      description: "Comprehensive ground transportation with GPS tracking and real-time monitoring",
      category: "Transportation"
    }
  ];

  // Static grid images (remaining images)
  const staticImages = [
    {
      image: "/gallery/5.jpg",
      title: "Customs Clearance",
      description: "Expert CHA services ensuring smooth cargo clearance",
      category: "Customs"
    },
    {
      image: "/gallery/6.jpg",
      title: "Container Operations",
      description: "Efficient container booking and management services",
      category: "Containers"
    },
    {
      image: "/gallery/7.jpg",
      title: "Freight Forwarding",
      description: "End-to-end logistics coordination and management",
      category: "Forwarding"
    },
    {
      image: "/gallery/8.jpg",
      title: "Quality Assurance",
      description: "Professional quality control and cargo inspection services",
      category: "Quality"
    }
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
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

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, currentSlide]);

  return (
    <section ref={galleryRef} id="gallery" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Professional Gallery
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Operations</span> Excellence
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our state-of-the-art logistics facilities and professional operations across 
            air, sea, and land transportation networks worldwide.
          </motion.p>
        </motion.div>

        {/* Featured Carousel Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Featured Operations</h3>
              <p className="text-slate-600">Showcasing our core logistics capabilities</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAutoPlay}
                className="hidden md:flex"
              >
                {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span className="ml-2">{isAutoPlay ? 'Pause' : 'Play'}</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div 
              className="overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredImages.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="group relative overflow-hidden bg-white shadow-xl">
                      {/* Image */}
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-primary text-white border-0 shadow-lg">
                            {item.category}
                          </Badge>
                        </div>

                        {/* Zoom Icon */}
                        <button 
                          className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                          onClick={() => setSelectedImage(item.image)}
                        >
                          <ZoomIn className="h-5 w-5 text-white" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary group"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600 group-hover:text-primary" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-3">
                {featuredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 h-3 bg-primary rounded-full' 
                        : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary group"
              >
                <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-primary" />
              </button>
            </div>
          </div>
        </motion.div>
        {/* Static Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Services Portfolio</h3>
            <p className="text-slate-600">Comprehensive logistics solutions across all sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 border-0 shadow-md">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Zoom Icon */}
                  <button 
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <ZoomIn className="h-4 w-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
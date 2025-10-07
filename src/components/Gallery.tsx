import { useState, useEffect, useRef, useCallback } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GalleryImage {
  image: string;
  title: string;
}

const Gallery = () => {
  const galleryRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  
  // Image viewer state
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // All gallery images
  const allImages: GalleryImage[] = [
    {
      image: "/gallery/1.jpg",
      title: "Port Operations"
    },
    {
      image: "/gallery/2.jpg",
      title: "Air Cargo"
    },
    {
      image: "/gallery/3.jpg",
      title: "Warehouse Management"
    },
    {
      image: "/gallery/4.jpg",
      title: "Transportation"
    },
    {
      image: "/gallery/5.jpg",
      title: "Customs Clearance"
    },
    {
      image: "/gallery/6.jpg",
      title: "Container Operations"
    },
    {
      image: "/gallery/7.jpg",
      title: "Freight Forwarding"
    },
    {
      image: "/gallery/8.jpg",
      title: "Quality Assurance"
    }
  ];

  // Image viewer functions
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
    } else {
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    let newX: number, newY: number;
    if ('touches' in e) {
      newX = e.touches[0].clientX - startPos.x;
      newY = e.touches[0].clientY - startPos.y;
    } else {
      newX = e.clientX - startPos.x;
      newY = e.clientY - startPos.y;
    }

    setPosition({ x: newX, y: newY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return;

    switch (e.key) {
      case 'Escape':
        setSelectedImage(null);
        break;
      case 'ArrowLeft':
        const prevIndex = allImages.findIndex(img => img.image === selectedImage.image) - 1;
        if (prevIndex >= 0) {
          setSelectedImage(allImages[prevIndex]);
          setScale(1);
          setPosition({ x: 0, y: 0 });
        }
        break;
      case 'ArrowRight':
        const nextIndex = allImages.findIndex(img => img.image === selectedImage.image) + 1;
        if (nextIndex < allImages.length) {
          setSelectedImage(allImages[nextIndex]);
          setScale(1);
          setPosition({ x: 0, y: 0 });
        }
        break;
      case '+':
        handleZoomIn();
        break;
      case '-':
        handleZoomOut();
        break;
    }
  }, [selectedImage, allImages]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleFullscreen = () => {
    if (!modalRef.current) return;
    
    if (!document.fullscreenElement) {
      modalRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };



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
            className="text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Logistics Portfolio
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

        {/* Masonry Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {allImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-zoom-in break-inside-avoid mb-6"
              onClick={() => handleImageClick(item)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              ref={modalRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedImage(null);
              }}
            >
              {/* Image Container */}
              <div 
                className="relative max-w-7xl max-h-[90vh] w-full mx-4 select-none"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
              >
                {/* Main Image */}
                <motion.img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-lg"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                  }}
                  draggable="false"
                />

                {/* Controls */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 hover:bg-white/20"
                    onClick={handleZoomOut}
                  >
                    <ZoomOut className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 hover:bg-white/20"
                    onClick={handleZoomIn}
                  >
                    <ZoomIn className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 hover:bg-white/20"
                    onClick={toggleFullscreen}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4 text-white" />
                    ) : (
                      <Maximize2 className="h-4 w-4 text-white" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 hover:bg-white/20"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4 text-white" />
                  </Button>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-4 flex items-center">
                  {allImages.findIndex(img => img.image === selectedImage.image) > 0 && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 hover:bg-white/20"
                      onClick={() => {
                        const prevIndex = allImages.findIndex(img => img.image === selectedImage.image) - 1;
                        if (prevIndex >= 0) {
                          setSelectedImage(allImages[prevIndex]);
                          setScale(1);
                          setPosition({ x: 0, y: 0 });
                        }
                      }}
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </Button>
                  )}
                </div>

                <div className="absolute inset-y-0 right-4 flex items-center">
                  {allImages.findIndex(img => img.image === selectedImage.image) < allImages.length - 1 && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 hover:bg-white/20"
                      onClick={() => {
                        const nextIndex = allImages.findIndex(img => img.image === selectedImage.image) + 1;
                        if (nextIndex < allImages.length) {
                          setSelectedImage(allImages[nextIndex]);
                          setScale(1);
                          setPosition({ x: 0, y: 0 });
                        }
                      }}
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
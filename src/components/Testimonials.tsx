import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Supply Chain Director",
      company: "TechCorp Industries",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "VML India has been our trusted logistics partner for over 3 years. Their reliability and professional service have helped us expand our business globally. The team's attention to detail and proactive communication is exceptional.",
      shipments: "500+ shipments"
    },
    {
      name: "Sarah Johnson",
      position: "Import/Export Manager",
      company: "Global Trade Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Outstanding service quality and competitive pricing. VML India's expertise in customs clearance and documentation has saved us countless hours and potential delays. Highly recommended for international shipping.",
      shipments: "300+ shipments"
    },
    {
      name: "Mohammed Al-Rashid",
      position: "Operations Manager",
      company: "Middle East Logistics",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The best logistics partner we've worked with. Their sea freight services are reliable, cost-effective, and always delivered on time. The tracking system and customer support are top-notch.",
      shipments: "750+ shipments"
    },
    {
      name: "Lisa Chen",
      position: "Procurement Head",
      company: "Electronics Hub",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "VML India's air freight services have been crucial for our time-sensitive electronics shipments. Their express handling and priority boarding ensure our products reach customers quickly and safely.",
      shipments: "200+ shipments"
    },
    {
      name: "David Thompson",
      position: "Logistics Coordinator",
      company: "Automotive Parts Ltd",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Professional, reliable, and cost-effective. VML India has consistently exceeded our expectations with their freight forwarding services. Their global network and local expertise are unmatched.",
      shipments: "400+ shipments"
    },
    {
      name: "Priya Sharma",
      position: "Business Development",
      company: "Fashion Forward",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Excellent service for our textile exports. VML India's team understands our industry requirements and provides customized solutions. Their container booking service is efficient and transparent.",
      shipments: "600+ shipments"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={testimonialsRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about our logistics services
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Main Testimonial */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-primary/30 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-slate-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-600">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Completed: {testimonials[currentIndex].shipments}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-slate-600">Verified Client</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Testimonials - Hidden on mobile */}
              <div className="hidden lg:block space-y-6">
                {testimonials
                  .slice(currentIndex + 1, currentIndex + 3)
                  .concat(testimonials.slice(0, Math.max(0, currentIndex + 3 - testimonials.length)))
                  .map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-slate-900">{testimonial.name}</h5>
                          <p className="text-sm text-slate-600">{testimonial.company}</p>
                        </div>
                        <div className="flex space-x-1 ml-auto">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        "{testimonial.text.substring(0, 120)}..."
                      </p>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
          <button
            onClick={prevTestimonial}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Mobile Navigation & Dots Indicator */}
        <div className="mt-8">
          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between items-center lg:hidden mb-6">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            
            <span className="text-sm text-slate-600 font-medium">
              {currentIndex + 1} of {testimonials.length}
            </span>
            
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-slate-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-slate-600">Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

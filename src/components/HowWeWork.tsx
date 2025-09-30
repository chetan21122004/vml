import { FileText, Package, Truck, Plane, CheckCircle, Phone, ArrowRight, Clock, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      icon: Phone,
      title: "Consultation",
      shortTitle: "01. Consult",
      description: "We understand your shipping requirements and provide customized logistics solutions tailored to your business needs.",
      details: ["Requirement Analysis", "Custom Quote", "Service Planning"],
      duration: "30 mins",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Documentation",
      shortTitle: "02. Document",
      description: "Complete handling of all necessary documentation, permits, and booking confirmations for seamless processing.",
      details: ["Document Preparation", "Booking Confirmation", "Compliance Check"],
      duration: "2-4 hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      title: "Collection",
      shortTitle: "03. Collect",
      description: "Professional pickup and packaging services ensuring your cargo is properly secured for the journey ahead.",
      details: ["Professional Pickup", "Secure Packaging", "Quality Inspection"],
      duration: "Same day",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Truck,
      title: "Transportation",
      shortTitle: "04. Transport",
      description: "Multi-modal transportation using sea, air, and land routes optimized for cost-effectiveness and speed.",
      details: ["Route Optimization", "Real-time Tracking", "Progress Updates"],
      duration: "1-30 days",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Plane,
      title: "Tracking",
      shortTitle: "05. Track",
      description: "Continuous monitoring and real-time updates throughout the journey with proactive communication.",
      details: ["Live Tracking", "Status Updates", "Issue Resolution"],
      duration: "24/7",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      shortTitle: "06. Deliver",
      description: "Safe delivery to the final destination with confirmation and post-delivery support services.",
      details: ["Safe Delivery", "Confirmation", "Support Services"],
      duration: "On schedule",
      color: "from-primary to-blue-600"
    }
  ];

  // Auto-progression functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually selects a step
  };

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
    setIsAutoPlaying(false);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
    setIsAutoPlaying(false);
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
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A sophisticated, streamlined approach to logistics that ensures efficiency, transparency, and reliability at every step
            </p>
          </motion.div>
        </div>

        {/* Horizontal Process Flow */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-slate-200 rounded-full" />
          <div 
            className="hidden lg:block absolute top-20 left-0 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleStepClick(index)}
                className={`relative group transition-all duration-300 ${activeStep === index
                    ? 'transform -translate-y-2'
                    : 'hover:-translate-y-1'
                  }`}
              >
                {/* Step Circle */}
                <div className={`relative mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === index
                    ? `bg-gradient-to-r ${step.color} shadow-lg shadow-primary/25`
                    : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                  <step.icon className={`h-7 w-7 transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-slate-600'
                    }`} />

                  {/* Step Number */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeStep === index
                      ? 'bg-white text-primary'
                      : 'bg-primary text-white'
                    }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Step Title */}
                <div className="mt-6 text-center">
                  <h3 className={`font-semibold text-sm transition-colors duration-300 ${activeStep === index ? 'text-primary' : 'text-slate-700'
                    }`}>
                    {step.shortTitle}
                  </h3>
                  <div className="flex items-center justify-center mt-1">
                    <Clock className="h-3 w-3 text-slate-400 mr-1" />
                    <span className="text-xs text-slate-500">{step.duration}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${steps[activeStep].color}`}>
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">{steps[activeStep].title}</h3>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 text-slate-500 mr-2" />
                      <span className="text-slate-600 font-medium">{steps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Process Details */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 mb-4">What we deliver:</h4>
                  {steps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`} />
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className={`relative bg-gradient-to-br ${steps[activeStep].color} rounded-3xl p-12 text-white`}>
                  <div className="text-center">
                    {(() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="h-24 w-24 mx-auto mb-6 opacity-20" />;
                    })()}
                    <div className="text-6xl font-bold mb-2">
                      {String(activeStep + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xl font-semibold opacity-90">
                      {steps[activeStep].title}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows & Progress */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevStep}
              disabled={activeStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeStep === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-x-1'
                }`}
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <div className="flex items-center space-x-4">
                <span className="text-slate-600">
                  Step {activeStep + 1} of {steps.length}
                </span>
               
              </div>
              
              {/* Progress Bar */}
              <div className="w-32 h-1 bg-slate-200 rounded-full  mx-auto overflow-hidden">
                <motion.div
                  key={activeStep}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: isAutoPlaying ? 4 : 0, ease: 'linear' }}
                  className="h-full bg-primary"
                />
              </div>
            </div>

            <button
              onClick={handleNextStep}
              disabled={activeStep === steps.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeStep === steps.length - 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary/90 hover:translate-x-1'
                }`}
            >
              <span>Next</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Logistics Journey?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience our sophisticated process designed for efficiency and reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1">
                Start Your Shipment
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;

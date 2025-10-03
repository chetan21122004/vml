import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  return (
    <footer ref={footerRef} className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gradient bg-white bg-clip-text text-transparent">
              VML India
            </h3>
            <p className="text-background/80 leading-relaxed">
              Your Cargo, Our Commitment. Your trusted logistics partner for reliable shipping solutions across air, sea, and land transportation networks worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-light rounded-full p-2 hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
              <a href="#" className="bg-primary-light rounded-full p-2 hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
              <a href="#" className="bg-primary-light rounded-full p-2 hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
              <a href="#" className="bg-primary-light rounded-full p-2 hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5 text-primary hover:text-primary-foreground" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-background/80 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-background">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Sea Freight</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Air Freight</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Freight Forwarder</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Clearance (CHA)</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Container Booking</a></li>
              <li><a href="#services" className="text-background/80 hover:text-primary transition-colors">Transportation</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-background">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>123 Logistics Avenue</p>
                  <p>Port District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">+91-9830000000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">info.vmlindia@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">sales.vmlindia@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 VML India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Shipping Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
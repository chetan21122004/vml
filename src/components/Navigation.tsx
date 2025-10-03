import { useState, useEffect } from 'react';
import { Menu, X, Ship, Plane, Package, FileCheck, Container, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import vmlLogo from '@/assets/vml-logo.png';
import heroImage from '@/assets/hero-container-ship.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import warehouseImage from '@/assets/warehouse-operations.jpg';
import containerTruck from '@/assets/container-truck.jpg';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Handle scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Global ocean freight solutions with FCL and LCL options",
      image: heroImage,
      path: "/services/sea-freight"
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Express air cargo services worldwide",
      image: cargoPlane,
      path: "/services/air-freight"
    },
    {
      icon: Package,
      title: "Freight Forwarding",
      description: "End-to-end logistics management solutions",
      image: warehouseImage,
      path: "/services/freight-forwarding"
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert customs handling and documentation",
      image: warehouseImage,
      path: "/services/customs-clearance"
    },
    {
      icon: Container,
      title: "Container Booking",
      description: "Flexible container solutions and booking",
      image: containerTruck,
      path: "/services/container-booking"
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Reliable inland transportation services",
      image: containerTruck,
      path: "/services/transportation"
    }
  ];

  // Handle scroll events for navbar transparency and progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 bg-background backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-40 transition-transform mt-10 bg-white rounded-full shadow duration-300">
            <Link to="/#home" className="flex m-3 items-center">
              <img
                src={vmlLogo}
                alt="VML India"
                className="h-14 md:h-36 w-auto "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/#home"
              className={cn(
                "relative py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                activeSection === 'home'
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={cn(
                  "relative py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                  activeSection === 'services' || isServicesOpen
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary",
                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                )}
              >
                Services
              </button>

              {/* Services Mega Menu */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-xl shadow-xl border border-border p-6 transition-all duration-300 transform",
                  isServicesOpen
                    ? "opacity-100 translate-y-2 visible"
                    : "opacity-0 translate-y-4 invisible"
                )}
              >
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <service.icon className="absolute bottom-2 right-2 h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>

            <Link
              to="/#gallery"
              className={cn(
                "relative py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                activeSection === 'gallery'
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              )}
            >
              Gallery
            </Link>
            <Link
              to="/#about"
              className={cn(
                "relative py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                activeSection === 'about'
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              )}
            >
              About
            </Link>
            <Link
              to="/#contact"
              className={cn(
                "relative py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                activeSection === 'contact'
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              )}
            >
              Contact
            </Link>
            <Link to="/#contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-foreground/80" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-[800px]" : "max-h-0"
          )}
        >
          <div className="px-2 py-3 bg-card/95 backdrop-blur-md rounded-b-lg shadow-lg divide-y divide-border">
            {/* Main Navigation */}
            <div className="pb-3 space-y-1">
              <Link
                to="/#home"
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  activeSection === 'home'
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2.5 text-sm font-medium text-foreground/80">
                Services
              </div>
              <div className="pl-4 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="flex items-center space-x-3 px-4 py-2.5 rounded-md text-sm transition-all duration-200 hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <service.icon className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground/80 hover:text-primary">
                        {service.title}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/#gallery"
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  activeSection === 'gallery'
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/#about"
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  activeSection === 'about'
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#contact"
                className={cn(
                  "block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  activeSection === 'contact'
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* CTA Section */}
            <div className="pt-3 px-4">
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progressive Scroll Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/30">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navigation;
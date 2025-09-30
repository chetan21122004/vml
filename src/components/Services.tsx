import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Truck, Ship, Plane, ArrowRight, Package, FileCheck, Container,
  Clock, Shield, Globe, CheckCircle, Star, Users, MapPin, Phone
} from 'lucide-react';
import containerTruck from '@/assets/container-truck.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import heroImage from '@/assets/hero-container-ship.jpg';
import warehouseImage from '@/assets/warehouse-operations.jpg';

const Services = () => {
  const services = [
    {
      id: 'sea-freight',
      path: '/services/sea-freight',
      icon: Ship,
      title: "Sea Freight",
      subtitle: "Ocean Shipping Solutions",
      description: "Comprehensive ocean freight solutions for global shipping with full container load (FCL) and less than container load (LCL) options.",
      image: heroImage,
      features: ["FCL & LCL Options", "Global Routes", "Port Services"],
      price: "Starting from $1,200",
      rating: 4.9,
      clients: "2,500+",
      detailedInfo: {
        overview: "Our sea freight services provide cost-effective solutions for large volume shipments worldwide. With partnerships across major ports globally, we ensure reliable and secure ocean transportation.",
        services: [
          "Full Container Load (FCL) - Dedicated containers for your cargo",
          "Less than Container Load (LCL) - Shared container space for smaller shipments",
          "Port-to-Port Services - Direct shipping between major ports",
          "Door-to-Door Services - Complete logistics from pickup to delivery",
          "Project Cargo - Specialized handling for oversized shipments",
          "Reefer Services - Temperature-controlled shipping for perishables"
        ],
        benefits: [
          "Cost-effective for large shipments",
          "Environmentally friendly transport option",
          "Reliable scheduling with major shipping lines",
          "Comprehensive cargo insurance options",
          "Real-time tracking and updates",
          "Expert documentation handling"
        ],
        process: [
          "Quote Request & Booking Confirmation",
          "Cargo Collection & Documentation",
          "Port Handling & Container Loading",
          "Ocean Transit & Tracking Updates",
          "Destination Port Clearance",
          "Final Delivery to Consignee"
        ],
        transitTimes: {
          "Asia to Europe": "18-25 days",
          "Asia to North America": "12-18 days",
          "Europe to North America": "8-12 days",
          "Intra-Asia": "5-10 days"
        }
      }
    },
    {
      id: 'air-freight',
      path: '/services/air-freight',
      icon: Plane,
      title: "Air Freight",
      subtitle: "Express Air Cargo",
      description: "Fast and reliable air cargo services for time-sensitive shipments with express handling and priority boarding.",
      image: cargoPlane,
      features: ["Express Delivery", "Priority Handling", "Real-time Tracking"],
      price: "Starting from $8.50/kg",
      rating: 4.8,
      clients: "1,800+",
      detailedInfo: {
        overview: "Our air freight services offer the fastest shipping solution for urgent and high-value cargo. With access to major airlines and cargo carriers worldwide.",
        services: [
          "Express Air Freight - Next flight out service",
          "Standard Air Freight - Scheduled air cargo service",
          "Consolidated Air Freight - Cost-effective groupage service",
          "Charter Services - Dedicated aircraft for large shipments",
          "Dangerous Goods - Certified handling of hazardous materials",
          "Perishable Cargo - Temperature-sensitive goods handling"
        ],
        benefits: [
          "Fastest transit times globally",
          "High security and cargo safety",
          "Ideal for high-value shipments",
          "Extensive global network coverage",
          "Priority handling and boarding",
          "Real-time flight tracking"
        ],
        process: [
          "Booking & Rate Confirmation",
          "Cargo Pickup & Security Screening",
          "Airport Processing & Documentation",
          "Flight Departure & Transit Tracking",
          "Destination Airport Clearance",
          "Express Delivery to Consignee"
        ],
        transitTimes: {
          "Express Service": "1-2 days",
          "Standard Service": "2-4 days",
          "Economy Service": "4-7 days"
        }
      }
    },
    {
      id: 'freight-forwarding',
      path: '/services/freight-forwarding',
      icon: Package,
      title: "Freight Forwarding",
      subtitle: "Complete Logistics Management",
      description: "End-to-end freight forwarding services managing your complete logistics chain from origin to destination.",
      image: warehouseImage,
      features: ["Documentation", "Customs Support", "Multi-modal Transport"],
      price: "Custom Pricing",
      rating: 4.9,
      clients: "3,200+",
      detailedInfo: {
        overview: "As your trusted freight forwarding partner, we manage the entire logistics process, coordinating multiple transportation modes and handling all documentation requirements.",
        services: [
          "Multi-modal Transportation Planning",
          "Customs Documentation & Compliance",
          "Cargo Insurance & Risk Management",
          "Warehousing & Distribution Services",
          "Supply Chain Optimization",
          "Trade Finance Solutions"
        ],
        benefits: [
          "Single point of contact for all logistics",
          "Cost optimization through route planning",
          "Reduced administrative burden",
          "Expert regulatory compliance",
          "Global network of trusted partners",
          "Advanced tracking and reporting"
        ],
        process: [
          "Logistics Planning & Route Optimization",
          "Documentation Preparation & Compliance",
          "Multi-modal Transportation Coordination",
          "Real-time Tracking & Communication",
          "Customs Clearance & Delivery",
          "Post-delivery Support & Reporting"
        ]
      }
    },
    {
      id: 'customs-clearance',
      path: '/services/customs-clearance',
      icon: FileCheck,
      title: "Customs Clearance",
      subtitle: "CHA Services",
      description: "Expert customs house agent services ensuring smooth clearance of your cargo with complete compliance.",
      image: warehouseImage,
      features: ["Custom Clearance", "Documentation", "Duty Management"],
      price: "Starting from $150",
      rating: 4.7,
      clients: "2,800+",
      detailedInfo: {
        overview: "Our licensed customs house agents provide expert clearance services, ensuring your cargo moves through customs efficiently while maintaining full regulatory compliance.",
        services: [
          "Import & Export Clearance",
          "Duty & Tax Calculation",
          "Regulatory Compliance Management",
          "Documentation Preparation",
          "Customs Audit Support",
          "Trade Compliance Consulting"
        ],
        benefits: [
          "Licensed customs house agents",
          "Reduced clearance times",
          "Minimized duty and tax liabilities",
          "Expert regulatory knowledge",
          "Risk mitigation and compliance",
          "24/7 customs support"
        ],
        process: [
          "Document Review & Preparation",
          "Customs Declaration Filing",
          "Duty Assessment & Payment",
          "Physical Examination (if required)",
          "Clearance Authorization",
          "Cargo Release & Delivery"
        ]
      }
    },
    {
      id: 'container-booking',
      path: '/services/container-booking',
      icon: Container,
      title: "Container Booking",
      subtitle: "Container Solutions",
      description: "Hassle-free container booking services with competitive rates and guaranteed space allocation.",
      image: containerTruck,
      features: ["Online Booking", "Container Tracking", "Flexible Options"],
      price: "Market Rates",
      rating: 4.6,
      clients: "1,500+",
      detailedInfo: {
        overview: "Secure your container space with our streamlined booking platform. We offer various container types and flexible booking options to meet your shipping requirements.",
        services: [
          "20ft & 40ft Standard Containers",
          "High Cube Container Options",
          "Refrigerated Container Booking",
          "Open Top & Flat Rack Containers",
          "Tank Container Services",
          "Special Equipment Arrangements"
        ],
        benefits: [
          "Guaranteed container availability",
          "Competitive market rates",
          "Flexible booking terms",
          "Real-time container tracking",
          "Quality assured equipment",
          "24/7 booking support"
        ],
        process: [
          "Container Requirement Assessment",
          "Rate Quotation & Booking",
          "Container Allocation & Positioning",
          "Loading & Documentation",
          "Transit Monitoring & Updates",
          "Destination Delivery & Return"
        ]
      }
    },
    {
      id: 'transportation',
      path: '/services/transportation',
      icon: Truck,
      title: "Transportation",
      subtitle: "Inland Transport Services",
      description: "Reliable inland transportation services with modern fleet and GPS tracking for door-to-door delivery.",
      image: containerTruck,
      features: ["GPS Tracking", "Door-to-Door", "24/7 Support"],
      price: "Starting from $2.5/km",
      rating: 4.8,
      clients: "4,100+",
      detailedInfo: {
        overview: "Our comprehensive transportation network covers inland movement with modern fleet equipped with GPS tracking, ensuring safe and timely delivery of your cargo.",
        services: [
          "Container Transportation",
          "Break Bulk Cargo Transport",
          "Oversized Cargo Movement",
          "Last Mile Delivery Services",
          "Warehousing & Distribution",
          "Cross-docking Services"
        ],
        benefits: [
          "Modern GPS-tracked fleet",
          "Experienced professional drivers",
          "Comprehensive cargo insurance",
          "Flexible scheduling options",
          "Real-time tracking updates",
          "Competitive transportation rates"
        ],
        process: [
          "Transportation Planning & Scheduling",
          "Cargo Pickup & Loading",
          "GPS Tracking & Route Monitoring",
          "Real-time Updates & Communication",
          "Safe Delivery & Unloading",
          "Delivery Confirmation & Documentation"
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Professional Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Logistics Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From sea freight to air cargo, we provide end-to-end logistics services 
            tailored to meet your unique shipping requirements with professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white">
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Rating & Clients */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-slate-700">{service.rating}</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.price}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{service.clients} clients</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">24/7 support</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link to={service.path}>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Get Quote
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
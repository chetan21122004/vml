import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Ship, ArrowLeft, CheckCircle, Star, Clock, Shield, Globe, 
  Phone, Mail, MapPin, Users, Package, Anchor
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-container-ship.jpg';

const SeaFreight = () => {
  const services = [
    "Full Container Load (FCL) - Dedicated containers for your cargo",
    "Less than Container Load (LCL) - Shared container space for smaller shipments",
    "Port-to-Port Services - Direct shipping between major ports",
    "Door-to-Door Services - Complete logistics from pickup to delivery",
    "Project Cargo - Specialized handling for oversized shipments",
    "Reefer Services - Temperature-controlled shipping for perishables"
  ];

  const benefits = [
    "Cost-effective for large shipments",
    "Environmentally friendly transport option",
    "Reliable scheduling with major shipping lines",
    "Comprehensive cargo insurance options",
    "Real-time tracking and updates",
    "Expert documentation handling"
  ];

  const process = [
    "Quote Request & Booking Confirmation",
    "Cargo Collection & Documentation",
    "Port Handling & Container Loading",
    "Ocean Transit & Tracking Updates",
    "Destination Port Clearance",
    "Final Delivery to Consignee"
  ];

  const transitTimes = {
    "Asia to Europe": "18-25 days",
    "Asia to North America": "12-18 days",
    "Europe to North America": "8-12 days",
    "Intra-Asia": "5-10 days"
  };

  const stats = [
    { icon: Package, value: "15K+", label: "Containers Shipped" },
    { icon: Globe, value: "85+", label: "Global Ports" },
    { icon: Users, value: "2,500+", label: "Satisfied Clients" },
    { icon: Star, value: "4.9", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sea Freight Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Ocean Shipping Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sea Freight <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Comprehensive ocean freight solutions for global shipping with full container load (FCL) 
              and less than container load (LCL) options, connecting businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Quote Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Contact Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Overview</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Our sea freight services provide cost-effective solutions for large volume shipments worldwide. 
                  With partnerships across major ports globally, we ensure reliable and secure ocean transportation 
                  that meets the highest industry standards.
                </p>
                <p>
                  Whether you need full container loads or shared container space, our comprehensive ocean freight 
                  solutions are designed to optimize your supply chain while maintaining cost efficiency and reliability.
                </p>
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Services We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <Card key={idx} className="p-4 border-l-4 border-l-primary bg-primary/5">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {service.split(' - ')[0]}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {service.split(' - ')[1]}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                    <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Flow */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step}</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {idx === 0 && "We provide detailed quotations and confirm your booking requirements"}
                        {idx === 1 && "Professional cargo collection with complete documentation support"}
                        {idx === 2 && "Expert port handling and secure container loading procedures"}
                        {idx === 3 && "Real-time tracking updates throughout the ocean transit"}
                        {idx === 4 && "Efficient customs clearance at destination port"}
                        {idx === 5 && "Safe and timely delivery to your specified location"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Transit Times */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Typical Transit Times</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(transitTimes).map(([route, time]) => (
                  <div key={route} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border">
                    <div className="flex items-center space-x-3">
                      <Anchor className="h-5 w-5 text-primary" />
                      <span className="font-medium text-slate-900">{route}</span>
                    </div>
                    <Badge className="bg-primary/10 text-primary">{time}</Badge>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Ship?</h3>
              <p className="mb-6 opacity-90">Get a customized quote for your sea freight requirements.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91-XXX-XXX-XXXX
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Quote Request
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Our Sea Freight?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Cargo Insurance Included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">Global Port Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">24/7 Customer Support</span>
                </div>
              </div>
            </Card>

            {/* Office Locations */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Offices</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Mumbai Office</p>
                    <p className="text-sm text-slate-600">Main logistics hub</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Chennai Office</p>
                    <p className="text-sm text-slate-600">South India operations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Delhi Office</p>
                    <p className="text-sm text-slate-600">North India operations</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeaFreight;

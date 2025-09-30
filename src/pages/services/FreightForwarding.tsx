import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Package, ArrowLeft, CheckCircle, Star, Clock, Shield, Globe, 
  Phone, Mail, MapPin, Users, Truck, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import warehouseImage from '@/assets/warehouse-operations.jpg';

const FreightForwarding = () => {
  const services = [
    "Multi-modal Transportation Planning - Optimized routing across sea, air, and land",
    "Customs Documentation & Compliance - Complete regulatory compliance management",
    "Cargo Insurance & Risk Management - Comprehensive coverage and risk assessment",
    "Warehousing & Distribution Services - Strategic storage and distribution solutions",
    "Supply Chain Optimization - End-to-end logistics efficiency improvements",
    "Trade Finance Solutions - Financial services for international trade"
  ];

  const benefits = [
    "Single point of contact for all logistics",
    "Cost optimization through route planning",
    "Reduced administrative burden",
    "Expert regulatory compliance",
    "Global network of trusted partners",
    "Advanced tracking and reporting"
  ];

  const process = [
    "Logistics Planning & Route Optimization",
    "Documentation Preparation & Compliance",
    "Multi-modal Transportation Coordination",
    "Real-time Tracking & Communication",
    "Customs Clearance & Delivery",
    "Post-delivery Support & Reporting"
  ];

  const stats = [
    { icon: Package, value: "25K+", label: "Shipments Managed" },
    { icon: Globe, value: "150+", label: "Countries Served" },
    { icon: Users, value: "3,200+", label: "Business Clients" },
    { icon: Star, value: "4.9", label: "Client Satisfaction" }
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
            src={warehouseImage}
            alt="Freight Forwarding Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Complete Logistics Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Freight <span className="text-primary">Forwarding</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              End-to-end freight forwarding services managing your complete logistics chain 
              from origin to destination with expert coordination and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Discuss Requirements
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Request Proposal
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
                  As your trusted freight forwarding partner, we manage the entire logistics process, 
                  coordinating multiple transportation modes and handling all documentation requirements. 
                  Our comprehensive approach ensures seamless movement of your cargo worldwide.
                </p>
                <p>
                  From initial planning to final delivery, we provide end-to-end logistics management 
                  that optimizes costs, reduces complexity, and ensures compliance with international 
                  trade regulations across all markets.
                </p>
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Services</h2>
              <div className="grid grid-cols-1 gap-4">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Partnership Benefits</h2>
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
                        {idx === 0 && "Strategic planning and route optimization for cost-effective logistics"}
                        {idx === 1 && "Complete documentation preparation ensuring regulatory compliance"}
                        {idx === 2 && "Seamless coordination across multiple transportation modes"}
                        {idx === 3 && "Continuous tracking updates and proactive communication"}
                        {idx === 4 && "Expert customs clearance and final delivery coordination"}
                        {idx === 5 && "Comprehensive reporting and ongoing support services"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Areas */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialized Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Truck className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Multi-Modal Transport</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Seamless integration of sea, air, and land transportation for optimal routing and cost efficiency.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Sea-Air combination services</li>
                    <li>• Door-to-door delivery solutions</li>
                    <li>• Cross-border transportation</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Documentation Services</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Complete handling of all trade documentation and regulatory compliance requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Commercial invoices and packing lists</li>
                    <li>• Certificates of origin</li>
                    <li>• Export/import licenses</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-purple-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Risk Management</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Comprehensive cargo insurance and risk assessment for complete peace of mind.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Marine cargo insurance</li>
                    <li>• Risk assessment and mitigation</li>
                    <li>• Claims handling support</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-8 w-8 text-orange-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Global Network</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Extensive worldwide network of trusted partners and agents for reliable service delivery.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 150+ countries coverage</li>
                    <li>• Local expertise worldwide</li>
                    <li>• 24/7 global support</li>
                  </ul>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Need Logistics Partner?</h3>
              <p className="mb-6 opacity-90">Let's discuss your freight forwarding requirements and create a customized solution.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Request Proposal
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">Global Network Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Comprehensive Insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">24/7 Support & Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">Dedicated Account Team</span>
                </div>
              </div>
            </Card>

            {/* Industry Expertise */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industry Expertise</h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">Automotive</p>
                  <p className="text-sm text-slate-600">Specialized automotive logistics</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">Electronics</p>
                  <p className="text-sm text-slate-600">High-value electronics handling</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">Pharmaceuticals</p>
                  <p className="text-sm text-slate-600">Temperature-controlled logistics</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">Textiles</p>
                  <p className="text-sm text-slate-600">Fashion and textile logistics</p>
                </div>
              </div>
            </Card>

            {/* Regional Offices */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Regional Offices</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Mumbai HQ</p>
                    <p className="text-sm text-slate-600">Main operations center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Delhi NCR</p>
                    <p className="text-sm text-slate-600">North India hub</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Bangalore</p>
                    <p className="text-sm text-slate-600">South India operations</p>
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

export default FreightForwarding;

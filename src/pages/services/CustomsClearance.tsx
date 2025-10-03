import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  FileCheck, ArrowLeft, CheckCircle, Star, Clock, Shield, Scale, 
  Phone, Mail, MapPin, Users, Package, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import warehouseImage from '@/assets/warehouse-operations.jpg';

const CustomsClearance = () => {
  const services = [
    "Import & Export Clearance - Complete customs clearance for all cargo types",
    "Duty & Tax Calculation - Accurate assessment and payment processing",
    "Regulatory Compliance Management - Expert handling of all regulations",
    "Documentation Preparation - Complete paperwork and filing services",
    "Customs Audit Support - Professional audit assistance and compliance",
    "Trade Compliance Consulting - Strategic advice for trade optimization"
  ];

  const benefits = [
    "Licensed customs house agents",
    "Reduced clearance times",
    "Minimized duty and tax liabilities",
    "Expert regulatory knowledge",
    "Risk mitigation and compliance",
    "24/7 customs support"
  ];

  const process = [
    "Document Review & Preparation",
    "Customs Declaration Filing",
    "Duty Assessment & Payment",
    "Physical Examination (if required)",
    "Clearance Authorization",
    "Cargo Release & Delivery"
  ];

  const stats = [
    { icon: Package, value: "12K+", label: "Customs Clearances" },
    { icon: Clock, value: "2-4hrs", label: "Average Clearance" },
    { icon: Users, value: "2,800+", label: "Satisfied Clients" },
    { icon: Star, value: "4.7", label: "Service Rating" }
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
            alt="Customs Clearance Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Expert CHA Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Customs <span className="text-primary">Clearance</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Expert customs house agent services ensuring smooth clearance of your cargo 
              with complete compliance and regulatory expertise for seamless trade operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Clearance Quote
              </Button>
              <Button size="lg" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Consult CHA Expert
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
                  Our licensed customs house agents provide expert clearance services, ensuring your cargo 
                  moves through customs efficiently while maintaining full regulatory compliance. With deep 
                  knowledge of customs procedures and trade regulations, we streamline the clearance process.
                </p>
                <p>
                  From documentation preparation to duty calculation and final cargo release, we handle 
                  every aspect of customs clearance with precision and expertise, minimizing delays and 
                  ensuring compliance with all regulatory requirements.
                </p>
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Customs Services</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our CHA Services?</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Clearance Process</h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step}</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {idx === 0 && "Thorough review and preparation of all required documentation"}
                        {idx === 1 && "Accurate customs declaration filing with proper classification"}
                        {idx === 2 && "Professional duty assessment and payment processing"}
                        {idx === 3 && "Coordination for physical examination when required"}
                        {idx === 4 && "Obtaining clearance authorization from customs authorities"}
                        {idx === 5 && "Final cargo release and delivery coordination"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specialized Services */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialized Clearance Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Scale className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Import Clearance</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Complete import clearance services with duty optimization and compliance management.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Bill of Entry preparation</li>
                    <li>• Duty and tax calculation</li>
                    <li>• Import license verification</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Export Clearance</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Efficient export clearance with proper documentation and regulatory compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Shipping Bill preparation</li>
                    <li>• Export incentive claims</li>
                    <li>• Certificate of origin</li>
                  </ul>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Need Customs Support?</h3>
              <p className="mb-6 opacity-90">Get expert CHA services for smooth customs clearance.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Call CHA Expert
                </Button>
                <Button className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Clearance Quote
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">CHA Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Licensed CHA Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">Fast Clearance Times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Scale className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">Duty Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span className="text-slate-700">Expert Compliance Team</span>
                </div>
              </div>
            </Card>

            {/* Port Coverage */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Port Coverage</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">JNPT Mumbai</p>
                    <p className="text-sm text-slate-600">Main container port</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Chennai Port</p>
                    <p className="text-sm text-slate-600">South India gateway</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Kandla Port</p>
                    <p className="text-sm text-slate-600">West coast operations</p>
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

export default CustomsClearance;

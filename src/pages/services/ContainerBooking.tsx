import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Container, ArrowLeft, CheckCircle, Star, Clock, Shield, Package, 
  Phone, Mail, MapPin, Users, Truck, Ship
} from 'lucide-react';
import { Link } from 'react-router-dom';
import containerTruck from '@/assets/container-truck.jpg';

const ContainerBooking = () => {
  const services = [
    "20ft & 40ft Standard Containers - Standard dry containers for general cargo",
    "High Cube Container Options - Extra height containers for voluminous cargo",
    "Refrigerated Container Booking - Temperature-controlled reefer containers",
    "Open Top & Flat Rack Containers - Specialized containers for oversized cargo",
    "Tank Container Services - Liquid cargo transportation containers",
    "Special Equipment Arrangements - Custom container solutions for unique requirements"
  ];

  const benefits = [
    "Guaranteed container availability",
    "Competitive market rates",
    "Flexible booking terms",
    "Real-time container tracking",
    "Quality assured equipment",
    "24/7 booking support"
  ];

  const process = [
    "Container Requirement Assessment",
    "Rate Quotation & Booking",
    "Container Allocation & Positioning",
    "Loading & Documentation",
    "Transit Monitoring & Updates",
    "Destination Delivery & Return"
  ];

  const containerTypes = [
    { type: "20ft Standard", description: "General purpose dry container", capacity: "28 CBM" },
    { type: "40ft Standard", description: "Standard dry container", capacity: "58 CBM" },
    { type: "40ft High Cube", description: "Extra height container", capacity: "68 CBM" },
    { type: "20ft Reefer", description: "Refrigerated container", capacity: "25 CBM" }
  ];

  const stats = [
    { icon: Container, value: "5K+", label: "Containers Booked" },
    { icon: Ship, value: "50+", label: "Shipping Lines" },
    { icon: Users, value: "1,500+", label: "Active Clients" },
    { icon: Star, value: "4.6", label: "Service Rating" }
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
            src={containerTruck}
            alt="Container Booking Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Container Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Container <span className="text-primary">Booking</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Hassle-free container booking services with competitive rates and guaranteed space 
              allocation across all major shipping lines and container types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Book Container Now
              </Button>
              <Button size="lg" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Check Availability
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
                  Secure your container space with our streamlined booking platform. We offer various 
                  container types and flexible booking options to meet your shipping requirements, 
                  ensuring guaranteed availability and competitive rates.
                </p>
                <p>
                  From standard dry containers to specialized reefer units, our comprehensive container 
                  booking service provides access to quality equipment from major shipping lines worldwide, 
                  with real-time tracking and professional support throughout the journey.
                </p>
              </div>
            </section>

            {/* Container Types */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Container Types Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {containerTypes.map((container, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-l-primary bg-primary/5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Container className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {container.type}
                          </h3>
                          <p className="text-slate-600 text-sm mb-2">
                            {container.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-primary text-white">{container.capacity}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Booking Services</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Booking Advantages</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Booking Process</h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step}</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {idx === 0 && "Detailed assessment of your container requirements and specifications"}
                        {idx === 1 && "Competitive rate quotation and confirmed container booking"}
                        {idx === 2 && "Container allocation and positioning at pickup location"}
                        {idx === 3 && "Professional loading supervision and documentation"}
                        {idx === 4 && "Real-time monitoring and tracking updates during transit"}
                        {idx === 5 && "Timely delivery and container return coordination"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Features */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Special Container Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Reefer Containers</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Temperature-controlled containers for perishable and pharmaceutical cargo.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Temperature range: -25°C to +25°C</li>
                    <li>• Continuous monitoring</li>
                    <li>• Backup power systems</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Truck className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Special Equipment</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Specialized containers for oversized and project cargo requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Open top containers</li>
                    <li>• Flat rack containers</li>
                    <li>• Tank containers</li>
                  </ul>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Need Container Space?</h3>
              <p className="mb-6 opacity-90">Book your containers with guaranteed availability and competitive rates.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
                <Button className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Check Availability
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Book With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Quality Assured Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Container className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">All Container Types</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">24/7 Support Team</span>
                </div>
              </div>
            </Card>

            {/* Shipping Lines */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Partner Shipping Lines</h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">Maersk Line</p>
                  <p className="text-sm text-slate-600">Global container shipping</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">MSC</p>
                  <p className="text-sm text-slate-600">Mediterranean Shipping</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">CMA CGM</p>
                  <p className="text-sm text-slate-600">French container line</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-medium text-slate-900">COSCO</p>
                  <p className="text-sm text-slate-600">Chinese shipping giant</p>
                </div>
              </div>
            </Card>

            {/* Port Network */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Port Network</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">JNPT Mumbai</p>
                    <p className="text-sm text-slate-600">Main container terminal</p>
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

export default ContainerBooking;

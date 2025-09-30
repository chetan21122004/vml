import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Plane, ArrowLeft, CheckCircle, Star, Clock, Shield, Zap, 
  Phone, Mail, MapPin, Users, Package, Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import cargoPlane from '@/assets/cargo-plane.jpg';

const AirFreight = () => {
  const services = [
    "Express Air Freight - Next flight out service for urgent shipments",
    "Standard Air Freight - Scheduled air cargo service with reliable timing",
    "Consolidated Air Freight - Cost-effective groupage service for smaller loads",
    "Charter Services - Dedicated aircraft for large or special shipments",
    "Dangerous Goods - Certified handling of hazardous materials",
    "Perishable Cargo - Temperature-sensitive goods with cold chain management"
  ];

  const benefits = [
    "Fastest transit times globally",
    "High security and cargo safety",
    "Ideal for high-value shipments",
    "Extensive global network coverage",
    "Priority handling and boarding",
    "Real-time flight tracking"
  ];

  const process = [
    "Booking & Rate Confirmation",
    "Cargo Pickup & Security Screening",
    "Airport Processing & Documentation",
    "Flight Departure & Transit Tracking",
    "Destination Airport Clearance",
    "Express Delivery to Consignee"
  ];

  const transitTimes = {
    "Express Service": "1-2 days",
    "Standard Service": "2-4 days",
    "Economy Service": "4-7 days"
  };

  const stats = [
    { icon: Package, value: "8K+", label: "Air Shipments" },
    { icon: Timer, value: "24hrs", label: "Express Delivery" },
    { icon: Users, value: "1,800+", label: "Happy Clients" },
    { icon: Star, value: "4.8", label: "Service Rating" }
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
            src={cargoPlane}
            alt="Air Freight Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Express Air Cargo Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Air Freight <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Fast and reliable air cargo services for time-sensitive shipments with express handling, 
              priority boarding, and global reach for urgent logistics requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Express Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Contact Specialist
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
                  Our air freight services offer the fastest shipping solution for urgent and high-value cargo. 
                  With access to major airlines and cargo carriers worldwide, we ensure your time-sensitive 
                  shipments reach their destination quickly and safely.
                </p>
                <p>
                  From express next-flight-out services to consolidated air freight options, we provide 
                  flexible solutions that meet your specific timing and budget requirements while maintaining 
                  the highest standards of security and reliability.
                </p>
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Air Cargo Services</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Air Freight?</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Air Freight Process</h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step}</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {idx === 0 && "Instant rate quotes and booking confirmation for your air cargo"}
                        {idx === 1 && "Professional pickup service with mandatory security screening"}
                        {idx === 2 && "Expert airport processing and complete documentation handling"}
                        {idx === 3 && "Real-time flight tracking with departure notifications"}
                        {idx === 4 && "Swift customs clearance at destination airport"}
                        {idx === 5 && "Priority delivery to your specified destination"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Levels */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Levels & Transit Times</h2>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(transitTimes).map(([service, time]) => (
                  <Card key={service} className="p-6 border-l-4 border-l-primary">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Plane className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold text-slate-900">{service}</h3>
                          <p className="text-slate-600 text-sm">
                            {service === 'Express Service' && 'Fastest option for critical shipments'}
                            {service === 'Standard Service' && 'Reliable scheduled air cargo service'}
                            {service === 'Economy Service' && 'Cost-effective air freight solution'}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-primary text-white text-lg px-4 py-2">{time}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Need Express Shipping?</h3>
              <p className="mb-6 opacity-90">Get instant quotes for urgent air freight requirements.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +91-XXX-XXX-XXXX
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Express Quote
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Air Freight Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Express 24-48hr Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">High Security Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">Real-time Flight Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">Dedicated Account Manager</span>
                </div>
              </div>
            </Card>

            {/* Pricing Guide */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing Guide</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                  <span className="text-slate-700">Express Service</span>
                  <span className="font-semibold text-slate-900">$12-15/kg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                  <span className="text-slate-700">Standard Service</span>
                  <span className="font-semibold text-slate-900">$8.50-12/kg</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                  <span className="text-slate-700">Economy Service</span>
                  <span className="font-semibold text-slate-900">$6-8.50/kg</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  *Prices vary based on destination, weight, and service level
                </p>
              </div>
            </Card>

            {/* Airport Network */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Major Airport Hubs</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Mumbai (BOM)</p>
                    <p className="text-sm text-slate-600">Primary cargo hub</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Delhi (DEL)</p>
                    <p className="text-sm text-slate-600">North India gateway</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Chennai (MAA)</p>
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

export default AirFreight;

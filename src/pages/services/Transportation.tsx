import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Truck, ArrowLeft, CheckCircle, Star, Clock, Shield, MapPin, 
  Phone, Mail, Navigation, Users, Package, Route
} from 'lucide-react';
import { Link } from 'react-router-dom';
import containerTruck from '@/assets/container-truck.jpg';

const Transportation = () => {
  const services = [
    "Container Transportation - Full and empty container movement services",
    "Break Bulk Cargo Transport - Specialized handling for non-containerized cargo",
    "Oversized Cargo Movement - Heavy lift and project cargo transportation",
    "Last Mile Delivery Services - Final delivery to customer destinations",
    "Warehousing & Distribution - Storage and distribution center operations",
    "Cross-docking Services - Direct transfer without warehousing"
  ];

  const benefits = [
    "Modern GPS-tracked fleet",
    "Experienced professional drivers",
    "Comprehensive cargo insurance",
    "Flexible scheduling options",
    "Real-time tracking updates",
    "Competitive transportation rates"
  ];

  const process = [
    "Transportation Planning & Scheduling",
    "Cargo Pickup & Loading",
    "GPS Tracking & Route Monitoring",
    "Real-time Updates & Communication",
    "Safe Delivery & Unloading",
    "Delivery Confirmation & Documentation"
  ];

  const fleetTypes = [
    { type: "Container Trailers", description: "20ft & 40ft container transportation", capacity: "Up to 30 tons" },
    { type: "Flatbed Trucks", description: "Open deck for oversized cargo", capacity: "Up to 25 tons" },
    { type: "Covered Trucks", description: "Weather protection for general cargo", capacity: "Up to 20 tons" },
    { type: "Multi-Axle Trailers", description: "Heavy cargo and project shipments", capacity: "Up to 100 tons" }
  ];

  const stats = [
    { icon: Truck, value: "200+", label: "Fleet Vehicles" },
    { icon: Route, value: "50K+", label: "Trips Completed" },
    { icon: Users, value: "4,100+", label: "Satisfied Clients" },
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
            src={containerTruck}
            alt="Transportation Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Inland Transport Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transportation <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Reliable inland transportation services with modern fleet and GPS tracking 
              for door-to-door delivery, ensuring safe and timely cargo movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Book Transport
              </Button>
              <Button size="lg" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="mr-2 h-5 w-5" />
                Get Transport Quote
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
                  Our comprehensive transportation network covers inland movement with modern fleet 
                  equipped with GPS tracking, ensuring safe and timely delivery of your cargo. 
                  From container transportation to specialized project cargo movement.
                </p>
                <p>
                  With experienced drivers, real-time tracking, and comprehensive insurance coverage, 
                  we provide reliable transportation solutions that connect ports, warehouses, and 
                  final destinations across the country.
                </p>
              </div>
            </section>

            {/* Fleet Types */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Fleet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fleetTypes.map((fleet, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-l-primary bg-primary/5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Truck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {fleet.type}
                          </h3>
                          <p className="text-slate-600 text-sm mb-2">
                            {fleet.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-primary text-white">{fleet.capacity}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Services Offered */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transportation Services</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transportation Advantages</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transportation Process</h2>
              <div className="space-y-4">
                {process.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step}</h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {idx === 0 && "Strategic route planning and vehicle scheduling for optimal efficiency"}
                        {idx === 1 && "Professional cargo pickup with proper loading and securing"}
                        {idx === 2 && "Continuous GPS monitoring and route optimization during transit"}
                        {idx === 3 && "Regular status updates and proactive communication"}
                        {idx === 4 && "Safe delivery with professional unloading at destination"}
                        {idx === 5 && "Complete delivery confirmation with proper documentation"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specialized Services */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Specialized Transportation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Project Cargo</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Specialized transportation for oversized and heavy project cargo requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Heavy lift equipment</li>
                    <li>• Route surveys and permits</li>
                    <li>• Specialized trailers</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Navigation className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold text-slate-900">GPS Tracking</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Advanced GPS tracking system for real-time monitoring and route optimization.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Real-time location updates</li>
                    <li>• Route optimization</li>
                    <li>• Delivery notifications</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-purple-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Cargo Security</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Comprehensive security measures and insurance coverage for cargo protection.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Cargo insurance coverage</li>
                    <li>• Secure loading procedures</li>
                    <li>• Driver background checks</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <h3 className="text-xl font-semibold text-slate-900">Time-Critical</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Express transportation services for time-sensitive and urgent deliveries.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Express delivery options</li>
                    <li>• Priority scheduling</li>
                    <li>• 24/7 operations</li>
                  </ul>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">Need Transportation?</h3>
              <p className="mb-6 opacity-90">Get reliable transportation services with real-time tracking.</p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-slate-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Book Transport
                </Button>
                <Button className="w-full border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </div>
            </Card>

            {/* Service Features */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Our Fleet?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-primary" />
                  <span className="text-slate-700">GPS Tracking System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Comprehensive Insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-slate-700">24/7 Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-700">Professional Drivers</span>
                </div>
              </div>
            </Card>

            {/* Coverage Areas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Coverage Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Western India</p>
                    <p className="text-sm text-slate-600">Mumbai, Pune, Gujarat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Northern India</p>
                    <p className="text-sm text-slate-600">Delhi NCR, Punjab, Haryana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Southern India</p>
                    <p className="text-sm text-slate-600">Chennai, Bangalore, Hyderabad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Eastern India</p>
                    <p className="text-sm text-slate-600">Kolkata, Bhubaneswar</p>
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

export default Transportation;

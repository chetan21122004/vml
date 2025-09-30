import containerTruck from '@/assets/container-truck.jpg';
import cargoPlane from '@/assets/cargo-plane.jpg';
import heroImage from '@/assets/hero-container-ship.jpg';
import warehouseOps from '@/assets/warehouse-operations.jpg';
import logisticsWarehouse from '@/assets/logistics-warehouse.jpg';
import customsClearance from '@/assets/customs-clearance.jpg';
import freightForwarding from '@/assets/freight-forwarding.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Sea Freight Operations",
      description: "Modern port facilities with advanced cargo handling"
    },
    {
      image: cargoPlane,
      title: "Air Freight Services",
      description: "Express air cargo for time-sensitive deliveries"
    },
    {
      image: freightForwarding,
      title: "Freight Forwarding",
      description: "Comprehensive logistics coordination and management"
    },
    {
      image: customsClearance,
      title: "Customs Clearance",
      description: "Expert CHA services for seamless cargo clearance"
    },
    {
      image: logisticsWarehouse,
      title: "Container Booking",
      description: "Efficient container management and booking services"
    },
    {
      image: containerTruck,
      title: "Transportation Services",
      description: "Reliable ground transportation and distribution"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our professional logistics operations across air, sea, and land transportation networks.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
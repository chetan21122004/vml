import { Package, Users, Globe, Clock, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      icon: Package,
      value: "25K+",
      label: "Shipments Delivered",
      description: "Successfully completed shipments worldwide",
      color: "text-blue-500"
    },
    {
      icon: Users,
      value: "5,000+",
      label: "Happy Clients",
      description: "Trusted by businesses globally",
      color: "text-green-500"
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries Served",
      description: "Global reach and presence",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      value: "99.8%",
      label: "On-Time Delivery",
      description: "Reliable and punctual service",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "50+",
      label: "Industry Awards",
      description: "Recognition for excellence",
      color: "text-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Numbers that speak for our commitment to excellence and reliability in logistics services
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-slate-50 group-hover:bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center transition-colors duration-300">
                    <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <h4 className="text-xl font-semibold text-slate-700 mb-2">
                    {stat.label}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the reliability and excellence that thousands of businesses trust
            </p>
            <button className="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Fuel, Zap } from "lucide-react";
import oilGasImage from "@/assets/oil-gas-procurement.jpg";
import electricalImage from "@/assets/electrical-engineering.jpg";

const services = [
  {
    icon: Fuel,
    title: "Oil & Gas Procurement",
    description: "End-to-end procurement support ensuring timely sourcing of high-quality materials and equipment while maintaining cost control and compliance.",
    features: [
      "Vendor sourcing & evaluation",
      "Technical bid evaluation",
      "Quality assurance coordination",
      "Logistics & delivery tracking"
    ],
    image: oilGasImage,
    link: "/services#procurement",
    accent: "accent"
  },
  {
    icon: Zap,
    title: "Electrical Engineering & Energy Consulting",
    description: "Comprehensive electrical engineering and consulting services for energy and utility infrastructure, supporting both new and existing systems.",
    features: [
      "Electrical system design (LV, MV, HV)",
      "Load flow & protection studies",
      "Power quality assessments",
      "Energy efficiency optimization"
    ],
    image: electricalImage,
    link: "/services#electrical",
    accent: "primary"
  }
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wide uppercase mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine engineering expertise, supply-chain knowledge, and practical field experience 
            to solve complex challenges and add measurable value.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div 
                className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-14 h-14 rounded-xl ${
                      service.accent === 'accent' ? 'bg-accent' : 'bg-primary'
                    } flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -z-10 ${
                  index % 2 === 0 ? '-right-8 -bottom-8' : '-left-8 -bottom-8'
                } w-64 h-64 bg-accent/10 rounded-full blur-3xl`} />
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-4 ${
                    service.accent === 'accent' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <span className={`w-2 h-2 rounded-full ${
                          service.accent === 'accent' ? 'bg-accent' : 'bg-primary'
                        }`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className={`inline-flex items-center gap-2 font-semibold transition-all group ${
                      service.accent === 'accent' 
                        ? 'text-accent hover:text-accent/80' 
                        : 'text-primary hover:text-primary/80'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <Link to="/services" className="btn-primary group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

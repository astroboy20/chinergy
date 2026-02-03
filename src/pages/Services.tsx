import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Fuel, 
  Zap, 
  CheckCircle2, 
  Search, 
  Package, 
  FileText, 
  Users, 
  Shield, 
  Truck,
  Target,
  Settings,
  Gauge,
  Building,
  BarChart3,
  FileCheck,
  Lightbulb
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import oilGasImage from "@/assets/oil-gas-procurement.jpg";
import electricalImage from "@/assets/electrical-engineering.jpg";

const procurementServices = [
  { icon: Search, text: "Vendor sourcing, pre-qualification, and evaluation" },
  { icon: Package, text: "Material and equipment procurement" },
  { icon: FileText, text: "Technical bid evaluation and commercial analysis" },
  { icon: Users, text: "Supplier coordination and expediting" },
  { icon: Shield, text: "Quality assurance and inspection coordination" },
  { icon: Truck, text: "Logistics support and delivery tracking" },
  { icon: Target, text: "Compliance with project specifications and industry standards" }
];

const electricalServices = [
  { icon: Settings, text: "Electrical system design and analysis (LV, MV, HV)" },
  { icon: Gauge, text: "Load flow, short-circuit, and protection studies" },
  { icon: Building, text: "Substation and distribution system support" },
  { icon: BarChart3, text: "Power quality and reliability assessments" },
  { icon: FileCheck, text: "Asset condition assessment and capacity studies" },
  { icon: Users, text: "Utility coordination and interconnection support" },
  { icon: Lightbulb, text: "Energy efficiency and system optimization" },
  { icon: FileText, text: "Technical reviews, reports, and compliance documentation" }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-navy-gradient py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container-section relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm tracking-wide uppercase mb-6"
            >
              Our Services
            </motion.span>
            <h1 className="text-primary-foreground mb-6">
              Comprehensive Engineering Solutions
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              From procurement to electrical engineering consulting, we deliver end-to-end 
              solutions for your energy infrastructure needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oil & Gas Procurement */}
      <section id="procurement" className="section-padding bg-background scroll-mt-24 overflow-hidden">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Fuel className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wide">Service 01</p>
                  <h2 className="text-2xl md:text-3xl">Oil & Gas Procurement Services</h2>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Chinergy Engineering Services provides end-to-end procurement support for 
                oil and gas projects, ensuring timely sourcing of high-quality materials 
                and equipment while maintaining cost control and compliance.
              </p>
              
              <p className="text-muted-foreground mb-8">
                We leverage strong supplier networks and technical insight to reduce lead 
                times, manage risk, and support project schedules.
              </p>

              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4">Procurement Services Include:</h3>
                <ul className="space-y-3">
                  {procurementServices.map((service, index) => (
                    <motion.li
                      key={service.text}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <service.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{service.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={oilGasImage} 
                  alt="Oil and Gas Procurement" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electrical Engineering */}
      <section id="electrical" className="section-padding bg-secondary scroll-mt-24 overflow-hidden">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wide">Service 02</p>
                  <h2 className="text-2xl md:text-3xl">Electrical Engineering, Energy & Utility Consulting</h2>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                We deliver comprehensive electrical engineering and consulting services for 
                energy and utility infrastructure, supporting both new and existing systems.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Our solutions are designed to improve system reliability, safety, and 
                performance while supporting regulatory and operational requirements.
              </p>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4">Engineering & Consulting Services Include:</h3>
                <ul className="space-y-3">
                  {electricalServices.map((service, index) => (
                    <motion.li
                      key={service.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <service.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{service.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={electricalImage} 
                  alt="Electrical Engineering" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wide uppercase mb-4"
            >
              Our Approach
            </motion.span>
            <h2 className="mb-6">How We Deliver Value</h2>
            <p className="text-muted-foreground text-lg mb-12">
              We combine engineering expertise, supply-chain knowledge, and practical field 
              experience to solve complex challenges and add measurable value to every project.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Industry Compliance", desc: "Meeting all standards and regulations" },
                { title: "Cost Optimization", desc: "Maximizing value without compromising quality" },
                { title: "Timely Delivery", desc: "Keeping your projects on schedule" }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-secondary border border-border hover:border-accent/30 transition-all"
                >
                  <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;

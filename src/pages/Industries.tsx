import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, Sun, Building2, HardHat, Factory, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import heroBackground from "@/assets/hero-background.jpg";

const industries = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    subtitle: "Upstream, Midstream, Downstream",
    description: "Comprehensive procurement and engineering support for exploration, production, refining, and distribution operations. We understand the unique challenges of the oil and gas industry and provide solutions that ensure operational efficiency and regulatory compliance.",
    services: ["Procurement of drilling equipment and materials", "Pipeline and facility engineering support", "Quality assurance and inspection", "Vendor management and coordination"],
    color: "accent"
  },
  {
    icon: Zap,
    title: "Power Generation & Transmission",
    subtitle: "Generation Infrastructure",
    description: "Engineering consulting and procurement solutions for power generation facilities. From thermal to combined-cycle plants, we support the entire project lifecycle with technical expertise and procurement efficiency.",
    services: ["Electrical system design and analysis", "Protection and control studies", "Equipment procurement", "Commissioning support"],
    color: "primary"
  },
  {
    icon: Building2,
    title: "Electric Utilities",
    subtitle: "Distribution Systems",
    description: "Supporting electric utility companies with distribution system design, reliability assessments, and infrastructure modernization. We help utilities deliver reliable power to their customers.",
    services: ["Distribution system analysis", "Asset condition assessments", "Power quality studies", "Grid modernization support"],
    color: "accent"
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    subtitle: "Sustainable Solutions",
    description: "Engineering and procurement support for renewable energy projects including solar, wind, and hybrid systems. We help develop sustainable energy solutions that meet environmental and economic goals.",
    services: ["Interconnection studies", "Equipment specification and procurement", "Grid integration support", "Regulatory compliance documentation"],
    color: "primary"
  },
  {
    icon: Factory,
    title: "Industrial & Commercial Facilities",
    subtitle: "Facility Infrastructure",
    description: "Electrical engineering services for industrial plants and commercial facilities. We design and optimize power systems that support manufacturing operations and commercial activities.",
    services: ["Power system design", "Load analysis and capacity planning", "Energy efficiency audits", "Electrical safety assessments"],
    color: "accent"
  },
  {
    icon: HardHat,
    title: "Infrastructure & EPC Projects",
    subtitle: "Project Development",
    description: "Supporting EPC contractors and infrastructure developers with engineering and procurement services. We integrate seamlessly with project teams to ensure successful delivery.",
    services: ["Engineering design support", "Procurement coordination", "Technical bid evaluation", "Project documentation"],
    color: "primary"
  }
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Energy infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
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
              Our Expertise
            </motion.span>
            <h1 className="text-primary-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              From oil and gas operations to renewable energy projects, we provide 
              specialized engineering and procurement solutions across diverse energy sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl ${
                        industry.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                      } flex items-center justify-center`}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <industry.icon className={`h-8 w-8 ${
                        industry.color === 'accent' ? 'text-accent' : 'text-primary'
                      }`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 font-semibold transition-all group ${
                      industry.color === 'accent' 
                        ? 'text-accent hover:text-accent/80' 
                        : 'text-primary hover:text-primary/80'
                    }`}
                  >
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`rounded-2xl p-8 border transition-all ${
                    industry.color === 'accent' 
                      ? 'bg-secondary border-border hover:border-accent/30' 
                      : 'bg-card border-border hover:border-primary/30'
                  }`}>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Services
                    </h4>
                    <ul className="space-y-4">
                      {industry.services.map((service, i) => (
                        <motion.li 
                          key={service}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            industry.color === 'accent' ? 'text-accent' : 'text-primary'
                          }`} />
                          <span className="text-foreground">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Summary */}
      <section className="section-padding bg-secondary">
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
              Multidisciplinary Expertise
            </motion.span>
            <h2 className="mb-6">Cross-Industry Capabilities</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Our multidisciplinary team brings expertise that transcends industry boundaries. 
              Whether you're in oil and gas, power generation, or renewable energy, we have the 
              technical knowledge and practical experience to support your projects.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Industries;

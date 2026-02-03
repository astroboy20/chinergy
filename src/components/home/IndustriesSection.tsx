import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Zap, Sun, Building2, HardHat, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    description: "Upstream, Midstream, Downstream operations"
  },
  {
    icon: Zap,
    title: "Power Generation",
    description: "Generation and transmission infrastructure"
  },
  {
    icon: Building2,
    title: "Electric Utilities",
    description: "Distribution and utility systems"
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Sustainable energy project support"
  },
  {
    icon: HardHat,
    title: "Industrial Facilities",
    description: "Commercial and industrial projects"
  }
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide uppercase mb-4"
          >
            Industry Expertise
          </motion.span>
          <h2 className="mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From oil and gas operations to renewable energy projects, we provide specialized 
            engineering and procurement solutions across diverse energy sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 text-center group border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 5 }}
              >
                <industry.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </motion.div>
              <h3 className="font-bold mb-2 text-lg">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/industries" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline group">
            Explore All Industries
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

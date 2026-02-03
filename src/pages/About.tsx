import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Award, Heart, Target, Users, Clock } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import heroBackground from "@/assets/hero-background.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Safety and risk mitigation are embedded in every decision and deliverable."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We deliver high-quality engineering, procurement, and consulting services that meet or exceed industry standards."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with transparency, accountability, and ethical responsibility."
  },
  {
    icon: Target,
    title: "Technical Excellence",
    description: "We uphold high engineering standards and best industry practices."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "We tailor solutions to meet each client's specific operational and business needs."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on commitments with consistency and professionalism."
  }
];

const About = () => {
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
              About Us
            </motion.span>
            <h1 className="text-primary-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Chinergy Engineering Services is a multidisciplinary engineering and procurement 
              firm delivering reliable, cost-effective solutions to the oil & gas, energy, and utility sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wide uppercase mb-4"
              >
                Company Profile
              </motion.span>
              <h2 className="mb-6">About Chinergy Engineering Services</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  We specialize in oil and gas procurement services and electrical engineering, 
                  energy, and utility consulting, supporting clients across the full project 
                  lifecycle—from planning and design to sourcing, execution, and optimization.
                </p>
                <p className="text-lg leading-relaxed">
                  With a strong focus on technical excellence, safety, and compliance, Chinergy 
                  Engineering Services partners with operators, EPC contractors, and utility 
                  organizations to ensure projects are delivered efficiently, sustainably, and 
                  in accordance with industry standards.
                </p>
                <p className="text-lg leading-relaxed">
                  Our approach combines engineering expertise, supply-chain knowledge, and 
                  practical field experience to solve complex challenges and add measurable value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-10 border border-border hover:border-accent/30 transition-all group"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 5 }}
              >
                <Target className="h-8 w-8 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide dependable engineering and procurement solutions that enhance 
                operational performance, ensure regulatory compliance, and deliver long-term 
                value for our clients in the oil & gas and energy sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-10 border border-border hover:border-primary/30 transition-all group"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: -5 }}
              >
                <Award className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become a trusted engineering and procurement partner recognized for 
                technical integrity, innovation, and excellence in energy and utility 
                infrastructure development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-section">
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
              What Drives Us
            </motion.span>
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:border-accent/30 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;

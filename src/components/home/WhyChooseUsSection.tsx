import { motion } from "framer-motion";
import { CheckCircle2, Award, Target, Users, Cog, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Cog,
    title: "Technical Expertise",
    description: "Strong technical and procurement expertise across oil & gas and energy sectors"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Practical, results-driven engineering solutions tailored to your needs"
  },
  {
    icon: FileCheck,
    title: "Industry Compliance",
    description: "Industry-standard compliance and thorough documentation"
  },
  {
    icon: Users,
    title: "Reliable Communication",
    description: "Reliable project execution with clear, consistent communication"
  },
  {
    icon: Award,
    title: "Flexible Engagement",
    description: "Flexible engagement models tailored to client needs"
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-wide uppercase mb-4"
            >
              Why Partner With Us
            </motion.span>
            
            <h2 className="mb-6">Why Choose Chinergy Engineering Services</h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine deep industry knowledge with hands-on experience to deliver 
              solutions that meet your operational and business objectives.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                className="bg-navy-gradient rounded-3xl p-10 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Award className="h-10 w-10 text-accent" />
                  </motion.div>
                  
                  <h3 className="text-primary-foreground text-2xl font-bold mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                    "Chinergy Engineering Services is committed to delivering safe, efficient, 
                    and dependable solutions for today's energy challenges."
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent" />
                    <span className="text-accent font-semibold tracking-wide">Technical Integrity & Excellence</span>
                    <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Quality</p>
                    <p className="font-bold text-foreground">100%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Safety First</p>
                    <p className="font-bold text-foreground">Always</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

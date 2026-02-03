import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Let's Build Together</span>
          </motion.div>

          <h2 className="text-primary-foreground mb-6 text-4xl md:text-5xl">
            Ready to Start Your <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Partner with Chinergy Engineering Services for reliable engineering 
            and procurement solutions. Contact us today to discuss your requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:+19592000646"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md font-medium transition-all duration-200 border-2 border-primary-foreground/30 text-primary-foreground text-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:Chinedumoragui@gmail.com"
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-primary-foreground/80 hover:text-accent hover:border-accent/30 transition-all"
            >
              <Mail className="h-5 w-5" />
              Chinedumoragui@gmail.com
            </motion.a>
            <motion.a
              href="tel:+19592000646"
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-primary-foreground/80 hover:text-accent hover:border-accent/30 transition-all"
            >
              <Phone className="h-5 w-5" />
              (959) 200-0646
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

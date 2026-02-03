import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Settings, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/chinergy-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Energy infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.2
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center sm:min-h-[80vh]  pt-10 sm:pt-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-medium text-sm tracking-wide uppercase">
                Engineering Excellence
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-foreground mb-4 leading-tight"
            >
              <span className="block text-2xl md:text-3xl font-medium mb-2 text-primary-foreground/80">
                CHINERGY ENGINEERING SERVICES
              </span>
              Reliable Engineering and{" "}
              <span className="text-gradient">Procurement Solutions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Delivering cost-effective solutions to the oil & gas, energy, and utility sectors. 
              From planning to execution—efficiently and sustainably.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact" className="btn-accent group">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                <Play className="mr-2 h-4 w-4" />
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center "
          >
            <div className="relative">
              {/* Glowing ring animation */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-accent/30"
                style={{ width: '350px', height: '350px', margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-accent/20"
                style={{ width: '400px', height: '400px', margin: 'auto', top: 0, bottom: 0, left: 0, right: 0 }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Logo with glow */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full p-8 border border-white/10">
                <motion.div 
                  className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img 
                  src={logo} 
                  alt="Chinergy Engineering Services" 
                  className="relative w-72 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10 mt-10 sm:mt-0  mx-auto max-w-5xl px-4"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-primary-foreground text-lg font-semibold">Safety First</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">Risk mitigation in every decision</p>
              </motion.div>
              
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-primary-foreground text-lg font-semibold">Technical Excellence</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">Industry best practices</p>
              </motion.div>
              
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-primary-foreground text-lg font-semibold">Reliable Delivery</h3>
                <p className="text-primary-foreground/60 text-sm mt-1">On-time, every time</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

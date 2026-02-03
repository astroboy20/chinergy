import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

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
              Get In Touch
            </motion.span>
            <h1 className="text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Ready to discuss your project? Reach out to our team for a consultation 
              or to learn more about our engineering and procurement services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Have a question or need a quote? Contact us directly or fill out the form 
                and we'll respond within 24-48 hours.
              </p>

              <div className="space-y-6">
                <motion.a 
                  href="mailto:Chinedumoragui@gmail.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <span className="text-muted-foreground group-hover:text-accent transition-colors">
                      Chinedumoragui@gmail.com
                    </span>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+19592000646"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      (959) 200-0646
                    </span>
                  </div>
                </motion.a>
              </div>

              {/* Service Request Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 p-6 bg-navy-gradient rounded-2xl text-primary-foreground relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold">Quick Response</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    When contacting us, please include details about your project scope, 
                    timeline, and any specific requirements. This helps us provide you 
                    with accurate information and a timely response.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-10 w-10 text-accent" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                      Your message has been received. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: ""
                        });
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Request a Consultation</h3>
                        <p className="text-sm text-muted-foreground">Fill out the form below and we'll be in touch</p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold mb-2">
                          Service of Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="procurement">Oil & Gas Procurement</option>
                          <option value="electrical">Electrical Engineering</option>
                          <option value="energy">Energy & Utility Consulting</option>
                          <option value="other">Other / General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                          Project Details / Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-accent w-full sm:w-auto text-lg px-8 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.span 
                              className="inline-block mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              ⏳
                            </motion.span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

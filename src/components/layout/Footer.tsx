import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/chinergy-logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Oil & Gas Procurement", path: "/services#procurement" },
  { name: "Electrical Engineering", path: "/services#electrical" },
  { name: "Energy Consulting", path: "/services#consulting" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Chinergy" className="h-12 w-auto bg-white rounded p-1" />
              <div>
                <span className="text-lg font-bold uppercase tracking-wide">Chinergy</span>
                <span className="block text-xs text-primary-foreground/70">Engineering Services</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Reliable Engineering and Procurement Solutions for the oil & gas, energy, and utility sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:Chinedumoragui@gmail.com"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Chinedumoragui@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+19592000646"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>(959) 200-0646</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Chinergy Engineering Services. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Committed to delivering safe, efficient, and dependable solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

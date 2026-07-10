import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center group" aria-label="The Learner Centered Consult Limited home">
              <img
                src="https://i.ibb.co/SXwpHm2C/The-Learner-Centered-Consult.png"
                alt="The Learner Centered Consult Limited logo"
                width={240}
                height={60}
                className="rounded-2xl bg-white/95 p-1.5 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Every Child. Every Milestone. Every Step Forward. Providing professional, evidence-based, and compassionate developmental support for every learner.
            </p>
            <div className="flex items-center gap-3 text-brand-secondary text-xs font-semibold">
              <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Now accepting new assessments & clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-text-muted hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-text-muted hover:text-white transition-colors">
                  About Us
                </Link>
              </li>


              <li>
                <Link to="/faq" className="text-sm text-text-muted hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text-muted hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Nav */}
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/therapy-programmes" className="text-sm text-text-muted hover:text-white transition-colors">
                  Therapy Programmes Overview
                </Link>
              </li>
              <li>
                <Link to="/services/therapy-programmes/aba" className="text-sm text-text-muted hover:text-white transition-colors">
                  ABA Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/therapy-programmes/speech" className="text-sm text-text-muted hover:text-white transition-colors">
                  Speech & Language Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/therapy-programmes/occupational" className="text-sm text-text-muted hover:text-white transition-colors">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/assessments" className="text-sm text-text-muted hover:text-white transition-colors">
                  Developmental Assessments
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-sm text-text-muted hover:text-white transition-colors">
                  Caregiver & School Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display text-base font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text-muted leading-relaxed">
                  12 Jide Oki Street, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-brand-secondary shrink-0" />
                <a href="tel:+2348123456789" className="text-sm text-text-muted hover:text-white transition-colors">
                  +234 812 345 6789
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 text-brand-secondary shrink-0" />
                <a href="mailto:info@tlcconsult.com" className="text-sm text-text-muted hover:text-white transition-colors">
                  info@tlcconsult.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-text-muted">
          <div>
            &copy; {currentYear} The Learner Centered Consult Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">
              Accessibility Statement
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for children everywhere
          </div>
        </div>
      </div>
    </footer>
  );
}

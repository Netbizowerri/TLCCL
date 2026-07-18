import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, ClipboardList, GraduationCap, Calendar, Users, Briefcase, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      title: "Assessment Services",
      icon: ClipboardList,
      path: "/services/assessments",
      items: [
        { name: "Developmental Assessment", path: "/services/assessments/developmental" },
        { name: "Psychoeducational Assessment", path: "/services/assessments/psychoeducational" },
        { name: "Behavioural Assessment", path: "/services/assessments/behavioural" },
        { name: "Functional Behaviour Assessment (FBA)", path: "/services/assessments/fba" },
        { name: "Functional Analysis", path: "/services/assessments/functional" },
        { name: "Speech & Language Assessment", path: "/services/assessments/communication" },
        { name: "Occupational Therapy Assessment", path: "/services/assessments/occupational" },
      ],
    },
    {
      title: "Therapy Services",
      icon: Heart,
      path: "/services/therapy-programmes",
      items: [
        { name: "Applied Behaviour Analysis (ABA)", path: "/services/therapy-programmes/aba" },
        { name: "Speech & Language Therapy", path: "/services/therapy-programmes/speech" },
        { name: "Occupational Therapy", path: "/services/therapy-programmes/occupational" },
        { name: "Special Education", path: "/services/therapy-programmes/special" },
        { name: "Early Intervention", path: "/services/therapy-programmes/early" },
        { name: "School Readiness Programme", path: "/services/therapy-programmes/readiness" },
        { name: "Social Skills Training", path: "/services/therapy-programmes/social" },
        { name: "Executive Function Coaching", path: "/services/therapy-programmes/executive" },
      ],
    },
    {
      title: "Educational Services",
      icon: BookOpen,
      path: "/services/educational",
      items: [
        { name: "Inclusive Education Support", path: "/services/educational/inclusive" },
        { name: "Individual Education Planning", path: "/services/educational/iep" },
        { name: "Academic Intervention", path: "/services/educational/academic" },
        { name: "Classroom Observation", path: "/services/educational/observation" },
        { name: "School Consultation", path: "/services/educational/consultation" },
        { name: "Transition Planning", path: "/services/educational/transition" },
      ],
    },
    {
      title: "Parent & Family Services",
      icon: Users,
      path: "/services/parent",
      items: [
        { name: "Parent Coaching", path: "/services/parent/coaching" },
        { name: "Behaviour Consultation", path: "/services/parent/behaviour" },
        { name: "Home-Based Support", path: "/services/parent/home" },
        { name: "Caregiver Training", path: "/services/parent/training" },
        { name: "Family Workshops", path: "/services/parent/workshops" },
      ],
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      path: "/services/professional",
      items: [
        { name: "Staff Training", path: "/services/professional/staff-training" },
        { name: "Professional Mentorship", path: "/services/professional/mentorship" },
        { name: "Supervision", path: "/services/professional/supervision" },
        { name: "Workshops and Seminars", path: "/services/professional/workshops" },
        { name: "Continuing Professional Development", path: "/services/professional/cpd" },
      ],
    },
  ];

  const conditions = [
    { name: "Autism Spectrum Disorder (ASD)", path: "/conditions/autism" },
    { name: "ADHD (Attention-Deficit/Hyperactivity Disorder)", path: "/conditions/adhd" },
    { name: "Intellectual Disabilities", path: "/conditions/intellectual-disabilities" },
    { name: "Global Developmental Delay (GDD)", path: "/conditions/global-developmental-delay" },
    { name: "Speech & Language Difficulties", path: "/conditions/speech-difficulties" },
    { name: "Learning & Behavioural Challenges", path: "/conditions/learning-behavioural" },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-muted shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="The Learner Centered Consult home">
            <img
              src="https://i.ibb.co/SXwpHm2C/The-Learner-Centered-Consult.png"
              alt="The Learner Centered Consult logo"
              width={240}
              height={60}
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-brand-primary" : "text-text-soft hover:text-brand-primary"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-brand-primary" : "text-text-soft hover:text-brand-primary"
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-text-soft hover:text-brand-primary py-2 transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[500px] bg-white border border-brand-muted rounded-3xl shadow-xl p-4"
                  >
                    <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2 px-3">
                      Our Services
                    </div>
                    <ul className="space-y-1">
                      {services.map((section) => (
                        <li key={section.title}>
                          <Link
                            to={section.path}
                            onClick={() => setActiveDropdown(null)}
                            className="text-sm font-medium text-brand-teal hover:text-brand-primary hover:bg-brand-soft block px-3 py-2 rounded-xl transition-all"
                          >
                            {section.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-brand-muted px-3">
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                      >
                        All Services &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conditions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("conditions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-text-soft hover:text-brand-primary py-2 transition-colors">
                Who We Support <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === "conditions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white border border-brand-muted rounded-3xl shadow-xl p-4"
                  >
                    <div className="text-xs font-bold text-brand-teal uppercase tracking-wider mb-2 px-3">
                      Who We Support
                    </div>
                    <ul className="space-y-1">
                      {conditions.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="text-sm text-text-soft hover:text-brand-primary hover:bg-brand-soft block px-3 py-2 rounded-xl transition-all"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-brand-muted px-3">
                      <Link
                        to="/conditions"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                      >
                        All Conditions &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-brand-primary" : "text-text-soft hover:text-brand-primary"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/book"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-md shadow-brand-primary/10 hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Assessment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/book"
              className="bg-brand-primary text-white p-2.5 rounded-xl shadow-md"
              title="Book Assessment"
            >
              <Calendar className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-base p-2 hover:bg-brand-soft rounded-xl transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-brand-muted bg-white overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-surface-dark hover:text-brand-primary"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-surface-dark hover:text-brand-primary"
              >
                About
              </Link>

              {/* Services Section in Mobile */}
              <div className="border-b border-brand-soft pb-2">
                <button
                  onClick={() => toggleDropdown("mobile-services")}
                  className="w-full flex justify-between items-center font-bold text-base text-surface-dark hover:text-brand-primary py-1"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "mobile-services" && (
                  <div className="mt-3 pl-4 space-y-4">
                    {services.map((section) => (
                      <div key={section.title}>
                        <Link
                          to={section.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-semibold text-sm text-brand-teal flex items-center gap-1.5"
                        >
                          {section.title}
                        </Link>
                        <div className="mt-1.5 pl-3 space-y-1 border-l-2 border-brand-soft">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-xs text-text-soft hover:text-brand-primary py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Conditions Section in Mobile */}
              <div className="border-b border-brand-soft pb-2">
                <button
                  onClick={() => toggleDropdown("mobile-conditions")}
                  className="w-full flex justify-between items-center font-bold text-base text-surface-dark hover:text-brand-primary py-1"
                >
                  Who We Support
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === "mobile-conditions" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === "mobile-conditions" && (
                  <div className="mt-2 pl-4 space-y-2">
                    {conditions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-text-soft hover:text-brand-primary py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/conditions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-brand-primary font-bold pt-1"
                    >
                      All Conditions &rarr;
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-surface-dark hover:text-brand-primary"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-surface-dark hover:text-brand-primary"
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-brand-muted flex flex-col gap-3">

                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-brand-primary text-white font-bold py-2.5 rounded-2xl shadow-lg"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
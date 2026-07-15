import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, Calendar, Eye, Target, ArrowRight } from "lucide-react";
import { img } from "../data/images";

const professionalServices = [
  {
    id: "staff-training",
    title: "Staff Training",
    desc: "Building capacity of educational and clinical teams with evidence-based developmental strategies.",
    icon: Users,
    iconColor: "text-brand-teal bg-brand-soft",
  },
  {
    id: "mentorship",
    title: "Professional Mentorship",
    desc: "Guiding early-career professionals in child development through structured mentorship programmes.",
    icon: Award,
    iconColor: "text-brand-primary bg-red-50",
  },
  {
    id: "supervision",
    title: "Supervision",
    desc: "Clinical supervision for therapists, analysts, and educators seeking credentialing or case consultation.",
    icon: Eye,
    iconColor: "text-brand-accent bg-cyan-50",
  },
  {
    id: "workshops",
    title: "Workshops and Seminars",
    desc: "Focused skill-building sessions on specialised topics for interdisciplinary teams.",
    icon: Calendar,
    iconColor: "text-emerald-500 bg-emerald-50",
  },
  {
    id: "cpd",
    title: "Continuing Professional Development (CPD)",
    desc: "Accredited ongoing education for clinical excellence with CEU credits available.",
    icon: Target,
    iconColor: "text-brand-secondary bg-orange-50",
  },
  {
    id: "iep-support",
    title: "IEP & School Support Consultation",
    desc: "Expert guidance for schools on IEP development, implementation, and compliance monitoring.",
    icon: BookOpen,
    iconColor: "text-purple-600 bg-purple-50",
  },
];

export default function ProfessionalServicesOverview() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-20 md:py-28 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1 bg-brand-muted text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Professional Development
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Advancing <span className="text-brand-primary">Clinical Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We provide structured mentorship, supervision, and accredited CPD for allied health professionals, educators, and clinical teams.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-brand-soft rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img.aboutTeam}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 to-transparent" />
                  <div className={`absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md ${service.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between gap-6 flex-grow">
                  <div className="space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">{service.title}</h3>
                    <p className="text-text-soft text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    to={`/services/professional/${service.id}`}
                    className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all w-full justify-center"
                  >
                    Explore This Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-warm border-t border-amber-100 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Elevate Your Team's Expertise</h2>
          <p className="text-text-soft text-base max-w-xl mx-auto">
            We curate custom developmental workshops for schools, pediatric associations, and clinical teams. Contact our coordinator to arrange a plan.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?type=professional"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-sm"
            >
              Inquire About Custom Professional Development
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
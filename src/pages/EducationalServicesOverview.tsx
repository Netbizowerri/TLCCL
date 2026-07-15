import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardList, ArrowRight, GraduationCap, BookOpen, Eye, Target, Users } from "lucide-react";
import { img } from "../data/images";

const educationalServices = [
  {
    id: "inclusive",
    title: "Inclusive Education Support",
    desc: "Building inclusive, sensory-friendly, and effective classrooms for neurodiverse learners.",
    icon: Users,
  },
  {
    id: "iep",
    title: "Individual Education Planning",
    desc: "Collaborative IEP development and implementation support for schools and families.",
    icon: BookOpen,
  },
  {
    id: "academic",
    title: "Academic Intervention",
    desc: "Targeted academic support for specific learning difficulties including dyslexia, dyscalculia, and dysgraphia.",
    icon: Target,
  },
  {
    id: "observation",
    title: "Classroom Observation",
    desc: "Structured observation to inform support strategies and environmental modifications.",
    icon: Eye,
  },
  {
    id: "consultation",
    title: "School Consultation",
    desc: "Expert consultation for schools on neurodiversity inclusion, policy, and teacher training.",
    icon: GraduationCap,
  },
  {
    id: "transition",
    title: "Transition Planning",
    desc: "Supporting smooth transitions between educational stages, settings, and into adulthood.",
    icon: BookOpen,
  },
];

export default function EducationalServicesOverview() {
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
            Educational Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Educational Support for <span className="text-brand-primary">Neurodiverse Learners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We partner with schools to build inclusive environments, support IEP implementation, and provide targeted academic interventions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalServices.map((service, idx) => (
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
                  src={img.educational[service.id as keyof typeof img.educational] || img.bentoTraining}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 to-transparent" />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-primary shadow-md">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between gap-6 flex-grow">
                <div className="space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">{service.title}</h3>
                  <p className="text-text-soft text-sm font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link
                  to={`/services/educational/${service.id}`}
                  className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all w-full justify-center"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Need Custom School Support?</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          We curate custom developmental workshops for schools, pediatric associations, and corporate daycare programs.
        </p>
        <div className="pt-2">
          <Link
            to="/contact?type=seminar"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-sm"
          >
            Inquire About Custom Seminars
          </Link>
        </div>
      </section>
    </div>
  );
}
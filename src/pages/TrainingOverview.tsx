import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen, Clock, Globe } from "lucide-react";
import { img } from "../data/images";

export default function TrainingOverview() {
  const trainings = [
    {
      id: "parents",
      title: "Parent & Caregiver Training",
      desc: "Empowering families with behavioral co-regulation techniques, communication cues, and structural home schedules.",
      duration: "6 weeks (flexible coaching)",
      format: "Online or In-Clinic",
    },
    {
      id: "schools",
      title: "School & Teacher Training",
      desc: "Equipping administrators and classroom teachers with inclusive setup methods, positive reinforcement plans, and IEP strategies.",
      duration: "On-Demand (Seminars)",
      format: "On-Site School Workshops",
    },
    {
      id: "professionals",
      title: "Allied Professional Training",
      desc: "Advanced medical-clinical seminars focusing on interdisciplinary cooperation (OT, SLP, and ABA codes).",
      duration: "CEU accredited blocks",
      format: "Seminars & Shadowing",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-20 md:py-28 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1 bg-brand-muted text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Capacity Coaching & Classes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Empowering the Village <span className="text-brand-primary">Around the Child</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Development doesn&apos;t end at the clinic door. We provide professional workshop modules to train parents, teachers, and medical practitioners.
          </motion.p>
        </div>
      </section>

      {/* Grid of Trainings */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainings.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-brand-soft rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img.training[t.id as keyof typeof img.training]}
                  alt={t.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 to-transparent" />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-primary shadow-md">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-text-soft backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {t.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-brand-primary backdrop-blur-sm">
                    <Globe className="h-3 w-3" />
                    {t.format}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between gap-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">
                    {t.title}
                  </h3>
                  <p className="text-text-soft text-sm leading-relaxed font-medium">
                    {t.desc}
                  </p>
                </div>
                <Link
                  to={`/services/training/${t.id}`}
                  className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all w-full justify-center"
                >
                  Explore Modules &amp; Syllabus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy of Training Section */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <BookOpen className="h-10 w-10 text-brand-teal mx-auto" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Our Training Ethos</h2>
          <p className="text-text-soft text-base leading-relaxed max-w-2xl mx-auto font-medium">
            We believe that a child&apos;s growth accelerates when their natural ecosystem (caregivers and classrooms) operates on the same behavioral wave. By providing structural checklists, clear co-regulation techniques, and inclusive classroom setups, we eliminate conflicting methods and create a peaceful, therapeutic space where neurodivergent children can blossom.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Need Custom School or Group Seminars?</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          We curate custom developmental workshops for schools, pediatric associations, and corporate daycare programs. Contact our coordinator to arrange a plan.
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

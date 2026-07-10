import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardList, ArrowRight, Eye, Calendar, Sparkles, Star } from "lucide-react";
import { img } from "../data/images";

export default function AssessmentsOverview() {
  const assessments = [
    {
      id: "developmental",
      title: "Developmental Assessment",
      desc: "Comprehensive evaluation of early cognitive, language, play, and motor milestones to locate growth delay parameters.",
      duration: "2 sessions (1.5 hrs each)",
      targetAge: "6 months to 6 years",
    },
    {
      id: "behavioural",
      title: "Behavioural Assessment",
      desc: "Functional behavior evaluation (FBA) decoding emotional triggers, sensory overload, and escape motivations.",
      duration: "3 sessions + school observation",
      targetAge: "3 to 16 years",
    },
    {
      id: "communication",
      title: "Communication & Speech Assessment",
      desc: "Detailed evaluation of speech articulation, language structures, conversational social rules, and AAC setups.",
      duration: "1 session (2 hrs)",
      targetAge: "12 months to 18 years",
    },
    {
      id: "functional",
      title: "Functional & Adaptive Assessment",
      desc: "Evaluation of vital self-care, hygiene, grooming, and safety skills required for classroom and household independence.",
      duration: "2 sessions (1 hr each)",
      targetAge: "4 to 18 years",
    },
  ];

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
            Clinical Diagnostics & Testing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Scientific Assessments for <span className="text-brand-primary">Clear Answers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We deploy gold-standard evaluation tools to create descriptive developmental maps for parents, schools, and pediatrician referral networks.
          </motion.p>
        </div>
      </section>

      {/* Assessments Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assessments.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-brand-soft rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col sm:flex-row"
            >
              <div className="relative sm:w-2/5 min-h-[180px] overflow-hidden">
                <img
                  src={img.assessmentCards[item.id as keyof typeof img.assessmentCards]}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-primary shadow-md">
                  <ClipboardList className="h-5 w-5" />
                </div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-text-soft">
                      {item.duration}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-soft text-brand-primary">
                      Age: {item.targetAge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">
                      {item.title}
                    </h3>
                    <p className="text-text-soft text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/services/assessments/${item.id}`}
                  className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all w-fit"
                >
                  View Assessment Process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Assessments Matter Section */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark leading-tight">
                Why a Diagnostic Assessment Is Your First Vital Step
              </h2>
              <p className="text-text-soft text-base leading-relaxed font-medium">
                Without a scientific baseline, therapy can be generic and slow. Our comprehensive testing maps your child&apos;s neurological strengths and struggles, defining exact priorities for speech, motor coordination, and self-care development.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-1">
                    <Eye className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-surface-dark">Accurate Diagnostic Baseline</h4>
                    <p className="text-text-soft text-xs leading-relaxed font-medium">We use only globally recognized, standardized rating scales.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-surface-dark">School & Pediatrician Integration</h4>
                    <p className="text-text-soft text-xs leading-relaxed font-medium">Our generated reports satisfy legal and educational criteria for IEP and accommodations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white p-8 rounded-4xl border border-brand-soft shadow-inner w-full max-w-md space-y-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-brand-accent fill-brand-accent animate-pulse" />
                  <span className="font-display font-bold text-lg text-surface-dark">What Parents Receive</span>
                </div>
                <ul className="space-y-3">
                  {["A detailed clinical report explaining score percentiles.", "An actionable, multi-specialty therapy path plan.", "Home accommodation checklists to support coping styles.", "Coordination support for school classrooms."].map((r, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs font-semibold text-text-soft">
                      <Sparkles className="h-4.5 w-4.5 text-brand-teal shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Reserve Your Assessment Block Today</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          Our specialists book assessment blocks weeks in advance. Fill out our multi-step scheduling page to hold an intake call.
        </p>
        <div className="pt-2">
          <Link
            to="/book?service=assessment"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/15 transition-all text-base animate-pulse"
          >
            Schedule Assessment Intake
          </Link>
        </div>
      </section>
    </div>
  );
}

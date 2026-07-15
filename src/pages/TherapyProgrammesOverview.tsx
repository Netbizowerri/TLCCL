import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Brain, Shield, Smile, Sparkles, BookOpen, Calendar, Users, Zap, ArrowRight } from "lucide-react";
import { img } from "../data/images";
import { therapyPrograms } from "../data/siteData";

export default function TherapyProgrammesOverview() {
  const programmes = [
    {
      id: "aba",
      title: "Applied Behaviour Analysis (ABA)",
      desc: "Scientific learning structures focusing on functional communication, social play, and replacement skills.",
      icon: Heart,
      iconColor: "text-brand-primary",
    },
    {
      id: "speech",
      title: "Speech & Language Therapy",
      desc: "Targeting articulation, vocabulary development, language comprehension, and AAC options.",
      icon: Brain,
      iconColor: "text-brand-teal",
    },
    {
      id: "occupational",
      title: "Occupational Therapy",
      desc: "Nurturing fine/gross motor skills, posture, handwriting, and sensory integration control.",
      icon: Shield,
      iconColor: "text-brand-accent",
    },
    {
      id: "behavioural",
      title: "Behavioural Intervention",
      desc: "Positive behaviour structures, emotion regulation, coping mechanisms, and teacher alignment.",
      icon: Smile,
      iconColor: "text-emerald-500",
    },
    {
      id: "cognitive",
      title: "Cognitive Development",
      desc: "Remediating thinking delays, working memory capacity, spatial logic, and attention spans.",
      icon: Sparkles,
      iconColor: "text-indigo-500",
    },
    {
      id: "special",
      title: "Special Education",
      desc: "Individualized academic instruction for diverse learning needs using evidence-based methods.",
      icon: BookOpen,
      iconColor: "text-purple-600",
    },
    {
      id: "early",
      title: "Early Intervention",
      desc: "Critical developmental support during the most neuroplastic years (birth to age 5).",
      icon: Calendar,
      iconColor: "text-brand-secondary",
    },
    {
      id: "readiness",
      title: "School Readiness Programme",
      desc: "Preparing children for confident classroom transitions with academic and social foundations.",
      icon: Users,
      iconColor: "text-pink-500",
    },
    {
      id: "social",
      title: "Social Skills Training",
      desc: "Small-group workshops focusing on turn-taking, reading social cues, and active peer friendships.",
      icon: Users,
      iconColor: "text-rose-500",
    },
    {
      id: "executive",
      title: "Executive Function Coaching",
      desc: "Developing planning, organization, and self-management skills for academic success.",
      icon: Zap,
      iconColor: "text-amber-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-20 md:py-28 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1 bg-brand-muted text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Milestone Therapy Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Personalised Therapy That Makes a <span className="text-brand-primary">Real Difference</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Our clinic features a unified, multi-specialty framework that surrounds your child with supportive certified therapists.
          </motion.p>
        </div>
      </section>

      {/* 2. PROGRAMMES GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programmes.map((p, idx) => {
            const data = therapyPrograms[p.id];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img.therapy[p.id as keyof typeof img.therapy] || img.therapy.aba}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
                  <div className={`absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md ${p.iconColor}`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 pt-0 space-y-3 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-surface-dark">{p.title}</h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-4">
                    {data ? (
                      <Link
                        to={`/services/therapy-programmes/${p.id}`}
                        className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/link"
                      >
                        View Details & Schedule
                        <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="text-xs font-semibold text-text-muted italic">Coming Soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW PROGRAMMES WORK */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark">How Our Programmes Work</h2>
            <p className="text-text-soft text-base font-medium">
              We design routines to fit your child&apos;s style, ensuring learning triggers progress naturally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft space-y-3">
              <div className="h-10 w-10 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center font-display font-bold text-sm">1</div>
              <h4 className="font-bold text-base text-surface-dark">Milestone Baseline</h4>
              <p className="text-text-soft text-xs font-medium leading-relaxed">
                We perform clinical speech, motor, or behavioral baselines to locate current delay parameters exactly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft space-y-3">
              <div className="h-10 w-10 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center font-display font-bold text-sm">2</div>
              <h4 className="font-bold text-base text-surface-dark">Consistent Sessions</h4>
              <p className="text-text-soft text-xs font-medium leading-relaxed">
                Your child works 1-on-1 with dedicated specialists weekly in playful, sensory-friendly clinic setups.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-soft space-y-3">
              <div className="h-10 w-10 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center font-display font-bold text-sm">3</div>
              <h4 className="font-bold text-base text-surface-dark">Parent Handover</h4>
              <p className="text-text-soft text-xs font-medium leading-relaxed">
                After every session, we demonstrate exercises and routines parents can perform at home to double learning speeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVIDENCE BASE SECTION */}
      <section className="py-20 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 bg-brand-soft p-8 rounded-3xl border border-brand-muted flex flex-col justify-center items-center text-center">
            <ShieldCheck className="h-16 w-16 text-brand-teal mb-4" />
            <h4 className="font-display text-lg font-bold text-surface-dark">100% Registered Practice</h4>
            <p className="text-text-soft text-xs font-medium mt-1 leading-relaxed">
              We operate strictly within international guidelines (BACB, ASHA, WFOT) to safeguard quality.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Our Scientific Commitment</h3>
            <p className="text-text-soft text-sm sm:text-base font-medium leading-relaxed">
              At The Learner Centered Consult (LCC), we reject fads. We understand parents are overwhelmed by competing claims. Every technique, sensor kit, and behavioral schedule we implement holds verified peer-reviewed support in international journals of developmental psychology. We prioritize safety, neurodiversity-affirmation, and the child&apos;s dignity above all.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-surface-warm border-t border-amber-100 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Ready to Schedule a Milestone Therapy Evaluation?</h2>
          <p className="text-text-soft text-base max-w-xl mx-auto">
            Book an clinical consultation to talk with our lead therapy planners.
          </p>
          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-brand-primary/10 transition-all text-base"
            >
              Book Therapy Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
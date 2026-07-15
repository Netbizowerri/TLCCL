import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Brain, Shield, Smile, Sparkles, BookOpen, Calendar, Users, Zap, ArrowRight, Star, Eye, Clock } from "lucide-react";
import { img } from "../data/images";
import { therapyPrograms } from "../data/siteData";

const programmes = [
  { id: "aba", title: "Applied Behaviour Analysis (ABA)", desc: "Scientific learning structures focusing on functional communication, social play, and replacement skills.", icon: Heart, duration: "10-30 hrs/week", age: "2 to 16 years" },
  { id: "speech", title: "Speech & Language Therapy", desc: "Targeting articulation, vocabulary development, language comprehension, and AAC options.", icon: Brain, duration: "1-2 sessions/week", age: "12 months to 18 years" },
  { id: "occupational", title: "Occupational Therapy", desc: "Nurturing fine/gross motor skills, posture, handwriting, and sensory integration control.", icon: Shield, duration: "1-2 sessions/week", age: "2 to 18 years" },
  { id: "behavioural", title: "Behavioural Intervention", desc: "Positive behaviour structures, emotion regulation, coping mechanisms, and teacher alignment.", icon: Smile, duration: "2-3 sessions/week", age: "3 to 16 years" },
  { id: "cognitive", title: "Cognitive Development", desc: "Remediating thinking delays, working memory capacity, spatial logic, and attention spans.", icon: Sparkles, duration: "1-2 sessions/week", age: "4 to 16 years" },
  { id: "special", title: "Special Education", desc: "Individualized academic instruction for diverse learning needs using evidence-based methods.", icon: BookOpen, duration: "2-4 sessions/week", age: "5 to 18 years" },
  { id: "early", title: "Early Intervention", desc: "Critical developmental support during the most neuroplastic years (birth to age 5).", icon: Calendar, duration: "1-3 sessions/week", age: "0 to 5 years" },
  { id: "readiness", title: "School Readiness Programme", desc: "Preparing children for confident classroom transitions with academic and social foundations.", icon: Users, duration: "2 sessions/week", age: "4 to 6 years" },
  { id: "social", title: "Social Skills Training", desc: "Small-group workshops focusing on turn-taking, reading social cues, and active peer friendships.", icon: Users, duration: "Weekly groups", age: "4 to 12 years" },
  { id: "executive", title: "Executive Function Coaching", desc: "Developing planning, organization, and self-management skills for academic success.", icon: Zap, duration: "1 session/week", age: "8 to 18 years" },
];

export default function TherapyProgrammesOverview() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((p, idx) => {
            const data = therapyPrograms[p.id];
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-brand-soft rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img.therapy[p.id as keyof typeof img.therapy] || img.therapy.aba}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 to-transparent" />
                  <div className="absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-primary shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between gap-6 flex-grow">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-text-soft">
                        <Clock className="h-3 w-3" />
                        {p.duration}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-soft text-brand-primary">
                        Age: {p.age}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">{p.title}</h3>
                      <p className="text-text-soft text-sm leading-relaxed font-medium">{p.desc}</p>
                    </div>
                  </div>
                  {data ? (
                    <Link
                      to={`/services/therapy-programmes/${p.id}`}
                      className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md transition-all w-full justify-center"
                    >
                      View Details & Schedule
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center text-sm font-semibold text-text-muted italic px-5 py-3 rounded-2xl border border-dashed border-brand-soft w-full">
                      Coming Soon
                    </span>
                  )}
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
            {[
              { step: "1", title: "Milestone Baseline", desc: "We perform clinical speech, motor, or behavioral baselines to locate current delay parameters exactly." },
              { step: "2", title: "Consistent Sessions", desc: "Your child works 1-on-1 with dedicated specialists weekly in playful, sensory-friendly clinic setups." },
              { step: "3", title: "Parent Handover", desc: "After every session, we demonstrate exercises and routines parents can perform at home to double learning speeds." },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-4xl shadow-sm border border-brand-soft space-y-3">
                <div className="h-10 w-10 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center font-display font-bold text-sm">{s.step}</div>
                <h4 className="font-bold text-base text-surface-dark">{s.title}</h4>
                <p className="text-text-soft text-xs font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY WE'RE TRUSTED */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark leading-tight">
                Evidence-Based, <span className="text-brand-primary">Child-Led Care</span>
              </h2>
              <p className="text-text-soft text-base leading-relaxed font-medium">
                Every technique we implement holds verified peer-reviewed support in international journals. We reject fads and prioritize the child&apos;s dignity above all.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-1">
                    <Eye className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-surface-dark">100% Registered Practice</h4>
                    <p className="text-text-soft text-xs leading-relaxed font-medium">We operate within BACB, ASHA, and WFOT international guidelines.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-1">
                    <Star className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-surface-dark">Personalised Programmes</h4>
                    <p className="text-text-soft text-xs leading-relaxed font-medium">Every child receives a custom-written behavioural and milestone path.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white p-8 rounded-4xl border border-brand-soft shadow-inner w-full max-w-md space-y-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-brand-accent fill-brand-accent" />
                  <span className="font-display font-bold text-lg text-surface-dark">What Families Receive</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "A detailed therapy plan with measurable goals.",
                    "Weekly session notes and progress data.",
                    "Home practice routines for skill generalization.",
                    "School collaboration and IEP support.",
                  ].map((r, i) => (
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

      {/* 5. CTA */}
      <section className="py-20 bg-surface-alt border-t border-brand-soft text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Ready to Start Your Child&apos;s Therapy Journey?</h2>
          <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
            Book a free consultation to discuss your child&apos;s needs with our lead therapy planners.
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
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Sparkles } from "lucide-react";
import { trainingPrograms } from "../data/siteData";
import { img } from "../data/images";

export default function TrainingIndividualPage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !trainingPrograms[id]) {
    return <Navigate to="/404" replace />;
  }

  const data = trainingPrograms[id];

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-16 md:py-24 border-b border-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-text-muted">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>&rarr;</span>
            <Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <span>&rarr;</span>
            <Link to="/services/training" className="hover:text-brand-primary transition-colors">Training</Link>
            <span>&rarr;</span>
            <span className="text-text-soft font-bold">{data.title}</span>
          </nav>

          <div className="space-y-4 text-left max-w-4xl pt-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-brand-primary text-base sm:text-lg md:text-xl font-bold leading-relaxed"
            >
              {data.tagline}
            </motion.p>
          </div>

          {/* Hero image banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-56 sm:h-72 w-full rounded-4xl overflow-hidden shadow-xl border border-brand-muted mt-6"
          >
            <img
              src="https://i.ibb.co/07r5pmp/Gemini-Generated-Image-k7o018k7o018k7o0.png"
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 via-surface-dark/10 to-transparent" />
            <div className="absolute bottom-4 left-5 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-accent">Capacity Building</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIFICATION OVERVIEW CARD */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-alt border border-brand-soft p-8 rounded-4xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider">
              <Users className="h-4.5 w-4.5 shrink-0 text-brand-teal" />
              Target Audience
            </div>
            <p className="text-text-soft text-sm sm:text-base font-semibold leading-relaxed">
              {data.audience}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider">
              <BookOpen className="h-4.5 w-4.5 shrink-0 text-brand-primary" />
              Delivery Format
            </div>
            <p className="text-text-soft text-sm sm:text-base font-semibold leading-relaxed">
              {data.format}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider">
              <GraduationCap className="h-4.5 w-4.5 shrink-0 text-brand-accent" />
              Syllabus Coverage
            </div>
            <p className="text-text-soft text-sm sm:text-base font-semibold leading-relaxed">
              4 comprehensive skill modules + checklists
            </p>
          </div>
        </div>
      </section>

      {/* 3. MODULE LIST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">What This Training Covers</h2>
          <p className="text-text-soft text-sm font-semibold leading-relaxed">
            Our syllabus is broken down into structured, interactive blocks with visual slide guidelines:
          </p>
          <div className="space-y-4 pt-2">
            {data.modules.map((mod, idx) => {
              const [title, desc] = mod.split(" — ");
              return (
                <div key={idx} className="bg-white border border-brand-soft rounded-2xl p-6 shadow-sm space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-teal">Module {idx + 1}</span>
                  <h4 className="text-sm sm:text-base font-bold text-surface-dark leading-relaxed">{title.replace(/Module \d+:\s*/, "")}</h4>
                  {desc && <p className="text-text-soft text-xs sm:text-sm font-medium leading-relaxed pt-1">{desc}</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. LEARNING OUTCOMES */}
        <div className="lg:col-span-5 bg-brand-soft rounded-4xl p-8 border border-brand-muted space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
              <Sparkles className="h-6 w-6 text-brand-accent" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">Measurable Learning Outcomes</h3>
            <p className="text-text-soft text-xs sm:text-sm font-semibold leading-relaxed">
              By completing this coaching blocks series, attendees typically demonstrate:
            </p>
            <ul className="space-y-4 pt-2">
              {data.outcomes.map((out, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span className="text-text-soft text-xs sm:text-sm font-semibold leading-relaxed">
                    {out}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-surface-warm border-t border-amber-100 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">
          Coordinate Training Booking
        </h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          Secure seats for caregiver workshops or classroom training plans. Click below to specify your preferred dates.
        </p>
        <div className="pt-2">
          <Link
            to={`/book?service=training&type=${id}`}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-base animate-pulse"
          >
            Book This Training
          </Link>
        </div>
      </section>
    </div>
  );
}
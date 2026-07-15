import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, ArrowRight, Heart, Brain, Shield, Smile, Sparkles, HelpCircle, BookOpen, Calendar, Users, Zap } from "lucide-react";
import { therapyPrograms } from "../data/siteData";
import { img } from "../data/images";

export default function TherapyIndividualPage() {
  const { id } = useParams<{ id: string }>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!id || !therapyPrograms[id]) {
    return <Navigate to="/404" replace />;
  }

  const data = therapyPrograms[id];

  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Heart": return <Heart className={className} />;
      case "Brain": return <Brain className={className} />;
      case "Shield": return <Shield className={className} />;
      case "Smile": return <Smile className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "BookOpen": return <BookOpen className={className} />;
      case "Calendar": return <Calendar className={className} />;
      case "Users": return <Users className={className} />;
      case "Zap": return <Zap className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO & BREADCRUMB */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-16 md:py-24 border-b border-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-text-muted">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>&rarr;</span>
            <Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <span>&rarr;</span>
            <Link to="/services/therapy-programmes" className="hover:text-brand-primary transition-colors">Therapy Programmes</Link>
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
              src={img.therapy[data.id as keyof typeof img.therapy]}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 via-surface-dark/10 to-transparent" />
            <div className="absolute bottom-4 left-5 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-accent">Therapy Programme</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS THERAPY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">
              What Is {data.title}?
            </h2>
            <p className="text-text-soft text-base leading-relaxed font-medium">
              {data.intro}
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-4xl overflow-hidden shadow-xl border border-brand-muted">
              <img
                src={img.therapy[data.id as keyof typeof img.therapy]}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-teal shadow-md">
                {renderIcon(data.iconName, "h-6 w-6 text-brand-teal")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO BENEFITS & 4. WHAT TO EXPECT */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who Benefits (Left) */}
            <div className="bg-white rounded-3xl p-8 border border-brand-soft/80 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">Who Benefits?</h3>
              <p className="text-text-soft text-sm font-semibold">
                This intervention provides meaningful support for children with:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {data.whoBenefits.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-4 py-2 rounded-full bg-brand-soft text-brand-primary border border-brand-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* What to Expect / Session Flow (Right) */}
            <div className="bg-white rounded-3xl p-8 border border-brand-soft/80 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">What to Expect</h3>
              <p className="text-text-soft text-sm font-semibold">
                A typical therapy session is fully child-centered and structured into key phases:
              </p>
              <ul className="space-y-4">
                {data.sessionFlow.map((step, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-display text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-text-soft text-sm font-medium leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOALS WE TARGET */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Goals We Target</h2>
          <p className="text-text-soft text-sm font-medium">
            Our measurable objectives focus on increasing independence and communication capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {data.goals.map((goal, idx) => (
            <div key={idx} className="bg-white border border-brand-soft rounded-2xl p-6 shadow-sm flex gap-3.5">
              <CheckCircle2 className="h-5.5 w-5.5 text-brand-teal shrink-0 mt-0.5" />
              <p className="text-text-soft text-sm font-semibold leading-relaxed">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EVIDENCE BASE */}
      <section className="py-12 bg-surface-warm border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-teal">Clinical Research Citation</span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">The Evidence Base</h3>
          <p className="text-text-soft text-sm sm:text-base leading-relaxed italic font-medium">
            &ldquo;{data.evidenceBase}&rdquo;
          </p>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4 pt-4">
          {data.faqs.map((faq, idx) => (
            <div key={idx} className="border border-brand-muted rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center px-6 py-4.5 bg-brand-soft/50 hover:bg-brand-soft text-left transition-all"
              >
                <span className="font-bold text-sm sm:text-base text-surface-dark flex items-center gap-2">
                  <HelpCircle className="h-4.5 w-4.5 text-brand-teal shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className={`h-5 w-5 text-text-soft transition-transform duration-300 ${openFaqIdx === idx ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {openFaqIdx === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-6 py-4 text-text-soft text-sm sm:text-base leading-relaxed border-t border-brand-muted font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      <section className="py-16 bg-surface-alt border-t border-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="font-display text-lg sm:text-xl font-bold text-surface-dark">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.related.map((rel, idx) => (
              <Link
                key={idx}
                to={rel.path}
                className="bg-white border border-brand-soft rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-between group"
              >
                <span className="font-bold text-base text-surface-dark group-hover:text-brand-primary transition-colors">
                  {rel.name}
                </span>
                <ArrowRight className="h-5 w-5 text-brand-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">
          Book an Assessment for {data.title}
        </h2>
        <p className="text-text-soft text-base max-w-xl mx-auto">
          Take the first step towards a personalized intervention program. Schedule a clinical consultation or a full skill baseline assessment.
        </p>
        <div className="pt-2">
          <Link
            to={`/book?service=therapy&type=${id}`}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-base"
          >
            Book {data.title} Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
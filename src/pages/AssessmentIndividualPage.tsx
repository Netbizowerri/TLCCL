import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, ClipboardList, HelpCircle, FileText, AlertCircle } from "lucide-react";
import { assessmentPrograms } from "../data/siteData";
import { img } from "../data/images";

export default function AssessmentIndividualPage() {
  const { id } = useParams<{ id: string }>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  if (!id || !assessmentPrograms[id]) {
    return <Navigate to="/404" replace />;
  }

  const data = assessmentPrograms[id];

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

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
            <Link to="/services/assessments" className="hover:text-brand-primary transition-colors">Assessments</Link>
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
              src="https://i.ibb.co/0psthjwL/Gemini-Generated-Image-gkd2argkd2argkd2.png"
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 via-surface-dark/10 to-transparent" />
            <div className="absolute bottom-4 left-5 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-accent">Clinical Evaluation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS COVERED & 3. PROCESS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* What We Cover */}
          <div className="lg:col-span-6 bg-brand-soft rounded-4xl p-8 border border-brand-muted space-y-6">
            <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
              <ClipboardList className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="font-display text-2xl font-bold text-surface-dark">What This Assessment Covers</h2>
            <ul className="space-y-4">
              {data.covers.map((item, idx) => (
                <li key={idx} className="flex gap-3.5 items-start">
                  <CheckCircle2 className="h-5.5 w-5.5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-text-soft text-sm sm:text-base font-semibold leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment Process Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl font-bold text-surface-dark">The Evaluation Process</h2>
            <p className="text-text-soft text-sm font-semibold leading-relaxed">
              We divide evaluations into clear, stress-free stages to keep your child comfortable:
            </p>
            <div className="relative border-l border-brand-muted pl-6 space-y-8 py-2">
              {data.process.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline point */}
                  <div className="absolute -left-[35px] top-1.5 h-4.5 w-4.5 rounded-full bg-brand-primary border-4 border-white shadow-sm" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-primary">Phase {idx + 1}</span>
                    <p className="text-text-base text-sm sm:text-base font-bold leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO SHOULD BE ASSESSED */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-4xl p-8 md:p-12 border border-brand-soft/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-brand-accent flex items-center justify-center shrink-0">
                <AlertCircle className="h-5.5 w-5.5 text-brand-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-surface-dark">Who Should Be Assessed?</h3>
              <p className="text-text-soft text-sm font-medium leading-relaxed">
                Consider scheduling this evaluation if your child displays any of these typical indicators:
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.checklist.map((item, idx) => (
                <div key={idx} className="bg-brand-soft border border-brand-muted/70 p-4.5 rounded-2xl flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-text-soft text-xs sm:text-sm font-semibold leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU RECEIVE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">What You Receive</h2>
          <p className="text-text-soft text-sm font-medium">
            We deliver actionable clinical materials and documents to help your family configure support structures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {data.deliverables.map((item, idx) => (
            <div key={idx} className="bg-white border border-brand-soft rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-11 w-11 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center">
                  <FileText className="h-5 w-5 text-brand-primary" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-surface-dark leading-relaxed">
                  {item}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark text-center">Assessment Frequently Asked Questions</h2>
        
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

      {/* 7. CTA */}
      <section className="py-20 bg-surface-warm border-t border-amber-100 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">
          Book Your {data.title} Block
        </h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          Fill out our comprehensive scheduling form to set up an intake discussion with our clinical intake team.
        </p>
        <div className="pt-2">
          <Link
            to={`/book?service=assessment&type=${id}`}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-base"
          >
            Schedule Assessment Now
          </Link>
        </div>
      </section>
    </div>
  );
}

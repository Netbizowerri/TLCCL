import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { faqs } from "../data/siteData";

export default function FaqPage() {
  const [openIdx, setOpenFaqIdx] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-20 md:py-28 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1 bg-brand-muted text-brand-primary px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Clinic FAQ Support
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </motion.h1>
          <motion.p
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Find descriptive answers to clinical procedures, diagnostic costs, licensing frameworks, and scheduling protocols.
          </motion.p>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-brand-muted rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpenFaqIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-5 bg-brand-soft/50 hover:bg-brand-soft text-left transition-all"
              >
                <span className="font-bold text-sm sm:text-base text-surface-dark flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-brand-teal shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className={`h-5 w-5 text-text-soft transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-6 py-5 text-text-soft text-sm sm:text-base leading-relaxed border-t border-brand-muted font-semibold">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Help Card */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <div className="bg-brand-soft border border-brand-muted rounded-4xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start text-left">
            <div className="h-10 w-10 rounded-xl bg-white text-brand-primary flex items-center justify-center shrink-0 shadow-sm mt-1">
              <Sparkles className="h-5 w-5 text-brand-teal" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-base text-surface-dark leading-tight">Still have a unique milestone concern?</h4>
              <p className="text-text-soft text-xs sm:text-sm font-semibold">Our intake team is on standby to discuss personalized schedules.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-md transition-all shrink-0"
          >
            Ask a Specialist
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-alt mt-12 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Coordinate an Assessment Slot</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          Let&apos;s map developmental milestones, language rules, and physical balance coordinates today.
        </p>
        <div className="pt-2">
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-sm"
          >
            Book Free Milestone Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
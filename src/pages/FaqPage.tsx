import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FaqPage() {
  const [openIdx, setOpenFaqIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where is your consult located?",
      a: "Our state-of-the-art clinic is located at 12 Jide Oki Street, Victoria Island, Lagos, Nigeria. We feature dedicated sensory therapy gyms, speech rooms, and positive play spaces.",
    },
    {
      q: "What is your clinical therapy philosophy?",
      a: "We operate strictly under modern, neurodiversity-affirming, play-integrated frameworks. We focus on building functional life skills and communication (such as spoken language, signs, or AAC boards) while preserving your child&apos;s dignity and interests.",
    },
    {
      q: "How much does a developmental assessment cost?",
      a: "Costs vary depending on the testing batteries required (Developmental, Behavioural, Speech, or Adaptive Vineland scales). Please schedule an intake call to receive a structured quote sheet containing diagnostic packages.",
    },
    {
      q: "Do you offer online therapy sessions?",
      a: "Yes. For parent training sessions, classroom consultations, or speech coaching for older children, we offer secure, interactive online video sessions.",
    },
    {
      q: "Can your clinical reports be shared with my child&apos;s school?",
      a: "Absolutely. Our generated reports are highly descriptive and formatted to satisfy international legal standards for drafting IEPs and school-based accommodations.",
    },
    {
      q: "How long does a typical therapy session take?",
      a: "Direct therapy sessions are typically 45 to 60 minutes long, followed by a 10-minute caregiver handover to demonstrate home routines.",
    },
  ];

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

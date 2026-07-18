import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, AlertCircle, Quote } from "lucide-react";
import { conditionsSupported } from "../data/siteData";
import { img } from "../data/images";

export default function ConditionIndividualPage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !conditionsSupported[id]) {
    return <Navigate to="/404" replace />;
  }

  const data = conditionsSupported[id];

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-16 md:py-24 border-b border-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-text-muted">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>&rarr;</span>
            <Link to="/conditions" className="hover:text-brand-primary transition-colors">Who We Support</Link>
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
              src={img.conditions[data.id as keyof typeof img.conditions]}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 via-surface-dark/10 to-transparent" />
            <div className="absolute bottom-4 left-5 text-white">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-accent">Empathetic Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EMPATHETIC EXPLANATION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Understanding the Condition</h2>
            <p className="text-text-soft text-base leading-relaxed font-medium">
              {data.intro}
            </p>
          </div>
          <div className="lg:col-span-4 bg-surface-alt border border-brand-soft p-6.5 rounded-3xl text-center space-y-4 shadow-inner">
            <Sparkles className="h-10 w-10 text-brand-teal mx-auto" />
            <h4 className="font-display font-bold text-base text-surface-dark">Our Positive Focus</h4>
            <p className="text-text-soft text-xs leading-relaxed font-medium">
              We never utilize clinical shame models. We celebrate each child&apos;s style while building functional daily living targets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SIGNS TO LOOK FOR */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-left space-y-2 max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-surface-dark flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-brand-accent" />
              Signs or Behaviors to Look For
            </h3>
            <p className="text-text-soft text-sm font-semibold leading-relaxed">
              Every child manifests challenges differently. Common markers we evaluate in this category include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {data.signs.map((sign, idx) => (
              <div key={idx} className="bg-white border border-brand-soft rounded-2xl p-6 shadow-sm flex gap-3.5">
                <CheckCircle2 className="h-5.5 w-5.5 text-brand-teal shrink-0 mt-0.5" />
                <p className="text-text-soft text-sm font-semibold leading-relaxed">
                  {sign}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW LCC HELPS (SERVICE CARDS) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2 max-w-2xl">
          <h3 className="font-display text-2xl font-bold text-surface-dark">How We Support Your Child</h3>
          <p className="text-text-soft text-sm font-semibold leading-relaxed">
            Our multidisciplinary clinics tackle this category using interlinked service methods:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {data.howWeHelp.map((serv, idx) => (
            <div key={idx} className="bg-white border border-brand-soft rounded-3xl p-6.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center font-display font-bold text-xs">
                  {idx + 1}
                </div>
                <h4 className="font-display font-bold text-lg text-surface-dark">{serv.service}</h4>
                <p className="text-text-soft text-xs sm:text-sm leading-relaxed font-semibold">{serv.description}</p>
              </div>
              <div className="pt-6">
                <Link
                  to={serv.path}
                  className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/link"
                >
                  View Therapy Setup
                  <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EARLY INTERVENTION */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-black text-brand-primary">Why Early Action Matters</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">The Power of Early Intervention</h3>
          <p className="text-text-soft text-base leading-relaxed font-semibold">
            {data.earlyIntervention}
          </p>
        </div>
      </section>

      {/* 6. FOR FAMILIES REASSURANCE */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Quote className="h-10 w-10 text-brand-accent mx-auto" />
        <h3 className="font-display text-2xl font-bold text-surface-dark">A Warm Message for Families</h3>
        <p className="text-text-soft text-base leading-relaxed italic font-medium">
          &ldquo;{data.reassurance}&rdquo;
        </p>
      </section>

      {/* 7. RESOURCES & 8. CTA */}
      <section className="py-20 bg-surface-warm border-t border-amber-100 text-center space-y-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">
            Schedule an Evaluation Session for Your Child
          </h2>
          <p className="text-text-soft text-base max-w-xl mx-auto font-semibold">
            Let&apos;s schedule a 30-minute developmental baseline assessment. Our coordinators will review medical histories or school notes.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book?service=general"
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm"
            >
              Get a Free Assessment
            </Link>
            <Link
              to="/resources"
              className="w-full sm:w-auto bg-white border border-brand-muted hover:border-brand-primary text-brand-primary font-bold px-8 py-4 rounded-2xl transition-all text-sm"
            >
              Access Parent Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
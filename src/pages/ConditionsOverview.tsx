import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Brain, Heart, Shield, Smile, Zap, ArrowRight } from "lucide-react";
import { img } from "../data/images";

export default function ConditionsOverview() {
  const conditions = [
    {
      id: "autism",
      title: "Autism Spectrum Disorder (ASD)",
      desc: "Supporting communication patterns, routine sensory processing, and social play skills with dignity.",
      icon: Sparkles,
      iconColor: "text-brand-primary",
    },
    {
      id: "adhd",
      title: "ADHD Support",
      desc: "Helping children manage executive control, build task-focus habits, and channel high physical energy.",
      icon: Zap,
      iconColor: "text-brand-accent",
    },
    {
      id: "intellectual-disabilities",
      title: "Intellectual Disabilities",
      desc: "Fostering practical self-help milestones and logical classification using patient, systematic steps.",
      icon: Brain,
      iconColor: "text-brand-teal",
    },
    {
      id: "global-developmental-delay",
      title: "Global Developmental Delay",
      desc: "Providing active developmental evaluations to target multiple delayed milestones quickly.",
      icon: Smile,
      iconColor: "text-brand-secondary",
    },
    {
      id: "speech-difficulties",
      title: "Speech & Language Difficulties",
      desc: "Targeting articulation errors, sentence construction delays, and introducing modern AAC devices.",
      icon: Heart,
      iconColor: "text-emerald-500",
    },
    {
      id: "learning-behavioural",
      title: "Learning & Behavioural Challenges",
      desc: "Overcoming specific classroom learning difficulties and transition-triggered tantrums.",
      icon: Shield,
      iconColor: "text-indigo-500",
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
            Empathetic Diagnosis Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Conditions We <span className="text-brand-primary">Support</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            We celebrate the unique neurological wiring of every child, centering our interventions around respect and practical progress.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img.conditions[item.id as keyof typeof img.conditions]}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/45 to-transparent" />
                  <div className={`absolute top-3 left-3 h-11 w-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md ${item.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between gap-4 flex-grow">
                  <div className="space-y-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-surface-dark">{item.title}</h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={`/conditions/${item.id}`}
                    className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/link"
                  >
                    View Empathetic Guidelines
                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Early Intervention Reassurance Section */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">A Reassuring Note for Families</h2>
          <p className="text-text-soft text-base leading-relaxed font-medium">
            Receiving a neurodevelopmental diagnosis can feel like a heavy burden. But remember, a diagnosis does not change who your beautiful child is — it simply details how their unique mind processes patterns, sounds, and communication. Early childhood support isn&apos;t about matching clinical averages; it is about building the confidence, resilience, and skills they need to navigate their journey joyfully.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Get an Assessment Intake Call</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-medium">
          Talk with our intake coordinators about developmental checklists, previous report cards, and physical coordination.
        </p>
        <div className="pt-2">
          <Link
            to="/book?service=general"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all text-sm"
          >
            Request Free Milestone Call
          </Link>
        </div>
      </section>
    </div>
  );
}

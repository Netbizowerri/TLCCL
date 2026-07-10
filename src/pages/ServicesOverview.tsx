import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ClipboardList, GraduationCap, ArrowRight, ShieldCheck, UserCheck, UsersRound, Layers, Target, Clock } from "lucide-react";
import { img } from "../data/images";

export default function ServicesOverview() {
  const navigators = [
    {
      title: "Therapy Programmes",
      tagline: "Weekly structured support modules centered around child-interest play.",
      desc: "Comprehensive options covering ABA, Speech, Occupational, and Cognitive development to target specific milestone challenges.",
      path: "/services/therapy-programmes",
      icon: Heart,
      iconColor: "text-brand-teal bg-brand-soft",
      image: img.bentoTherapy,
    },
    {
      title: "Assessments Overview",
      tagline: "Standardized, multi-lens testing protocols for clinical diagnosis.",
      desc: "In-depth developmental, communication, and functional assessments that build detailed diagnostic profiles for families and schools.",
      path: "/services/assessments",
      icon: ClipboardList,
      iconColor: "text-brand-primary bg-blue-50",
      image: img.bentoAssessment,
    },
    {
      title: "Training & Capacity",
      tagline: "Empowering caregivers, parents, and academic teachers.",
      desc: "Interactive training modules and certifications to ensure child support strategies generalize seamlessly at home and in school.",
      path: "/services/training",
      icon: GraduationCap,
      iconColor: "text-brand-accent bg-amber-50",
      image: img.bentoTraining,
    },
  ];

  const features = [
    { title: "Evidence-Based Support", desc: "Every therapy program is grounded in decades of peer-reviewed developmental research.", icon: ShieldCheck },
    { title: "Fully Personalised", desc: "No copy-paste programs. Every child has a custom-written behavioral/milestone path.", icon: UserCheck },
    { title: "Family-Centred", desc: "We integrate systematic parent coaching to sustain breakthroughs at home.", icon: UsersRound },
    { title: "Multidisciplinary Teams", desc: "Our speech therapists, OTs, and behavioral analysts collaborate on every case.", icon: Layers },
    { title: "Goal-Oriented Reviews", desc: "We map progress daily and conduct comprehensive reviews with families every 3 months.", icon: Target },
    { title: "Ongoing Support", desc: "Continuous transition coaching, school observations, and diagnostic updates.", icon: Clock },
  ];

  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-gradient-to-b from-brand-soft via-white to-white py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1 bg-brand-muted text-brand-primary px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Clinical Services Overview
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Comprehensive Support for Every <span className="text-brand-primary">Child&apos;s Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            The Learner Centered Consult Limited provides gold-standard child therapies, developmental evaluations, and community workshops. Discover our range of specialized care pathways.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES NAVIGATOR */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {navigators.map((nav, idx) => {
            const Icon = nav.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-soft rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={nav.image}
                    alt={nav.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className={`absolute top-4 left-4 h-14 w-14 rounded-2xl flex items-center justify-center shadow-md ${nav.iconColor}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between gap-6 flex-grow">
                  <div className="space-y-2">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">{nav.title}</h2>
                    <p className="text-brand-teal text-xs font-bold uppercase tracking-wider">{nav.tagline}</p>
                    <p className="text-text-soft text-sm font-medium leading-relaxed pt-2">
                      {nav.desc}
                    </p>
                  </div>
                  <Link
                    to={nav.path}
                    className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-md shadow-brand-primary/10 transition-all w-full justify-center"
                  >
                    Explore This Section
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY WE ARE TRUSTED */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark">
              Why Families Trust <span className="text-brand-teal">Our Consult</span>
            </h2>
            <p className="text-text-soft text-base sm:text-lg font-medium">
              We stand apart through our deep clinical rigor combined with warm, genuine care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-soft/60 flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-surface-dark">{feat.title}</h4>
                    <p className="text-text-soft text-xs font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Not Sure Where to Start?</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto">
          Take a developmental milestone assessment. We will help map your child&apos;s current capabilities and suggest direct therapeutic targets.
        </p>
        <div className="pt-2">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-surface-dark font-black px-8 py-4 rounded-2xl shadow-lg shadow-brand-accent/15 transition-all text-base"
          >
            Book Assessment Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Sparkles, Quote, Award } from "lucide-react";
import { img } from "../data/images";

export default function About() {
  const pillars = [
    {
      title: "Evidence-Based Practice",
      desc: "Every therapy program we offer is strictly rooted in peer-reviewed clinical research and validated behavioral methods.",
      icon: ShieldCheck,
      color: "text-brand-primary",
    },
    {
      title: "Individualised Care",
      desc: "No two children are alike. We design unique developmental profiles and support pathways tailored specifically to your child.",
      icon: Sparkles,
      color: "text-brand-accent",
    },
    {
      title: "Family Collaboration",
      desc: "We believe parents are co-therapists. We train and support families to ensure clinical breakthroughs extend into the home.",
      icon: Users,
      color: "text-brand-teal",
    },
    {
      title: "Community Integration",
      desc: "We actively collaborate with schools, classrooms, and pediatric networks to build inclusive support environments.",
      icon: Heart,
      color: "text-brand-secondary",
    },
  ];

  const partners = [
    { name: "Lagos Pediatric Association", type: "Affiliate Clinical Network" },
    { name: "Neurodiversity Alliance NG", type: "Empowering Families" },
    { name: "Inclusive Schools Initiative", type: "Educational Quality Partner" },
    { name: "Board Certified Behavior Analyst Board", type: "Regulatory Standards" },
  ];

  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20 md:py-28 dot-grid overflow-hidden">
        <img
          src={img.familyEmbrace}
          alt="A parent tenderly embracing a child"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/85 to-brand-secondary/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Our Mission & Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight"
          >
            We Exist for <span className="text-brand-accent">Every Child</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            The Learner Centered Consult Limited was built on a simple, powerful promise: to provide world-class, scientifically grounded, and warm-hearted developmental support.
          </motion.p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-soft border border-brand-muted rounded-4xl p-8 md:p-12 space-y-4"
          >
            <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
              <Award className="h-6 w-6 text-brand-primary" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Our Mission</h2>
            <p className="text-text-soft text-base leading-relaxed font-medium">
              To systematically champion every child&apos;s developmental potential by delivering evidence-based therapies, assessments, and community coaching. We measure our success solely in clinical quality and the long-term milestones achieved by the families we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-soft border border-brand-muted rounded-4xl p-8 md:p-12 space-y-4"
          >
            <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
              <Sparkles className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark">Our Vision</h2>
            <p className="text-text-soft text-base leading-relaxed font-medium">
              To build a society where neurodiversity is fully understood, supported, and integrated — where every family has access to compassionate, multi-disciplinary experts and clear milestone pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark">Our Story</h2>
          <div className="relative h-64 sm:h-80 w-full rounded-4xl overflow-hidden shadow-xl border border-brand-muted">
            <img
              src={img.aboutClinic}
              alt="Inside a bright, welcoming therapy playroom designed for children"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
          </div>
          <div className="font-display text-lg sm:text-xl text-text-soft leading-relaxed italic space-y-6">
            <p>
              &ldquo;The Learner Centered Consult Limited was founded out of a shared frustration. As therapy practitioners and educators in West Africa, we witnessed parents searching frantically for answers — receiving conflicting advice and feeling isolated under the weight of developmental diagnoses.&rdquo;
            </p>
            <p>
              &ldquo;We realized that child development cannot be treated in silos. An occupational therapist must collaborate with a speech pathologist; a behavior analyst must support the classroom teacher; and parents must be given the actual tools to lead. We created this consult as that collaborative, warm, and highly clinical circle of care.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (4 PILLARS) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark">Our Core Approach</h2>
          <p className="text-text-soft text-base sm:text-lg font-medium">
            At The Learner Centered Consult Limited, our therapy and consultation structures rest on four fundamental, clinical values.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl border border-brand-soft p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className={`h-11 w-11 rounded-xl bg-brand-soft flex items-center justify-center ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-surface-dark">{item.title}</h3>
                  <p className="text-text-soft text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. WHAT WE BELIEVE (PULL-QUOTE) */}
      <section className="py-20 bg-surface-warm border-y border-amber-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Quote className="h-12 w-12 text-brand-accent mx-auto" />
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-surface-dark italic leading-relaxed">
            &ldquo;We don&apos;t look at diagnoses as limitations. We look at them as roadmaps to unlock your child&apos;s innate gifts.&rdquo;
          </h3>
          <p className="text-brand-teal text-sm uppercase tracking-widest font-black">
            — The Clinical Team
          </p>
        </div>
      </section>

      {/* 6. OUR TEAM CTA */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-dark">Guided by Certified Experts</h2>
        <p className="text-text-soft text-base sm:text-lg font-medium max-w-xl mx-auto">
          Our specialists hold active international certifications and continuous educational credits in child behavioral development.
        </p>
        <div className="pt-2">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-primary/10 transition-all text-sm"
          >
            Meet Our Specialists
          </Link>
        </div>
      </section>

      {/* 7. ACCREDITATIONS / PARTNERS */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h3 className="text-xs uppercase tracking-widest font-bold text-text-muted">Our Affiliates & Working Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((p, idx) => (
              <div key={idx} className="bg-white border border-brand-soft p-5 rounded-2xl flex flex-col justify-center items-center shadow-sm">
                <span className="font-display font-bold text-xs text-surface-dark mb-1 text-center">{p.name}</span>
                <span className="text-[10px] text-brand-teal uppercase tracking-wider font-bold">{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Ready to Coordinate Your Child&apos;s Care?</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto">
          Contact our clinical coordinator today to ask questions, schedule observations, or review past diagnostic folders.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book"
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all text-sm"
          >
            Book Assessment
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-brand-soft border border-brand-muted hover:border-brand-primary text-brand-primary font-bold px-8 py-4 rounded-xl transition-all text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Heart, ClipboardList, GraduationCap, Star, Shield, Sparkles, Smile, Award, Zap, Brain, ShieldCheck } from "lucide-react";
import { img } from "../data/images";

// Simple CountUp helper component
function StatCounter({ value, text, suffix = "" }: { value: number; text: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      const totalDuration = 1500; // ms
      const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4">
      <motion.div 
        className="font-display text-4xl md:text-5xl font-black text-brand-accent mb-1.5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
        {text}
      </div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const conditions = [
    { name: "Autism Spectrum Disorder", id: "autism", desc: "Nurturing unique neurodivergent communication and learning paths.", icon: Sparkles, color: "border-brand-primary" },
    { name: "ADHD Support", id: "adhd", desc: "Channeling boundless energetic potential and building task focus.", icon: Zap, color: "border-brand-accent" },
    { name: "Intellectual Disabilities", id: "intellectual-disabilities", desc: "Patient, systematic learning structures for real-world life skills.", icon: Brain, color: "border-brand-teal" },
    { name: "Global Developmental Delay", id: "global-developmental-delay", desc: "Targeted early milestones mapping to catch up with peers.", icon: Smile, color: "border-brand-secondary" },
    { name: "Speech & Language", id: "speech-difficulties", desc: "Enhancing vocal clarity, active understanding, and social cues.", icon: Heart, color: "border-emerald-500" },
    { name: "Learning & Behavioural", id: "learning-behavioural", desc: "Overcoming educational barriers and managing classroom adjustments.", icon: Shield, color: "border-indigo-500" },
  ];

  const steps = [
    { title: "Book a Free Consultation", desc: "A brief 30-minute introductory meeting to talk about your child's needs." },
    { title: "Comprehensive Assessment", desc: "In-depth evaluations of milestones, speech patterns, and adaptive behavior." },
    { title: "Personalised Plan", desc: "Crafting a bespoke interdisciplinary intervention roadmap." },
    { title: "Therapy & Ongoing Support", desc: "Play-based, evidence-backed therapy modules targeting milestones." },
    { title: "Family Collaboration", desc: "Caregiver reviews and training sessions to bridge home and clinic." },
  ];

  const testimonials = [
    { quote: "The Learner Centered Consult completely transformed our home life. The child-led ABA therapy felt like play, and our son started using full sentences within months.", parent: "Chioma", role: "Parent of 5yo child with ASD", rating: 5 },
    { quote: "The occupational therapists are magical. My daughter loved the sensory gym, and now she can write legibly and dress herself independently.", parent: "Tunde", role: "Parent of 7yo child with Sensory Delay", rating: 5 },
    { quote: "Their professional classroom training for our teachers made a world of difference. Our school is now truly neurodiversity-affirming.", parent: "Principal Adewale", role: "Greenwood Prep School", rating: 5 },
    { quote: "Every milestone felt celebrated. They look at children with so much warmth and absolute belief in their potential.", parent: "Amara", role: "Parent of 4yo child with GDD", rating: 5 },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-white dot-grid py-12 md:py-20">
        {/* Soft blur overlay */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-soft/80 rounded-full filter blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-soft border border-brand-muted text-brand-primary text-xs font-bold uppercase tracking-wider"
              >
                <Award className="h-4 w-4 text-brand-teal" />
                Evidence-Based Child Development
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark leading-[1.1] tracking-tight"
              >
                Every Child Deserves to <span className="text-brand-primary">Thrive</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-soft text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
              >
                The Learner Centered Consult Limited provides compassionate, personalised therapy, assessments, and training for children with developmental and learning needs — helping them flourish at home, in school, and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              >
                <Link
                  to="/book"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-center px-8 py-4 rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all flex items-center justify-center gap-2 text-base"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-brand-soft border border-brand-muted hover:border-brand-primary text-brand-primary font-bold text-center px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-1.5 text-base"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-md mx-auto"
              >
                {/* Decorative tilted blob frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-brand-soft to-brand-muted rounded-[2.75rem] rotate-3" />

                {/* Main photo - Compassionate Clinical Care */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://i.ibb.co/Zp10zg7v/Gemini-Generated-Image-djt6fpdjt6fpdjt6.png"
                    alt="A caregiver providing compassionate, loving support to a child with special needs during a developmental therapy session"
                    className="w-full h-[440px] sm:h-[520px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge: Certified */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -left-3 sm:-left-8 top-8 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-brand-soft"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-teal flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-surface-dark leading-tight">Certified Specialists</p>
                    <p className="text-[10px] text-text-soft font-semibold">BCBA · ASHA · WFOT</p>
                  </div>
                </motion.div>

                {/* Floating badge: Families */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -right-3 sm:-right-6 bottom-10 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-brand-soft"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-brand-accent flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 fill-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-surface-dark leading-tight">500+ Families</p>
                    <p className="text-[10px] text-text-soft font-semibold">Trusted &amp; growing</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-surface-dark py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={500} text="Children Supported" suffix="+" />
            <StatCounter value={12} text="Specialists" suffix="+" />
            <StatCounter value={8} text="Therapy Programmes" />
            <div className="text-center p-4 flex flex-col justify-center items-center">
              <motion.div 
                className="font-display text-4xl md:text-5xl font-black text-brand-accent mb-1.5 flex items-center justify-center gap-1"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Shield className="h-9 w-9 text-brand-teal" />
                100%
              </motion.div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Evidence-Based Practice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE HELP */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              If Your Child Faces These Challenges, <span className="text-brand-primary">We Can Help</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              We specialize in custom neurodiversity-affirming pathways that honor your child's personality while supporting learning and milestone targets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-3xl border-l-4 ${item.color} p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-surface-dark">
                      {item.name}
                    </h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      to={`/conditions/${item.id}`}
                      className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/link"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE SERVICES BENTO GRID */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              How We Help <span className="text-brand-primary">Your Child</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              We coordinate therapy programs, diagnostic assessments, and professional capacity coaching into one unified circle of care.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Therapy Programmes - Left Large Card (image split) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-brand-soft border border-brand-muted rounded-3xl shadow-sm overflow-hidden group hover:shadow-lg transition-all grid grid-cols-1 md:grid-cols-2"
            >
              <div className="relative min-h-[260px] md:min-h-full overflow-hidden">
                <img
                  src="https://i.ibb.co/VYXwBy2s/Gemini-Generated-Image-h5n2fjh5n2fjh5n2.png"
                  alt="A child engaged in a joyful, guided therapy session with a specialist"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/90 backdrop-blur-sm text-brand-teal flex items-center justify-center shadow-md">
                  <Heart className="h-6 w-6 fill-brand-teal" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-surface-dark">
                    Therapy Programmes
                  </h3>
                  <p className="text-text-soft text-base font-medium leading-relaxed">
                    Custom-designed naturalistic intervention structures spanning Applied Behaviour Analysis (ABA), speech pathology, motor planning occupational therapy, and active cognitive focus workshops.
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {["ABA Therapy", "Speech & Language", "Occupational Therapy", "Cognitive Growth"].map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-brand-teal border border-brand-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/services/therapy-programmes"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-brand-primary/15 transition-all text-sm w-fit"
                >
                  See Programmes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Stacked Cards */}
            <div className="flex flex-col gap-8">
              {/* Assessments Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface-alt border border-brand-muted rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="https://i.ibb.co/0psthjwL/Gemini-Generated-Image-gkd2argkd2argkd2.png"
                    alt="A clinician reviewing a child's developmental milestones with a parent"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-sm text-brand-primary flex items-center justify-center shadow-md">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between gap-4 flex-grow">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-surface-dark">
                      Assessments
                    </h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed">
                      Standardized, multidisciplinary clinical evaluations of developmental milestones, cognitive skills, and speech patterns.
                    </p>
                  </div>
                  <Link
                    to="/services/assessments"
                    className="text-sm font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1 group/link"
                  >
                    See Assessments
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Training Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface-warm border border-amber-100 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src="https://i.ibb.co/7dPqP2hY/Gemini-Generated-Image-k7o018k7o018k7o0.png"
                    alt="A teacher warmly guiding a child through a reading activity"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-sm text-brand-accent flex items-center justify-center shadow-md">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between gap-4 flex-grow">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-surface-dark">
                      Training & Capacity
                    </h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed">
                      Interactive training seminars empowering parents, classroom teachers, and allied healthcare professionals.
                    </p>
                  </div>
                  <Link
                    to="/services/training"
                    className="text-sm font-bold text-brand-accent hover:text-brand-accent/80 flex items-center gap-1 group/link"
                  >
                    See Training
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS / TIMELINE */}
      <section ref={containerRef} className="bg-surface-warm py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              From First Contact to <span className="text-brand-teal">Lasting Change</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              We walk hand-in-hand with your family through every developmental phase of clinical and home intervention.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="relative">
            {/* Desktop Connective Progress Line */}
            <div className="hidden lg:block absolute top-[54px] left-8 right-8 h-1 bg-amber-200 -z-10" />
            <motion.div
              style={{ scaleX }}
              className="hidden lg:block absolute top-[54px] left-8 right-8 h-1 bg-brand-teal origin-left -z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                  {/* Step circle */}
                  <div className="h-12 w-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-display text-lg font-bold shadow-md shadow-brand-teal/20 relative">
                    {idx + 1}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-surface-dark">{step.title}</h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed px-4 lg:px-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              Families Trust <span className="text-brand-primary">Our Consult</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              Discover feedback from parents and school administrators who have observed measurable developmental growth in their children.
            </p>
          </div>

          {/* Testimonial Active Display */}
          <div className="relative max-w-4xl mx-auto bg-brand-soft border border-brand-muted p-8 md:p-12 rounded-4xl shadow-md min-h-[250px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex gap-1 justify-center md:justify-start">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="font-display text-lg md:text-2xl font-medium italic text-surface-dark leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
            </div>

            <div className="pt-8 border-t border-brand-muted flex flex-col md:flex-row justify-between items-center gap-3">
              <div>
                <h4 className="font-bold text-surface-dark text-base">{testimonials[activeTestimonial].parent}</h4>
                <p className="text-text-soft text-xs font-semibold">{testimonials[activeTestimonial].role}</p>
              </div>

              {/* Navigation Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? "w-8 bg-brand-primary" : "bg-brand-muted hover:bg-brand-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <section className="bg-surface-dark py-20 md:py-28 relative overflow-hidden">
        {/* Background photo with dark overlay */}
        <img
          src={img.ctaHappy}
          alt="A happy child laughing and playing with family"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/85 to-surface-dark/95" />
        {/* Ambient radial blur glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-brand-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] bg-brand-secondary/20 rounded-full filter blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Ready to Take the <span className="text-brand-accent">First Step</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Book a free 30-minute consultation today. Let&apos;s talk about your child&apos;s developmental milestones and how we can assist.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-surface-dark font-black px-8 py-4.5 rounded-2xl shadow-xl shadow-brand-accent/20 hover:-translate-y-0.5 transition-all text-base tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-white hover:text-brand-secondary border border-slate-700 hover:border-brand-secondary px-8 py-4.5 rounded-2xl transition-all text-base font-bold"
            >
              Contact Our Clinic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

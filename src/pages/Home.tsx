import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Heart, ClipboardList, GraduationCap, Star, Shield, Sparkles, Smile, Award, Zap, Brain, ShieldCheck, Users, BookOpen, HelpCircle, CheckCircle2, Quote, Briefcase } from "lucide-react";
import { img } from "../data/images";
import { processSteps, therapyPrograms, assessmentPrograms, trainingPrograms, conditionsSupported, faqs as siteFaqs } from "../data/siteData";

const serviceImages = {
  assessment: img.bentoAssessment,
  therapy: img.bentoTherapy,
  educational: img.bentoTraining,
  parent: img.familyEmbrace,
  professional: img.aboutTeam,
};

function StatCounter({ value, text, suffix = "" }: { value: number; text: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalDuration = 1500;
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
    { name: "Autism Spectrum Disorder (ASD)", id: "autism", desc: "Understanding and nurturing autistic minds to bloom uniquely.", icon: Sparkles, color: "border-brand-primary" },
    { name: "ADHD (Attention-Deficit/Hyperactivity Disorder)", id: "adhd", desc: "Harnessing high energy, creativity, and finding absolute focus.", icon: Zap, color: "border-brand-accent" },
    { name: "Global Developmental Delay", id: "global-developmental-delay", desc: "Supporting delayed milestones with systematic, clinical interventions.", icon: Smile, color: "border-brand-secondary" },
    { name: "Specific Learning Difficulties", id: "learning-behavioural", desc: "Resolving scholastic hurdles and supporting emotional adjustments.", icon: BookOpen, color: "border-indigo-500" },
    { name: "Speech & Language Disorders", id: "speech-difficulties", desc: "Helping children express their thoughts clearly and connect naturally.", icon: Heart, color: "border-emerald-500" },
    { name: "Intellectual Disabilities", id: "intellectual-disabilities", desc: "Empowering learning and everyday life skills at a personalized pace.", icon: Brain, color: "border-brand-teal" },
  ];

  const whyChooseLCC = [
    "Individualised intervention programmes",
    "Evidence-based practice",
    "Family-centred care",
    "Multidisciplinary collaboration",
    "School partnership and consultation",
    "Training & professional development",
    "Regular progress monitoring",
    "Ethical and professional practice",
  ];

  const assessmentServices = [
    { title: "Developmental Assessment", desc: "Comprehensive map of developmental milestones", path: "/services/assessments/developmental" },
    { title: "Psychoeducational Assessment", desc: "In-depth evaluation of learning, cognition, and academic achievement", path: "/services/assessments/psychoeducational" },
    { title: "Behavioural Assessment", desc: "Decoding root causes of complex or challenging behaviours", path: "/services/assessments/behavioural" },
    { title: "Functional Behaviour Assessment (FBA)", desc: "Systematic analysis to understand the function of challenging behaviour", path: "/services/assessments/fba" },
    { title: "Functional Analysis", desc: "Experimental verification of behaviour function under controlled conditions", path: "/services/assessments/functional" },
    { title: "Speech & Language Assessment", desc: "Evaluating speech sound precision, language structure, and social communication", path: "/services/assessments/communication" },
    { title: "Occupational Therapy Assessment", desc: "Measuring motor skills, sensory integration, and daily living independence", path: "/services/assessments/occupational" },
  ];

  const therapyServices = [
    { title: "Applied Behaviour Analysis (ABA)", desc: "Empowering children through structured, positive behaviour reinforcement", path: "/services/therapy-programmes/aba" },
    { title: "Speech and Language Therapy", desc: "Unlocking your child's voice to connect, express, and understand", path: "/services/therapy-programmes/speech" },
    { title: "Occupational Therapy", desc: "Enhancing motor skills, sensory integration, and independence", path: "/services/therapy-programmes/occupational" },
    { title: "Special Education", desc: "Individualized academic instruction for diverse learning needs", path: "/services/therapy-programmes/special" },
    { title: "Early Intervention", desc: "Critical developmental support during the most neuroplastic years", path: "/services/therapy-programmes/early" },
    { title: "School Readiness Programme", desc: "Preparing children for confident classroom transitions", path: "/services/therapy-programmes/readiness" },
    { title: "Social Skills Training", desc: "Building meaningful peer connections and social confidence", path: "/services/therapy-programmes/social" },
    { title: "Executive Function Coaching", desc: "Developing planning, organization, and self-management skills", path: "/services/therapy-programmes/executive" },
  ];

  const educationalServices = [
    { title: "Inclusive Education Support", desc: "Building inclusive, sensory-friendly, and effective classrooms", path: "/services/educational/inclusive" },
    { title: "Individual Education Planning", desc: "Collaborative IEP development and implementation support", path: "/services/educational/iep" },
    { title: "Academic Intervention", desc: "Targeted academic support for specific learning difficulties", path: "/services/educational/academic" },
    { title: "Classroom Observation", desc: "Structured observation to inform support strategies", path: "/services/educational/observation" },
    { title: "School Consultation", desc: "Expert consultation for schools on neurodiversity inclusion", path: "/services/educational/consultation" },
    { title: "Transition Planning", desc: "Supporting smooth transitions between educational stages", path: "/services/educational/transition" },
  ];

  const parentServices = [
    { title: "Parent Coaching", desc: "Empowering families to become active partners in their child's development", path: "/services/parent/coaching" },
    { title: "Behaviour Consultation", desc: "Expert guidance on managing challenging behaviours at home", path: "/services/parent/behaviour" },
    { title: "Home-Based Support", desc: "In-home therapy and support for skill generalization", path: "/services/parent/home" },
    { title: "Caregiver Training", desc: "Comprehensive training for nannies, grandparents, and caregivers", path: "/services/parent/training" },
    { title: "Family Workshops", desc: "Group learning sessions for families on developmental topics", path: "/services/parent/workshops" },
  ];

  const professionalServices = [
    { title: "Staff Training", desc: "Building capacity of educational and clinical teams", path: "/services/professional/staff-training" },
    { title: "Professional Mentorship", desc: "Guiding early-career professionals in child development", path: "/services/professional/mentorship" },
    { title: "Supervision", desc: "Clinical supervision for therapists and analysts", path: "/services/professional/supervision" },
    { title: "Workshops and Seminars", desc: "Continuing education on evidence-based practices", path: "/services/professional/workshops" },
    { title: "Continuing Professional Development", desc: "Accredited CPD programs for allied health professionals", path: "/services/professional/cpd" },
  ];

  const steps = processSteps;

  const whoWeSupport = [
    "Autism Spectrum Disorder (ASD)",
    "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    "Global Developmental Delay",
    "Specific Learning Difficulties (Dyslexia, Dysgraphia, Dyscalculia)",
    "Speech and Language Disorders",
    "Developmental Language Disorder",
    "Social Communication Difficulties",
    "Intellectual Disability",
    "Executive Function Difficulties",
    "Behavioural and Emotional Regulation Needs",
    "Sensory Processing Challenges",
    "School Readiness Difficulties",
  ];

  const coreValues = [
    "Integrity",
    "Excellence",
    "Professionalism",
    "Compassion",
    "Accountability",
    "Collaboration",
    "Child- and Family-Centred Practice",
    "Respect",
    "Confidentiality",
    "Inclusion",
    "Evidence-Based Practice",
    "Continuous Learning",
  ];

  const parentResources = [
    "Parent Guides",
    "Reinforcement Plan",
    "Developmental Milestones",
    "Home Activity Sheets",
    "Behaviour Support Strategies",
    "Articles",
    "Frequently Asked Questions",
  ];

  const trainingOfferings = [
    "ABA Training",
    "Behaviour Management Workshops",
    "School Staff Development",
    "Parent Education Programmes",
    "Professional Mentorship",
    "Supervision",
    "Continuing Professional Development (CPD)",
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
                Helping Every Child <span className="text-brand-primary">Learn, Communicate and Thrive</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-soft text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
              >
                The Learner Centered Consult (LCC) is a multidisciplinary child development practice providing comprehensive assessments, Applied Behaviour Analysis (ABA), speech and language therapy, occupational therapy, psychoeducational services, special education, and school consultation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-text-soft text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
              >
                Through compassionate, evidence-based practice, we partner with families, schools, hospitals, and communities to help children develop meaningful skills, increase independence, and achieve their fullest potential.
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
                  Book an Assessment
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
                <div className="absolute -inset-3 bg-gradient-to-tr from-brand-soft to-brand-muted rounded-[2.75rem] rotate-3" />
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://i.ibb.co/Zp10zg7v/Gemini-Generated-Image-djt6fpdjt6fpdjt6.png"
                    alt="A caregiver providing compassionate, loving support to a child with special needs during a developmental therapy session"
                    className="w-full h-[440px] sm:h-[520px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/30 via-transparent to-transparent" />
                </div>

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
                    <p className="text-[10px] text-text-soft font-semibold">Trusted & growing</p>
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

      {/* SECTION 3: WHY CHOOSE LCC */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              Why Choose <span className="text-brand-primary">LCC</span>?
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              At LCC, we believe every child deserves an individualised pathway to success. Our multidisciplinary team works collaboratively to provide personalised, data-informed intervention that supports each child's unique strengths and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseLCC.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border-l-4 border-brand-primary p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-start gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-teal shrink-0 mt-1" />
                <span className="text-text-soft text-sm font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              Our <span className="text-brand-primary">Services</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              Each service category links to its own dedicated page with detailed sub-services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Assessment Services Card */}
            <Link
              to="/services/assessments"
              className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col lg:col-span-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages.assessment}
                  alt="Assessment Services"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-brand-teal">
                  <ClipboardList className="h-7 w-7" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Assessment Services</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">
                  Comprehensive evaluations of developmental milestones, cognitive skills, and speech patterns to build detailed diagnostic profiles.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Developmental
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Psychoeducational
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Behavioural
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    +4 more
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary mt-auto group/link">
                  Explore Assessments
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Therapy Services Card */}
            <Link
              to="/services/therapy-programmes"
              className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col lg:col-span-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages.therapy}
                  alt="Therapy Services"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-brand-primary">
                  <Heart className="h-7 w-7" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Therapy Services</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">
                  Child-led, evidence-based therapy programmes spanning ABA, speech, occupational, cognitive and specialised interventions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    ABA Therapy
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Speech & Language
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Occupational
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    +7 more
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary mt-auto group/link">
                  Explore Therapies
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Educational Services Card */}
            <Link
              to="/services/educational"
              className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col lg:col-span-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages.educational}
                  alt="Educational Services"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-brand-accent">
                  <GraduationCap className="h-7 w-7" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Educational Services</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">
                  School consultation, IEP collaboration, classroom observation, and academic intervention for neurodiverse learners.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    School Consultation
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    IEP Planning
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Transition Planning
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    +3 more
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary mt-auto group/link">
                  Explore Education
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Parent & Family Services Card */}
            <Link
              to="/services/parent"
              className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col lg:col-span-3"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages.parent}
                  alt="Parent & Family Services"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-brand-secondary">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Parent & Family Services</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">
                  Empowering families with coaching, home-based support, caregiver training, and workshops for skill generalisation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Parent Coaching
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Home-Based Support
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Caregiver Training
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    +2 more
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary mt-auto group/link">
                  Explore Family Support
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Professional Services Card */}
            <Link
              to="/services/professional"
              className="bg-white border border-brand-soft rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col lg:col-span-3"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages.professional}
                  alt="Professional Services"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-brand-teal">
                  <Briefcase className="h-7 w-7" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Professional Services</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">
                  Advancing clinical knowledge with staff training, mentorship, supervision, workshops, and CPD for allied health professionals.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Staff Training
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Professional Mentorship
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    Supervision
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-soft text-brand-teal border border-brand-muted">
                    +2 more
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-secondary mt-auto group/link">
                  Explore Professional
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS */}
      <section ref={containerRef} className="bg-surface-warm py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              Our <span className="text-brand-teal">Process</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              We walk hand-in-hand with your family through every developmental phase of clinical and home intervention.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[54px] left-8 right-8 h-1 bg-amber-200 -z-10" />
            <motion.div
              style={{ scaleX }}
              className="hidden lg:block absolute top-[54px] left-8 right-8 h-1 bg-brand-teal origin-left -z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                  <div className="h-12 w-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-display text-lg font-bold shadow-md shadow-brand-teal/20 relative">
                    {step.step}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-surface-dark">{step.title}</h3>
                    <p className="text-text-soft text-sm font-medium leading-relaxed px-4 lg:px-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO WE SUPPORT */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-surface-dark leading-tight">
              Who We <span className="text-brand-primary">Support</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              We provide assessment and intervention for children with a range of developmental, behavioural, communication, and learning needs, including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeSupport.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-brand-soft border border-brand-muted rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-teal mb-2" />
                <p className="text-text-soft text-sm font-semibold leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT LCC */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark leading-tight">
                About <span className="text-brand-primary">LCC</span>
              </h2>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-surface-dark">Who We Are</h3>
                <p className="text-text-soft text-base leading-relaxed font-medium">
                  The Learner Centered Consult (LCC) is a multidisciplinary child development practice committed to improving the lives of children through compassionate, evidence-based care.
                </p>
                <p className="text-text-soft text-base leading-relaxed font-medium">
                  Our team brings together professionals across behaviour analysis, psychology, speech and language therapy, occupational therapy, and special education to provide collaborative services that support every aspect of a child's development.
                </p>
                <p className="text-text-soft text-base leading-relaxed font-medium">
                  We believe meaningful progress occurs when families, professionals, and schools work together with shared goals and evidence-informed strategies.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={img.aboutClinic}
                alt="Inside a bright, welcoming therapy playroom designed for children"
                className="w-full rounded-4xl shadow-xl border border-brand-muted object-cover h-[400px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-soft border border-brand-muted rounded-3xl p-8 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
                <Award className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-surface-dark">Our Mission</h3>
              <p className="text-text-soft text-base leading-relaxed font-medium">
                To improve the lives of children and families through evidence-based intervention and accessible support.
              </p>
            </div>

            <div className="bg-brand-soft border border-brand-muted rounded-3xl p-8 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm">
                <Sparkles className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="font-display text-2xl font-bold text-surface-dark">Our Vision</h3>
              <p className="text-text-soft text-base leading-relaxed font-medium">
                To transform lives by unlocking every child's potential and creating opportunities for them to thrive.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-20">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark text-center mb-10">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="bg-white border border-brand-soft rounded-2xl p-5 shadow-sm text-center">
                  <p className="font-bold text-sm text-surface-dark">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PARENT RESOURCE CENTRE */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark leading-tight">
                Parent Resource Centre
              </h2>
              <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
                Supporting families beyond the therapy room.
              </p>
              <div className="space-y-3">
                {parentResources.map((resource, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
                    <span className="text-text-soft text-sm font-semibold">{resource}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={img.familyEmbrace}
                alt="A parent tenderly embracing a child"
                className="w-full rounded-4xl shadow-xl border border-brand-muted object-cover h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TRAINING & PROFESSIONAL DEVELOPMENT */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark leading-tight">
              Training & <span className="text-brand-primary">Professional Development</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              Building the knowledge and skills of parents, educators, therapists, and other professionals through training and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingOfferings.map((training, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-brand-soft rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <BookOpen className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-display text-lg font-bold text-surface-dark mb-2">{training}</h3>
                <p className="text-text-soft text-sm font-medium leading-relaxed">Expert-led sessions with practical tools and resources</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
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

      {/* SECTION 11: FAQ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark leading-tight">
              Frequently Asked <span className="text-brand-primary">Questions</span>
            </h2>
            <p className="text-text-soft text-base md:text-lg font-medium leading-relaxed">
              Find answers to common questions about our services and approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {siteFaqs.map((faq, idx) => (
              <details key={idx} className="group border border-brand-muted rounded-2xl bg-white">
                <summary className="flex justify-between items-center px-6 py-4.5 cursor-pointer list-none">
                  <span className="font-bold text-sm sm:text-base text-surface-dark flex items-center gap-2">
                    <HelpCircle className="h-4.5 w-4.5 text-brand-teal shrink-0" />
                    {faq.q}
                  </span>
                  <svg className="h-5 w-5 text-text-soft group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-text-soft text-sm sm:text-base leading-relaxed border-t border-brand-muted font-medium animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTACT US */}
      <section className="bg-surface-dark py-20 md:py-28 relative overflow-hidden">
        <img
          src={img.ctaHappy}
          alt="A happy child laughing and playing with family"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/90 via-surface-dark/85 to-surface-dark/95" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-brand-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] bg-brand-secondary/20 rounded-full filter blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Ready to Take the <span className="text-brand-accent">Next Step</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Whether you have concerns about your child's development, need a comprehensive assessment, or are seeking professional consultation, our team is here to support you.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-surface-dark font-black px-8 py-4.5 rounded-2xl shadow-xl shadow-brand-accent/20 hover:-translate-y-0.5 transition-all text-base tracking-wide"
            >
              Book an Assessment
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-white hover:text-brand-secondary border border-slate-700 hover:border-brand-secondary px-8 py-4.5 rounded-2xl transition-all text-base font-bold"
            >
              Speak with Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
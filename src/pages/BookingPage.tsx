import { useState, useTransition } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Heart, ClipboardList, GraduationCap, HelpCircle, AlertCircle } from "lucide-react";

interface FormState {
  service: string;
  subService: string;
  childName: string;
  childDob: string;
  childGender: string;
  childSchool: string;
  hasDiagnosis: string;
  diagnosisDetails: string;
  primaryConcern: string;
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  parentPhoneCode: string;
  relationship: string;
  referral: string;
  referralSource: string;
  hearAboutUs: string;
  prefType: string;
  prefDays: string[];
  prefTime: string;
  urgency: string;
  additionalNotes: string;
  consent: boolean;
}

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Read URL query params to pre-select items
  const initialService = searchParams.get("service") || "";
  const initialType = searchParams.get("type") || "";

  const [formData, setFormData] = useState<FormState>({
    service: initialService === "therapy" ? "Therapy Programme" : initialService === "assessment" ? "Assessment" : initialService === "training" ? "Training" : "",
    subService: initialType,
    childName: "",
    childDob: "",
    childGender: "",
    childSchool: "",
    hasDiagnosis: "",
    diagnosisDetails: "",
    primaryConcern: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    parentPhoneCode: "+234",
    relationship: "",
    referral: "No",
    referralSource: "",
    hearAboutUs: "",
    prefType: "No preference",
    prefDays: [],
    prefTime: "Flexible",
    urgency: "Routine",
    additionalNotes: "",
    consent: false,
  });

  // Track validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Inline Validation
  const validateField = (name: keyof FormState, value: any) => {
    let err = "";
    if (name === "service" && !value) err = "Please select a service category.";
    if (name === "childName" && !value) err = "Child's name is required.";
    if (name === "childDob" && !value) err = "Child's date of birth is required.";
    if (name === "primaryConcern" && (!value || value.length < 10)) err = "Please describe your concerns in at least 10 characters.";
    if (name === "parentFirstName" && !value) err = "First name is required.";
    if (name === "parentLastName" && !value) err = "Last name is required.";
    if (name === "parentEmail") {
      if (!value) err = "Email address is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) err = "Please enter a valid email address.";
    }
    if (name === "parentPhone") {
      if (!value) err = "Phone number is required.";
      else if (!/^\d{7,14}$/.test(value.replace(/\s+/g, ""))) err = "Please enter a valid phone number.";
    }
    if (name === "relationship" && !value) err = "Please select your relationship to the child.";
    if (name === "consent" && !value) err = "You must consent to proceed.";

    setErrors((prev) => ({ ...prev, [name]: err }));
    return !err;
  };

  const handleBlur = (name: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const handleChange = (name: keyof FormState, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  // Step Navigations
  const nextStep = () => {
    // Validate current step
    let isValid = true;
    if (step === 1) {
      isValid = validateField("service", formData.service);
      setTouched((prev) => ({ ...prev, service: true }));
    } else if (step === 2) {
      const v1 = validateField("childName", formData.childName);
      const v2 = validateField("childDob", formData.childDob);
      const v3 = validateField("primaryConcern", formData.primaryConcern);
      setTouched((prev) => ({ ...prev, childName: true, childDob: true, primaryConcern: true }));
      isValid = v1 && v2 && v3;
    } else if (step === 3) {
      const v1 = validateField("parentFirstName", formData.parentFirstName);
      const v2 = validateField("parentLastName", formData.parentLastName);
      const v3 = validateField("parentEmail", formData.parentEmail);
      const v4 = validateField("parentPhone", formData.parentPhone);
      const v5 = validateField("relationship", formData.relationship);
      setTouched((prev) => ({ ...prev, parentFirstName: true, parentLastName: true, parentEmail: true, parentPhone: true, relationship: true }));
      isValid = v1 && v2 && v3 && v4 && v5;
    }

    if (isValid) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrors((prev) => ({ ...prev, consent: "Consent is required to submit." }));
      return;
    }

    startTransition(async () => {
      // Simulate Formspree Endpoint / Privyr CRM Webhook capture
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    });
  };

  const toggleDay = (day: string) => {
    const current = [...formData.prefDays];
    if (current.includes(day)) {
      handleChange("prefDays", current.filter((d) => d !== day));
    } else {
      handleChange("prefDays", [...current, day]);
    }
  };

  // Slide Animation Configurations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-surface-alt min-h-[calc(100vh-80px)] py-12 md:py-20 flex justify-center items-center">
      <div className="w-full max-w-3xl px-4">
        {/* Main Card */}
        <div className="bg-white rounded-4xl border border-brand-soft shadow-xl p-6 md:p-12 space-y-8 relative overflow-hidden">
          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider text-brand-primary">
                <span>Step {step} of 5</span>
                <span>
                  {step === 1 && "Service Selection"}
                  {step === 2 && "About your Child"}
                  {step === 3 && "Contact Details"}
                  {step === 4 && "Appointment preferences"}
                  {step === 5 && "Review & Submit"}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-primary rounded-full"
                  initial={{ width: "20%" }}
                  animate={{ width: `${step * 20}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            {isSubmitted ? (
              /* SUCCESS SCREEN */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <Check className="h-8 w-8 stroke-[3px]" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-surface-dark">
                    Booking Request Received!
                  </h2>
                  <p className="text-text-soft text-sm sm:text-base font-semibold max-w-md mx-auto leading-relaxed">
                    Thank you. Your intake information is securely logged. Our clinic coordinator will contact you at <span className="text-brand-primary">{formData.parentEmail}</span> within 24 business hours to set up your call.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStep(1);
                      setIsSubmitted(false);
                      setFormData({
                        service: "",
                        subService: "",
                        childName: "",
                        childDob: "",
                        childGender: "",
                        childSchool: "",
                        hasDiagnosis: "",
                        diagnosisDetails: "",
                        primaryConcern: "",
                        parentFirstName: "",
                        parentLastName: "",
                        parentEmail: "",
                        parentPhone: "",
                        parentPhoneCode: "+234",
                        relationship: "",
                        referral: "No",
                        referralSource: "",
                        hearAboutUs: "",
                        prefType: "No preference",
                        prefDays: [],
                        prefTime: "Flexible",
                        urgency: "Routine",
                        additionalNotes: "",
                        consent: false,
                      });
                      setErrors({});
                      setTouched({});
                    }}
                    className="bg-brand-soft border border-brand-muted hover:border-brand-primary text-brand-primary font-bold px-6 py-3 rounded-xl transition-all text-sm"
                  >
                    Book Another Consultation
                  </button>
                </div>
              </motion.div>
            ) : (
              /* MULTI STEP FORMS */
              <motion.form
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* STEP 1: SERVICE SELECTION */}
                {step === 1 && (
                  <div className="space-y-6 text-left">
                    <div className="space-y-1">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">What service are you looking for?</h2>
                      <p className="text-text-soft text-xs sm:text-sm font-semibold">Select a category to view specific subprograms.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {[
                        { title: "Therapy Programme", icon: Heart, desc: "ABA, speech, motor coordination, or cognitive therapies." },
                        { title: "Assessment", icon: ClipboardList, desc: "Milestones testing or Functional Behaviour Evaluations." },
                        { title: "Training", icon: GraduationCap, desc: "Workshops for parents, educators, or clinicians." },
                        { title: "General Enquiry / Not Sure", icon: HelpCircle, desc: "Undecided developmental discussions." },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.service === item.title;
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => {
                              handleChange("service", item.title);
                              handleChange("subService", "");
                            }}
                            className={`p-6 rounded-3xl border text-left flex flex-col justify-between transition-all h-44 shadow-sm ${
                              isSelected
                                ? "border-brand-primary bg-brand-soft ring-2 ring-brand-primary/20"
                                : "border-brand-soft hover:border-brand-muted bg-white"
                            }`}
                          >
                            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-text-soft">
                              <Icon className={`h-5 w-5 ${isSelected ? "text-brand-primary" : "text-text-soft"}`} />
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-bold text-sm text-surface-dark">{item.title}</h4>
                              <p className="text-[11px] text-text-soft leading-relaxed font-semibold">{item.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.service && touched.service && (
                      <p className="text-red-500 text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.service}
                      </p>
                    )}

                    {/* Subservice Selectors */}
                    {formData.service === "Therapy Programme" && (
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Select Therapy Type</label>
                        <select
                          value={formData.subService}
                          onChange={(e) => handleChange("subService", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-sm font-semibold text-text-soft focus:border-brand-primary outline-none"
                        >
                          <option value="">-- Choose a Therapy --</option>
                          <option value="aba">Applied Behaviour Analysis (ABA)</option>
                          <option value="speech">Speech & Language Therapy</option>
                          <option value="occupational">Occupational Therapy</option>
                          <option value="behavioural">Behavioural Intervention</option>
                          <option value="cognitive">Cognitive Development</option>
                        </select>
                      </div>
                    )}

                    {formData.service === "Assessment" && (
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Select Assessment Type</label>
                        <select
                          value={formData.subService}
                          onChange={(e) => handleChange("subService", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-sm font-semibold text-text-soft focus:border-brand-primary outline-none"
                        >
                          <option value="">-- Choose an Evaluation --</option>
                          <option value="developmental">Developmental Assessment</option>
                          <option value="behavioural">Behavioural Assessment</option>
                          <option value="communication">Communication Assessment</option>
                          <option value="functional">Functional Assessment</option>
                        </select>
                      </div>
                    )}

                    {formData.service === "Training" && (
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Select Workshop Focus</label>
                        <select
                          value={formData.subService}
                          onChange={(e) => handleChange("subService", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-sm font-semibold text-text-soft focus:border-brand-primary outline-none"
                        >
                          <option value="">-- Choose a focus --</option>
                          <option value="parents">Parent & Caregiver Training</option>
                          <option value="schools">School & Classroom Training</option>
                          <option value="professionals">Allied Professional Training</option>
                        </select>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 2: ABOUT THE CHILD */}
                {step === 2 && (
                  <div className="space-y-6 text-left">
                    <div className="space-y-1">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">Tell us about your child</h2>
                      <p className="text-text-soft text-xs sm:text-sm font-semibold">This helps our clinicians prepare for your intake call.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="floating-label-group">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.childName}
                          onChange={(e) => handleChange("childName", e.target.value)}
                          onBlur={() => handleBlur("childName")}
                          className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                            errors.childName && touched.childName ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                          }`}
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Child&apos;s First Name
                        </label>
                        {errors.childName && touched.childName && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.childName}</p>
                        )}
                      </div>

                      {/* DOB picker */}
                      <div className="floating-label-group">
                        <input
                          type="date"
                          placeholder=" "
                          value={formData.childDob}
                          onChange={(e) => handleChange("childDob", e.target.value)}
                          onBlur={() => handleBlur("childDob")}
                          className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                            errors.childDob && touched.childDob ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                          }`}
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Date of Birth
                        </label>
                        {errors.childDob && touched.childDob && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.childDob}</p>
                        )}
                      </div>

                      {/* Gender Selector */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Gender (optional)</label>
                        <div className="flex gap-2">
                          {["Boy", "Girl", "Prefer not to say"].map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleChange("childGender", g)}
                              className={`flex-1 py-3 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                                formData.childGender === g
                                  ? "border-brand-primary bg-brand-soft text-brand-primary"
                                  : "border-brand-muted hover:border-brand-primary/40 text-text-soft bg-white"
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* School Name */}
                      <div className="floating-label-group h-fit">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.childSchool}
                          onChange={(e) => handleChange("childSchool", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Current School / Setting (optional)
                        </label>
                      </div>
                    </div>

                    {/* Has Diagnosis */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Has your child received a formal diagnosis?</label>
                      <div className="flex gap-2">
                        {["Yes", "No", "In Progress"].map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => handleChange("hasDiagnosis", d)}
                            className={`flex-1 py-3 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                              formData.hasDiagnosis === d
                                ? "border-brand-primary bg-brand-soft text-brand-primary"
                                : "border-brand-muted hover:border-brand-primary/40 text-text-soft bg-white"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.hasDiagnosis === "Yes" && (
                      <div className="floating-label-group pt-2">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.diagnosisDetails}
                          onChange={(e) => handleChange("diagnosisDetails", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          If yes, what diagnosis?
                        </label>
                      </div>
                    )}

                    {/* Primary Concerns Textarea */}
                    <div className="floating-label-group pt-2">
                      <textarea
                        rows={4}
                        placeholder=" "
                        value={formData.primaryConcern}
                        onChange={(e) => handleChange("primaryConcern", e.target.value)}
                        onBlur={() => handleBlur("primaryConcern")}
                        className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all resize-none ${
                          errors.primaryConcern && touched.primaryConcern ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                        }`}
                      />
                      <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                        Describe your primary concerns in your own words (behaviours, language, motor difficulties, etc.)
                      </label>
                      {errors.primaryConcern && touched.primaryConcern && (
                        <p className="text-red-500 text-[10px] font-bold mt-1">{errors.primaryConcern}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT DETAILS */}
                {step === 3 && (
                  <div className="space-y-6 text-left">
                    <div className="space-y-1">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">How can we reach you?</h2>
                      <p className="text-text-soft text-xs sm:text-sm font-semibold">Please specify details for parent or legal guardian.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Parent First Name */}
                      <div className="floating-label-group">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.parentFirstName}
                          onChange={(e) => handleChange("parentFirstName", e.target.value)}
                          onBlur={() => handleBlur("parentFirstName")}
                          className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                            errors.parentFirstName && touched.parentFirstName ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                          }`}
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Parent/Guardian First Name
                        </label>
                        {errors.parentFirstName && touched.parentFirstName && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.parentFirstName}</p>
                        )}
                      </div>

                      {/* Parent Last Name */}
                      <div className="floating-label-group">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.parentLastName}
                          onChange={(e) => handleChange("parentLastName", e.target.value)}
                          onBlur={() => handleBlur("parentLastName")}
                          className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                            errors.parentLastName && touched.parentLastName ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                          }`}
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Parent/Guardian Last Name
                        </label>
                        {errors.parentLastName && touched.parentLastName && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.parentLastName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="floating-label-group">
                        <input
                          type="email"
                          placeholder=" "
                          value={formData.parentEmail}
                          onChange={(e) => handleChange("parentEmail", e.target.value)}
                          onBlur={() => handleBlur("parentEmail")}
                          className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                            errors.parentEmail && touched.parentEmail ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                          }`}
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Email Address
                        </label>
                        {errors.parentEmail && touched.parentEmail && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.parentEmail}</p>
                        )}
                      </div>

                      {/* Phone with NG prefix */}
                      <div className="flex gap-2">
                        <select
                          value={formData.parentPhoneCode}
                          onChange={(e) => handleChange("parentPhoneCode", e.target.value)}
                          className="w-20 bg-slate-50 border border-brand-muted rounded-2xl text-xs sm:text-sm font-bold text-center text-text-soft outline-none focus:border-brand-primary"
                        >
                          <option value="+234">+234 (NG)</option>
                          <option value="+1">+1 (US/CA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+27">+27 (ZA)</option>
                        </select>
                        <div className="floating-label-group flex-1">
                          <input
                            type="tel"
                            placeholder=" "
                            value={formData.parentPhone}
                            onChange={(e) => handleChange("parentPhone", e.target.value)}
                            onBlur={() => handleBlur("parentPhone")}
                            className={`w-full bg-white border px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all ${
                              errors.parentPhone && touched.parentPhone ? "border-red-500 ring-1 ring-red-500/20" : "border-brand-muted"
                            }`}
                          />
                          <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    {errors.parentPhone && touched.parentPhone && (
                      <p className="text-red-500 text-[10px] font-bold mt-1">{errors.parentPhone}</p>
                    )}

                    {/* Relationship and Hear About Us */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Relationship to Child</label>
                        <select
                          value={formData.relationship}
                          onChange={(e) => handleChange("relationship", e.target.value)}
                          onBlur={() => handleBlur("relationship")}
                          className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-sm font-semibold text-text-soft focus:border-brand-primary outline-none"
                        >
                          <option value="">-- Select relationship --</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Guardian">Guardian</option>
                          <option value="Grandparent">Grandparent</option>
                          <option value="Professional">Referring Professional</option>
                        </select>
                        {errors.relationship && touched.relationship && (
                          <p className="text-red-500 text-[10px] font-bold mt-1">{errors.relationship}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">How did you hear about us?</label>
                        <select
                          value={formData.hearAboutUs}
                          onChange={(e) => handleChange("hearAboutUs", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-sm font-semibold text-text-soft focus:border-brand-primary outline-none"
                        >
                          <option value="">-- Choose option --</option>
                          <option value="Doctor Referral">Doctor Referral</option>
                          <option value="School Referral">School Referral</option>
                          <option value="Friend/Family">Friend or Family</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Search Engine">Search Engine</option>
                        </select>
                      </div>
                    </div>

                    {/* Referral Toggle */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Do you have a referral?</label>
                      <div className="flex gap-2">
                        {["Yes", "No"].map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => handleChange("referral", r)}
                            className={`flex-1 py-3 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                              formData.referral === r
                                ? "border-brand-primary bg-brand-soft text-brand-primary"
                                : "border-brand-muted hover:border-brand-primary/40 text-text-soft bg-white"
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.referral === "Yes" && (
                      <div className="floating-label-group pt-2">
                        <input
                          type="text"
                          placeholder=" "
                          value={formData.referralSource}
                          onChange={(e) => handleChange("referralSource", e.target.value)}
                          className="w-full bg-white border border-brand-muted px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                        />
                        <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted transition-all pointer-events-none">
                          Referral Source / Clinician Name
                        </label>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 4: APPOINTMENT PREFERENCES */}
                {step === 4 && (
                  <div className="space-y-6 text-left">
                    <div className="space-y-1">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">Appointment preferences</h2>
                      <p className="text-text-soft text-xs sm:text-sm font-semibold">Help us find the most convenient block slots.</p>
                    </div>

                    {/* Preferred Type */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Preferred Appointment Type</label>
                      <div className="flex gap-2">
                        {["In-person", "Online", "No preference"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => handleChange("prefType", t)}
                            className={`flex-1 py-3.5 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                              formData.prefType === t
                                ? "border-brand-primary bg-brand-soft text-brand-primary"
                                : "border-brand-muted hover:border-brand-primary/40 text-text-soft bg-white"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Days */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Preferred Days (Select multiple)</label>
                      <div className="flex flex-wrap gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => {
                          const isSelected = formData.prefDays.includes(day);
                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => toggleDay(day)}
                              className={`px-4.5 py-2 text-xs sm:text-sm font-bold border rounded-full transition-all ${
                                isSelected
                                  ? "border-brand-teal bg-emerald-50 text-brand-teal"
                                  : "border-brand-muted hover:border-brand-teal/40 text-text-soft bg-white"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Preferred Time of Day</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { val: "Morning (9-12)", text: "Morning" },
                          { val: "Afternoon (12-4)", text: "Afternoon" },
                          { val: "Evening (4-6)", text: "Evening" },
                          { val: "Flexible", text: "Flexible" },
                        ].map((time) => (
                          <button
                            key={time.val}
                            type="button"
                            onClick={() => handleChange("prefTime", time.val)}
                            className={`py-3 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                              formData.prefTime === time.val
                                ? "border-brand-primary bg-brand-soft text-brand-primary"
                                : "border-brand-muted hover:border-brand-primary/40 text-text-soft bg-white"
                            }`}
                          >
                            {time.text}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-soft">Clinical Urgency</label>
                      <div className="flex gap-2">
                        {[
                          { val: "Routine", color: "hover:border-brand-primary border-brand-muted" },
                          { val: "Moderately Urgent", color: "hover:border-brand-accent border-brand-muted" },
                          { val: "Urgent", color: "hover:border-red-500 border-brand-muted" },
                        ].map((urg) => {
                          const isSelected = formData.urgency === urg.val;
                          let selectedColor = "";
                          if (isSelected) {
                            if (urg.val === "Routine") selectedColor = "border-brand-primary bg-blue-50 text-brand-primary";
                            if (urg.val === "Moderately Urgent") selectedColor = "border-brand-accent bg-amber-50 text-brand-accent";
                            if (urg.val === "Urgent") selectedColor = "border-red-500 bg-red-50 text-red-500";
                          }
                          return (
                            <button
                              key={urg.val}
                              type="button"
                              onClick={() => handleChange("urgency", urg.val)}
                              className={`flex-1 py-3.5 text-xs sm:text-sm font-bold border rounded-2xl transition-all ${
                                isSelected ? selectedColor : `${urg.color} text-text-soft bg-white`
                              }`}
                            >
                              {urg.val}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="floating-label-group pt-2">
                      <textarea
                        rows={3}
                        placeholder=" "
                        value={formData.additionalNotes}
                        onChange={(e) => handleChange("additionalNotes", e.target.value)}
                        className="w-full bg-white border border-brand-muted px-4 py-3.5 rounded-2xl text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all resize-none"
                      />
                      <label className="absolute left-4 top-3.5 text-xs sm:text-sm font-semibold text-text-muted pointer-events-none transition-all">
                        Any additional notes / accommodation concerns (optional)
                      </label>
                    </div>
                  </div>
                )}

                {/* STEP 5: CONSENT & SUBMIT */}
                {step === 5 && (
                  <div className="space-y-6 text-left">
                    <div className="space-y-1">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-dark">Review & Confirm</h2>
                      <p className="text-text-soft text-xs sm:text-sm font-semibold">Please review your milestone details before safe submission.</p>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-1">
                      <div className="bg-slate-50 border border-slate-100 p-5 rounded-3xl space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-brand-primary">Service Plan</span>
                        <p className="text-sm font-bold text-surface-dark">{formData.service || "Not specified"}</p>
                        {formData.subService && <p className="text-xs text-text-soft font-semibold capitalize">Type: {formData.subService}</p>}
                      </div>

                      <div className="bg-slate-50 border border-slate-100 p-5 rounded-3xl space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-brand-teal">Child Profile</span>
                        <p className="text-sm font-bold text-surface-dark">{formData.childName || "Not specified"}</p>
                        <p className="text-xs text-text-soft font-semibold">DOB: {formData.childDob || "Not specified"}</p>
                        {formData.childGender && <p className="text-xs text-text-soft font-semibold">Gender: {formData.childGender}</p>}
                      </div>

                      <div className="bg-slate-50 border border-slate-100 p-5 rounded-3xl col-span-1 sm:col-span-2 space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-brand-accent">Contact Details</span>
                        <p className="text-sm font-bold text-surface-dark">{formData.parentFirstName} {formData.parentLastName}</p>
                        <p className="text-xs text-text-soft font-semibold">{formData.parentPhoneCode} {formData.parentPhone} | {formData.parentEmail}</p>
                        <p className="text-xs text-text-soft font-semibold">Relationship: {formData.relationship}</p>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 p-5 rounded-3xl col-span-1 sm:col-span-2 space-y-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-600">Preferences</span>
                        <p className="text-xs text-text-soft font-semibold">Appointment Type: {formData.prefType}</p>
                        <p className="text-xs text-text-soft font-semibold">Days: {formData.prefDays.join(", ") || "No preference"}</p>
                        <p className="text-xs text-text-soft font-semibold">Time: {formData.prefTime}</p>
                        <p className="text-xs text-text-soft font-semibold">Urgency: {formData.urgency}</p>
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="space-y-3 pt-2">
                      <label className="flex gap-3 items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => handleChange("consent", e.target.checked)}
                          onBlur={() => handleBlur("consent")}
                          className="h-5 w-5 rounded border-brand-muted text-brand-primary focus:ring-brand-primary shrink-0 mt-0.5"
                        />
                        <span className="text-xs font-semibold text-text-soft leading-relaxed group-hover:text-surface-dark transition-colors">
                          I consent to The Learner Centered Consult Limited contacting me regarding this enquiry. I understand my data will be used in accordance with the <Link to="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-500 text-[10px] font-bold">{errors.consent}</p>
                      )}
                    </div>

                    {/* GDPR Notice */}
                    <p className="text-[10px] text-text-muted leading-relaxed border-t border-brand-soft pt-3">
                      GDPR Notice: We treat all shared developmental charts and medical history with absolute medical-grade encryption. Your records are never sold or shared with external data brokers.
                    </p>
                  </div>
                )}

                {/* FOOTER ACTIONS */}
                <div className="flex justify-between items-center pt-6 border-t border-brand-soft">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-1 bg-white hover:bg-slate-50 border border-brand-muted text-text-soft font-bold px-5 py-3 rounded-2xl transition-all text-sm"
                    >
                      <ArrowLeft className="h-4.5 w-4.5" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition-all text-sm"
                    >
                      Next Step
                      <ArrowRight className="h-4.5 w-4.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isPending}
                      className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 disabled:opacity-50 text-white font-black px-8 py-3.5 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-sm animate-pulse"
                    >
                      {isPending ? "Submitting Request..." : "Confirm Booking Request"}
                    </button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

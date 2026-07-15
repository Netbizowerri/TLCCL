import { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ClipboardList, ShieldAlert, Award, FileText } from "lucide-react";

export default function ReferralPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    profName: "",
    profTitle: "",
    profOrg: "",
    profEmail: "",
    profPhone: "",
    childName: "",
    childDob: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    reason: "",
    supportingDocs: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.profName) errs.profName = "Your name is required.";
    if (!formData.profTitle) errs.profTitle = "Professional title is required.";
    if (!formData.profOrg) errs.profOrg = "Organization is required.";
    if (!formData.profEmail) errs.profEmail = "Professional email is required.";
    if (!formData.childName) errs.childName = "Child's name is required.";
    if (!formData.reason) errs.reason = "Please state the clinical reasoning for this referral.";
    if (!formData.consent) errs.consent = "We require consent that the parents have approved this referral.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    });
  };

  return (
    <div className="bg-surface-alt min-h-[calc(100vh-80px)] py-12 md:py-20 flex justify-center items-center">
      <div className="w-full max-w-3xl px-4">
        <div className="bg-white rounded-4xl border border-brand-soft shadow-xl p-6 md:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <ClipboardList className="h-10 w-10 text-brand-primary mx-auto" />
            <h1 className="font-display text-2xl sm:text-3xl font-black text-surface-dark leading-tight">
              Professional Referral Form
            </h1>
            <p className="text-text-soft text-xs sm:text-sm font-semibold">
              For pediatricians, clinical psychologists, speech-language therapists, and school administrators.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="font-display text-xl font-bold text-surface-dark">Referral Securely Lodged</h2>
              <p className="text-text-soft text-sm font-semibold max-w-md mx-auto">
                Thank you for your referral. Our clinical intake coordinator will initiate contact with the parent within 12 business hours. We will send a confirmation summary to <span className="text-brand-primary font-bold">{formData.profEmail}</span>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      profName: "",
                      profTitle: "",
                      profOrg: "",
                      profEmail: "",
                      profPhone: "",
                      childName: "",
                      childDob: "",
                      parentName: "",
                      parentEmail: "",
                      parentPhone: "",
                      reason: "",
                      supportingDocs: "",
                      consent: false,
                    });
                  }}
                  className="bg-brand-soft text-brand-primary font-bold px-6 py-2.5 rounded-xl text-sm"
                >
                  Submit Another Referral
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* SECTION A: REFERRING PROFESSIONAL */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-brand-soft pb-2">
                  <Award className="h-4.5 w-4.5 text-brand-teal" />
                  <h3 className="font-display text-base font-bold text-surface-dark">1. Referring Professional Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Full Name</label>
                    <input
                      type="text"
                      value={formData.profName}
                      onChange={(e) => setFormData({ ...formData, profName: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                    {errors.profName && <p className="text-red-500 text-[10px] font-bold">{errors.profName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Professional Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Pediatrician, Lead Teacher"
                      value={formData.profTitle}
                      onChange={(e) => setFormData({ ...formData, profTitle: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                    {errors.profTitle && <p className="text-red-500 text-[10px] font-bold">{errors.profTitle}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Organization / Clinic / School</label>
                    <input
                      type="text"
                      value={formData.profOrg}
                      onChange={(e) => setFormData({ ...formData, profOrg: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                    {errors.profOrg && <p className="text-red-500 text-[10px] font-bold">{errors.profOrg}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Work Email Address</label>
                    <input
                      type="email"
                      value={formData.profEmail}
                      onChange={(e) => setFormData({ ...formData, profEmail: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                    {errors.profEmail && <p className="text-red-500 text-[10px] font-bold">{errors.profEmail}</p>}
                  </div>
                </div>
              </div>

              {/* SECTION B: CLIENT & FAMILY */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-b border-brand-soft pb-2">
                  <FileText className="h-4.5 w-4.5 text-brand-teal" />
                  <h3 className="font-display text-base font-bold text-surface-dark">2. Child & Family Profile</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Child&apos;s Full Name</label>
                    <input
                      type="text"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                    {errors.childName && <p className="text-red-500 text-[10px] font-bold">{errors.childName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Child&apos;s Date of Birth (approx if unknown)</label>
                    <input
                      type="date"
                      value={formData.childDob}
                      onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Primary Parent / Guardian Name</label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Parent Email Address</label>
                    <input
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION C: CLINICAL DETAILS */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 border-b border-brand-soft pb-2">
                  <ShieldAlert className="h-4.5 w-4.5 text-brand-accent" />
                  <h3 className="font-display text-base font-bold text-surface-dark">3. Clinical Referral Reason</h3>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-soft">Clinical Reason & Observations</label>
                  <textarea
                    rows={4}
                    placeholder="Specify delay markers, communication limits, or behavioral incidents that warrant clinical attention..."
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full bg-slate-50 border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:bg-white focus:border-brand-primary outline-none resize-none"
                  />
                  {errors.reason && <p className="text-red-500 text-[10px] font-bold">{errors.reason}</p>}
                </div>
              </div>

              {/* CONSENT AND SUBMIT */}
              <div className="space-y-4 pt-4 border-t border-brand-soft">
                <label className="flex gap-3 items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="h-5 w-5 rounded border-brand-muted text-brand-primary focus:ring-brand-primary shrink-0 mt-0.5"
                  />
                  <span className="text-xs font-semibold text-text-soft leading-relaxed group-hover:text-surface-dark transition-colors">
                    I confirm that the parents/guardians are aware of this referral and have authorized me to share their contact details and developmental parameters with The Learner Centered Consult (LCC).
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-[10px] font-bold">{errors.consent}</p>}

                <p className="text-[10px] text-text-muted leading-relaxed">
                  Encryption notice: Referral submissions are protected with full SSL medical-grade compliance. All records are securely handled under our <Link to="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-sm animate-pulse"
                  >
                    {isPending ? "Submitting Clinical Referral..." : "Submit Clinical Referral Form"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
import { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Check, MessageSquare, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name) errs.name = "Your name is required.";
    if (!formData.email) errs.email = "Your email is required.";
    if (!formData.message) errs.message = "Please write a brief message describing your query.";
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
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-white py-20 md:py-28 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1 bg-brand-muted text-brand-primary px-4.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Direct Clinic Access
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-surface-dark max-w-4xl mx-auto leading-tight"
          >
            Contact <span className="text-brand-primary">Us</span>
          </motion.h1>
          <motion.p
            className="text-text-soft text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Reach our administrative team directly to ask questions, schedule clinical visits, or request progress checklists.
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-dark leading-tight">
              Get in Touch with Our Specialists
            </h2>
            <p className="text-text-soft text-sm sm:text-base leading-relaxed font-semibold">
              Whether you are a parent exploring therapies or a pediatrician organizing a referral, we are here to support you at every milestone.
            </p>

            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-surface-dark">Clinic Location</h4>
                  <p className="text-text-soft text-xs sm:text-sm font-semibold leading-relaxed">
                    12 Jide Oki Street, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-surface-dark">Phone Lines</h4>
                  <a href="tel:+2348123456789" className="text-brand-primary text-xs sm:text-sm font-bold block hover:underline">
                    +234 812 345 6789
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-surface-dark">Clinic Email</h4>
                  <a href="mailto:info@tlcconsult.com" className="text-brand-primary text-xs sm:text-sm font-bold block hover:underline">
                    info@tlcconsult.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Submission Form */}
          <div className="lg:col-span-7 bg-surface-alt border border-brand-soft/75 rounded-4xl p-8 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-dark">Message Sent Safely</h3>
                <p className="text-text-soft text-xs sm:text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                  Thank you. Your inquiry is securely delivered to our coordinators. We will reply to <span className="text-brand-primary font-bold">{formData.email}</span> within 24 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="bg-brand-soft text-brand-primary font-bold px-5 py-2 rounded-xl text-xs sm:text-sm"
                  >
                    Submit Another Query
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="flex gap-2.5 items-center pb-2 border-b border-brand-soft">
                  <MessageSquare className="h-5 w-5 text-brand-teal" />
                  <h3 className="font-display font-bold text-base text-surface-dark">Submit a Direct Message</h3>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-soft">Your Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-soft">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-soft">Phone Number (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-soft">Subject (optional)</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-brand-muted px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-soft">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly state your concerns, child's age, or session schedules inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-brand-muted px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-text-base focus:border-brand-primary outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-black py-3.5 rounded-2xl shadow-xl shadow-brand-primary/10 transition-all text-xs sm:text-sm"
                  >
                    {isPending ? "Delivering Message..." : "Submit Direct Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Embed or Instructions Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface-alt rounded-4xl my-12 border border-brand-soft">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-display text-xl font-bold text-surface-dark">Visiting the Clinic?</h3>
          <p className="text-text-soft text-xs sm:text-sm font-semibold">We are situated right in Victoria Island, easily accessible from Lekki Phase 1, Ikoyi, and Lagos Mainland. Security and shaded parking are fully provided.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-surface-dark">Coordinate an Assessment Slot</h2>
        <p className="text-text-soft text-base max-w-xl mx-auto font-semibold">
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
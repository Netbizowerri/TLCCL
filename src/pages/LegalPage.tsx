import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Accessibility, Eye } from "lucide-react";

export default function LegalPage() {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    if (pathname.includes("privacy")) setActiveTab("privacy");
    else if (pathname.includes("terms")) setActiveTab("terms");
    else if (pathname.includes("accessibility")) setActiveTab("accessibility");
    else if (pathname.includes("cookie")) setActiveTab("cookie");
  }, [pathname]);

  return (
    <div className="bg-white min-h-[calc(100vh-80px)] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side Menu Tab Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-4">
              <div className="space-y-1.5 text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-primary">Administrative Policies</span>
                <h1 className="font-display text-2xl font-bold text-surface-dark">Legal & Compliance</h1>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {[
                  { id: "privacy", label: "Privacy Policy", icon: ShieldCheck, path: "/privacy-policy" },
                  { id: "terms", label: "Terms of Service", icon: Scale, path: "/terms-of-service" },
                  { id: "accessibility", label: "Accessibility Statement", icon: Accessibility, path: "/accessibility" },
                  { id: "cookie", label: "Cookie Policy", icon: Eye, path: "/cookie-policy" },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <Link
                      key={tab.id}
                      to={tab.path}
                      className={`flex gap-3 items-center px-5 py-3.5 rounded-2xl text-sm font-bold border transition-all ${
                        isActive
                          ? "border-brand-primary bg-brand-soft text-brand-primary"
                          : "border-brand-soft hover:border-brand-primary/40 text-text-soft bg-white"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Policy Text Column */}
          <div className="lg:col-span-8 text-left space-y-8 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-4xl">
            {activeTab === "privacy" && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-sm leading-relaxed text-text-soft font-semibold"
              >
                <h2 className="font-display text-2xl font-black text-surface-dark border-b border-brand-soft pb-3">Privacy Policy</h2>
                <p className="text-[11px] text-text-muted -mt-2">Last Updated: February 2026</p>

                <p>
                  At The Learner Centered Consult Limited, we are committed to safeguarding the privacy and sensitive medical records of the children and families we serve. This policy outlines how we capture, encrypt, and handle personal and diagnostic data.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">1. Data Capture Metrics</h3>
                <p>
                  We capture demographic and clinical parameters including names, dates of birth, diagnostic histories, therapist notes, parent emails, and preferred schedules through our intake, referral, and contact forms.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">2. Encryption Standards</h3>
                <p>
                  All shared milestone assessments, pediatrician report cards, and behavioral files are protected with full clinical-grade SSL encryption and handled securely within our medical records storage database.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">3. Data Broker Policies</h3>
                <p>
                  We never share, trade, rent, or sell your family&apos;s personal or health records to data brokers, advertising platforms, or third-party analytical companies under any circumstances.
                </p>
              </motion.div>
            )}

            {activeTab === "terms" && (
              <motion.div
                key="terms"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-sm leading-relaxed text-text-soft font-semibold"
              >
                <h2 className="font-display text-2xl font-black text-surface-dark border-b border-brand-soft pb-3">Terms of Service</h2>
                <p className="text-[11px] text-text-muted -mt-2">Last Updated: February 2026</p>

                <p>
                  By accessing the services, consulting tools, or scheduling portals offered by The Learner Centered Consult Limited on this web application, you agree to comply with the following operational terms.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">1. Clinical Intake Terms</h3>
                <p>
                  All scheduled consultation blocks represent reservation windows. Intake calls are informational and do not represent a formal medical diagnosis or psychiatric recommendation until direct clinical assessments are performed.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">2. Cancellation Policy</h3>
                <p>
                  We request that parents and schools provide at least 24 hours of notice before cancelling or reschedule clinical assessment blocks or therapy sessions.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">3. Educational Materials Usage</h3>
                <p>
                  Our downloadable parent resources, printable checklists, and lesson worksheets are intended for individual caregiver or school classroom coaching use only. Commercial redistribution is prohibited.
                </p>
              </motion.div>
            )}

            {activeTab === "accessibility" && (
              <motion.div
                key="accessibility"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-sm leading-relaxed text-text-soft font-semibold"
              >
                <h2 className="font-display text-2xl font-black text-surface-dark border-b border-brand-soft pb-3">Accessibility Statement</h2>
                <p className="text-[11px] text-text-muted -mt-2">Last Updated: February 2026</p>

                <p>
                  The Learner Centered Consult Limited is dedicated to ensuring digital accessibility for neurodivergent individuals, parents with physical limitations, and clinical practitioners. We are continually improving our user interface to align with WCAG 2.1 AA standards.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">1. Standard Conformance</h3>
                <p>
                  This web application utilizing semantic HTML markers, keyboard focus outlines, high-contrast text ratios, and custom ARIA labels on all dynamic buttons and form sub-selectors to facilitate screen-reader navigation.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">2. Assistance & Feedback</h3>
                <p>
                  If you experience difficulties reading text sizes, inputting details inside the multi-step booking form, or navigating pages, please reach out to our administrative team at <a href="mailto:accessibility@tlcconsult.com" className="text-brand-primary hover:underline">accessibility@tlcconsult.com</a> for immediate personal assistance.
                </p>
              </motion.div>
            )}

            {activeTab === "cookie" && (
              <motion.div
                key="cookie"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-sm leading-relaxed text-text-soft font-semibold"
              >
                <h2 className="font-display text-2xl font-black text-surface-dark border-b border-brand-soft pb-3">Cookie Policy</h2>
                <p className="text-[11px] text-text-muted -mt-2">Last Updated: February 2026</p>

                <p>
                  We utilize subtle first-party cookies and session variables to provide standard operational structures across our booking form and page navigations.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">1. What are cookies?</h3>
                <p>
                  Cookies are minor text files stored on your computer or phone device by your web browser, allowing sites to remember page preferences or form step caches.
                </p>

                <h3 className="font-display text-lg font-bold text-surface-dark">2. How we use cookies</h3>
                <p>
                  Our cookies serve operational purposes only: remembering search selections on the resources hub, holding input data when navigating between step blocks on our booking pages, and storing custom theme settings.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

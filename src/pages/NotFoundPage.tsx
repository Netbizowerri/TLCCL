import { Link } from "react-router-dom";
import { Compass, HelpCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-surface-alt min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-12 px-4 text-center">
      <div className="max-w-md w-full bg-white rounded-4xl border border-brand-soft shadow-xl p-8 md:p-12 space-y-8 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft to-brand-muted filter blur-3xl opacity-50 -z-10 animate-pulse" />

        <div className="space-y-4">
          <div className="h-16 w-16 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center mx-auto shadow-inner">
            <Compass className="h-8 w-8 text-brand-teal animate-spin duration-3000" />
          </div>
          <h1 className="font-display text-3xl font-black text-surface-dark leading-tight">
            Lost Your Way?
          </h1>
          <p className="text-text-soft text-sm sm:text-base font-semibold leading-relaxed">
            The milestone path or page you are looking for has taken a detour. Let&apos;s guide you back to familiar, expert hands.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            to="/"
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3.5 rounded-2xl shadow-md transition-all text-sm block"
          >
            Back to Home
          </Link>
          <Link
            to="/book"
            className="w-full bg-brand-soft border border-brand-muted hover:border-brand-primary text-brand-primary font-bold py-3.5 rounded-2xl transition-all text-sm block"
          >
            Book Free Milestone Consultation
          </Link>
        </div>

        <div className="pt-4 border-t border-brand-soft flex items-center justify-center gap-1 text-[11px] font-bold text-text-muted">
          <HelpCircle className="h-4 w-4 text-brand-teal" />
          <span>Need help? info@tlcconsult.com</span>
        </div>
      </div>
    </div>
  );
}

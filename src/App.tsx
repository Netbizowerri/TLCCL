import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/ServicesOverview";
import TherapyProgrammesOverview from "./pages/TherapyProgrammesOverview";
import TherapyIndividualPage from "./pages/TherapyIndividualPage";
import AssessmentsOverview from "./pages/AssessmentsOverview";
import AssessmentIndividualPage from "./pages/AssessmentIndividualPage";
import TrainingOverview from "./pages/TrainingOverview";
import TrainingIndividualPage from "./pages/TrainingIndividualPage";
import ConditionsOverview from "./pages/ConditionsOverview";
import ConditionIndividualPage from "./pages/ConditionIndividualPage";
import BookingPage from "./pages/BookingPage";
import ReferralPage from "./pages/ReferralPage";


import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/therapy-programmes" element={<TherapyProgrammesOverview />} />
            <Route path="/services/therapy-programmes/:id" element={<TherapyIndividualPage />} />
            <Route path="/services/assessments" element={<AssessmentsOverview />} />
            <Route path="/services/assessments/:id" element={<AssessmentIndividualPage />} />
            <Route path="/services/training" element={<TrainingOverview />} />
            <Route path="/services/training/:id" element={<TrainingIndividualPage />} />
            <Route path="/conditions" element={<ConditionsOverview />} />
            <Route path="/conditions/:id" element={<ConditionIndividualPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/referral" element={<ReferralPage />} />


            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal tabbed policies */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-of-service" element={<LegalPage />} />
            <Route path="/accessibility" element={<LegalPage />} />
            <Route path="/cookie-policy" element={<LegalPage />} />

            {/* fallback route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </Router>
  );
}

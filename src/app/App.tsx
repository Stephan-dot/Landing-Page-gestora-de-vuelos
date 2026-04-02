import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { InformationSection } from "./components/InformationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <DestinationsSection />
        <InformationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

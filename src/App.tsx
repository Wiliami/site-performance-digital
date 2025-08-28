import { Title } from "./components/Title"
import { Navbar } from "./components/landingpage/Navbar";
import { HeroSection } from "./components/landingpage/HeroSection";
import { BenefitsSection } from "./components/landingpage/BenefitsSection";
import { StorytellingSection } from "./components/landingpage/StoryTelling";
import { MarketingFlowDemo } from "./components/landingpage/MarketingFlowDemo";
import { TestimonialsSection } from "./components/landingpage/TestimonialsSection";
import { CTASection } from "./components/landingpage/CTASection";
import { ContactFormSection } from "./components/landingpage/ContactFormSection";
import { Footer } from "./components/landingpage/Footer";


import "./App.css";

function App() {  
  return (
    <>
      <Title />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <StorytellingSection />
      <MarketingFlowDemo />
      <TestimonialsSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default App;

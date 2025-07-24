import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Cta } from "./components/Cta";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
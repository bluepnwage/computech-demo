import { Hero } from "../components/Hero";
import { DigitalSection } from "../components/DigitalSection";
import { Solutions } from "../components/Solutions";
import { Stories } from "../components/Stories";
import { TechCenter } from "../components/TechCenter";
import { Engage } from "../components/Engage";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DigitalSection />
        <Solutions />
        <Stories />
        <TechCenter />
        <Engage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

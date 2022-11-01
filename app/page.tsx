import Image from "next/image";
import { Hero } from "../components/Hero";
import { DigitalSection } from "../components/DigitalSection";
import { Solutions } from "../components/Solutions";
import { Stories } from "../components/Stories";
import { TechCenter } from "../components/TechCenter";
import { Engage } from "../components/Engage";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <DigitalSection />
      <Solutions />
      <Stories />
      <TechCenter />
      <Engage />
      <Contact />
    </>
  );
}

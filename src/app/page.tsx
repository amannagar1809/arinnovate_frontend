import Image from "next/image";
import Header from "../componenets/Header";
import HeroSection from "../componenets/HeroSection";
import ServicesSection from "@/componenets/ServicesSection";
import AboutSection from "@/componenets/AboutSection";
import PortfolioSection from "@/componenets/PortfolioSection";
import ContactSection from "@/componenets/ContactSection";
export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}

'use client';

import Header from '../componenets/Header';
import HeroSection from '../componenets/HeroSection';
import ServicesSection from '../componenets/ServicesSection';
import AboutSection from '../componenets/AboutSection';
import CareersSection from '../componenets/CareersSection';
import FooterSection from '../componenets/FooterSection';
import IndustriesSection from '../componenets/IndustriesSection';
import ContactSection from '../componenets/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <AboutSection />
        <CareersSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

// src/app/page.js
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Experience />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import MethodologySection from '@/components/sections/MethodologySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import BadgesSection from '@/components/sections/BadgesSection';
import ContactSection from '@/components/sections/ContactSection';
import FadeInSection from '@/components/animations/FadeInSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="container mx-auto flex-grow px-6">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <ExperienceSection />
        </FadeInSection>
        <FadeInSection>
          <MethodologySection />
        </FadeInSection>
        <FadeInSection>
          <ProjectsSection />
        </FadeInSection>
        <FadeInSection>
          <BadgesSection />
        </FadeInSection>
        <FadeInSection>
          <CertificationsSection />
        </FadeInSection>
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}

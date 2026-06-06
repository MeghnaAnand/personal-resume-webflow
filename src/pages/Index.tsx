import HeroSection from "@/components/portfolio/HeroSection";
import RecognitionSection from "@/components/portfolio/RecognitionSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import VolunteeringSection from "@/components/portfolio/VolunteeringSection";
import LanguagesSection from "@/components/portfolio/LanguagesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        <HeroSection />
        <div className="space-y-0">
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <RecognitionSection />
          <EducationSection />
          <VolunteeringSection />
          <LanguagesSection />
        </div>
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

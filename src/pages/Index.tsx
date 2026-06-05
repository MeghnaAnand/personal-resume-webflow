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
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProjectsSection />
          <RecognitionSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <VolunteeringSection />
          <div className="lg:col-span-2">
            <LanguagesSection />
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Index;

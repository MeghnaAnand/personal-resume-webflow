import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import VolunteeringSection from "@/components/portfolio/VolunteeringSection";
import LanguagesSection from "@/components/portfolio/LanguagesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection />
      <div className="flex-1">
        <div className="max-w-[1400px] mx-auto px-6 py-8 grid grid-cols-12 gap-8">
          {/* Left column */}
          <div className="col-span-7 space-y-8">
            <ExperienceSection />
            <SkillsSection />
          </div>
          {/* Right column */}
          <div className="col-span-5 space-y-8">
            <ProjectsSection />
            <EducationSection />
            <VolunteeringSection />
            <LanguagesSection />
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Index;

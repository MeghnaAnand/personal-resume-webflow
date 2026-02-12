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
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      <HeroSection />
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full max-w-[1400px] mx-auto px-3 py-2 grid grid-cols-12 gap-3">
          {/* Left column */}
          <div className="col-span-7 overflow-y-auto pr-2 space-y-2 scrollbar-thin">
            <ExperienceSection />
            <SkillsSection />
          </div>
          {/* Right column */}
          <div className="col-span-5 overflow-y-auto pl-2 space-y-2 scrollbar-thin">
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

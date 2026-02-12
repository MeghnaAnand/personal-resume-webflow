import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import VolunteeringSection from "@/components/portfolio/VolunteeringSection";
import LanguagesSection from "@/components/portfolio/LanguagesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Skills Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-6">
              <SkillsSection />
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-0">
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <VolunteeringSection />
            <LanguagesSection />
          </div>
        </div>
      </div>
      <ContactSection />
      <footer className="py-6 text-center text-muted-foreground text-sm bg-muted/30">
        <p>Made with ❤️ by Meghna Anand · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;

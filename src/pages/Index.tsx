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
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <VolunteeringSection />
      <LanguagesSection />
      <ContactSection />
      <footer className="py-6 text-center text-muted-foreground text-sm bg-muted/30">
        <p>Made with ❤️ by Meghna Anand · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;

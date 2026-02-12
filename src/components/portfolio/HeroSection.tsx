import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Meghna Anand ✨</h1>
          <p className="text-sm opacity-90">
            QA Engineer · AI Prompt Designer · Problem Solver 🚀
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs opacity-90">
          <MapPin className="w-3 h-3" />
          Stockholm, Sweden 🇸🇪
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

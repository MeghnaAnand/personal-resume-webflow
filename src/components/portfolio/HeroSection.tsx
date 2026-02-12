import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-accent/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary)/0.3),transparent_50%)]" />
      <div className="relative max-w-4xl mx-auto text-primary-foreground">
        <p className="text-lg mb-3 opacity-80 tracking-widest uppercase">Hello, I'm</p>
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Meghna Anand ✨</h1>
        <p className="text-2xl mb-6 opacity-90 font-light">
          QA Engineer · AI Prompt Designer · Problem Solver 🚀
        </p>
        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
          Engineer with 4 years building reliable test processes across enterprise and AI systems. 
          I catch issues early, automate smartly, and believe quality is a team effort 🤝
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-white/20 text-primary-foreground border-white/30 text-sm px-4 py-2 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Stockholm, Sweden 🇸🇪
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:meghnaa.anand@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email Me 💌
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10" asChild>
            <a href="tel:+46731449235">
              <Phone className="w-4 h-4 mr-2" />
              Call Me 📞
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10" asChild>
            <a href="https://www.linkedin.com/in/meghnaa-anand/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn 🔗
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

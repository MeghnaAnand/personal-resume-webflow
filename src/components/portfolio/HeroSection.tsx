import { MapPin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <section className="bg-primary text-primary-foreground px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Meghna Anand ✨</h1>
          <p className="text-sm opacity-90">
            QA Engineer · AI Prompt Designer · Problem Solver 🚀
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs opacity-90">
            <MapPin className="w-3 h-3" />
            Stockholm, Sweden 🇸🇪
          </span>
          <button
            onClick={() => setDark(!dark)}
            className="p-1.5 rounded-md bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

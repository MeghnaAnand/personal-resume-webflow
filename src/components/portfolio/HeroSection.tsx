import { MapPin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <section className="bg-primary text-primary-foreground px-6 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meghna Anand ✨</h1>
          <p className="text-base opacity-90 mt-1">
            QA Engineer · AI Prompt Designer · Problem Solver 🚀
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm opacity-90">
            <MapPin className="w-4 h-4" />
            Stockholm, Sweden 🇸🇪
          </span>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

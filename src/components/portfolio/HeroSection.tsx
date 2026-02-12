import { Mail, Phone, Linkedin, Github, MapPin, Moon, Sun, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <section className="relative pt-12 pb-20 px-6">
      {/* Dark mode toggle */}
      <div className="absolute top-6 right-8">
        <button
          onClick={() => setDark(!dark)}
          className="p-2.5 rounded-full bg-card border border-border hover:bg-muted transition-colors shadow-sm"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="w-4 h-4 text-foreground" /> : <Moon className="w-4 h-4 text-foreground" />}
        </button>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground mb-10 shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5" />
          Stockholm, Sweden 🇸🇪
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground"
        >
          Meghna Anand 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Engineer with 4+ years building reliable test processes across enterprise and AI systems. I catch issues early, automate smartly, and believe quality is a team effort.
        </motion.p>

        {/* Who am I card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm max-w-md mx-auto mb-12"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">What I Do</p>
          <p className="text-xl font-semibold text-foreground">QA Engineer · AI Prompt Designer</p>
          <p className="text-muted-foreground mt-2 text-sm">…turning quality into a competitive advantage 🚀</p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href="mailto:meghnaa.anand@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a href="tel:+46731449235" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-sm">
            <Phone className="w-4 h-4" />
            (+46) 731 449 235
          </a>
          <a href="https://www.linkedin.com/in/meghnaa-anand/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-sm">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a href="https://github.com/MeghnaAnand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-sm">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

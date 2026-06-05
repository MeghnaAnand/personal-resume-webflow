import { Mail, Phone, Linkedin, Github, MapPin, Moon, Sun, Download, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6">
      {/* Dark mode toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
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
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">Meghna Anand</span> <span className="text-foreground">👋</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto"
        >
          I build automations and AI workflows that replace repetitive work — backed by a QA engineer's instinct for what breaks. n8n certified, NVIDIA Inception selected, and shipping real AI products.
        </motion.p>

        {/* Who am I card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass aurora-ring rounded-2xl p-6 sm:p-8 max-w-md mx-auto mb-8"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">What I Do</p>
          <p className="text-xl font-semibold text-foreground">AI Automation · Prompt Engineering · AI Quality</p>
          <p className="text-muted-foreground mt-2 text-sm">n8n · Claude Code · Gemini CLI · PySpark · Databricks 🤖</p>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-12"
        >
          {[
            { num: "4+", label: "Years in tech" },
            { num: "2nd", label: "SheBuilds prize" },
            { num: "70K+", label: "Records automated" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl py-3 px-2">
              <p className="text-lg font-bold text-gradient">{s.num}</p>
              <p className="text-[10px] tracking-wide uppercase text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
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
          <a href="https://substack.com/@hitlv0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-sm">
            <BookOpen className="w-4 h-4" />
            Substack
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

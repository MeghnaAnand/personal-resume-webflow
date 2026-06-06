import { Mail, Linkedin, Github, Download, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3 section-label">
          <span className="w-8 h-px bg-border" />
          Stockholm, Sweden
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground">
          Meghna <span className="font-medium">Anand</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
          QA Engineer & AI Quality Specialist. I build automations and AI workflows
          that replace repetitive work — backed by a QA engineer&apos;s instinct for
          what breaks. n8n certified, NVIDIA Inception selected, and shipping real
          AI products.
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 pt-2">
          <a
            href="mailto:meghnaa.anand@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/meghnaa-anand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/MeghnaAnand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://substack.com/@hitlv0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Substack
          </a>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* At-a-glance strip */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-border pt-10 mt-4">
          <div>
            <dt className="section-label mb-2">Experience</dt>
            <dd className="text-lg font-medium text-foreground">4+ years</dd>
          </div>
          <div>
            <dt className="section-label mb-2">Based in</dt>
            <dd className="text-lg font-medium text-foreground">Stockholm</dd>
          </div>
          <div>
            <dt className="section-label mb-2">Recognition</dt>
            <dd className="text-lg font-medium text-foreground">SheBuilds · NVIDIA</dd>
          </div>
          <div>
            <dt className="section-label mb-2">Open to</dt>
            <dd className="text-lg font-medium text-foreground">QA & AI Quality roles</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground pt-2">
          <a href="tel:+46731449235" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (+46) 731 449 235
          </a>
          <a href="mailto:meghnaa.anand@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-3.5 h-3.5" />
            meghnaa.anand@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

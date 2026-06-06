import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border mt-20 md:mt-28 pt-12 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4">
          <p className="section-label">Get in touch</p>
        </div>
        <div className="md:col-span-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Let&apos;s <span className="font-medium">connect</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Open to QA Engineer, AI Quality, and AI Prompt Designer roles in
            Stockholm. Reach out — I&apos;d love to hear what you&apos;re building.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
            <a
              href="mailto:meghnaa.anand@gmail.com"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-8 hover:decoration-foreground transition-colors"
            >
              meghnaa.anand@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/meghnaa-anand/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-8 hover:decoration-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MeghnaAnand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-8 hover:decoration-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://substack.com/@hitlv0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-8 hover:decoration-foreground transition-colors"
            >
              Substack
            </a>
          </div>
          <p className="pt-10 text-xs text-muted-foreground">
            Meghna Anand · Stockholm · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default ContactSection;

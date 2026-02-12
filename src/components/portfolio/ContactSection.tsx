import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl font-bold text-foreground mb-4"
        >
          Let's connect! 🤝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-muted-foreground mb-10 text-lg"
        >
          Got a project idea or just want to say hi? I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:meghnaa.anand@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/meghnaa-anand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-card border border-border text-foreground font-medium hover:bg-muted transition-colors shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 text-sm text-muted-foreground"
        >
          Made with ❤️ by Meghna Anand · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;

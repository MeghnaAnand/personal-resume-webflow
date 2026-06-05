import { motion } from "framer-motion";
import { Award, Sparkles, Cloud, GraduationCap, Trophy, Zap } from "lucide-react";

const recognitions = [
  {
    icon: Sparkles,
    title: "NVIDIA Inception Program",
    desc: "Selected as an early-stage AI-focused startup building applied AI products.",
  },
  {
    icon: Cloud,
    title: "AWS Activate",
    desc: "Accepted for cloud infrastructure support powering AI product development.",
  },
  {
    icon: Trophy,
    title: "2nd Prize · SheBuilds Buildathon",
    desc: "AutomationMind — gamified automation learning platform shipped end-to-end during the hackathon.",
  },
  {
    icon: Zap,
    title: "n8n Certified · Level 1 & 2",
    desc: "Applied directly to live personal automation projects and workflows.",
  },
  {
    icon: GraduationCap,
    title: "Flvent AI Fluency Program",
    desc: "Structured training in practical AI adoption, workflow integration, and responsible AI use.",
  },
];

const RecognitionSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Recognition & Programs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {recognitions.map((r, index) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/40 transition-colors flex items-start gap-3"
              >
                <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"
        >
          <Award className="w-3.5 h-3.5" />
          Builder's mindset · QA instinct · AI curiosity
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionSection;

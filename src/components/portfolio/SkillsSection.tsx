import { motion } from "framer-motion";
import { Bot, Database, FlaskConical, Wrench, Lightbulb, LucideIcon } from "lucide-react";

const skillCategories: { title: string; icon: LucideIcon; skills: string[] }[] = [
  { title: "AI & Automation", icon: Bot, skills: ["n8n (L1 & L2 certified)", "Flvent AI Fluency", "Automated workflows", "LLM evaluation", "Prompt engineering", "Rapid prototyping"] },
  { title: "Data & APIs", icon: Database, skills: ["Python", "SQL", "PySpark", "Databricks", "JSON", "Data validation pipelines"] },
  { title: "Testing & Validation", icon: FlaskConical, skills: ["AI workflow testing", "Integration & E2E testing", "Selenium", "Jira", "Xray", "Asana"] },
  { title: "Dev & Tooling", icon: Wrench, skills: ["GitLab CI/CD", "JavaScript", "Claude Code", "Gemini CLI", "Lovable", "Webflow", "Figma"] },
  { title: "Soft Skills", icon: Lightbulb, skills: ["Cross-functional collaboration", "Demos & workshops", "Stakeholder communication", "Fast learner", "Curious", "Pragmatic"] },
];

const SkillsSection = () => {
  return (
    <section className="py-6 px-0">
      <div className="w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-6"
        >
          Key Skills
        </motion.p>

        <div className="space-y-3">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-soft rounded-lg px-5 py-3"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.75} />
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{cat.title}</h3>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {cat.skills.join("  ·  ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

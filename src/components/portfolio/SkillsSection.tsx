import { motion } from "framer-motion";

const skillCategories = [
  { title: "AI & Automation", emoji: "🤖", skills: ["n8n (L1 & L2 certified)", "Flvent AI Fluency", "Automated workflows", "LLM evaluation", "Prompt engineering", "Rapid prototyping"] },
  { title: "Data & APIs", emoji: "📊", skills: ["Python", "SQL", "PySpark", "Databricks", "JSON", "Data validation pipelines"] },
  { title: "Testing & Validation", emoji: "🧪", skills: ["AI workflow testing", "Integration & E2E testing", "Selenium", "Jira", "Xray", "Asana"] },
  { title: "Dev & Tooling", emoji: "⚙️", skills: ["GitLab CI/CD", "JavaScript", "Claude Code", "Gemini CLI", "Lovable", "Webflow", "Figma"] },
  { title: "Soft Skills", emoji: "💡", skills: ["Cross-functional collaboration", "Demos & workshops", "Stakeholder communication", "Fast learner", "Curious", "Pragmatic"] },
];

const SkillsSection = () => {
  return (
    <section className="py-3 px-0">
      <div className="w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-4"
        >
          Key Skills
        </motion.p>

        <div className="space-y-2">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-soft rounded-xl px-4 py-2.5"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base leading-none">{cat.emoji}</span>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{cat.title}</h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {cat.skills.join("  ·  ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

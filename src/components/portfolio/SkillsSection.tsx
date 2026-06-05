import { Badge } from "@/components/ui/badge";
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
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-6"
        >
          Key Skills
        </motion.p>

        <div className="space-y-3">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 glass-soft rounded-xl px-4 py-3"
            >
              <span className="text-lg leading-none mt-0.5">{cat.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-muted-foreground mb-1.5">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-normal px-2 py-0.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

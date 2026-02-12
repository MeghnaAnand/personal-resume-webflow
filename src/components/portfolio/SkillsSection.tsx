import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  { title: "Testing & Automation", emoji: "🧪", skills: ["Selenium", "Postman (API)", "Xray", "Jira", "E2E Testing"] },
  { title: "AI / LLM", emoji: "🤖", skills: ["Prompt Engineering", "Output Validation", "Non-deterministic Testing"] },
  { title: "Backend", emoji: "💻", skills: ["Python", "SQL", "JSON", "Database Validation"] },
  { title: "Tools", emoji: "🛠️", skills: ["GitHub", "Databricks", "n8n", "Asana", "Confluence"] },
  { title: "Soft Skills", emoji: "💡", skills: ["Creative Thinking", "Problem-Solving", "Communication"] },
];

const SkillsSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
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
              className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3"
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

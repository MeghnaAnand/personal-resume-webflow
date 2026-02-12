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
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Key Skills
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border rounded-2xl p-5 shadow-sm text-center"
            >
              <span className="text-2xl mb-3 block">{cat.emoji}</span>
              <h3 className="text-sm font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

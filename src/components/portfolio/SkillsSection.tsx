import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Testing & Automation",
    emoji: "🧪",
    level: 9,
    xp: 92,
    skills: ["Selenium", "Postman (API)", "Xray", "Jira", "E2E Testing"],
  },
  {
    title: "AI / LLM",
    emoji: "🤖",
    level: 7,
    xp: 75,
    skills: ["Prompt Engineering", "Output Validation", "Non-deterministic Testing"],
  },
  {
    title: "Backend",
    emoji: "💻",
    level: 6,
    xp: 68,
    skills: ["Python", "SQL", "JSON", "Database Validation"],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    level: 8,
    xp: 85,
    skills: ["GitHub", "Databricks", "n8n", "Asana", "Confluence"],
  },
  {
    title: "Design & Prototyping",
    emoji: "🎨",
    level: 5,
    xp: 55,
    skills: ["Figma", "Webflow", "Canva"],
  },
  {
    title: "Soft Skills",
    emoji: "💡",
    level: 8,
    xp: 88,
    skills: ["Creative Thinking", "Problem-Solving", "Communication"],
  },
];

const levelColor = (level: number) => {
  if (level >= 9) return "text-yellow-500";
  if (level >= 7) return "text-emerald-500";
  if (level >= 5) return "text-sky-500";
  return "text-muted-foreground";
};

const xpBarColor = (level: number) => {
  if (level >= 9) return "bg-yellow-500";
  if (level >= 7) return "bg-emerald-500";
  if (level >= 5) return "bg-sky-500";
  return "bg-muted-foreground";
};

const SkillsSection = () => {
  const [revealedSkills, setRevealedSkills] = useState<Record<string, boolean>>({});

  const toggleReveal = (title: string) => {
    setRevealedSkills((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const totalXP = skillCategories.reduce((sum, cat) => sum + cat.xp * cat.skills.length, 0);

  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
            ⚔️ Skill Tree
          </p>
          <p className="text-[10px] text-muted-foreground font-mono">
            Total XP: {totalXP} · Click to reveal skills
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {skillCategories.map((cat, index) => {
            const revealed = revealedSkills[cat.title];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                onClick={() => toggleReveal(cat.title)}
                className="bg-card border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg group-hover:scale-110 transition-transform">{cat.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xs font-semibold text-foreground">{cat.title}</h3>
                      <span className={`text-[10px] font-mono font-bold ${levelColor(cat.level)}`}>
                        LVL {cat.level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${xpBarColor(cat.level)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cat.xp}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{cat.xp}% mastery</p>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: revealed ? "auto" : 0,
                    opacity: revealed ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-border">
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={revealed ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-xs font-normal px-2 py-0.5">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

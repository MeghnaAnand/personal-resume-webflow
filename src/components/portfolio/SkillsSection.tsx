import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { title: "Testing & Automation 🧪", skills: ["Selenium", "Postman (API)", "Xray", "Jira", "E2E Testing"] },
  { title: "AI/LLM 🤖", skills: ["Prompt Engineering", "Output Validation", "Non-deterministic Testing"] },
  { title: "Backend 💻", skills: ["Python", "SQL", "JSON", "Database Validation"] },
  { title: "Tools 🛠️", skills: ["GitHub", "Databricks", "n8n", "Asana", "Confluence"] },
  { title: "Soft Skills 💡", skills: ["Creative Thinking", "Problem-Solving", "Communication"] },
];

const SkillsSection = () => {
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-primary">Key Skills 🎯</h2>
      <div className="grid grid-cols-2 gap-2">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="bg-card rounded-md p-2 border">
            <h3 className="text-xs font-semibold text-foreground mb-1">{cat.title}</h3>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

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
      <h2 className="text-2xl font-bold mb-4 text-primary">Key Skills 🎯</h2>
      <div className="grid grid-cols-2 gap-3">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="bg-card rounded-lg p-3 border">
            <h3 className="text-xs font-semibold text-foreground mb-2">{cat.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
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

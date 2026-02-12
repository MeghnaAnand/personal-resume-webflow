import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Testing & Automation 🧪",
    skills: ["Selenium", "Postman (API)", "Xray", "Jira", "Integration/E2E Testing"],
  },
  {
    title: "AI/LLM 🤖",
    skills: ["Prompt Engineering", "Output Validation", "Non-deterministic Testing"],
  },
  {
    title: "Backend 💻",
    skills: ["Python", "SQL", "JSON", "Database Validation"],
  },
  {
    title: "Tools 🛠️",
    skills: ["GitHub", "Databricks", "n8n", "Asana", "Confluence"],
  },
  {
    title: "Soft Skills 💡",
    skills: ["Creative Thinking", "Problem-Solving", "Communication", "Feedback Loops"],
  },
];

const SkillsSection = () => {
  return (
    <aside className="space-y-5">
      <h2 className="text-xl font-bold mb-4">Key Skills 🎯</h2>
      {skillCategories.map((cat) => (
        <div key={cat.title}>
          <h3 className="text-sm font-semibold text-primary mb-2">{cat.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default SkillsSection;

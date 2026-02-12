import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Testing & Automation 🧪",
    skills: ["Selenium", "Postman (API)", "Xray", "Jira", "Integration Testing", "E2E Testing", "Regression Testing", "Functional Testing", "UAT", "Performance Testing", "Exploratory Testing"],
  },
  {
    title: "AI & LLM 🤖",
    skills: ["Prompt Engineering", "Output Validation", "Non-deterministic Testing", "AI Avatar Roleplay", "Behavior Analysis", "Prompt Optimization"],
  },
  {
    title: "Development 💻",
    skills: ["JavaScript", "Python", "SQL", "PHP", "HTML/CSS", "jQuery", "SAP UI5", "TYPO3", "Webflow", "Figma"],
  },
  {
    title: "Tools & Data 🛠️",
    skills: ["GitHub", "Databricks", "n8n", "Asana", "Confluence", "Trello", "PySpark", "Seaborn", "MS-Excel", "Data Visualization"],
  },
  {
    title: "Soft Skills 💡",
    skills: ["Creative Thinking", "Structured Problem-Solving", "Communication", "Feedback Loops", "Agile Methodologies", "Cross-team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Key Skills 🎯</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">What I bring to the table</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <Card key={cat.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

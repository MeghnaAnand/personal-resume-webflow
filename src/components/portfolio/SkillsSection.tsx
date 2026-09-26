import EditorialSection from "./EditorialSection";

const skillCategories = [
  { title: "Testing Methods", skills: ["Functional", "Regression", "System", "Integration", "UAT", "E2E", "API testing", "Manual & automated test scripts"] },
  { title: "SDLC & STLC", skills: ["Full software development and testing life cycle", "Requirements review", "Test readiness", "Environment setup", "Execution", "Defect lifecycle", "Scrum and sprint testing"] },
  { title: "Bug Tracking & Test Management", skills: ["Jira", "Xray", "HP QC", "Asana"] },
  { title: "Automation", skills: ["Selenium", "Python scripting", "GitLab CI/CD pipelines", "n8n workflow automation"] },
  { title: "Data & APIs", skills: ["Python", "SQL", "PySpark", "Postman (REST APIs)", "JSON", "Databricks"] },
  { title: "AI & Quality", skills: ["LLM evaluation", "AI output analysis", "Prompt engineering", "Failure mode identification"] },
  { title: "Soft Skills", skills: ["Analytical", "Detail-oriented", "Ownership", "Structured way of working", "Knowledge sharing", "Team-oriented", "Curious"] },
];

const SkillsSection = () => {
  return (
    <EditorialSection label="Skills">
      <dl className="space-y-8">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-6 border-b border-border last:border-0"
          >
            <dt className="sm:col-span-4 text-sm font-medium text-foreground pt-0.5">
              {cat.title}
            </dt>
            <dd className="sm:col-span-8 text-sm text-muted-foreground leading-relaxed">
              {cat.skills.join("  ·  ")}
            </dd>
          </div>
        ))}
      </dl>
    </EditorialSection>
  );
};

export default SkillsSection;

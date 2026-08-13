import EditorialSection from "./EditorialSection";

const skillCategories = [
  {
    title: "AI in Testing",
    skills: [
      "LLM evaluation",
      "AI output analysis",
      "Prompt engineering",
      "AI workflow testing",
    ],
  },
  {
    title: "Testing Methods",
    skills: [
      "Functional",
      "Regression",
      "Integration",
      "System",
      "UAT",
      "E2E",
      "Exploratory",
      "API testing",
      "Manual & automated test scripts",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Selenium",
      "Python scripting",
      "VBScript",
      "GitLab CI/CD",
      "n8n workflow automation",
    ],
  },
  {
    title: "Languages & Data",
    skills: [
      "JavaScript",
      "Python",
      "SQL",
      "MySQL",
      "JSON",
      "Postman (REST APIs)",
      "PySpark",
      "Java (basic)",
    ],
  },
  {
    title: "Test Management & Bug Tracking",
    skills: [
      "Jira",
      "Xray",
      "HP QC",
      "Asana",
      "Test case repository maintenance",
      "Test reporting",
    ],
  },
  {
    title: "SDLC & STLC",
    skills: [
      "Requirements review",
      "Test readiness",
      "Environment setup",
      "Defect lifecycle",
      "Sprint testing",
      "Agile/Scrum",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Analytical",
      "Detail-oriented",
      "Structured",
      "Problem-solving",
      "Ownership",
      "Knowledge sharing",
      "Curious",
    ],
  },
];

const SkillsSection = () => {
  return (
    <EditorialSection label="Key Skills">
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

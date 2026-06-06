import EditorialSection from "./EditorialSection";

const skillCategories = [
  {
    title: "AI & Automation",
    skills: [
      "n8n (L1 & L2 certified)",
      "Flvent AI Fluency",
      "Automated workflows",
      "LLM evaluation",
      "Prompt engineering",
      "Rapid prototyping",
    ],
  },
  {
    title: "Data & APIs",
    skills: ["Python", "SQL", "PySpark", "Databricks", "JSON", "Data validation pipelines"],
  },
  {
    title: "Testing & Validation",
    skills: [
      "AI workflow testing",
      "Integration & E2E testing",
      "Selenium",
      "Jira",
      "Xray",
      "Asana",
    ],
  },
  {
    title: "Dev & Tooling",
    skills: [
      "GitLab CI/CD",
      "JavaScript",
      "Claude Code",
      "Gemini CLI",
      "Lovable",
      "Webflow",
      "Figma",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Cross-functional collaboration",
      "Demos & workshops",
      "Stakeholder communication",
      "Fast learner",
      "Curious",
      "Pragmatic",
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

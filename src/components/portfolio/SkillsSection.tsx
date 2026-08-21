import EditorialSection from "./EditorialSection";

const skillCategories = [
  {
    title: "Customer & Stakeholder Engagement",
    skills: [
      "Enterprise client requirements gathering",
      "Stakeholder communication",
      "Cross-functional coordination",
      "Account & community health tracking",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "n8n",
      "Python",
      "AI agents",
      "Prompt design",
      "Fast tool adoption",
    ],
  },
  {
    title: "Data & Reporting",
    skills: [
      "SQL",
      "Excel",
      "PySpark",
      "Structured status reporting",
      "Documentation",
    ],
  },
  {
    title: "Quality & Testing",
    skills: [
      "Functional",
      "Regression",
      "Exploratory",
      "AI output analysis",
      "Defect tracking (Jira, Xray, Asana)",
      "Agile/Scrum",
    ],
  },
  {
    title: "Domain Adaptability",
    skills: [
      "Banking",
      "AI evaluation",
      "Retail",
      "Community operations",
      "Fast learning of unfamiliar domains",
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

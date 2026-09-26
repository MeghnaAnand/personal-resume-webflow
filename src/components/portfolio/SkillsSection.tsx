import EditorialSection from "./EditorialSection";

const skillCategories = [
  {
    title: "User & Product Support",
    skills: [
      "Understanding user needs",
      "Requirements analysis",
      "Issue investigation & troubleshooting",
      "Customer feedback handling",
      "Product validation",
    ],
  },
  {
    title: "Analysis & Reporting",
    skills: [
      "SQL",
      "Excel",
      "PySpark",
      "Pattern identification",
      "Status reporting",
    ],
  },
  {
    title: "Communication & Delivery",
    skills: [
      "Stakeholder communication",
      "Cross-functional coordination",
      "Clear documentation",
      "Knowledge transfer",
      "Agile/Scrum",
    ],
  },
  {
    title: "Quality & Testing",
    skills: [
      "Test planning & test cases",
      "Functional & regression testing",
      "UAT coordination",
      "Selenium automation",
      "AI output evaluation",
      "Defect tracking (Jira, Xray, Asana)",
    ],
  },
  {
    title: "AI & Automation Tools",
    skills: [
      "Lovable",
      "Claude Code",
      "Gemini CLI",
      "n8n",
      "Python",
      "Prompt design",
    ],
  },
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

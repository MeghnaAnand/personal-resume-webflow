import EditorialSection from "./EditorialSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experience = [
  {
    id: "pyxis",
    role: "Founder & AI Quality Consultant",
    company: "PyxisPulse Consulting AB",
    location: "Stockholm",
    period: "Sep 2025 – Present",
    responsibilities: [
      "Developed a PySpark + Spark-Expectations data quality pipeline on Swedish crime statistics (1950–2023), published under Data & AI Stockholm's GitHub org",
      "Identifying, evaluating, testing, and deploying AI and automation use-cases — translating business inefficiencies into practical, repeatable workflow solutions using n8n, Python, and AI tooling",
      "Rapidly prototyping with Claude Code, Gemini CLI, and Lovable — testing and iterating fast to validate ideas before committing to full builds, including through hackathons",
      "Managed all business operations end-to-end including accounting, payments, marketing, and tax compliance, bringing the same systems thinking to operations as to product",
    ],
  },
  {
    id: "fictive",
    role: "AI Quality & Prompt Designer",
    company: "Fictive Reality AB",
    location: "Stockholm",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Conducted functional, exploratory, and regression testing of AI avatar applications across web and mobile (iOS), documenting and tracking defects through to resolution in Asana",
      "Executed test cases for AI scenarios across multiple domains, ensuring outputs met both technical specifications and user expectations",
      "Investigated and debugged AI behavior issues, providing technical advice and structured recommendations to the development team",
      "Worked within an Agile/Scrum team — sprint planning, daily stand-ups, and retrospectives — contributing to quality-first delivery",
    ],
  },
  {
    id: "axfood",
    role: "Test & Automation Engineer",
    company: "Axfood IT AB",
    location: "Stockholm",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Developed and maintained test cases for SAP Fiori enterprise applications in Xray, improving coverage and maintaining the test case repository across critical system workflows",
      "Built VBScript automation scripts to validate 70K+ records, cutting validation time by 60% — adopted as a standard process improvement across the broader team",
      "Collaborated with cross-functional teams to embed quality early, proactively identifying integration issues before production",
      "Contributed to sprint planning, stand-ups, and retrospectives in an Agile/Scrum team",
    ],
  },
  {
    id: "sap",
    role: "JavaScript Developer",
    company: "SAP SE",
    location: "Walldorf, Germany",
    period: "Mar 2018 – Mar 2019",
    responsibilities: [
      "Built and delivered a new internal web application using JavaScript, jQuery, and SAP UI5 — owning development and end-to-end testing",
      "Facilitated a coding workshop for management interns, translating technical concepts for a non-engineering audience",
    ],
  },
  {
    id: "accenture",
    role: "Quality Assurance Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Mar 2012 – Dec 2014",
    responsibilities: [
      "Designed and executed test plans for end-to-end credit card processing flows (Bank of America) across functional, integration, regression, and UAT phases",
      "Reviewed requirements and functional designs to confirm test readiness, identifying gaps early and preventing rework",
      "Investigated, debugged, and troubleshot defects with development teams, providing technical advice and timely resolution reports to stakeholders",
      "Built automated test suites using Selenium, reducing regression cycles by 40% and achieving zero high/medium severity production defects",
      "Used MySQL for data validation and backend verification during testing phases",
      "Set up and maintained test environments across multiple phases, ensuring stability for high-volume banking workflows",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <EditorialSection label="Experience">
      <Accordion type="multiple" className="space-y-0">
        {experience.map((job, idx) => (
          <AccordionItem
            key={job.id}
            value={job.id}
            className={`border-0 ${idx === 0 ? "" : "border-t border-border"}`}
          >
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex-1 text-left grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
                <span className="md:col-span-4 text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
                  {job.period}
                </span>
                <div className="md:col-span-8">
                  <h3 className="text-lg font-medium text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {job.company} · {job.location}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pb-4 md:pl-[33%]">
                {job.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </EditorialSection>
  );
};

export default ExperienceSection;

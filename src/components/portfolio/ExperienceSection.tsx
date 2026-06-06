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
    role: "Founder & AI Automation",
    company: "PyxisPulse Consulting AB",
    location: "Stockholm",
    period: "Sep 2025 – Present",
    responsibilities: [
      "Used GenAI tools daily (Claude Code, Gemini CLI) to streamline research, automate workflows, and ship personal projects",
      "Built a data quality pipeline (PySpark + Spark-Expectations) on Swedish crime statistics (1950–2023), published under Data & AI Stockholm GitHub — real data, real output, publicly documented",
      "Co-managed business operations (accounting, payments, tax, contracts) while simultaneously building technical AI solutions",
      "Selected for NVIDIA Inception Program and AWS Activate for early-stage AI product development",
    ],
  },
  {
    id: "fictive",
    role: "AI Quality & Prompt Engineer",
    company: "Fictive Reality AB",
    location: "Stockholm",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Tested, evaluated, and iteratively improved AI agent behavior across web and mobile (iOS), identifying failure patterns and edge cases in live AI workflows",
      "Translated qualitative AI output observations into actionable technical recommendations, closing the gap between intended and actual AI behavior",
      "Designed structured prompts to guide AI agents through complex scenarios (psychology, sales), meeting both technical specs and user expectations",
      "Created a fully functional company website using Webflow",
    ],
  },
  {
    id: "axfood",
    role: "Test & Automation Engineer",
    company: "Axfood IT AB",
    location: "Stockholm",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Automated data validation using Python macros — improved efficiency for 70K+ records and reduced validation time by 60%",
      "Developed test cases for SAP Fiori applications, managing execution in Xray to improve enterprise coverage",
      "Collaborated with cross-functional teams to embed quality early, catching integration issues before production",
    ],
  },
  {
    id: "sap",
    role: "JavaScript Developer",
    company: "SAP SE",
    location: "Walldorf, Germany",
    period: "Mar 2018 – Mar 2019",
    responsibilities: [
      "Created new web application using JavaScript, jQuery, and SAP UI5",
      "Arranged coding workshop to management interns",
      "End to end testing for the application",
    ],
  },
  {
    id: "accenture",
    role: "Quality Assurance Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Mar 2012 – Dec 2014",
    responsibilities: [
      "Designed comprehensive test plans for end-to-end credit card flows (Bank of America), covering functional, integration, and regression testing",
      "Built automated test suites using Selenium, reducing regression cycles by 40% and improving coverage for critical banking workflows",
      "Led QA from planning through UAT, achieving zero high/medium production defects through proactive defect prevention",
      "Maintained and collaborated with clients and developers to streamline testing",
      "Automated key test scenarios with Selenium, leading to faster regression cycles and improved test coverage",
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

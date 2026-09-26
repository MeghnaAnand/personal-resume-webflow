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
      "Identifying, evaluating, testing, and deploying AI and automation use-cases, translating business inefficiencies into practical, repeatable workflow solutions using n8n, Python, and AI tooling",
      "Developed a PySpark + Spark-Expectations data quality pipeline on Swedish crime statistics (1950–2023), published under Data & AI Stockholm's GitHub org",
      "Rapidly prototyping solutions using Claude Code, Gemini CLI, and Lovable, testing and iterating fast to validate ideas before committing to full builds through hackathons",
      "Managed all business operations end-to-end including accounting, payments, marketing, and tax compliance",
    ],
  },
  {
    id: "dais",
    role: "Community & Events Coordinator (Volunteer)",
    company: "Data & AI Stockholm",
    location: "Stockholm",
    period: "Jul 2025 – Jan 2026",
    responsibilities: [
      "Maintained relationships across a community of approximately 7,000 members, listening to member and speaker needs to support engagement and event quality",
      "Supported event creation and coordination, including monthly team meet-ups and handling post-event feedback",
      "Coordinated speaker outreach and communication across internal organizers and external stakeholders",
    ],
  },
  {
    id: "fictive",
    role: "AI Quality & Prompt Designer",
    company: "Fictive Reality AB",
    location: "Stockholm",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Conducted testing of AI avatar applications across web and mobile (iOS), identifying failure patterns and tracking defects through to resolution in Asana",
      "Worked within an Agile/Scrum team, participating in sprint planning, daily stand-ups, and retrospectives",
      "Designed structured prompts to guide AI agents through complex scenarios (psychology, sales), ensuring outputs met both technical specifications and user expectations",
      "Created the company website using Webflow",
    ],
  },
  {
    id: "axfood",
    role: "Test & Automation",
    company: "Axfood IT AB",
    location: "Stockholm",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Developed and maintained test cases for SAP Fiori enterprise applications using Xray, improving test coverage and documentation across critical system workflows",
      "Built VBScript automation scripts to validate 70K+ records, cutting validation time by 60% — adopted across the broader team as a standard process improvement",
      "Collaborated with cross-functional teams to embed quality early, identifying integration issues before production",
      "Worked within an Agile/Scrum team, participating in sprint planning, daily stand-ups, and retrospectives",
    ],
  },
  {
    id: "sap",
    role: "JavaScript Developer",
    company: "SAP SE",
    location: "Walldorf, Germany",
    period: "Mar 2018 – Mar 2019",
    responsibilities: [
      "Built and delivered a new internal web application using JavaScript, jQuery, and SAP UI5",
      "Facilitated a coding workshop for management interns, translating technical concepts for a non-engineering audience",
      "Worked within an Agile team with daily stand-ups and retrospectives",
    ],
  },
  {
    id: "accenture",
    role: "Quality Assurance Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Mar 2012 – Dec 2014",
    responsibilities: [
      "Designed and executed test plans for end-to-end credit card flows (Bank of America) across functional, integration, regression, and UAT phases",
      "Reviewed requirements and functional designs to confirm test readiness before each phase, identifying gaps early and preventing rework",
      "Built automated test suites using Selenium, reducing regression cycles by 40% and achieving zero high/medium severity production defects",
      "Set up and maintained test environments across multiple testing phases, ensuring stability for high-volume banking workflows",
      "Produced clear test documentation and status reporting for senior stakeholders throughout the engagement",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <EditorialSection label="Work Experience">
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

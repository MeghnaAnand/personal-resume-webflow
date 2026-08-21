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
      "Identifying, evaluating, testing, and deploying AI and automation use-cases — translating business inefficiencies into practical, repeatable workflow solutions using n8n, Python, and AI tooling",
      "Developed a PySpark + Spark-Expectations data quality pipeline on Swedish crime statistics (1950–2023), published under Data & AI Stockholm's GitHub org",
      "Rapidly prototyping with Claude Code, Gemini CLI, and Lovable — testing and iterating fast to validate ideas before committing to full builds, including through hackathons",
      "Managed all business operations end-to-end including accounting, payments, marketing, and tax compliance, bringing the same systems thinking to operations as to product",
    ],
  },
  {
    id: "dais",
    role: "Community & Events Coordinator (Volunteer)",
    company: "Data & AI Stockholm",
    location: "Stockholm",
    period: "Jul 2025 – Jan 2026",
    responsibilities: [
      "Maintaining relationships across a community of ~7,000 members, understanding what members and speakers needed to keep engagement and event quality high",
      "Helped in event creation, management, and coordination, including monthly team meet-ups and post-event feedback handling",
      "Involved in speaker outreach and communications, coordinating across internal organizers and external stakeholders",
    ],
  },
  {
    id: "fictive",
    role: "AI Quality & Prompt Designer",
    company: "Fictive Reality AB",
    location: "Stockholm",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Involved in conversations with customers to understand their needs — how they wanted the AI avatar to sound and what it should teach learners — and translated that into structured prompt design",
      "Conducted testing of AI avatar applications across web and mobile platforms, identifying failure patterns and tracking defects to resolution through Asana",
      "Worked within an Agile/Scrum team, participating in sprint planning, stand-ups, and retrospectives",
    ],
  },
  {
    id: "axfood",
    role: "Test & Automation",
    company: "Axfood IT AB",
    location: "Stockholm",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Supported project management, development leads, and test leads with both ad hoc and continuous tasks, coordinating across functions in a fast-paced environment",
      "Prepared weekly status reports and followed up on project deliverables across multiple stakeholders",
      "Built an Excel macro tool to automate identification of required master data updates",
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
      "Worked directly with enterprise client stakeholders (Bank of America) throughout end-to-end credit card processing projects, reviewing requirements and confirming readiness before each phase",
      "Produced clear status reporting and documentation for senior client and internal stakeholders throughout multi-phase engagements",
      "Delivered structured knowledge transfer, teaching Java to incoming team members as part of a formal skill-transfer initiative",
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

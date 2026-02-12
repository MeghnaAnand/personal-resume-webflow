import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const experience = [
  {
    id: "pyxis",
    emoji: "🏢",
    role: "QA & AI Strategy",
    company: "PyxisPulse Consulting",
    location: "Stockholm",
    period: "Sep 2024 – Present",
    responsibilities: [
      "Managed end-to-end business operations including accounting, billing, payments, and tax compliance",
      "Developed and maintained company website, ensuring brand presence and functionality",
      "Actively expanding technical capabilities in data engineering through Databricks platform and N8N Automation",
    ],
  },
  {
    id: "fictive",
    emoji: "🤖",
    role: "AI Quality & Prompt Designer",
    company: "Fictive Reality",
    location: "Stockholm",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Created a fully functional website within a month, using Webflow and Figma",
      "Web-based and mobile testing (iOS) of AI Avatars and Scenarios",
      "Designed structured prompts to guide AI Avatar roleplay interactions",
      "Evaluated AI output quality, identified failure patterns, and applied iterative changes",
      "Collaborated with developers to fine-tune AI outputs",
    ],
  },
  {
    id: "axfood",
    emoji: "📊",
    role: "Project Management in Test & Automation",
    company: "Axfood IT AB",
    location: "Stockholm",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Developed test cases for SAP Fiori applications, managing execution in Xray",
      "Automated data validation using Python macros, improving efficiency for 70K+ records",
      "Collaborated with cross-functional teams to embed quality early",
    ],
  },
  {
    id: "sap",
    emoji: "💻",
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
    emoji: "✅",
    role: "Quality Assurance Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Mar 2012 – Dec 2014",
    responsibilities: [
      "Designed comprehensive test plans for end-to-end credit card flows (Bank of America)",
      "Built automated test suites using Selenium, reducing regression cycles by 40%",
      "Led QA from planning through UAT, achieving zero high/medium production defects",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-sm font-bold mb-1 text-primary">Work Experience 💼</h2>
      <Accordion type="multiple" className="space-y-0.5">
        {experience.map((job) => (
          <AccordionItem key={job.id} value={job.id} className="border rounded-md px-2 bg-card">
            <AccordionTrigger className="py-1.5 hover:no-underline">
              <div className="flex items-center gap-1.5 text-left text-xs">
                <span>{job.emoji}</span>
                <div>
                  <span className="font-semibold text-foreground">{job.role}</span>
                  <span className="text-muted-foreground"> · {job.company}</span>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="flex items-center gap-0.5"><Calendar className="w-3 h-3" />{job.period}</span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-0.5 pb-0.5">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-[11px] text-muted-foreground leading-tight">
                    <span className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ExperienceSection;

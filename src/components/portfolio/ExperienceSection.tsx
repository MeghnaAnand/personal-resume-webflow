import { MapPin, Calendar } from "lucide-react";
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
      <h2 className="text-2xl font-bold mb-4 text-primary">Work Experience 💼</h2>
      <Accordion type="multiple" className="space-y-2">
        {experience.map((job) => (
          <AccordionItem key={job.id} value={job.id} className="border rounded-lg px-4 bg-card">
            <AccordionTrigger className="py-3 hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <span className="text-lg">{job.emoji}</span>
                <div>
                  <span className="font-semibold text-foreground text-sm">{job.role}</span>
                  <span className="text-muted-foreground text-sm"> · {job.company}</span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{job.period}</span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1.5 pb-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
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

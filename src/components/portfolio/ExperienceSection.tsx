import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const experience = [
  {
    id: "pyxis",
    emoji: "🚀",
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
    emoji: "🤖",
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
    emoji: "⚡",
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
      "Designed comprehensive test plans for end-to-end credit card flows (Bank of America), covering functional, integration, and regression testing",
      "Built automated test suites using Selenium, reducing regression cycles by 40% and improving coverage for critical banking workflows",
      "Led QA from planning through UAT, achieving zero high/medium production defects through proactive defect prevention",
      "Maintained and collaborated with clients and developers to streamline testing",
      "Documentation of lessons learnt test plan and project status and updates",
      "Automated key test scenarios with Selenium, leading to faster regression cycles and improved test coverage",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Work Experience
        </motion.p>

        <Accordion type="multiple" className="space-y-3">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <AccordionItem value={job.id} className="border border-border rounded-2xl px-4 sm:px-6 bg-card shadow-sm">
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-2xl">{job.emoji}</span>
                    <div>
                      <p className="font-semibold text-foreground">{job.role}</p>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{job.period}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pb-2 pl-4 sm:pl-12">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExperienceSection;

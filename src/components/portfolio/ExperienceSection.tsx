import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

const experience = [
  {
    emoji: "🏢",
    role: "IT Consultant",
    company: "PyxisPulse Consulting",
    location: "Stockholm, Sweden",
    period: "Sep 2024 – Present",
    responsibilities: [
      "Managed end-to-end business operations including accounting, billing, payments, and tax compliance",
      "Developed and maintained company website, ensuring brand presence and functionality",
      "Actively expanding technical capabilities in data engineering through Databricks platform and N8N Automation",
    ],
  },
  {
    emoji: "🤖",
    role: "AI Quality & Prompt Designer",
    company: "Fictive Reality",
    location: "Stockholm, Sweden",
    period: "Sep 2024 – Jan 2025",
    responsibilities: [
      "Created a fully functional website within a month, using Webflow and Figma",
      "Web-based and mobile testing (iOS) of AI Avatars and Scenarios",
      "Reported bugs via Asana and followed them till closure",
      "Designed structured prompts to guide AI Avatar roleplay interactions across psychology, sales, conflict handling etc.",
      "Evaluated AI output quality, identified failure patterns, and applied iterative changes",
      "Optimized behavior analysis of AI responses to identify system limitations",
      "Collaborated with developers to fine-tune AI outputs and align behaviors with scenario objectives",
    ],
  },
  {
    emoji: "📊",
    role: "Project Management in Test and Automation",
    company: "Axfood IT AB",
    location: "Stockholm, Sweden",
    period: "Sep 2023 – Jan 2024",
    responsibilities: [
      "Developed test cases for SAP Fiori applications, managing execution in Xray",
      "Automated data validation using Python macros, improving efficiency for 70K+ records and reducing validation time by 60%",
      "Collaborated with cross-functional teams to embed quality early, identifying integration issues before production",
    ],
  },
  {
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
    emoji: "✅",
    role: "Quality Assurance Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Mar 2012 – Dec 2014",
    responsibilities: [
      "Designed comprehensive test plans for end-to-end credit card flows (Bank of America)",
      "Built automated test suites using Selenium, reducing regression cycles by 40%",
      "Led QA from planning through UAT, achieving zero high/medium production defects",
      "Maintained and collaborated with clients and developers to streamline testing",
      "Automated key test scenarios with Selenium, leading to faster regression cycles",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Work Experience 💼</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">My professional journey so far</p>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
                
                <Card className="hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                          <span className="text-2xl">{job.emoji}</span>
                          {job.role}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/80 mt-1">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-2 text-sm">
                          <span className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

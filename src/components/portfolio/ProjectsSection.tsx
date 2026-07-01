import EditorialSection from "./EditorialSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AutomationMind",
    badge: "2nd Prize · SheBuilds",
    description:
      "Gamified automation learning platform — built and shipped end-to-end within the hackathon window.",
    tags: ["Lovable", "React", "Lovable Cloud"],
    link: "https://github.com/MeghnaAnand/logic-loom-78",
  },
  {
    title: "SPARK-DQ-ShiftLeft",
    description:
      "PySpark + Spark-Expectations data quality pipeline on Swedish crime statistics (1950–2023). Published under Data & AI Stockholm's GitHub org.",
    tags: ["PySpark", "Databricks", "Python", "Spark-Expectations"],
    link: "https://github.com/data-ai-stockholm/spark-dq-checks",
  },
  {
    title: "FreshBox Chatbot",
    description:
      "FastAPI customer-support chatbot (Ollama / llama3.2) with a scoring endpoint, Playwright UI tests, and an n8n pipeline that auto-evaluates bot responses from Google Sheets into Pass/Fail logs.",
    tags: ["FastAPI", "Ollama", "Playwright", "n8n"],
    link: "https://github.com/MeghnaAnand/freshbox-chatbot",
  },
  {
    title: "Valsant",
    description:
      "Personal AI project — repo details to be added.",
    tags: ["AI"],
    link: "https://github.com/MeghnaAnand/valsant",
  },
];

const ProjectsSection = () => {
  return (
    <EditorialSection label="Recent Projects">
      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.title} className="group">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-medium text-foreground group-hover:text-muted-foreground transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                {project.badge && (
                  <span className="text-[10px] px-2.5 py-0.5 border border-border text-muted-foreground rounded-full uppercase tracking-wider whitespace-nowrap">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </article>
        ))}
      </div>
    </EditorialSection>
  );
};

export default ProjectsSection;

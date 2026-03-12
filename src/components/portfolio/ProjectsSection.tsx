import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    emoji: "✨",
    title: "Aura Balance",
    description: "Hackathon project focused on wellness and balance tracking.",
    tags: ["Lovable", "Gemini"],
    link: "https://github.com/august-human/aura-balance",
  },
  {
    emoji: "🤖",
    title: "AutomationMind",
    description: "Second prize winner in SheBuilds Buildathon — an automation-focused app with full-stack capabilities.",
    tags: ["Lovable", "Lovable Cloud", "Supabase"],
    link: "https://github.com/MeghnaAnand/logic-loom-78",
  },
  {
    emoji: "🧍",
    title: "Posture App",
    description: "Posture tracking application leveraging AI and cloud services.",
    tags: ["Antigravity", "Gemini CLI", "Google Cloud"],
    link: "https://github.com/MeghnaAnand/posture-app",
  },
  {
    emoji: "⚡",
    title: "Spark DQ Checks",
    description: "PySpark data quality pipeline for schema validation and anomaly detection.",
    tags: ["Databricks", "Cursor", "Claude", "Python"],
    link: "https://github.com/data-ai-stockholm/spark-dq-checks",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Recent Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-colors"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <span className="text-3xl mb-4 block">{project.emoji}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.title === "AutomationMind" ? (
                    <><span className="font-semibold text-foreground">Second prize winner in SheBuilds Buildathon</span> — an automation-focused app with full-stack capabilities.</>
                  ) : (
                    project.description
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    emoji: "🏆",
    title: "AutomationMind",
    badge: "2nd Prize · SheBuilds",
    description: "Gamified automation learning platform — built and shipped end-to-end within the hackathon window.",
    tags: ["Lovable", "React", "Lovable Cloud"],
    link: "https://github.com/MeghnaAnand/logic-loom-78",
  },
  {
    emoji: "⚡",
    title: "SPARK-DQ-ShiftLeft",
    description: "PySpark + Spark-Expectations data quality pipeline on Swedish crime statistics (1950–2023). Published under Data & AI Stockholm's GitHub org.",
    tags: ["PySpark", "Databricks", "Python", "Spark-Expectations"],
    link: "https://github.com/data-ai-stockholm/spark-dq-checks",
  },
  {
    emoji: "🧍",
    title: "Posture App",
    description: "Real-time posture monitoring app that scores user posture and prompts corrections to encourage healthier habits.",
    tags: ["Antigravity", "Gemini CLI", "Google Cloud"],
    link: "https://github.com/MeghnaAnand/posture-app",
  },
  {
    emoji: "✨",
    title: "Aura Balance",
    description: "Hackathon project focused on wellness and balance tracking with an AI-assisted interface.",
    tags: ["Lovable", "Gemini"],
    link: "https://github.com/august-human/aura-balance",
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
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl block">{project.emoji}</span>
                  {project.badge && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-semibold uppercase tracking-wide">
                      {project.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
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

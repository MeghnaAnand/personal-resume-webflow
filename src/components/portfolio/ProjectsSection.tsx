import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    emoji: "⚡",
    title: "SPARK-DQ-SHIFTLEFT",
    description: "PySpark data quality pipeline using Spark-Expectations for schema validation and anomaly detection.",
    tags: ["PySpark", "Data Quality", "Schema Validation"],
  },
  {
    emoji: "🔄",
    title: "n8n Automation Testing",
    description: "Built automated agent workflows (n8n), validating multi-step flows and API integrations.",
    tags: ["n8n", "Automation", "API Testing"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Recent Projects
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <span className="text-3xl mb-4 block">{project.emoji}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

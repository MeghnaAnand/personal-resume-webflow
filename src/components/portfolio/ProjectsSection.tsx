import { Badge } from "@/components/ui/badge";

const projects = [
  {
    emoji: "⚡",
    title: "SPARK-DQ-SHIFTLEFT",
    description: "PySpark data quality pipeline using Spark-Expectations for schema validation.",
    tags: ["PySpark", "Data Quality"],
  },
  {
    emoji: "🔄",
    title: "n8n Automation Testing",
    description: "Automated agent workflows validating multi-step flows and API integrations.",
    tags: ["n8n", "Automation"],
  },
];

const ProjectsSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary">Recent Projects 🔬</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.title} className="bg-card rounded-lg p-4 border">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <span className="text-lg">{project.emoji}</span>{project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

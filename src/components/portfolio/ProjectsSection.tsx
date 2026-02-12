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
      <h2 className="text-lg font-bold mb-2 text-primary">Projects 🔬</h2>
      <div className="space-y-2">
        {projects.map((project) => (
          <div key={project.title} className="bg-card rounded-md p-3 border">
            <h3 className="text-sm font-semibold flex items-center gap-1.5">
              <span>{project.emoji}</span>{project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

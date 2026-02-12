import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section className="pb-12">
      <h2 className="text-3xl font-bold mb-2">Projects 🔬</h2>
      <p className="text-muted-foreground mb-8">Things I've built and tinkered with</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl">{project.emoji}</span>
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

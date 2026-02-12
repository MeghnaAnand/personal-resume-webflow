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
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Projects 🔬</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Things I've built and tinkered with</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">{project.emoji}</span>
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
      </div>
    </section>
  );
};

export default ProjectsSection;

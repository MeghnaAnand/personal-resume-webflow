import { Card, CardContent } from "@/components/ui/card";

const volunteering = [
  {
    emoji: "📊",
    org: "Data & AI Stockholm",
    description: "Content Creation for Data Engineering project using PySpark data quality pipeline. Collaborating with the content team to get more community engagement.",
  },
  {
    emoji: "🌍",
    org: "Women in Tech Global Conference® 2026",
    description: "Social Media Advocate.",
  },
  {
    emoji: "📝",
    org: "Stockholm Dual Career Network",
    description: "Content Creation for websites and monthly newsletters.",
  },
];

const VolunteeringSection = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold mb-2">Volunteering 💛</h2>
      <p className="text-muted-foreground mb-8">Giving back to the community</p>
      <div className="grid md:grid-cols-3 gap-6">
        {volunteering.map((v) => (
          <Card key={v.org} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 text-center">
            <CardContent className="pt-6 pb-4">
              <span className="text-3xl mb-3 block">{v.emoji}</span>
              <h3 className="font-bold text-sm mb-2">{v.org}</h3>
              <p className="text-muted-foreground text-xs">{v.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VolunteeringSection;

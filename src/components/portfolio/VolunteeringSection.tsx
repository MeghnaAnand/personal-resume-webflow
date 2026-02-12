import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const volunteering = [
  {
    emoji: "📊",
    org: "Data & AI Stockholm",
    description: "Content Creation for Data Engineering project using PySpark data quality pipeline.",
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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Volunteering 💛</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Giving back to the community</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {volunteering.map((v) => (
            <Card key={v.org} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 text-center">
              <CardContent className="pt-8 pb-6">
                <span className="text-4xl mb-4 block">{v.emoji}</span>
                <h3 className="font-bold text-sm mb-2">{v.org}</h3>
                <p className="text-muted-foreground text-xs">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;

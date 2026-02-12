const volunteering = [
  { emoji: "📊", org: "Data & AI Stockholm", desc: "Content Creation for Data Engineering project using PySpark." },
  { emoji: "🌍", org: "Women in Tech 2026", desc: "Social Media Advocate." },
  { emoji: "📝", org: "Stockholm Dual Career Network", desc: "Content Creation for websites & newsletters." },
];

const VolunteeringSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary">Volunteering 💛</h2>
      <div className="space-y-2">
        {volunteering.map((v) => (
          <div key={v.org} className="bg-card rounded-lg px-4 py-3 border flex items-start gap-3">
            <span className="text-lg">{v.emoji}</span>
            <div>
              <h3 className="text-sm font-semibold">{v.org}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteeringSection;

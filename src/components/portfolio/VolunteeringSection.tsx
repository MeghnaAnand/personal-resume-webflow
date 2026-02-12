const volunteering = [
  { emoji: "📊", org: "Data & AI Stockholm", desc: "Content Creation for Data Engineering project using PySpark." },
  { emoji: "🌍", org: "Women in Tech 2026", desc: "Social Media Advocate." },
  { emoji: "📝", org: "Stockholm Dual Career Network", desc: "Content Creation for websites & newsletters." },
];

const VolunteeringSection = () => {
  return (
    <section>
      <h2 className="text-sm font-bold mb-1 text-primary">Volunteering 💛</h2>
      <div className="space-y-1">
        {volunteering.map((v) => (
          <div key={v.org} className="bg-card rounded-md px-2 py-1.5 border flex items-start gap-1.5">
            <span className="text-sm">{v.emoji}</span>
            <div>
              <h3 className="text-xs font-semibold">{v.org}</h3>
              <p className="text-[11px] text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteeringSection;

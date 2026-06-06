import EditorialSection from "./EditorialSection";

const volunteering = [
  {
    org: "Data & AI Stockholm",
    period: "Aug 2025 – Feb 2026",
    desc: [
      "Content coordination for Data Engineering project using PySpark data quality pipeline",
      "Speaker outreach for meetups and community events",
      "Community building and engagement initiatives",
    ],
  },
  {
    org: "Women in Tech Global Conference® 2026",
    period: "Feb 2026 – Present",
    desc: ["Social Media Advocate."],
  },
  {
    org: "Stockholm Dual Career Network",
    period: "Oct 2019 – Oct 2020",
    desc: [
      "Content Creation for websites and monthly newsletters",
      "Community building",
    ],
  },
];

const VolunteeringSection = () => {
  return (
    <EditorialSection label="Volunteering">
      <div className="space-y-10">
        {volunteering.map((v) => (
          <div
            key={v.org}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4"
          >
            <span className="md:col-span-4 text-[11px] uppercase tracking-widest text-muted-foreground font-medium pt-1">
              {v.period}
            </span>
            <div className="md:col-span-8">
              <h3 className="text-lg font-medium text-foreground mb-2">{v.org}</h3>
              <ul className="space-y-1.5">
                {v.desc.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1 h-1 bg-foreground/40 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
};

export default VolunteeringSection;

import EditorialSection from "./EditorialSection";

const education = [
  {
    institution: "Offenburg University of Applied Sciences",
    location: "Germany",
    degree: "M.Sc. Information Technology",
    period: "2016–2019",
  },
  {
    institution: "Kalinga Institute of Industrial Technology",
    location: "India",
    degree: "B.Tech Computer Science & Engineering",
    period: "2008–2012",
  },
];

const EducationSection = () => {
  return (
    <EditorialSection label="Education">
      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline"
          >
            <span className="md:col-span-4 text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
              {edu.period}
            </span>
            <div className="md:col-span-8">
              <h3 className="text-lg font-medium text-foreground">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {edu.institution} · {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
};

export default EducationSection;

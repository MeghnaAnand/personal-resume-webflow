import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Offenburg University",
    location: "Germany 🇩🇪",
    degree: "M.Sc. Information Technology",
    period: "2016–2019",
  },
  {
    institution: "KIIT University",
    location: "India 🇮🇳",
    degree: "B.Tech Computer Science",
    period: "2008–2012",
  },
];

const EducationSection = () => {
  return (
    <section>
      <h2 className="text-sm font-bold mb-1 text-primary">Education 🎓</h2>
      <div className="space-y-1.5">
        {education.map((edu, i) => (
          <div key={i} className="bg-card rounded-md p-2 border">
            <div className="flex items-center gap-1 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-primary" />
              {edu.degree}
            </div>
            <p className="text-[11px] text-muted-foreground">{edu.institution}</p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
              <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{edu.location}</span>
              <span className="flex items-center gap-0.5"><Calendar className="w-3 h-3" />{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

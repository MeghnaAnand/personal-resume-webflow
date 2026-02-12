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
      <h2 className="text-2xl font-bold mb-4 text-primary">Education 🎓</h2>
      <div className="space-y-3">
        {education.map((edu, i) => (
          <div key={i} className="bg-card rounded-lg p-4 border">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <GraduationCap className="w-4 h-4 text-primary" />
              {edu.degree}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{edu.location}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

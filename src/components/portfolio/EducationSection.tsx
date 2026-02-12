import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Offenburg University of Applied Sciences",
    location: "Offenburg, Germany 🇩🇪",
    degree: "Masters in Information Technology",
    period: "2016–2019",
  },
  {
    institution: "Kalinga Institute of Industrial Technology",
    location: "Bhubaneswar, India 🇮🇳",
    degree: "Bachelor's in Computer Science and Engineering",
    period: "2008–2012",
  },
];

const EducationSection = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold mb-2">Education 🎓</h2>
      <p className="text-muted-foreground mb-8">Where I learned the foundations</p>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary text-lg">
                <GraduationCap className="w-5 h-5" />
                {edu.degree}
              </CardTitle>
              <p className="text-base font-semibold text-foreground/80">{edu.institution}</p>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  {edu.location}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {edu.period}
                </span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

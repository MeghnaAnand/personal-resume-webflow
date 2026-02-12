import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Offenburg University of Applied Sciences",
    location: "Germany 🇩🇪",
    degree: "M.Sc. Information Technology",
    period: "2016–2019",
  },
  {
    institution: "Kalinga Institute of Industrial Technology",
    location: "India 🇮🇳",
    degree: "B.Tech Computer Science & Engineering",
    period: "2008–2012",
  },
];

const EducationSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Education
        </motion.p>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-foreground/60" />
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

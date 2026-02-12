import { motion } from "framer-motion";

const volunteering = [
  { emoji: "📊", org: "Data & AI Stockholm", desc: "Content Creation for Data Engineering project using PySpark data quality pipeline." },
  { emoji: "🌍", org: "Women in Tech Global Conference® 2026", desc: "Social Media Advocate." },
  { emoji: "📝", org: "Stockholm Dual Career Network", desc: "Content Creation for websites and monthly newsletters." },
];

const VolunteeringSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Volunteering
        </motion.p>

        <div className="space-y-4">
          {volunteering.map((v, index) => (
            <motion.div
              key={v.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4"
            >
              <span className="text-2xl">{v.emoji}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{v.org}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;

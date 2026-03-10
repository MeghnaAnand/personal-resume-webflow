import { motion } from "framer-motion";

const volunteering = [
  { emoji: "📊", org: "Data & AI Stockholm", period: "Aug 2025 – Feb 2026", desc: ["Content coordination for Data Engineering project using PySpark data quality pipeline", "Speaker outreach for meetups and community events", "Community building and engagement initiatives"] },
  { emoji: "🌍", org: "Women in Tech Global Conference® 2026", period: "Feb 2026 – Present", desc: ["Social Media Advocate."] },
  { emoji: "📝", org: "Stockholm Dual Career Network", period: "Oct 2019 – Oct 2020", desc: ["Content Creation for websites and monthly newsletters", "Community building"] },
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
                <p className="text-xs text-muted-foreground mb-1">{v.period}</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-0.5">
                  {v.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;

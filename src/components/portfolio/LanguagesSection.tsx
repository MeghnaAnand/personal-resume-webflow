import { motion } from "framer-motion";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-10"
        >
          Languages
        </motion.p>

        <div className="grid grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm text-center"
            >
              <span className="text-3xl mb-3 block">{lang.emoji}</span>
              <p className="font-semibold text-foreground">{lang.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;

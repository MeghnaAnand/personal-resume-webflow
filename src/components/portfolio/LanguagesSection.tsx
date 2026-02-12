import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary">Languages 🗣️</h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <Badge key={lang.name} variant="secondary" className="text-sm px-4 py-2">
            {lang.emoji} {lang.name} — {lang.level}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;

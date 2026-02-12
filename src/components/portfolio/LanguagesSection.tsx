import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-primary">Languages 🗣️</h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <Badge key={lang.name} variant="secondary" className="text-xs px-3 py-1.5">
            {lang.emoji} {lang.name} — {lang.level}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;

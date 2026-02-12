import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section>
      <h2 className="text-sm font-bold mb-1 text-primary">Languages 🗣️</h2>
      <div className="flex flex-wrap gap-1.5">
        {languages.map((lang) => (
          <Badge key={lang.name} variant="secondary" className="text-[11px] px-2 py-1">
            {lang.emoji} {lang.name} — {lang.level}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;

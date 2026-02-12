import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold mb-2">Languages 🗣️</h2>
      <p className="text-muted-foreground mb-6">I speak human too!</p>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <Badge key={lang.name} variant="secondary" className="text-base px-5 py-2.5">
            {lang.emoji} {lang.name} — {lang.level}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;

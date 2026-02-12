import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "English", level: "Professional", emoji: "🇬🇧" },
  { name: "German", level: "Intermediate", emoji: "🇩🇪" },
  { name: "Swedish", level: "Beginner", emoji: "🇸🇪" },
];

const LanguagesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Languages 🗣️</h2>
        <p className="text-muted-foreground mb-8 text-lg">I speak human too!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang) => (
            <Badge key={lang.name} variant="secondary" className="text-base px-6 py-3">
              {lang.emoji} {lang.name} — {lang.level}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;

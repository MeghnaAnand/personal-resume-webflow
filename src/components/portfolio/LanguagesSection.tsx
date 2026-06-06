import EditorialSection from "./EditorialSection";

const languages = [
  { name: "English", level: "Professional" },
  { name: "German", level: "Intermediate" },
  { name: "Swedish", level: "Beginner" },
];

const LanguagesSection = () => {
  return (
    <EditorialSection label="Languages">
      <ul className="space-y-3">
        {languages.map((lang) => (
          <li
            key={lang.name}
            className="flex items-baseline justify-between border-b border-border pb-3 last:border-0"
          >
            <span className="text-base text-foreground font-medium">{lang.name}</span>
            <span className="text-sm text-muted-foreground">{lang.level}</span>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
};

export default LanguagesSection;

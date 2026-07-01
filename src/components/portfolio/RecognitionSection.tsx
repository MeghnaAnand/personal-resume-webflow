import EditorialSection from "./EditorialSection";

const recognitions = [
  {
    title: "AWS Activate",
    desc: "Accepted for cloud infrastructure support powering AI product development.",
  },
  {
    title: "2nd Prize · SheBuilds Buildathon",
    desc: "AutomationMind — gamified automation learning platform shipped end-to-end during the hackathon.",
  },
  {
    title: "n8n Certified · Level 1 & 2",
    desc: "Applied directly to live personal automation projects and workflows.",
  },
  {
    title: "Flvent AI Fluency Program",
    desc: "Structured training in practical AI adoption, workflow integration, and responsible AI use.",
  },
];

const RecognitionSection = () => {
  return (
    <EditorialSection label="Recognition & Programs">
      <ul className="space-y-8">
        {recognitions.map((r) => (
          <li key={r.title} className="flex gap-6">
            <div className="pt-2 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{r.title}</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
                {r.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </EditorialSection>
  );
};

export default RecognitionSection;

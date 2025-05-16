
import { useLanguage } from "@/contexts/LanguageContext";

interface OtherSkillsSectionProps {
  skills: string[];
}

const OtherSkillsSection = ({ skills }: OtherSkillsSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-gradient mb-6">{t("otherSkills")}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div key={i} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkillsSection;

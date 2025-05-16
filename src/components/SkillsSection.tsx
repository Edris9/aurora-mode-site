
import SkillAccordion from "@/components/SkillAccordion";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillItem {
  name: string;
  description: string;
}

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="animate-scale-in">
      <h2 className="text-2xl font-bold text-gradient mb-6">{t("skills")}</h2>
      <SkillAccordion skills={skills} />
    </section>
  );
};

export default SkillsSection;

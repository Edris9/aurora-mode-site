
import SkillAccordion from "@/components/SkillAccordion";

interface SkillItem {
  name: string;
  description: string;
}

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="animate-scale-in">
      <h2 className="text-2xl font-bold text-gradient mb-6">Programmeringskunskaper</h2>
      <SkillAccordion skills={skills} />
    </section>
  );
};

export default SkillsSection;

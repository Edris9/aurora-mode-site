
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillItem {
  name: string;
  description: string;
}

interface SkillAccordionProps {
  skills: SkillItem[];
}

const SkillAccordion = ({ skills }: SkillAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-2">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="border border-border rounded-lg overflow-hidden card-lift"
        >
          <button
            className="w-full p-4 flex justify-between items-center text-left font-medium"
            onClick={() => toggleAccordion(index)}
          >
            <span>{skill.name}</span>
            <ChevronDown 
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                activeIndex === index ? "transform rotate-180" : ""
              )}
            />
          </button>
          <div 
            className={cn(
              "overflow-hidden transition-all duration-300",
              activeIndex === index 
                ? "max-h-[200px] opacity-100" 
                : "max-h-0 opacity-0"
            )}
          >
            <div className="p-4 pt-0 border-t border-border">
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillAccordion;

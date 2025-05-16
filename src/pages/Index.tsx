
import { useState, useEffect } from "react";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import OtherSkillsSection from "@/components/OtherSkillsSection";
import VisitorCounter from "@/components/VisitorCounter";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  programmingSkills, 
  education, 
  experience, 
  languages, 
  aboutMe, 
  contactInfo 
} from "@/data/profileData";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  // This ensures theme-related code only runs after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const otherSkills = ["HTML", "CSS", "PYTHON", "LaTeX", "SQL", "KUBERNETES", "DOCKER", "AGIL", 
    "TKINTER", "SEABORN", "MATPLOTLIB", "SKLEARN", "LSTM", "TENSORFLOW", 
    "PYTORCH", "Gherkin", "Behave", "Playwright", "BDD", "TDD", "n8n", 
    "MCP", "Github", "Selenium", "Microsoft 365", "Blender", "ADOBE"];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <VisitorCounter />
          <LanguageSelector />
        </div>
        
        <ProfileSection 
          name="Edris Kohestani" 
          title={t("pythonDeveloperTitle")} 
          imageSrc="/lovable-uploads/33f6fa3c-3875-4821-8c9a-481405473ee1.png" 
        />
        
        <div className="space-y-20 mt-12">
          {/* About Me Section */}
          <AboutSection aboutText={aboutMe} />
          
          {/* Experience Section */}
          <section className="animate-scale-in">
            <CVSection title={t("experience")} items={experience} />
          </section>
          
          {/* Programming Skills Section */}
          <SkillsSection skills={programmingSkills} />
          
          {/* Education Section */}
          <section className="animate-scale-in">
            <CVSection title={t("education")} items={education} />
          </section>
          
          {/* Languages & Other Skills Sections */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-scale-in">
            <CVSection title={t("languages")} items={languages} />
            <OtherSkillsSection skills={otherSkills} />
          </section>
          
          {/* Contact Section */}
          <section className="animate-scale-in">
            <ContactSection contactInfo={contactInfo} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;

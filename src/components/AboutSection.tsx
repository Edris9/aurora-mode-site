
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface AboutSectionProps {
  aboutText: string;
}

const AboutSection = ({ aboutText }: AboutSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="animate-scale-in">
      <Card className="overflow-hidden border-border hover:border-primary transition-colors duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">{t("about")}</h2>
          <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t("driverLicense")}</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t("problemSolver")}</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t("creative")}</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t("plantGrowing")}</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{t("exercise")}</div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutSection;

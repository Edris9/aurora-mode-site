
import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  aboutText: string;
}

const AboutSection = ({ aboutText }: AboutSectionProps) => {
  return (
    <section className="animate-scale-in">
      <Card className="overflow-hidden border-border hover:border-primary transition-colors duration-300">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gradient mb-4">Om mig</h2>
          <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Körkortsinnehavare AM/B</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Problemlösare</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Kreativ</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Växtodling</div>
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Träning</div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutSection;

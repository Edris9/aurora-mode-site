
import { useState, useEffect } from "react";
import ProfileSection from "@/components/ProfileSection";
import SkillAccordion from "@/components/SkillAccordion";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // This ensures theme-related code only runs after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const programmingSkills = [
    {
      name: "n8n",
      description: "Jag har skapat en app som kopplar Telegram till min data genom API och den går genom min data och när user skickar en förfrågan då en ChatGPT API svarar, baserat på vad user skriver och vad jag har för data."
    },
    {
      name: "Python",
      description: "Erfaren Python-utvecklare med fokus på dataanalys, automation och AI-integrationer. Jag har arbetat med många bibliotek som TensorFlow, PyTorch, Scikit-learn, och har erfarenhet av att bygga och implementera AI-modeller."
    },
    {
      name: "AI & Machine Learning",
      description: "Jag har utvecklat AI-modeller för att förutsäga leveranser och optimera resursplanering. Jag har erfarenhet av LSTM, TensorFlow, PyTorch och andra ML-bibliotek för att bygga och träna modeller."
    },
    {
      name: "Webb & Databehandling",
      description: "Jag har erfarenhet av HTML, CSS, SQL, Docker, Kubernetes och andra teknologier för webbutveckling och datahantering. Jag arbetar också med CI/CD-processer och testning genom BDD, TDD med verktyg som Playwright och Behave."
    },
    {
      name: "Övriga teknologier",
      description: "Jag har erfarenhet av Tkinter för GUI-utveckling, Seaborn och Matplotlib för datavisualisering, GitHub för versionshantering, och Selenium för webbautomation."
    }
  ];

  const education = [
    {
      title: "Python Utvecklare med inriktning AI",
      organization: "Göteborg",
      period: "2023 - 2025",
      description: "Utbildning med fokus på Python-programmering och AI-tillämpningar."
    },
    {
      title: "CI/CD med Python",
      organization: "Göteborg",
      period: "2024 - 2025",
      description: "Fördjupning inom kontinuerlig integration och kontinuerlig leverans med Python."
    },
    {
      title: "El och Energi program",
      organization: "Göteborg",
      period: "2018 - 2021",
      description: "Utbildning inom el och energi."
    },
    {
      title: "Språkintroduktion svenska",
      organization: "Luleå",
      period: "2016 - 2017",
      description: "Introduktion till svenska språket."
    }
  ];

  const experience = [
    {
      title: "AI/ML Utvecklare",
      organization: "KVD Bil",
      period: "2024",
      description: "Utvecklade en AI-modell för att förutsäga leveranser till olika städer och anläggningar. Modellen syftade till att optimera resursplaneringen och reducera kostnader genom bättre förberedelser inför inkommande transporter.",
      items: [
        "Byggde prediktionsmodeller med LSTM och andra ML-tekniker",
        "Dataanalys för att identifiera mönster i leveransdata",
        "Implementering av modellen i produktionsmiljö"
      ]
    },
    {
      title: "Montör",
      organization: "Exertis Captech",
      period: "2021 - 2025",
      description: "Som montör på Exertis Captech planerade jag dator byggen och granskade komponenter för att säkerställa kvalitet och kompatibilitet.",
      items: [
        "Utförde prestanda tester med olika program",
        "Installerade tjänster anpassade efter kundens behov",
        "Kvalitetssäkring och felsökning"
      ]
    },
    {
      title: "VD/Ägare",
      organization: "RECORD",
      period: "2019 - 2020",
      description: "Jag drev en startup med fokus på att hjälpa små företag att stärka sin digitala närvaro genom skräddarsydd bild- och videoreklam.",
      items: [
        "Kontaktade företag inom olika branscher",
        "Skapade visuellt innehåll för ökad digital synlighet",
        "Kundanpassade marknadsföringsstrategier"
      ]
    },
    {
      title: "Vårdbiträde",
      organization: "Hemtjänst och äldreboende",
      period: "2017 - 2025",
      description: "Jag har arbetat extra inom hemtjänst och på äldreboende, där jag har bistått äldre med daglig omvårdnad och trivsel för att förbättra deras livskvalitet."
    }
  ];

  const languages = [
    {
      title: "Svenska",
      description: "Professionell nivå"
    },
    {
      title: "Engelska",
      description: "Flytande i tal och skrift"
    },
    {
      title: "Dari",
      description: "Modersmål"
    },
    {
      title: "Persiska",
      description: "Professionell nivå"
    }
  ];

  const aboutMe = "Min resa i Sverige började den 29:e november 2016, och sedan dess har jag drivits av en stark vilja att utvecklas och ta vara på nya möjligheter. Jag är målmedveten, nyfiken och har en positiv inställning till utmaningar. Med ett stort intresse för AI och programmering strävar jag efter att utveckla innovativa AI-modeller. Utöver mitt tekniska engagemang uppskattar jag samarbete och problemlösning. Jag har även en passion för växtodling och träning, vilket speglar min kreativitet.";

  const contactInfo = {
    email: "edriskohestani1010@gmail.com",
    phone: "0739387526",
    location: "Göteborg",
    linkedin: "STUDENT PÅ PLUSHÖG SKOLAN"
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <ProfileSection 
          name="Edris Kohestani" 
          title="Python Utvecklare & AI Expert" 
          imageSrc="/lovable-uploads/33f6fa3c-3875-4821-8c9a-481405473ee1.png" 
        />
        
        <div className="space-y-20 mt-12">
          {/* About Me Section */}
          <section className="animate-scale-in">
            <Card className="overflow-hidden border-border hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Om mig</h2>
                <p className="text-muted-foreground leading-relaxed">{aboutMe}</p>
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
          
          {/* Experience Section */}
          <section className="animate-scale-in">
            <CVSection title="Erfarenhet" items={experience} />
          </section>
          
          {/* Programming Skills Section */}
          <section className="animate-scale-in">
            <h2 className="text-2xl font-bold text-gradient mb-6">Programmeringskunskaper</h2>
            <SkillAccordion skills={programmingSkills} />
          </section>
          
          {/* Education Section */}
          <section className="animate-scale-in">
            <CVSection title="Utbildning" items={education} />
          </section>
          
          {/* Languages & Other Skills Sections */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-scale-in">
            <CVSection title="Språk" items={languages} />
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-gradient mb-6">Övrig Kompetens</h2>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "PYTHON", "LaTeX", "SQL", "KUBERNETES", "DOCKER", "AGIL", 
                  "TKINTER", "SEABORN", "MATPLOTLIB", "SKLEARN", "LSTM", "TENSORFLOW", 
                  "PYTORCH", "Gherkin", "Behave", "Playwright", "BDD", "TDD", "n8n", 
                  "MCP", "Github", "Selenium", "Microsoft 365", "Blender", "ADOBE"].map((skill, i) => (
                  <div key={i} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
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

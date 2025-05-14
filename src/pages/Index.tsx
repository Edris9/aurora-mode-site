
import { useState, useEffect } from "react";
import ProfileSection from "@/components/ProfileSection";
import SkillAccordion from "@/components/SkillAccordion";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";

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
      description: "Erfaren Python-utvecklare med fokus på dataanalys, automation och AI-integrationer."
    },
    {
      name: "JavaScript & React",
      description: "Utvecklat moderna webbapplikationer med fokus på användarvänlighet och prestanda."
    },
    {
      name: "AI & Machine Learning",
      description: "Integrerat olika AI-tjänster och byggt egna maskininlärningsmodeller för praktiska applikationer."
    }
  ];

  const education = [
    {
      title: "AI och Maskininlärning",
      organization: "KTH",
      period: "2020 - 2022",
      description: "Fördjupningskurs i artificiell intelligens med fokus på praktiska tillämpningar."
    },
    {
      title: "Datavetenskap",
      organization: "Stockholms Universitet",
      period: "2018 - 2020",
      description: "Grundläggande och avancerade kurser i programmering, algoritmer och datastrukturer."
    }
  ];

  const experience = [
    {
      title: "AI-utvecklare",
      organization: "TechInnovate AB",
      period: "2022 - nuvarande",
      description: "Utvecklar och implementerar AI-lösningar för företagets kunder.",
      items: [
        "Byggt chatbots med GPT integrationer",
        "Utvecklat automatiserade dataanalyslösningar",
        "Skapat kundanpassade AI-verktyg"
      ]
    },
    {
      title: "Systemutvecklare",
      organization: "Digital Solutions",
      period: "2020 - 2022",
      description: "Arbetade med fullstack-utveckling av webbapplikationer.",
      items: [
        "Frontend-utveckling med React",
        "Backend-utveckling med Node.js och Python",
        "Databasdesign och implementering"
      ]
    }
  ];

  const languages = [
    {
      title: "Svenska",
      description: "Modersmål"
    },
    {
      title: "Engelska",
      description: "Flytande i tal och skrift"
    },
    {
      title: "Tyska",
      description: "Grundläggande kunskaper"
    }
  ];

  const contactInfo = {
    email: "email@example.com",
    phone: "+46 70 123 45 67",
    location: "Stockholm, Sverige",
    github: "github-username",
    linkedin: "linkedin-username"
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <ProfileSection 
          name="Förnamn Efternamn" 
          title="AI utvecklare" 
          imageSrc="/placeholder.svg" 
        />
        
        <div className="space-y-16 mt-12">
          <section className="animate-scale-in">
            <h2 className="text-2xl font-bold text-gradient mb-6">Programmeringskunskaper</h2>
            <SkillAccordion skills={programmingSkills} />
          </section>
          
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-scale-in">
            <CVSection title="Utbildning" items={education} />
            <CVSection title="Erfarenhet" items={experience} />
          </section>
          
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-scale-in">
            <CVSection title="Språk" items={languages} />
            <ContactSection contactInfo={contactInfo} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;

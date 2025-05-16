
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "sv" | "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations for the entire site
const translations: Record<Language, Record<string, string>> = {
  sv: {
    // General
    "language": "Språk",
    "visitors": "besökare",
    
    // Sections
    "about": "Om Mig",
    "experience": "Erfarenhet",
    "education": "Utbildning",
    "skills": "Kunskaper",
    "languages": "Språk",
    "otherSkills": "Andra Kunskaper",
    "contact": "Kontakt",
    
    // Profile
    "pythonDeveloperTitle": "Python Utvecklare & AI Expert",
    
    // About section
    "aboutText": "Min resa i Sverige började den 29:e november 2016, och sedan dess har jag drivits av en stark vilja att utvecklas och ta vara på nya möjligheter. Jag är målmedveten, nyfiken och har en positiv inställning till utmaningar. Med ett stort intresse för AI och programmering strävar jag efter att utveckla innovativa AI-modeller. Utöver mitt tekniska engagemang uppskattar jag samarbete och problemlösning. Jag har även en passion för växtodling och träning, vilket speglar min kreativitet.",
    "problemSolver": "Problemlösare",
    "creative": "Kreativ",
    "plantGrowing": "Växtodling",
    "exercise": "Träning",
    "driverLicense": "Körkortsinnehavare AM/B",
    
    // Contact form
    "sendMessage": "Skicka ett meddelande",
    "name": "Namn",
    "email": "E-post",
    "message": "Meddelande",
    "send": "Skicka",
    "sending": "Skickar...",
    "contactQuestion": "Har du en fråga eller vill diskutera ett potentiellt samarbete? Fyll i formuläret eller kontakta mig direkt via informationen nedan.",
  },
  en: {
    // General
    "language": "Language",
    "visitors": "visitors",
    
    // Sections
    "about": "About Me",
    "experience": "Experience",
    "education": "Education",
    "skills": "Skills",
    "languages": "Languages",
    "otherSkills": "Other Skills",
    "contact": "Contact",
    
    // Profile
    "pythonDeveloperTitle": "Python Developer & AI Expert",
    
    // About section
    "aboutText": "My journey in Sweden began on November 29, 2016, and since then I have been driven by a strong desire to develop and seize new opportunities. I am determined, curious, and have a positive attitude towards challenges. With a great interest in AI and programming, I strive to develop innovative AI models. Beyond my technical engagement, I appreciate collaboration and problem-solving. I also have a passion for plant cultivation and exercise, which reflects my creativity.",
    "problemSolver": "Problem Solver",
    "creative": "Creative",
    "plantGrowing": "Plant Growing",
    "exercise": "Exercise",
    "driverLicense": "Driver's License AM/B",
    
    // Contact form
    "sendMessage": "Send a message",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send",
    "sending": "Sending...",
    "contactQuestion": "Have a question or want to discuss a potential collaboration? Fill out the form or contact me directly via the information below.",
  },
  de: {
    // General
    "language": "Sprache",
    "visitors": "Besucher",
    
    // Sections
    "about": "Über Mich",
    "experience": "Erfahrung",
    "education": "Ausbildung",
    "skills": "Fähigkeiten",
    "languages": "Sprachen",
    "otherSkills": "Andere Fähigkeiten",
    "contact": "Kontakt",
    
    // Profile
    "pythonDeveloperTitle": "Python Entwickler & KI Experte",
    
    // About section
    "aboutText": "Meine Reise in Schweden begann am 29. November 2016, und seitdem bin ich von einem starken Willen getrieben, mich weiterzuentwickeln und neue Möglichkeiten zu nutzen. Ich bin zielstrebig, neugierig und habe eine positive Einstellung zu Herausforderungen. Mit einem großen Interesse an KI und Programmierung strebe ich danach, innovative KI-Modelle zu entwickeln. Neben meinem technischen Engagement schätze ich Zusammenarbeit und Problemlösung. Ich habe auch eine Leidenschaft für Pflanzenbau und Sport, was meine Kreativität widerspiegelt.",
    "problemSolver": "Problemlöser",
    "creative": "Kreativ",
    "plantGrowing": "Pflanzenzucht",
    "exercise": "Training",
    "driverLicense": "Führerschein AM/B",
    
    // Contact form
    "sendMessage": "Nachricht senden",
    "name": "Name",
    "email": "E-Mail",
    "message": "Nachricht",
    "send": "Senden",
    "sending": "Senden...",
    "contactQuestion": "Haben Sie eine Frage oder möchten Sie eine potenzielle Zusammenarbeit besprechen? Füllen Sie das Formular aus oder kontaktieren Sie mich direkt über die untenstehenden Informationen.",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to Swedish
  const [language, setLanguage] = useState<Language>("sv");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

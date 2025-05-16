
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
    "language": "Språk",
    "visitors": "besökare",
    "about": "Om Mig",
    "experience": "Erfarenhet",
    "education": "Utbildning",
    "skills": "Kunskaper",
    "languages": "Språk",
    "otherSkills": "Andra Kunskaper",
    "contact": "Kontakt",
    "sendMessage": "Skicka ett meddelande",
    "name": "Namn",
    "email": "E-post",
    "message": "Meddelande",
    "send": "Skicka",
    "contactQuestion": "Har du en fråga eller vill diskutera ett potentiellt samarbete? Fyll i formuläret eller kontakta mig direkt via informationen nedan.",
    "pythonDeveloperTitle": "Python Utvecklare & AI Expert",
    "problemSolver": "Problemlösare",
    "creative": "Kreativ",
    "plantGrowing": "Växtodling",
    "exercise": "Träning",
    "driverLicense": "Körkortsinnehavare AM/B",
    "sending": "Skickar..."
  },
  en: {
    "language": "Language",
    "visitors": "visitors",
    "about": "About Me",
    "experience": "Experience",
    "education": "Education",
    "skills": "Skills",
    "languages": "Languages",
    "otherSkills": "Other Skills",
    "contact": "Contact",
    "sendMessage": "Send a message",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send",
    "contactQuestion": "Have a question or want to discuss a potential collaboration? Fill out the form or contact me directly via the information below.",
    "pythonDeveloperTitle": "Python Developer & AI Expert",
    "problemSolver": "Problem Solver",
    "creative": "Creative",
    "plantGrowing": "Plant Growing",
    "exercise": "Exercise",
    "driverLicense": "Driver's License AM/B",
    "sending": "Sending..."
  },
  de: {
    "language": "Sprache",
    "visitors": "Besucher",
    "about": "Über Mich",
    "experience": "Erfahrung",
    "education": "Ausbildung",
    "skills": "Fähigkeiten",
    "languages": "Sprachen",
    "otherSkills": "Andere Fähigkeiten",
    "contact": "Kontakt",
    "sendMessage": "Nachricht senden",
    "name": "Name",
    "email": "E-Mail",
    "message": "Nachricht",
    "send": "Senden",
    "contactQuestion": "Haben Sie eine Frage oder möchten Sie eine potenzielle Zusammenarbeit besprechen? Füllen Sie das Formular aus oder kontaktieren Sie mich direkt über die untenstehenden Informationen.",
    "pythonDeveloperTitle": "Python Entwickler & KI Experte",
    "problemSolver": "Problemlöser",
    "creative": "Kreativ",
    "plantGrowing": "Pflanzenzucht",
    "exercise": "Training",
    "driverLicense": "Führerschein AM/B",
    "sending": "Senden..."
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

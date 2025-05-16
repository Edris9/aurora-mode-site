
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
    "visitor": "besökare",
    "country": "Sweden",
    
    // Sections
    "about": "Om Mig",
    "experience": "Erfarenhet",
    "education": "Utbildning",
    "skills": "Kunskaper",
    "languages": "Språk",
    "otherSkills": "Andra Kunskaper",
    "contact": "Kontakt",
    
    // Profile
    "name": "Edris Kohestani",
    "pythonDeveloperTitle": "Python Utvecklare & AI Expert",
    
    // About section
    "aboutText": "Min resa i Sverige började den 29:e november 2016, och sedan dess har jag drivits av en stark vilja att utvecklas och ta vara på nya möjligheter. Jag är målmedveten, nyfiken och har en positiv inställning till utmaningar. Med ett stort intresse för AI och programmering strävar jag efter att utveckla innovativa AI-modeller. Utöver mitt tekniska engagemang uppskattar jag samarbete och problemlösning. Jag har även en passion för växtodling och träning, vilket speglar min kreativitet.",
    "problemSolver": "Problemlösare",
    "creative": "Kreativ",
    "plantGrowing": "Växtodling",
    "exercise": "Träning",
    "driverLicense": "Körkortsinnehavare AM/B",
    
    // Experience
    "aimlDeveloper": "AI/ML Utvecklare",
    "kvdBil": "KVD Bil",
    "aiModelDescription": "Utvecklade en AI-modell för att förutsäga leveranser till olika städer och anläggningar. Modellen syftade till att optimera resursplaneringen och reducera kostnader genom bättre förberedelser inför inkommande transporter.",
    "builtPredictionModels": "Byggde prediktionsmodeller med LSTM och andra ML-tekniker",
    "dataAnalysis": "Dataanalys för att identifiera mönster i leveransdata",
    "modelImplementation": "Implementering av modellen i produktionsmiljö",
    
    "assembler": "Montör",
    "exertisCaptech": "Exertis Captech",
    "assemblerDescription": "Som montör på Exertis Captech planerade jag dator byggen och granskade komponenter för att säkerställa kvalitet och kompatibilitet.",
    "performanceTesting": "Utförde prestanda tester med olika program",
    "installedServices": "Installerade tjänster anpassade efter kundens behov",
    "qualityAssurance": "Kvalitetssäkring och felsökning",
    
    "ceoOwner": "VD/Ägare",
    "record": "RECORD",
    "startupDescription": "Jag drev en startup med fokus på att hjälpa små företag att stärka sin digitala närvaro genom skräddarsydd bild- och videoreklam.",
    "contactedCompanies": "Kontaktade företag inom olika branscher",
    "createdVisualContent": "Skapade visuellt innehåll för ökad digital synlighet",
    "customizedStrategies": "Kundanpassade marknadsföringsstrategier",
    
    "careAssistant": "Vårdbiträde",
    "homecare": "Hemtjänst och äldreboende",
    "careAssistantDescription": "Jag har arbetat extra inom hemtjänst och på äldreboende, där jag har bistått äldre med daglig omvårdnad och trivsel för att förbättra deras livskvalitet.",
    
    // Education
    "pythonAIDeveloper": "Python Utvecklare med inriktning AI",
    "gothenburg": "Göteborg",
    "pythonEducationDescription": "Utbildning med fokus på Python-programmering och AI-tillämpningar.",
    
    "cicdPython": "CI/CD med Python",
    "cicdDescription": "Fördjupning inom kontinuerlig integration och kontinuerlig leverans med Python.",
    
    "electricityProgram": "El och Energi program",
    "electricityDescription": "Utbildning inom el och energi.",
    
    "swedishIntroduction": "Språkintroduktion svenska",
    "lulea": "Luleå",
    "swedishIntroDescription": "Introduktion till svenska språket.",
    
    // Language skills
    "swedish": "Svenska",
    "professionalLevel": "Professionell nivå",
    "english": "Engelska",
    "fluentLevel": "Flytande i tal och skrift",
    "dari": "Dari",
    "nativeLanguage": "Modersmål",
    "persian": "Persiska",
    
    // Technical competence
    "n8n": "n8n",
    "python": "Python",
    "aiMachineLearning": "AI & Machine Learning",
    "webDataProcessing": "Webb & Databehandling",
    "otherTechnologies": "Övriga teknologier",
    
    // Contact form
    "sendMessage": "Skicka ett meddelande",
    "name": "Namn",
    "email": "E-post",
    "message": "Meddelande",
    "send": "Skicka",
    "sending": "Skickar...",
    "contactQuestion": "Har du en fråga eller vill diskutera ett potentiellt samarbete? Fyll i formuläret eller kontakta mig direkt via informationen nedan.",
    
    // Contact information
    "emailAddress": "edriskohestani1010@gmail.com",
    "phone": "0739387526",
    "location": "Göteborg",
    "github": "GitHub",
    "linkedin": "LinkedIn"
  },
  
  en: {
    // General
    "language": "Language",
    "visitors": "visitors",
    "visitor": "visitor",
    "country": "Sweden",
    
    // Sections
    "about": "About Me",
    "experience": "Experience",
    "education": "Education",
    "skills": "Skills",
    "languages": "Languages",
    "otherSkills": "Other Skills",
    "contact": "Contact",
    
    // Profile
    "name": "Edris Kohestani",
    "pythonDeveloperTitle": "Python Developer & AI Expert",
    
    // About section
    "aboutText": "My journey in Sweden began on November 29, 2016, and since then I have been driven by a strong desire to develop and seize new opportunities. I am determined, curious, and have a positive attitude towards challenges. With a great interest in AI and programming, I strive to develop innovative AI models. Beyond my technical engagement, I appreciate collaboration and problem-solving. I also have a passion for plant cultivation and exercise, which reflects my creativity.",
    "problemSolver": "Problem Solver",
    "creative": "Creative",
    "plantGrowing": "Plant Growing",
    "exercise": "Exercise",
    "driverLicense": "Driver's License AM/B",
    
    // Experience
    "aimlDeveloper": "AI/ML Developer",
    "kvdBil": "KVD Bil",
    "aiModelDescription": "Developed an AI model to predict deliveries to various cities and facilities. The model aimed to optimize resource planning and reduce costs through better preparation for incoming shipments.",
    "builtPredictionModels": "Built prediction models with LSTM and other ML techniques",
    "dataAnalysis": "Data analysis to identify patterns in delivery data",
    "modelImplementation": "Implementation of the model in a production environment",
    
    "assembler": "Assembler",
    "exertisCaptech": "Exertis Captech",
    "assemblerDescription": "As an assembler at Exertis Captech, I planned computer builds and reviewed components to ensure quality and compatibility.",
    "performanceTesting": "Performed performance tests with various programs",
    "installedServices": "Installed services customized to client needs",
    "qualityAssurance": "Quality assurance and troubleshooting",
    
    "ceoOwner": "CEO/Owner",
    "record": "RECORD",
    "startupDescription": "I ran a startup focused on helping small businesses strengthen their digital presence through customized image and video advertising.",
    "contactedCompanies": "Contacted companies across various industries",
    "createdVisualContent": "Created visual content for increased digital visibility",
    "customizedStrategies": "Customized marketing strategies",
    
    "careAssistant": "Care Assistant",
    "homecare": "Home Care and Elderly Care",
    "careAssistantDescription": "I have worked part-time in home care and at nursing homes, where I have assisted the elderly with daily care and well-being to improve their quality of life.",
    
    // Education
    "pythonAIDeveloper": "Python Developer with AI Focus",
    "gothenburg": "Gothenburg",
    "pythonEducationDescription": "Education focusing on Python programming and AI applications.",
    
    "cicdPython": "CI/CD with Python",
    "cicdDescription": "Advanced study in continuous integration and continuous delivery with Python.",
    
    "electricityProgram": "Electricity and Energy Program",
    "electricityDescription": "Education in electricity and energy.",
    
    "swedishIntroduction": "Swedish Language Introduction",
    "lulea": "Luleå",
    "swedishIntroDescription": "Introduction to the Swedish language.",
    
    // Language skills
    "swedish": "Swedish",
    "professionalLevel": "Professional level",
    "english": "English",
    "fluentLevel": "Fluent in speech and writing",
    "dari": "Dari",
    "nativeLanguage": "Native language",
    "persian": "Persian",
    
    // Technical competence
    "n8n": "n8n",
    "python": "Python",
    "aiMachineLearning": "AI & Machine Learning",
    "webDataProcessing": "Web & Data Processing",
    "otherTechnologies": "Other Technologies",
    
    // Contact form
    "sendMessage": "Send a message",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send",
    "sending": "Sending...",
    "contactQuestion": "Have a question or want to discuss a potential collaboration? Fill out the form or contact me directly via the information below.",
    
    // Contact information
    "emailAddress": "edriskohestani1010@gmail.com",
    "phone": "0739387526",
    "location": "Gothenburg",
    "github": "GitHub",
    "linkedin": "LinkedIn"
  },
  
  de: {
    // General
    "language": "Sprache",
    "visitors": "Besucher",
    "visitor": "Besucher",
    "country": "Schweden",
    
    // Sections
    "about": "Über Mich",
    "experience": "Erfahrung",
    "education": "Ausbildung",
    "skills": "Fähigkeiten",
    "languages": "Sprachen",
    "otherSkills": "Andere Fähigkeiten",
    "contact": "Kontakt",
    
    // Profile
    "name": "Edris Kohestani",
    "pythonDeveloperTitle": "Python Entwickler & AI Experte",
    
    // About section
    "aboutText": "Meine Reise in Schweden begann am 29. November 2016, und seitdem bin ich von einem starken Willen getrieben, mich weiterzuentwickeln und neue Möglichkeiten zu nutzen. Ich bin zielstrebig, neugierig und habe eine positive Einstellung zu Herausforderungen. Mit einem großen Interesse an KI und Programmierung strebe ich danach, innovative KI-Modelle zu entwickeln. Neben meinem technischen Engagement schätze ich Zusammenarbeit und Problemlösung. Ich habe auch eine Leidenschaft für Pflanzenbau und Sport, was meine Kreativität widerspiegelt.",
    "problemSolver": "Problemlöser",
    "creative": "Kreativ",
    "plantGrowing": "Pflanzenzucht",
    "exercise": "Training",
    "driverLicense": "Führerschein AM/B",
    
    // Experience
    "aimlDeveloper": "AI/ML Entwickler",
    "kvdBil": "KVD Bil",
    "aiModelDescription": "Entwickelte ein KI-Modell zur Vorhersage von Lieferungen an verschiedene Städte und Einrichtungen. Das Modell zielte darauf ab, die Ressourcenplanung zu optimieren und Kosten durch bessere Vorbereitung auf eingehende Transporte zu reduzieren.",
    "builtPredictionModels": "Erstellung von Prognosemodellen mit LSTM und anderen ML-Techniken",
    "dataAnalysis": "Datenanalyse zur Identifizierung von Mustern in Lieferdaten",
    "modelImplementation": "Implementierung des Modells in einer Produktionsumgebung",
    
    "assembler": "Monteur",
    "exertisCaptech": "Exertis Captech",
    "assemblerDescription": "Als Monteur bei Exertis Captech plante ich Computerzusammenbauten und überprüfte Komponenten, um Qualität und Kompatibilität sicherzustellen.",
    "performanceTesting": "Durchführung von Leistungstests mit verschiedenen Programmen",
    "installedServices": "Installation von an Kundenbedürfnisse angepassten Diensten",
    "qualityAssurance": "Qualitätssicherung und Fehlerbehebung",
    
    "ceoOwner": "CEO/Inhaber",
    "record": "RECORD",
    "startupDescription": "Ich leitete ein Startup, das sich darauf konzentrierte, kleinen Unternehmen zu helfen, ihre digitale Präsenz durch maßgeschneiderte Bild- und Videowerbung zu stärken.",
    "contactedCompanies": "Kontaktaufnahme mit Unternehmen aus verschiedenen Branchen",
    "createdVisualContent": "Erstellung von visuellem Inhalt für erhöhte digitale Sichtbarkeit",
    "customizedStrategies": "Kundenspezifische Marketingstrategien",
    
    "careAssistant": "Pflegehelfer",
    "homecare": "Häusliche Pflege und Altenpflege",
    "careAssistantDescription": "Ich habe Teilzeit in der häuslichen Pflege und in Pflegeheimen gearbeitet, wo ich älteren Menschen bei der täglichen Pflege und dem Wohlbefinden geholfen habe, um ihre Lebensqualität zu verbessern.",
    
    // Education
    "pythonAIDeveloper": "Python-Entwickler mit KI-Fokus",
    "gothenburg": "Göteborg",
    "pythonEducationDescription": "Ausbildung mit Schwerpunkt auf Python-Programmierung und KI-Anwendungen.",
    
    "cicdPython": "CI/CD mit Python",
    "cicdDescription": "Vertiefte Studien in kontinuierlicher Integration und kontinuierlicher Bereitstellung mit Python.",
    
    "electricityProgram": "Elektrizitäts- und Energieprogramm",
    "electricityDescription": "Ausbildung in Elektrizität und Energie.",
    
    "swedishIntroduction": "Schwedische Spracheinführung",
    "lulea": "Luleå",
    "swedishIntroDescription": "Einführung in die schwedische Sprache.",
    
    // Language skills
    "swedish": "Schwedisch",
    "professionalLevel": "Professionelles Niveau",
    "english": "Englisch",
    "fluentLevel": "Fließend in Wort und Schrift",
    "dari": "Dari",
    "nativeLanguage": "Muttersprache",
    "persian": "Persisch",
    
    // Technical competence
    "n8n": "n8n",
    "python": "Python",
    "aiMachineLearning": "KI & Maschinelles Lernen",
    "webDataProcessing": "Web & Datenverarbeitung",
    "otherTechnologies": "Andere Technologien",
    
    // Contact form
    "sendMessage": "Nachricht senden",
    "name": "Name",
    "email": "E-Mail",
    "message": "Nachricht",
    "send": "Senden",
    "sending": "Senden...",
    "contactQuestion": "Haben Sie eine Frage oder möchten Sie eine potenzielle Zusammenarbeit besprechen? Füllen Sie das Formular aus oder kontaktieren Sie mich direkt über die untenstehenden Informationen.",
    
    // Contact information
    "emailAddress": "edriskohestani1010@gmail.com",
    "phone": "0739387526",
    "location": "Göteborg",
    "github": "GitHub",
    "linkedin": "LinkedIn"
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

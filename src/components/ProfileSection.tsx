
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileSectionProps {
  name: string;
  title: string;
  imageSrc: string;
}

const ProfileSection = ({ name, title, imageSrc = "/placeholder.svg" }: ProfileSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center text-center space-y-4 my-10">
      <div className="relative">
        <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary hover-scale">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-2 -right-2">
          <ThemeToggle />
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
        <h2 className="text-2xl font-semibold text-gradient">{t("pythonDeveloperTitle")}</h2>
      </div>
    </div>
  );
};

export default ProfileSection;

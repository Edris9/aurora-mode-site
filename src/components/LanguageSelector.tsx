
import { Language } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Language className="h-5 w-5 text-primary" />
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as "sv" | "en" | "de")}
      >
        <SelectTrigger className="w-[130px] h-9 border-border">
          <SelectValue placeholder={t("language")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sv">Svenska</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="de">Deutsch</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

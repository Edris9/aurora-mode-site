
import { cn } from "@/lib/utils";

interface CVItem {
  title: string;
  organization?: string;
  period?: string;
  description?: string;
  items?: string[];
}

interface CVSectionProps {
  title: string;
  items: CVItem[];
  className?: string;
}

const CVSection = ({ title, items, className }: CVSectionProps) => {
  return (
    <div className={cn("space-y-5", className)}>
      <h2 className="text-2xl font-bold text-gradient">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.period && <span className="text-muted-foreground text-sm">{item.period}</span>}
            </div>
            {item.organization && (
              <p className="text-primary font-medium mb-2">{item.organization}</p>
            )}
            {item.description && (
              <p className="text-muted-foreground mb-2">{item.description}</p>
            )}
            {item.items && (
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVSection;


import { useEffect, useState } from "react";
import { Globe, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState<number>(0);
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem("visitorCount");
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count only once per session
    if (!sessionStorage.getItem("counted")) {
      const newCount = initialCount + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      sessionStorage.setItem("counted", "true");
      setVisitors(newCount);
    } else {
      setVisitors(initialCount);
    }

    // Get user's country using a free geolocation API
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        setCountry(data.country_name || "Unknown");
      })
      .catch(error => {
        console.error("Error fetching location:", error);
        setCountry("Unknown");
      });
  }, []);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <BarChart className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">
            {visitors} {visitors === 1 ? "besökare" : "besökare"}
          </span>
        </div>
        {country && (
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{country}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VisitorCounter;


import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  github?: string;
  linkedin?: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-gradient">Kontakt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.email && (
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
          </div>
        )}
        
        {contactInfo.phone && (
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <Phone className="h-5 w-5 text-primary" />
            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
              {contactInfo.phone}
            </a>
          </div>
        )}
        
        {contactInfo.location && (
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{contactInfo.location}</span>
          </div>
        )}
        
        {contactInfo.github && (
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <Github className="h-5 w-5 text-primary" />
            <a 
              href={`https://github.com/${contactInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {contactInfo.github}
            </a>
          </div>
        )}
        
        {contactInfo.linkedin && (
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300">
            <Linkedin className="h-5 w-5 text-primary" />
            <a 
              href={`https://linkedin.com/in/${contactInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {contactInfo.linkedin}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;

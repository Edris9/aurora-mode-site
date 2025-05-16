
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, { message: "Namn måste vara minst 2 tecken" }),
  email: z.string().email({ message: "Ogiltig e-postadress" }),
  message: z.string().min(10, { message: "Meddelande måste vara minst 10 tecken" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Meddelande från ${data.name}`);
      const body = encodeURIComponent(
        `Namn: ${data.name}\nE-post: ${data.email}\n\nMeddelande:\n${data.message}`
      );
      
      // Open mail client with pre-filled data
      window.location.href = `mailto:edriskohestani1010@gmail.com?subject=${subject}&body=${body}`;
      
      // Log for debugging
      console.log("Form submitted:", data);
      
      const successMessage = language === 'sv' ? "Tack för ditt meddelande! Din e-postklient öppnas nu." :
                            language === 'en' ? "Thank you for your message! Your email client is opening now." :
                            "Vielen Dank für Ihre Nachricht! Ihr E-Mail-Client wird jetzt geöffnet.";
                            
      toast.success(successMessage);
      form.reset();
    } catch (error) {
      const errorMessage = language === 'sv' ? "Ett fel uppstod. Försök igen senare." :
                          language === 'en' ? "An error occurred. Please try again later." :
                          "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
                          
      toast.error(errorMessage);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t("message")} 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("sending") : t("send")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

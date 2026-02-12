import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-primary text-primary-foreground px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-6 flex-wrap text-sm">
        <span className="font-semibold">📬 Get in touch:</span>
        <a href="mailto:meghnaa.anand@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail className="w-4 h-4" />
          meghnaa.anand@gmail.com
        </a>
        <a href="tel:+46731449235" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone className="w-4 h-4" />
          (+46) 731 449 235
        </a>
        <a href="https://www.linkedin.com/in/meghnaa-anand/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a href="https://github.com/MeghnaAnand" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

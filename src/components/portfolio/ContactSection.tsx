import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Meghna,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:meghnaa.anand@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client! 📬",
      description: "Your default email app should open with the message pre-filled.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-accent/80" />
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary-foreground">Let's Connect! 🤝</h2>
        <p className="text-center text-primary-foreground/80 mb-12 text-lg">
          Got a project idea or just want to say hi? Drop me a message! 💬
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Send className="w-5 h-5 text-primary" />
                Send me a message ✉️
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name 👤</Label>
                  <Input
                    id="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Your Email 📧</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message 💭</Label>
                  <Textarea
                    id="message"
                    placeholder="Hey Meghna, I'd love to chat about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send via Email 🚀
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick links */}
          <div className="flex flex-col justify-center space-y-6">
            <a
              href="mailto:meghnaa.anand@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/20 transition-all"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-semibold">Email 💌</p>
                <p className="text-sm opacity-80">meghnaa.anand@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+46731449235"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/20 transition-all"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">Phone 📞</p>
                <p className="text-sm opacity-80">(+46) 731 449 235</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/meghnaa-anand/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/20 transition-all"
            >
              <Linkedin className="w-6 h-6" />
              <div>
                <p className="font-semibold">LinkedIn 🔗</p>
                <p className="text-sm opacity-80">linkedin.com/in/meghnaa-anand</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

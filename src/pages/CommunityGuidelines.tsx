import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  AlertTriangle,
  FileCheck2,
  Flag,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { DiscordIcon } from "@/components/prompts/brandIcons";

export default function CommunityGuidelines() {
  const sections = [
    {
      icon: HeartHandshake,
      title: "Respect & Inclusivity",
      description:
        "PARO is a home for prompt engineers, artists, and creators of all skill levels. Treat every member with empathy and respect. Constructive critiques and knowledge sharing are encouraged; harassment, toxicity, hate speech, and discrimination will not be tolerated.",
    },
    {
      icon: Sparkles,
      title: "Originality & Attribution",
      description:
        "Celebrate creative craftsmanship. When sharing prompts, craft original work or build upon ideas transparently. Always give credit when adapting someone else's techniques, and avoid claiming others' prompt structures as solely your own.",
    },
    {
      icon: AlertTriangle,
      title: "Content Standards & Safety",
      description:
        "We strive to maintain a safe, inspiring environment. Do not upload prompts or imagery that contain sexually explicit material, graphic violence, illegal activities, or hate imagery. Prompts designed to bypass AI safety filters (jailbreaks) or generate malicious code are strictly prohibited.",
    },
    {
      icon: FileCheck2,
      title: "Quality & Reproducibility",
      description:
        "Ensure your prompts and sample outputs accurately reflect what the prompt produces. Include relevant tags, appropriate model specifications, and helpful descriptions so community members can learn, experiment, and reproduce results effectively.",
    },
    {
      icon: Flag,
      title: "Reporting & Enforcement",
      description:
        "Help us maintain these standards. If you encounter content or behavior that violates these guidelines, use the report button available on prompt cards and details. Our moderation team reviews reports promptly to protect community integrity.",
    },
  ];

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-primary/80 uppercase text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              <span>PARO Standards</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Community Guidelines
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our principles for maintaining an inspiring, respectful, and safe space for prompt engineering and creative exploration.
            </p>
          </div>

          {/* Guidelines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                  key={section.title}
                  className={`bg-card/40 border-white/10 backdrop-blur-sm transition-all hover:bg-card/60 hover:border-white/20 ${
                    index === sections.length - 1 && sections.length % 2 !== 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-6 sm:p-8 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-gold flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact / Action Banner */}
          <div className="relative group mt-8">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 via-primary/10 to-secondary/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-card/60 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                  Questions or Suggestions?
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  If you have questions regarding these guidelines or would like to provide feedback, our community and support team are here to help.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/feedback"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Feedback</span>
                </Link>
                <a
                  href="https://discord.com/invite/zNZ3TAwy73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  <DiscordIcon className="h-4 w-4" />
                  <span>Join Discord</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-procurement.jpg";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero text-white py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0xNWMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-orange/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Online Webinar / Live Session
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
              Master Procurement Automation with <span className="text-accent">Oracle Fusion</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/70 max-w-xl">
              Real-world use cases, expert-led training, and hands-on demos to accelerate your career.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Jan 25, 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">8:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Live on Zoom</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button onClick={scrollToRegistration} size="lg" className="bg-accent text-accent-foreground hover:bg-accent font-bold px-8 py-6 text-lg rounded-xl shadow-lg cta-glow transition-all duration-300 hover:scale-105">
                Register Now - Limited Seats
              </Button>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-sm font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Only a few seats left
              </div>
            </div>
          </div>

          <div className="relative hidden md:block animate-float">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 to-brand-orange/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={heroImage} alt="Procurement Automation Dashboard" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

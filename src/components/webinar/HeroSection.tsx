import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0xNWMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            Online Webinar / Live Session
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fusion Procurement Masterclass
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Master Procurement Automation with Real-World Use Cases
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Nov 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8:00 PM IST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Online / Live on Zoom</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToRegistration}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Register Now - Limited Seats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

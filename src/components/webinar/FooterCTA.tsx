import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="bg-gradient-hero text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore More Expert-Led Oracle Fusion Webinars
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join thousands of professionals advancing their Oracle Fusion expertise through our comprehensive training programs
        </p>
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          View All Webinars
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default FooterCTA;

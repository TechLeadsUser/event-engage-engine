import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PastSessionsSection = () => {
  const featuredVideo = {
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    title: "Fusion SCM Live Implementation Demo",
    subtitle: "July 2025",
    category: "Webinar"
  };

  const highlights = [
    {
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      title: "Advanced Procurement Workflows",
      category: "Lecture Highlight"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "Order Orchestration Deep Dive",
      category: "Webinar Replay"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            From Our Past Sessions
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore highlights from previous webinars and live training lectures conducted by our experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Featured Video - Left Large */}
          <Card className="group overflow-hidden bg-card border-border/50 hover:shadow-hover transition-all duration-300 cursor-pointer">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={featuredVideo.thumbnail} 
                alt={featuredVideo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 to-brand-medium/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-10 h-10 text-white fill-white" />
                </div>
              </div>
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                {featuredVideo.category}
              </Badge>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {featuredVideo.title}
              </h3>
              <p className="text-muted-foreground">{featuredVideo.subtitle}</p>
            </div>
          </Card>

          {/* Right Column - Two Smaller Videos Stacked */}
          <div className="flex flex-col gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-border/50 hover:shadow-hover transition-all duration-300 cursor-pointer flex-1"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="relative sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                    <img 
                      src={highlight.thumbnail} 
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 to-brand-medium/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                    <Badge className={`absolute top-3 left-3 text-xs ${
                      highlight.category === "Lecture Highlight" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}>
                      {highlight.category}
                    </Badge>
                  </div>
                  <div className="p-4 sm:w-3/5 flex items-center">
                    <h3 className="text-base font-bold text-foreground">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300">
            View All Recordings
          </button>
        </div>
      </div>
    </section>
  );
};

export default PastSessionsSection;

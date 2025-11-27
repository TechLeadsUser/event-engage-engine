import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
const VideoTestimonialsSection = () => {
  const videoTestimonials = [{
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    name: "Priya Sharma",
    designation: "Senior SCM Consultant at TCS",
    quote: "The practical approach helped me implement Oracle Fusion in real projects",
    duration: "2:30"
  }, {
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    name: "David Thompson",
    designation: "Oracle Fusion Lead at Accenture",
    quote: "Best training I've attended. Clear explanations and hands-on examples",
    duration: "3:15"
  }, {
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
    name: "Anita Desai",
    designation: "ERP Implementation Manager",
    quote: "Krishna's expertise and teaching style made complex topics easy to understand",
    duration: "2:45"
  }];
  return <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            Hear from Our Learners
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from professionals who attended previous webinars and full Oracle Fusion courses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {videoTestimonials.map((video, index) => <Card key={index} className="group overflow-hidden bg-card border-border/50 hover:shadow-hover transition-all duration-300 cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 to-brand-medium/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground">
                  {video.duration}
                </span>
              </div>
              <div className="p-6">
                
                <div>
                  <p className="font-bold text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.designation}</p>
                </div>
              </div>
            </Card>)}
        </div>

        
      </div>
    </section>;
};
export default VideoTestimonialsSection;
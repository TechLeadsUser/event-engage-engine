import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
const VideoTestimonialsSection = () => {
  const videoTestimonials = [{
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
    name: "Priya Sharma",
    designation: "Senior SCM Consultant at TCS",
    quote: "The practical approach helped me implement Oracle Fusion in real projects",
    duration: "2:30"
  }, {
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
    name: "David Thompson",
    designation: "Oracle Fusion Lead at Accenture",
    quote: "Best training I've attended. Clear explanations and hands-on examples",
    duration: "3:15"
  }, {
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=450&fit=crop",
    name: "Anita Desai",
    designation: "ERP Implementation Manager",
    quote: "Krishna's expertise and teaching style made complex topics easy to understand",
    duration: "2:45"
  }];
  return <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            Hear from Our Learners
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from professionals who attended previous webinars
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((video, index) => <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
                
                {/* Duration badge */}
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-white">
                  {video.duration}
                </span>
                
                {/* Text content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-semibold text-white text-base mb-1">{video.name}</p>
                  <p className="text-sm text-white/80">{video.designation}</p>
                </div>
              </div>
              
              {/* Quote below */}
              <div className="mt-4 px-2">
                <p className="text-muted-foreground text-sm italic leading-relaxed">"{video.quote}"</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default VideoTestimonialsSection;
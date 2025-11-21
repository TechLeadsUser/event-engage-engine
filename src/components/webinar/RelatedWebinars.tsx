import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RelatedWebinars = () => {
  const webinars = [
    {
      title: "Oracle Fusion Inventory Management Deep Dive",
      date: "Dec 10, 2025",
      time: "7:00 PM IST",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
      seats: "45 seats left"
    },
    {
      title: "Advanced Manufacturing in Oracle Fusion SCM",
      date: "Dec 18, 2025",
      time: "8:00 PM IST",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      seats: "30 seats left"
    },
    {
      title: "Order Management & Fulfillment Strategies",
      date: "Jan 05, 2026",
      time: "7:30 PM IST",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      seats: "50 seats left"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Other Sessions You Might Like
          </h2>
          <p className="text-lg text-muted-foreground">
            Continue your Oracle Fusion learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card shadow-card hover:shadow-hover transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                  {webinar.seats}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {webinar.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Register
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedWebinars;

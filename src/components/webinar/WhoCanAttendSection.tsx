import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Target, RefreshCw } from "lucide-react";
const WhoCanAttendSection = () => {
  const audiences = [{
    icon: GraduationCap,
    title: "Students & Beginners",
    description: "Perfect for students and freshers who want to start their journey in a new domain from scratch",
    benefits: ["No prior experience needed", "Learn through real-world examples"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
  }, {
    icon: Users,
    title: "Working Professionals",
    description: "Busy professionals seeking to upskill and add new technical expertise to their profile",
    benefits: ["Upgrade your skill set efficiently", "Learn without disrupting your job"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
  }, {
    icon: Target,
    title: "Industry Experts",
    description: "Experienced professionals aiming to stay current with the latest trends and technologies",
    benefits: ["Learn feature upgrades & best practices", "Deep-dive into real-time use cases"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  }, {
    icon: RefreshCw,
    title: "Career Changers",
    description: "Professionals from other fields exploring new opportunities in a growing industry",
    benefits: ["Clear roadmap for transition", "Learn high-demand skills in tech"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
  }];
  return <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground md:text-3xl">
            Who Can Attend This Webinar?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => <Card key={index} className="overflow-hidden bg-card border-border/50 hover:shadow-hover transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={audience.image} alt={audience.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-3 right-3 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <audience.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold mb-3 text-primary text-lg">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {audience.description}
                </p>
                <div className="space-y-2">
                  {audience.benefits.map((benefit, idx) => <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-foreground">{benefit}</p>
                    </div>)}
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhoCanAttendSection;
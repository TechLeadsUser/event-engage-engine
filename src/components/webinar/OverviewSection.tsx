import { Users, Clock, Video, Award, DollarSign, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const OverviewSection = () => {
  const facts = [
    { icon: Clock, label: "Duration", value: "90 minutes" },
    { icon: Video, label: "Mode", value: "Online (Zoom)" },
    { icon: Users, label: "Seats", value: "100" },
    { icon: DollarSign, label: "Price", value: "Free" },
    { icon: Award, label: "Certificate", value: "Available" },
    { icon: TrendingUp, label: "Level", value: "Beginner to Intermediate" },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              About the Webinar
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Master procurement automation in Oracle Fusion SCM with real-world use cases. This comprehensive session is designed for consultants, implementation specialists, and professionals looking to enhance their Oracle Fusion Procurement expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through live demonstrations and practical scenarios, you'll gain hands-on knowledge of procurement configuration, workflow setup, and integration strategies that you can immediately apply to your projects. Whether you're starting your Oracle Fusion journey or looking to deepen your existing skills, this masterclass provides actionable insights from 20+ years of real-world consulting experience.
            </p>
          </div>
          
          <Card className="bg-card p-6 shadow-card hover:shadow-hover transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Facts</h3>
            <div className="space-y-4">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                    <p className="font-semibold text-foreground">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

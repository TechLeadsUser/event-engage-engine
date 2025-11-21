import { Laptop, Lightbulb, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
const TakeawaysSection = () => {
  const benefits = [{
    icon: Laptop,
    title: "Hands-on Demonstration",
    description: "Watch live configurations and see real procurement workflows in action"
  }, {
    icon: Lightbulb,
    title: "Practical Insights from Real Projects",
    description: "Learn from actual implementation scenarios and avoid common pitfalls"
  }, {
    icon: TrendingUp,
    title: "Career Growth Tips for Consultants",
    description: "Discover strategies to advance your Oracle Fusion consulting career"
  }, {
    icon: Award,
    title: "Certification Guidance",
    description: "Get expert advice on Oracle certification paths and preparation strategies"
  }];
  return <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary md:text-3xl">
            Key Benefits of Attending
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just theory — practical knowledge you can use right away
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => <Card key={index} className="p-6 text-center bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TakeawaysSection;
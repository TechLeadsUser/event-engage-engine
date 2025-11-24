import { Card } from "@/components/ui/card";
const TakeawaysSection = () => {
  const benefits = [{
    number: "1",
    title: "Procurement Setup Mastery",
    description: "Master the complete procurement configuration from document types to approval workflows"
  }, {
    number: "2",
    title: "Real-World Implementation Scenarios",
    description: "Learn from actual project examples and avoid common configuration mistakes"
  }, {
    number: "3",
    title: "Live Configuration Demo",
    description: "Watch step-by-step setup of procurement processes in a live Oracle Fusion environment"
  }, {
    number: "4",
    title: "Career Advancement Strategies",
    description: "Discover expert tips to grow your Oracle Fusion consulting career and stand out"
  }, {
    number: "5",
    title: "Certification Roadmap",
    description: "Get guidance on Oracle certification paths and exam preparation strategies"
  }];
  return <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground md:text-3xl">
            What You'll Gain from This Webinar
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {benefits.slice(0, 3).map(benefit => <Card key={benefit.number} className="relative p-8 pt-6 bg-background border-2 border-primary/40 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  {benefit.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground mt-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>)}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.slice(3, 5).map(benefit => <Card key={benefit.number} className="relative p-8 pt-6 bg-background border-2 border-primary/40 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  {benefit.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground mt-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default TakeawaysSection;
import { Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SpeakerSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Meet Your Trainer
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from an industry veteran with decades of hands-on experience
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            <div className="md:col-span-2 flex justify-center items-start">
              <div className="w-48 h-48 rounded-2xl bg-gradient-hero overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                  KV
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Krishna V (Sudheer Vidiyala)
                </h3>
                <p className="text-lg font-semibold text-accent mb-4">
                  Oracle Fusion SCM Expert | 20+ Years Consulting Experience
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Krishna V is a seasoned Oracle Fusion consultant with over two decades of experience in implementing enterprise-level SCM solutions across global organizations. His expertise spans the entire Oracle Fusion ecosystem, with specialized knowledge in Supply Chain Management, Procurement, and Manufacturing modules.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Having led numerous successful implementations, Krishna brings real-world insights and practical strategies that go beyond theoretical knowledge. His training approach focuses on hands-on learning and solving actual business challenges that consultants face in the field.
              </p>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="gap-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SpeakerSection;

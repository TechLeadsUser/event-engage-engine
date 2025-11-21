import { Settings, Link2, Play, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import agendaImage from "@/assets/agenda-gamification.jpg";
const AgendaSection = () => {
  const topics = [{
    icon: Settings,
    title: "Procurement Configuration and Workflow Setup",
    description: "Learn the fundamentals of configuring procurement modules and setting up efficient workflows. Master the core settings that will streamline your procurement operations."
  }, {
    icon: Link2,
    title: "Integrating Fusion SCM with ERP Modules",
    description: "Master seamless integration techniques between SCM and other Oracle Fusion modules. Discover best practices for connecting your procurement system with finance, inventory, and other critical modules."
  }, {
    icon: Play,
    title: "Live Demonstration: Purchase Requisition to Invoice Flow",
    description: "Watch a complete end-to-end procurement process in action with real-time demonstrations. See how transactions flow through the entire system from requisition to payment."
  }, {
    icon: MessageCircle,
    title: "Q&A with Expert — Real Implementation Scenarios",
    description: "Get your questions answered and learn from actual implementation challenges and solutions. Benefit from real-world experience and practical insights."
  }];
  return <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-accent/20 p-8">
              <img src={agendaImage} alt="Learning Progress Tracker" className="w-full h-auto rounded-2xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground leading-tight md:text-3xl">What You'll Learn in This Session

          </h2>

            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {topics.map((topic, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline bg-accent/5 hover:bg-accent/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <topic.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg font-semibold text-left">{topic.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-muted-foreground">
                    {topic.description}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
};
export default AgendaSection;
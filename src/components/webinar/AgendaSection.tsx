import { CheckCircle2, Settings, Link2, Play, MessageCircle } from "lucide-react";

const AgendaSection = () => {
  const topics = [
    {
      icon: Settings,
      title: "Procurement Configuration and Workflow Setup",
      description: "Learn the fundamentals of configuring procurement modules and setting up efficient workflows"
    },
    {
      icon: Link2,
      title: "Integrating Fusion SCM with ERP Modules",
      description: "Master seamless integration techniques between SCM and other Oracle Fusion modules"
    },
    {
      icon: Play,
      title: "Live Demonstration: Purchase Requisition to Invoice Flow",
      description: "Watch a complete end-to-end procurement process in action with real-time demonstrations"
    },
    {
      icon: MessageCircle,
      title: "Q&A with Expert — Real Implementation Scenarios",
      description: "Get your questions answered and learn from actual implementation challenges and solutions"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What You'll Learn in This Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive curriculum designed to give you practical skills you can apply immediately
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border-l-4 border-accent"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <topic.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "This webinar made procurement configuration so clear and easy to understand. I feel so much more confident handling complex approval workflows now!",
    name: "Rajesh Kumar",
    role: "Oracle Fusion Consultant"
  }, {
    quote: "Krishna's practical examples were fantastic. He answered all my questions and gave me actionable steps to implement in my projects.",
    name: "Sarah Mitchell",
    role: "SCM Implementation Lead"
  }, {
    quote: "The tips I learned helped me optimize our procurement setup faster than I thought possible. Highly recommend this webinar!",
    name: "Michael Chen",
    role: "ERP Functional Consultant"
  }];
  return <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground md:text-3xl">
          What Past Attendees Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-8 bg-card border-border/50 hover:shadow-lg transition-all duration-300">
              <Quote className="w-12 h-12 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-foreground text-lg mb-1">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;
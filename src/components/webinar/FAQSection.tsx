import { MessageCircle, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
const FAQSection = () => {
  const faqs = [{
    question: "What is included in this webinar?",
    answer: "This webinar covers essential Oracle Fusion Procurement topics including configuration setup, approval workflows, document management, and real-world implementation scenarios. You'll get live demonstrations, Q&A sessions, and downloadable resources."
  }, {
    question: "Is this session free to attend?",
    answer: "Yes! This webinar is completely free to attend. We believe in sharing knowledge and helping professionals grow in their Oracle Fusion careers. Simply register with your details to secure your spot."
  }, {
    question: "Will I get the recording after the session?",
    answer: "Absolutely! All registered attendees will receive a recording link within 24 hours after the session. You can watch it at your convenience and revisit any topics you'd like to review."
  }, {
    question: "Who should attend this webinar?",
    answer: "This webinar is ideal for Oracle Fusion consultants, SCM professionals, ERP implementation specialists, functional analysts, and anyone looking to enhance their Oracle Fusion Procurement skills."
  }, {
    question: "How is this different from the full Oracle Fusion course?",
    answer: "This webinar is a focused 90-minute session on specific Procurement topics, perfect for quick learning. Our full Oracle Fusion course is comprehensive, spanning multiple modules with hands-on projects, certification prep, and ongoing support."
  }, {
    question: "How do I join the full course after attending?",
    answer: "After the webinar, you'll receive information about our complete Oracle Fusion SCM course. You can also speak with our course advisor directly to understand the curriculum, schedule, and enrollment process."
  }];
  return <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions about this webinar or our Oracle Fusion Training Program? Find quick answers below
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-l-4 data-[state=open]:border-l-accent shadow-sm hover:shadow-card transition-all duration-300">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>)}
        </Accordion>

        <Card className="bg-gradient-card border-border/50 p-8 text-center shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Connect with our course advisor or download the full brochure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Talk to an Advisor
            </button>
            
          </div>
        </Card>
      </div>
    </section>;
};
export default FAQSection;
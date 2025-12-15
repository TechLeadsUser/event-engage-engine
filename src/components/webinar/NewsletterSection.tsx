import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribed(true);
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter",
    });
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stay Updated with Oracle Fusion Insights
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest webinars, tutorials, and industry insights delivered straight to your inbox.
        </p>

        {isSubscribed ? (
          <div className="flex items-center justify-center gap-3 text-primary">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 bg-background border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              type="submit"
              size="lg"
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;

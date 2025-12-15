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
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/85 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">Newsletter</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Stay Ahead with
              <span className="block text-white/80">Oracle Fusion Insights</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Join 10,000+ professionals receiving weekly updates on best practices, industry trends, and exclusive training resources.
            </p>
            
            <div className="flex flex-wrap gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white/90" />
                <span>Zero spam</span>
              </div>
            </div>
          </div>
          
          {/* Right form card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">You're In!</h3>
                <p className="text-muted-foreground">Check your inbox for a confirmation email.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-2">Subscribe Now</h3>
                <p className="text-muted-foreground mb-6">Get free resources delivered to your inbox.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Subscribe for Free
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

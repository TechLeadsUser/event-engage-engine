import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { toast } from "@/hooks/use-toast";
import "react-phone-number-input/style.css";

const QuickDemoForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string | undefined) => {
    if (!value) {
      setPhoneError("Phone number is required");
      return false;
    }
    if (!isValidPhoneNumber(value)) {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    if (value) {
      validatePhone(value);
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !email.trim()) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid international phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly with demo details.",
    });
    
    setFullName("");
    setEmail("");
    setPhone("");
    setPhoneError("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-background to-secondary/40 border-b border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl shadow-card p-6 md:p-8 transition-shadow duration-300 hover:shadow-hover">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-8 rounded-full bg-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Request For Free Demo
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 lg:items-end">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Full Name<span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-background border-border h-12 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email<span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border h-12 focus-visible:ring-accent focus-visible:border-accent transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Phone Number<span className="text-destructive">*</span>
              </Label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={phone}
                onChange={handlePhoneChange}
                className={`flex h-12 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:ring-2 focus-within:ring-accent focus-within:border-accent focus-within:ring-offset-2 transition-all [&>input]:border-0 [&>input]:bg-transparent [&>input]:outline-none [&>input]:text-foreground [&_.PhoneInputCountry]:mr-2 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountrySelectArrow]:ml-1 ${phoneError ? 'border-destructive' : 'border-border'}`}
              />
              {phoneError && (
                <p className="text-sm text-destructive">{phoneError}</p>
              )}
            </div>

            <div className="md:col-span-3 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-10 rounded-full text-white font-semibold animate-cta-gradient shadow-md hover:scale-105 transition-transform duration-300 cta-glow"
              >
                {isSubmitting ? "Submitting..." : "Request Free Demo"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickDemoForm;

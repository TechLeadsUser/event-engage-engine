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
    <section className="py-8 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Request For Free Demo
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 lg:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="fullName" className="text-foreground">
              Full Name<span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-secondary/30 border-border/50 h-12"
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email<span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/30 border-border/50 h-12"
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <Label className="text-foreground">
              Phone Number<span className="text-destructive">*</span>
            </Label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              value={phone}
              onChange={handlePhoneChange}
              className={`flex h-12 w-full rounded-md border bg-secondary/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 [&>input]:border-0 [&>input]:bg-transparent [&>input]:outline-none [&>input]:text-foreground [&_.PhoneInputCountry]:mr-2 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountrySelectArrow]:ml-1 ${phoneError ? 'border-destructive' : 'border-border/50'}`}
            />
            {phoneError && (
              <p className="text-sm text-destructive">{phoneError}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="h-12 px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuickDemoForm;

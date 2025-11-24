import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().refine((val) => {
    if (!val) return false;
    return isValidPhoneNumber(val);
  }, "Please enter a valid phone number with country code"),
  jobTitle: z.string().min(2, "Job title is required").max(100, "Job title is too long"),
  company: z.string().min(2, "Company name is required").max(100, "Company name is too long"),
  experience: z.string().min(1, "Please specify years of experience").max(50, "Experience is too long"),
  message: z.string().max(1000, "Message is too long").optional(),
  subscribe: z.boolean().default(false)
});
const RegistrationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      jobTitle: "",
      company: "",
      experience: "",
      message: "",
      subscribe: false
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Registration submitted:", values);
    toast({
      title: "Registration Successful!",
      description: "You'll receive a confirmation email with joining details shortly."
    });
    form.reset();
    setIsSubmitting(false);
  };
  return <section id="registration" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-muted-foreground">
            Join industry professionals advancing their Oracle Fusion expertise
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 shadow-card">
          

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="fullName" render={({
                field
              }) => <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry="US"
                          value={field.value}
                          onChange={field.onChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="jobTitle" render={({
                field
              }) => <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Oracle Fusion Consultant" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="company" render={({
                field
              }) => <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Corp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="experience" render={({
                field
              }) => <FormItem>
                      <FormLabel>Years of Experience *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3-5 years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <FormField control={form.control} name="message" render={({
              field
            }) => <FormItem>
                    <FormLabel>Message / Questions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific topics you'd like us to cover?" className="resize-none h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="subscribe" render={({
              field
            }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-muted-foreground">
                        Receive updates about future webinars and Oracle Fusion resources
                      </FormLabel>
                    </div>
                  </FormItem>} />

              <Button type="submit" size="lg" className="w-full bg-gradient-cta hover:opacity-90 text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Join the Webinar"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>;
};
export default RegistrationSection;
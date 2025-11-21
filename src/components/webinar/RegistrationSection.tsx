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
import { AlertCircle } from "lucide-react";
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  jobTitle: z.string().min(2, "Job title is required"),
  company: z.string().min(2, "Company name is required"),
  experience: z.string().min(1, "Please specify years of experience"),
  message: z.string().optional(),
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
                        <Input placeholder="+1 234 567 8900" {...field} />
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
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: (data: WaitlistFormValues) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for joining our waitlist! We'll be in touch soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  function onSubmit(data: WaitlistFormValues) {
    setIsSubmitting(true);
    waitlistMutation.mutate(data);
  }

  return (
    <section id="waitlist" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-lg text-blue-100 mb-8">
            Be among the first to experience the future of business management. Early access members receive exclusive benefits and preferred pricing.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Full Name" 
                        {...field} 
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-blue-300 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </FormControl>
                    <FormMessage className="text-left text-blue-100" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Email Address" 
                        type="email"
                        {...field} 
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-blue-300 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </FormControl>
                    <FormMessage className="text-left text-blue-100" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Company Name (Optional)" 
                        {...field} 
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-blue-300 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </FormControl>
                    <FormMessage className="text-left text-blue-100" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          </Form>
          
          <p className="mt-4 text-sm text-blue-200">
            By joining, you agree to receive updates about Reoree. We respect your privacy and will never share your information.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

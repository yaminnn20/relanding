import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
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

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about Reoree? Our team is here to help. Reach out to us and we'll get back to you shortly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="mt-1 text-gray-600">contact@reoree.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Headquarters</h3>
                  <p className="mt-1 text-gray-600">123 Innovation Way, Tech Park<br />San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="mt-1 text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

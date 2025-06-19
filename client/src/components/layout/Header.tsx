import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { GOOGLE_FORM_CONFIG } from "@/pages/config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(3);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
  });

  const businessFields = [
    { value: "technology", label: "Technology" },
    { value: "finance", label: "Finance & Banking" },
    { value: "healthcare", label: "Healthcare" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "education", label: "Education" },
    { value: "realestate", label: "Real Estate" },
    { value: "hospitality", label: "Hospitality & Tourism" },
    { value: "transportation", label: "Transportation & Logistics" },
    { value: "energy", label: "Energy & Utilities" },
    { value: "media", label: "Media & Entertainment" },
    { value: "other", label: "Other" },
  ];

  const waitlistMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.firstName, data.name.split(' ')[0] || '');
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.lastName, data.name.split(' ')[1] || '');
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.email, data.email);
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.motorcycleBrand, data.industry);
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.motorcycleModel, '');
      formDataToSubmit.append(GOOGLE_FORM_CONFIG.formFields.consent, "Yes");

      try {
        const response = await fetch(
          `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.formId}/formResponse`,
          {
            method: "POST",
            body: formDataToSubmit,
            mode: "no-cors",
          }
        );
        return response;
      } catch (error) {
        console.error('Form submission error:', error);
        throw error;
      }
    },
    onSuccess: () => {
      setShowDialog(false);
      setIsLoading(true);
      
      // Start countdown timer
      const timer = setInterval(() => {
        setLoadingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLoading(false);
            window.location.replace('https://demo.reorbe.com');
            return 3;
          }
          return prev - 1;
        });
      }, 1000);

      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    waitlistMutation.mutate(formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for background
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white bg-opacity-10 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold text-gray-800">
                Reorbe
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
              <a href="#ai-assistant" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">AI Assistant</a>
              <a href="#analytics" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Analytics</a>
              <a href="#automation" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Automation</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="hidden md:flex text-gray-800 border-teal-500 hover:bg-primary hover:text-white transition-colors rounded-full px-6 py-2"
                onClick={openDialog}
              >
                Access Beta Demo
              </Button>
              
              {/* Mobile Access Button */}
              <Button 
                variant="outline" 
                className="md:hidden text-gray-800 border-teal-500 hover:bg-primary hover:text-white transition-colors rounded-full px-4 py-2 text-sm"
                onClick={openDialog}
              >
                Access Beta Demo
              </Button>
              
              {/* Mobile Menu Button */}
              <button 
                type="button" 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 rounded-md border-t border-gray-200 bg-white/80 backdrop-blur-md">
              <div className="flex flex-col space-y-3 px-4">
                <a 
                  href="#features" 
                  className="px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-white/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#ai-assistant" 
                  className="px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-white/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Assistant
                </a>
                <a 
                  href="#analytics" 
                  className="px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-white/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Analytics
                </a>
                <a 
                  href="#automation" 
                  className="px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-white/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Automation
                </a>
                <a 
                  href="#contact" 
                  className="px-4 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-white/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
          <div className="text-center space-y-4 w-full max-w-md px-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800">Setting up your demo environment</h2>
            <p className="text-gray-600">Please wait while we prepare everything for you...</p>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-1000"
                style={{ width: `${((3 - Math.max(0, loadingTime)) / 3) * 100}%`, transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Access Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Access Beta Demo</DialogTitle>
            <DialogDescription>
              Please provide your details to access the beta demo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Business Field</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your business field" />
                </SelectTrigger>
                <SelectContent>
                  {businessFields.map((field) => (
                    <SelectItem key={field.value} value={field.value}>
                      {field.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={waitlistMutation.isPending}
            >
              {waitlistMutation.isPending ? "Submitting..." : "Access Demo"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

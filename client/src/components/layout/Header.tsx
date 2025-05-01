import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
  const [showIframe, setShowIframe] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDialog = () => {
    setShowDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add validation and API call if needed
    setShowDialog(false);
    setShowIframe(true);
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
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
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
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Access Demo</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Full Page Iframe */}
      {showIframe && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="relative w-full h-full">
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://www.reorbe.com"
              className="w-full h-full border-0"
              title="Reorbe Beta Demo"
            />
          </div>
        </div>
      )}
    </>
  );
}

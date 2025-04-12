import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Reoree
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
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white transition-colors" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
          
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
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#ai-assistant" 
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Assistant
              </a>
              <a 
                href="#analytics" 
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Analytics
              </a>
              <a 
                href="#automation" 
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Automation
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#waitlist" 
                className="px-4 py-2 text-base font-medium text-primary bg-blue-50 hover:bg-blue-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

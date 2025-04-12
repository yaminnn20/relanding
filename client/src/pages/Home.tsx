import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AIAssistantSection from "@/components/sections/AIAssistantSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import AutomationSection from "@/components/sections/AutomationSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  useEffect(() => {
    // Set up smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Set page title
    document.title = "Reoree - AI-Powered Business Management Suite";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Reoree combines conversational AI, powerful analytics, and workflow automation to streamline your business operations.');
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AIAssistantSection />
        <AnalyticsSection />
        <AutomationSection />
        <TestimonialSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

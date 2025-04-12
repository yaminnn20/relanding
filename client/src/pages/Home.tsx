import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AIAssistantSection from "@/components/sections/AIAssistantSection";
import ConversationalAISection from "@/components/sections/ConversationalAISection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import AutomationSection from "@/components/sections/AutomationSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  useEffect(() => {
    // Set up smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href || href === '#') return;
      
      const element = document.querySelector(href);
      if (element && element instanceof HTMLElement) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
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
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
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
        <ConversationalAISection />
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

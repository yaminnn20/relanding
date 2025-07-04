import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero.svg";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-r from-teal-500 to-emerald-300 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Next Hire Is <span className="text-cyan-900">Digital</span>. It Runs Ops. You Run the Vision.

            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-2xl mx-auto lg:mx-0">
            Reorbe combines AI, smart analytics, and automation to streamline your operations — giving you back time, clarity, and control.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-gray-800  hover:text-white transition-colors" asChild>
                <a href="#waitlist">Get Early Access</a>
              </Button>
              <Button size="lg"  className="bg-white text-gray-800 hover:text-white transition-colors" asChild>
                <a href="#features">See Benefits</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Reorbe Business Management Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 p-2">
                  <div className="bg-emerald-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">AI Assistant</p>
                    <p className="text-xs text-gray-500">Always ready to help</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center space-x-3 p-2">
                  <div className="bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Analytics</p>
                    <p className="text-xs text-gray-500">Real-time insights</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

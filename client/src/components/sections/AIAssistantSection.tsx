import { motion } from "framer-motion";
import { CheckCircle, Sparkles, MessageSquare, BarChart, FileText, Lightbulb } from "lucide-react";
import aiAssistantImage from "@/assets/ai-assistant.svg";

const AiFeature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
      <CheckCircle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

const FloatingCard = ({ icon, text, position }: { icon: React.ReactNode; text: string; position: string }) => (
  <motion.div
    className={`absolute ${position} bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-emerald-500">{icon}</div>
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

export default function AIAssistantSection() {
  const aiFeatures = [
    {
      title: "Natural Language Understanding",
      description: "Ask questions in plain English and get accurate answers without complex queries."
    },
    {
      title: "Data Retrieval & Analysis",
      description: "Instantly access and analyze your business data from multiple sources in one conversation."
    },
    {
      title: "Smart Recommendations",
      description: "Receive personalized insights and suggestions to optimize operations and drive growth."
    },
    {
      title: "Document Creation",
      description: "Generate reports, summaries, and business documents instantly with a simple request."
    }
  ];

  return (
    <section id="ai-assistant" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your 24/7 Business Intelligence Partner</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reorbe's AI assistant understands your business context, retrieves information instantly, and provides actionable recommendations based on your data.
            </p>
            
            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AiFeature 
                    title={feature.title} 
                    description={feature.description} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden mx-auto">
              <img 
                src={aiAssistantImage} 
                alt="Reorbe AI Assistant" 
                className="w-full h-auto"
              />
              
              {/* Floating Cards */}
              <FloatingCard
                icon={<MessageSquare className="w-5 h-5" />}
                text="Real-time Chat"
                position="top-4 left-4"
              />
              <FloatingCard
                icon={<BarChart className="w-5 h-5" />}
                text="Data Analysis"
                position="top-4 right-4"
              />
              <FloatingCard
                icon={<FileText className="w-5 h-5" />}
                text="Document Processing"
                position="bottom-4 left-4"
              />
              <FloatingCard
                icon={<Lightbulb className="w-5 h-5" />}
                text="Smart Insights"
                position="bottom-4 right-4"
              />
              
              {/* Chat Bubble */}
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
                <div className="text-emerald-500 font-bold text-2xl mb-2">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

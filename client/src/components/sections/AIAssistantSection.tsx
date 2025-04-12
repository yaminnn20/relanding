import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

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
              Reoree's AI assistant understands your business context, retrieves information instantly, and provides actionable recommendations based on your data.
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
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl bg-white shadow-xl p-6 max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold">Reoree AI Assistant</p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">How can I help with your business today?</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4 ml-auto max-w-xs">
                <p className="text-gray-700">Show me our sales performance for Q2 compared to Q1.</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="mb-3">
                  <p className="text-gray-700">Here's the Q2 vs Q1 sales comparison:</p>
                  <div className="bg-white rounded-lg p-3 mt-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Q1 Total:</span>
                      <span className="text-sm font-bold">$842,500</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Q2 Total:</span>
                      <span className="text-sm font-bold">$957,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Growth:</span>
                      <span className="text-sm font-bold text-emerald-500">+13.6%</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">Would you like me to analyze the top-performing product categories or generate a detailed report?</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4 ml-auto max-w-xs">
                <p className="text-gray-700">Show me the top categories and create a report for the team.</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700 mb-2">I've identified the top performers:</p>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">Software</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">Services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">Hardware</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">I've generated a comprehensive Q2 report and shared it with your team. Would you like me to suggest optimization strategies based on this data?</p>
              </div>
              
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

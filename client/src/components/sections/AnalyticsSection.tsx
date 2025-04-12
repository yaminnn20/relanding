import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalyticsFeature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-6 w-6 text-indigo-500 mt-1">
      <CheckCircle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

export default function AnalyticsSection() {
  const analyticsFeatures = [
    {
      title: "Real-Time Business Metrics",
      description: "Monitor KPIs and critical metrics in real-time with customizable dashboards."
    },
    {
      title: "Advanced Forecasting",
      description: "Predict future trends and opportunities with AI-powered forecasting models."
    },
    {
      title: "Custom Reports",
      description: "Generate tailored reports and visualizations for stakeholders with just a few clicks."
    },
    {
      title: "Data Integration",
      description: "Connect all your data sources for a unified view of your entire business."
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">
                  Reoree Analytics Dashboard
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Decision Making</h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform raw data into actionable business intelligence with Reoree's advanced analytics platform. Get the insights you need to make informed decisions quickly.
            </p>
            
            <div className="space-y-6">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AnalyticsFeature 
                    title={feature.title} 
                    description={feature.description} 
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white" size="lg">
                Explore Analytics
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

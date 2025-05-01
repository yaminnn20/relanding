import { motion } from "framer-motion";
import { CheckCircle, BarChart2, TrendingUp, PieChart, Activity, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import analyticsImage from "@/assets/analytics.svg";

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

const MetricCard = ({ icon, value, label, trend, position }: { 
  icon: React.ReactNode; 
  value: string; 
  label: string; 
  trend?: string;
  position: string;
}) => (
  <motion.div
    className={`absolute ${position} bg-white p-4 rounded-xl shadow-lg`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center space-x-3">
      <div className="bg-indigo-500/10 p-2 rounded-lg">
        <div className="text-indigo-500">{icon}</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-indigo-500">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
        {trend && (
          <div className="flex items-center text-xs text-green-500 mt-1">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            {trend}
          </div>
        )}
      </div>
    </div>
  </motion.div>
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
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
              <img 
                src={analyticsImage} 
                alt="Reorbe Analytics Dashboard" 
                className="w-full h-auto"
              />
              
              {/* Metric Cards */}
              <MetricCard
                icon={<BarChart2 className="w-5 h-5" />}
                value="+24%"
                label="Revenue Growth"
                trend="vs last month"
                position="top-4 left-4"
              />
              <MetricCard
                icon={<TrendingUp className="w-5 h-5" />}
                value="89%"
                label="Customer Retention"
                trend="+5% this quarter"
                position="top-4 right-4"
              />
              <MetricCard
                icon={<PieChart className="w-5 h-5" />}
                value="1.2M"
                label="Monthly Users"
                trend="+15% YoY"
                position="bottom-4 left-4"
              />
              <MetricCard
                icon={<Activity className="w-5 h-5" />}
                value="98%"
                label="Uptime"
                position="bottom-4 right-4"
              />
              
              {/* Live Data Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-indigo-500/10 backdrop-blur-sm p-3 rounded-full">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-indigo-500">Live Data</span>
                  </div>
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
              Transform raw data into actionable business intelligence with Reorbe's advanced analytics platform. Get the insights you need to make informed decisions quickly.
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

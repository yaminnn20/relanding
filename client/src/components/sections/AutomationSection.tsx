import { motion } from "framer-motion";
import { FileText, Mail, DollarSign, Clock } from "lucide-react";

interface AutomationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  delay: number;
}

const AutomationCard = ({ icon, title, description, metric, delay }: AutomationCardProps) => (
  <motion.div 
    className="bg-white rounded-xl shadow-md p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="w-12 h-12 bg-emerald-500/10 rounded-md flex items-center justify-center mb-6">
      <div className="text-emerald-500">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-sm text-gray-500">
      <Clock className="w-5 h-5 mr-1 text-emerald-500" />
      {metric}
    </div>
  </motion.div>
);

export default function AutomationSection() {
  const automationCards = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Automation",
      description: "Automatically generate, process, and file documents based on triggers and business rules.",
      metric: "Save 15+ hours per week",
      delay: 0.1
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Communication Workflows",
      description: "Set up automated email sequences, notifications, and follow-ups to keep business flowing.",
      metric: "Improve response time by 78%",
      delay: 0.2
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Processes",
      description: "Automate invoicing, payment collection, expense tracking, and financial reporting.",
      metric: "Reduce errors by 95%",
      delay: 0.3
    }
  ];

  return (
    <section id="automation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automate Your Way to Efficiency</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eliminate manual tasks and streamline workflows with Reoree's powerful automation capabilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationCards.map((card, index) => (
            <AutomationCard key={index} {...card} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-block relative">
            <div className="rounded-xl shadow-xl w-full max-w-4xl mx-auto bg-gray-200 h-64 flex items-center justify-center">
              <div className="text-gray-500">
                Workflow Automation
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-emerald-500 text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold">Reduce Manual Tasks by</p>
              <p className="text-3xl font-bold">80%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

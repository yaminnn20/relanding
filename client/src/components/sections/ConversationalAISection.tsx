import { motion } from "framer-motion";
import { MessageSquareText, Zap, BarChart2, PackageCheck, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIConversationExampleProps {
  query: string;
  response: string;
  icon: React.ReactNode;
  delay: number;
}

const AIConversationExample = ({ query, response, icon, delay }: AIConversationExampleProps) => (
  <motion.div 
    className="bg-white rounded-xl p-6 shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-start mb-4">
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </div>
      <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 w-full">
        <p className="text-gray-800">{query}</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3">
        {icon}
      </div>
      <div className="bg-blue-50 rounded-lg rounded-tl-none p-4 w-full">
        <p className="text-gray-800">{response}</p>
      </div>
    </div>
  </motion.div>
);

export default function ConversationalAISection() {
  const conversationExamples = [
    {
      query: "How many units of the wireless headphones were sold last month?",
      response: "In May 2023, you sold 342 units of wireless headphones, which is a 18% increase from April. Your top sales channel was online direct sales.",
      icon: <BarChart2 className="h-5 w-5 text-white" />,
      delay: 0.1
    },
    {
      query: "Send the Q2 sales report to Michael and Sarah from the marketing team.",
      response: "I've generated the Q2 sales report and sent it to Michael Chen (m.chen@company.com) and Sarah Johnson (s.johnson@company.com) with a summary of the key performance indicators.",
      icon: <Send className="h-5 w-5 text-white" />,
      delay: 0.2
    },
    {
      query: "Which items in our inventory are running low?",
      response: "You have 5 products with inventory below the reorder threshold: Wireless Keyboards (8 units), Premium USB Cables (12 units), Bluetooth Speakers (5 units), and 2 more. Would you like me to prepare purchase orders for these items?",
      icon: <PackageCheck className="h-5 w-5 text-white" />,
      delay: 0.3
    },
    {
      query: "How much is still due from TechSupplies Inc. this month?",
      response: "TechSupplies Inc. has an outstanding balance of $12,450 due by June 28th. They've already paid $8,300 of their initial $20,750 invoice. Would you like me to send them a payment reminder?",
      icon: <AlertCircle className="h-5 w-5 text-white" />,
      delay: 0.4
    },
  ];

  const proactiveAlerts = [
    "Inventory alert: 3 high-demand products will be out of stock in the next 7 days based on current sales velocity.",
    "Customer support insight: There's been a 28% increase in queries about the new mobile app update. Consider publishing an FAQ.",
    "Cash flow forecast: Based on current receivables, you may experience a temporary cash flow gap next month. Here are some mitigation strategies.",
    "Supplier performance: Logistics Partner B has had 3 delayed shipments this quarter, affecting your fulfillment times."
  ];

  return (
    <section id="conversational-ai" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Business, Just a Conversation Away</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reorbe's conversational AI transforms how you interact with your business data. Ask questions, give commands, and receive insights—all through natural conversation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {conversationExamples.map((example, index) => (
            <AIConversationExample 
              key={index}
              query={example.query}
              response={example.response}
              icon={example.icon}
              delay={example.delay}
            />
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-xl p-8 shadow-md mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-indigo-100 p-2 rounded-full mr-3">
              <Zap className="h-6 w-6 text-indigo-600" />
            </span>
            Proactive Business Intelligence
          </h3>
          <p className="text-gray-600 mb-6">
            Beyond answering your questions, Reorbe's AI actively monitors your business metrics and alerts you to opportunities and challenges before they impact your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proactiveAlerts.map((alert, index) => (
              <div key={index} className="flex bg-indigo-50 p-4 rounded-lg">
                <MessageSquareText className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700">{alert}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-4">Experience the Power of Conversational Business Management</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            From retrieving data to executing complex tasks, Reorbe's AI assistant adapts to your unique business needs and learns your preferences over time.
          </p>
          <Button className="bg-primary hover:bg-blue-600 text-white" size="lg">
            Access Beta Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
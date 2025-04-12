import { motion } from "framer-motion";
import { Mic, Send, BarChart3, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIConversationSection() {
  // Predefined chat messages to showcase in the static demo
  const chatMessages = [
    { type: 'ai', text: 'Hello! How can I help you today?' },
    { type: 'user', text: 'Show me our Q2 sales figures for the software division' },
    { type: 'ai', text: 'Here are the Q2 sales figures for the software division:' },
    { type: 'ai-data', content: 'salesReport' },
    { type: 'user', text: 'Create a new meeting with the marketing team for next Tuesday at 2pm' },
    { type: 'ai', text: 'I\'ve prepared a meeting with the marketing team:' },
    { type: 'ai-data', content: 'meetingCreation' },
    { type: 'user', text: 'Yes, please add it to my calendar' },
    { type: 'ai', text: 'Great! I\'ve added the meeting to your calendar and sent invitations to all participants.' },
    { type: 'ai-data', content: 'confirmation' }
  ];

  // Render different types of content based on message type
  const renderMessageContent = (content: string) => {
    if (content === 'salesReport') {
      return (
        <div className="mt-3 bg-white/80 p-3 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <BarChart3 className="text-primary mr-2 h-4 w-4" />
            <h3 className="text-sm font-bold">Q2 2024 Software Division Report</h3>
          </div>
          <div className="space-y-1 mb-3 text-xs">
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-gray-700">Enterprise Solutions</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">$345,750</span>
                <span className="text-green-600">+12.4%</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-gray-700">Cloud Services</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">$289,625</span>
                <span className="text-green-600">+18.7%</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-gray-700">Mobile Applications</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">$156,380</span>
                <span className="text-green-600">+8.2%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs pt-1">
            <div>
              <span className="text-gray-700">Total Revenue:</span>
              <span className="font-bold ml-1">$791,755</span>
            </div>
            <div>
              <span className="text-green-600 font-bold">+14.3% from Q1</span>
            </div>
          </div>
        </div>
      );
    } else if (content === 'meetingCreation') {
      return (
        <div className="mt-3 bg-white/80 p-3 rounded-lg shadow-sm text-xs">
          <p className="font-bold">Marketing Team Sync</p>
          <p className="mb-1">Tuesday, April 16, 2024 • 2:00 PM - 3:00 PM</p>
          <p className="mb-1">Attendees: Sarah, Michael, Alex, Priya</p>
          <p>Location: Conference Room A / Zoom</p>
          <div className="mt-2 flex space-x-2">
            <Button size="sm" className="text-[10px] h-6 bg-primary">
              Confirm
            </Button>
            <Button size="sm" variant="outline" className="text-[10px] h-6">
              Edit Details
            </Button>
          </div>
        </div>
      );
    } else if (content === 'confirmation') {
      return (
        <div className="mt-2 flex items-center text-green-600 text-xs">
          <CheckCircle className="h-3 w-3 mr-1" />
          <span className="font-medium">Successfully added to calendar</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="ai-conversation" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conversational Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of natural conversation with Reoree's AI. Simply speak or type 
            to retrieve information and create entries without complex commands.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Work Smarter Through Conversation</h3>
            <p className="text-gray-600 mb-6">
              Reoree's AI assistant understands natural language, letting you interact with your 
              business data as easily as talking to a colleague.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary mt-1">
                  <Mic className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Voice-Enabled Interaction</h4>
                  <p className="mt-2 text-gray-600">
                    Simply speak your requests and questions. The AI understands context and can follow 
                    complex conversations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary mt-1">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Instant Data Retrieval</h4>
                  <p className="mt-2 text-gray-600">
                    Ask for reports, metrics, or customer information and receive instant, 
                    visualized results without complex queries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary mt-1">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Effortless Creation</h4>
                  <p className="mt-2 text-gray-600">
                    Create meetings, tasks, or entries by simply describing what you need. 
                    The AI handles the details for you.
                  </p>
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Chat header */}
              <div className="bg-primary text-white p-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="text-sm font-semibold">R</span>
                </div>
                <div>
                  <h2 className="font-bold text-sm">Reoree AI Assistant</h2>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="p-3 h-96 overflow-y-auto bg-gray-50">
                <div className="space-y-3">
                  {chatMessages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.type.startsWith('ai') ? 'justify-start' : 'justify-end'}`}
                    >
                      {message.type !== 'ai-data' ? (
                        <div 
                          className={`rounded-lg p-3 max-w-[85%] text-sm ${
                            message.type === 'user' 
                              ? 'bg-primary text-white rounded-br-none' 
                              : 'bg-gray-200 rounded-bl-none'
                          }`}
                        >
                          {message.text}
                        </div>
                      ) : (
                        <div className="max-w-[85%]">
                          {renderMessageContent(message.content)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chat input */}
              <div className="p-3 border-t border-gray-200 flex items-center">
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <Mic className="h-4 w-4 text-gray-500" />
                </button>
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                  Ask me anything...
                </div>
                <button className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ml-2">
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-primary hover:bg-blue-600" size="lg">
            Experience AI Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
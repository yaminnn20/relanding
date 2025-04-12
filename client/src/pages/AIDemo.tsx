import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mic, 
  Send, 
  BarChart3, 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle, 
  Plus,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  type: 'user' | 'ai';
  text: string;
  action?: 'retrieval' | 'creation' | 'confirmation';
  data?: any;
}

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      text: 'Hello! I\'m Reoree\'s AI assistant. You can ask me to retrieve or create business entries. For example, try asking "Show me our Q2 sales report" or "Create a new meeting with the marketing team next Tuesday at 2pm".'
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages come in
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate processing user input and generating AI responses
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: input
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Process the message and generate a response based on keywords
    const lowercaseInput = input.toLowerCase();
    let aiResponse: Message;

    if (lowercaseInput.includes('sales') || lowercaseInput.includes('report') || lowercaseInput.includes('show me')) {
      // Retrieval scenario
      aiResponse = {
        type: 'ai',
        text: 'Here\'s the Q2 sales report you requested:',
        action: 'retrieval',
        data: {
          title: 'Q2 2024 Sales Report',
          reportItems: [
            { category: 'Software Subscriptions', amount: '$345,750', growth: '+12.4%' },
            { category: 'Professional Services', amount: '$201,840', growth: '+8.2%' },
            { category: 'Hardware Solutions', amount: '$189,500', growth: '+6.7%' },
            { category: 'Training & Support', amount: '$118,200', growth: '+15.3%' }
          ],
          totalRevenue: '$855,290',
          comparisonPeriod: 'Q1 2024',
          growthRate: '+10.5%'
        }
      };
    } else if (lowercaseInput.includes('create') || lowercaseInput.includes('meeting') || lowercaseInput.includes('new')) {
      // Creation scenario
      const meetingInfo = {
        title: 'Marketing Team Sync',
        date: 'Tuesday, April 16, 2024',
        time: '2:00 PM - 3:00 PM',
        attendees: ['Sarah Johnson', 'Michael Chen', 'Alex Rodriguez', 'Priya Patel'],
        location: 'Conference Room A / Zoom #387-4291-82'
      };

      aiResponse = {
        type: 'ai',
        text: 'I\'ve prepared a new meeting based on your request. Would you like me to add it to your calendar?',
        action: 'creation',
        data: meetingInfo
      };

      // Add a follow-up confirmation message after a short delay
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          {
            type: 'ai',
            text: 'Meeting has been created and added to your calendar. I\'ve also sent invitations to all attendees.',
            action: 'confirmation'
          }
        ]);
      }, 4000);
    } else {
      // Generic response
      aiResponse = {
        type: 'ai',
        text: 'I\'m not sure I understand what you\'re looking for. Could you try rephrasing that? You can ask me to retrieve reports or create new entries like meetings, tasks, or contacts.'
      };
    }

    setMessages(prev => [...prev, aiResponse]);
    setIsProcessing(false);
  };

  // Render different types of content based on message action
  const renderMessageContent = (message: Message) => {
    if (message.action === 'retrieval' && message.data) {
      // Render a sales report visualization
      const report = message.data;
      return (
        <div className="mt-3 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <BarChart3 className="text-primary mr-2 h-5 w-5" />
            <h3 className="font-bold">{report.title}</h3>
          </div>
          <div className="space-y-2 mb-4">
            {report.reportItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <span className="text-sm text-gray-700">{item.category}</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{item.amount}</span>
                  <span className={cn(
                    "text-xs",
                    item.growth.startsWith('+') ? "text-green-600" : "text-red-600"
                  )}>
                    {item.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <div>
              <span className="text-sm text-gray-700">Total Revenue:</span>
              <span className="font-bold ml-2">{report.totalRevenue}</span>
            </div>
            <div>
              <span className="text-sm text-gray-700">Growth vs {report.comparisonPeriod}:</span>
              <span className="font-bold text-green-600 ml-2">{report.growthRate}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm" variant="outline" className="text-xs">
              <FileText className="h-3 w-3 mr-1" /> Export PDF
            </Button>
          </div>
        </div>
      );
    } else if (message.action === 'creation' && message.data) {
      // Render a meeting creation card
      const meeting = message.data;
      return (
        <div className="mt-3 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Calendar className="text-primary mr-2 h-5 w-5" />
            <h3 className="font-bold">{meeting.title}</h3>
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-start">
              <Calendar className="h-4 w-4 text-gray-500 mt-1 mr-2" />
              <span className="text-sm">{meeting.date}, {meeting.time}</span>
            </div>
            <div className="flex items-start">
              <Users className="h-4 w-4 text-gray-500 mt-1 mr-2" />
              <div className="text-sm">
                <p className="mb-1">Attendees:</p>
                <div className="flex flex-wrap gap-1">
                  {meeting.attendees.map((person, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <Button size="sm" className="text-xs bg-primary">
              <CheckCircle className="h-3 w-3 mr-1" /> Confirm
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <Plus className="h-3 w-3 mr-1" /> Edit Details
            </Button>
          </div>
        </div>
      );
    } else if (message.action === 'confirmation') {
      // Render a confirmation message
      return (
        <div className="mt-2 flex items-center text-green-600">
          <CheckCircle className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Successfully completed</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Conversational AI <span className="text-primary">Demo</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience how Reoree's AI assistant helps you retrieve information 
              and create new entries through natural conversation.
            </p>
          </div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-lg font-semibold">R</span>
              </div>
              <div>
                <h2 className="font-bold">Reoree AI Assistant</h2>
                <p className="text-xs text-blue-100">Online • Retrieving and creating data</p>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="p-4 h-[500px] overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex",
                      message.type === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div 
                      className={cn(
                        "rounded-lg p-3 max-w-[80%]",
                        message.type === 'user' 
                          ? "bg-primary text-white rounded-br-none" 
                          : "bg-gray-200 rounded-bl-none"
                      )}
                    >
                      <p>{message.text}</p>
                      {renderMessageContent(message)}
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 rounded-lg rounded-bl-none p-3">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        <span className="text-sm text-gray-500">Reoree is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  className="flex-shrink-0"
                >
                  <Mic className="h-5 w-5 text-gray-500" />
                </Button>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me to retrieve data or create an entry..."
                  className="flex-1 h-10 py-2 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={isProcessing || !input.trim()}
                  className="flex-shrink-0 bg-primary"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Try asking questions like:</p>
            <div className="mt-2 flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                "Show me our sales report for Q2"
              </span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                "Create a new meeting with the marketing team"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
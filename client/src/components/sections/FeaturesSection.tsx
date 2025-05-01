import { 
  MessageSquare, 
  BarChart2, 
  ArrowLeftRight, 
  Users, 
  Boxes, 
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  iconTextClass: string;
  delay: number;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBgClass, 
  iconTextClass,
  delay 
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={`w-14 h-14 ${iconBgClass} rounded-lg flex items-center justify-center mb-5`}>
        <div className={iconTextClass}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversational AI Assistant",
      description: "Interact naturally with your business data through our powerful AI that understands context and business language.",
      iconBgClass: "bg-blue-100",
      iconTextClass: "text-primary",
      delay: 0.1
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Intelligent Analytics",
      description: "Get actionable insights with advanced analytics that help you understand trends and make data-driven decisions.",
      iconBgClass: "bg-indigo-100",
      iconTextClass: "text-indigo-500",
      delay: 0.2
    },
    {
      icon: <ArrowLeftRight className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and complex workflows to save time and reduce errors in your daily operations.",
      iconBgClass: "bg-emerald-100",
      iconTextClass: "text-emerald-500",
      delay: 0.3
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Bring your team together with integrated tools that enhance communication and streamline collaboration.",
      iconBgClass: "bg-amber-100",
      iconTextClass: "text-amber-500",
      delay: 0.4
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Unified Platform",
      description: "Connect all your business tools and data in one centralized platform for seamless operations.",
      iconBgClass: "bg-purple-100",
      iconTextClass: "text-purple-600",
      delay: 0.5
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Customer Relationship",
      description: "Rest easy with bank-level security and compliance features protecting your business data.",
      iconBgClass: "bg-rose-100",
      iconTextClass: "text-rose-500",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Business Management Suite</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reorbe brings together everything you need to manage, grow, and automate your business operations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

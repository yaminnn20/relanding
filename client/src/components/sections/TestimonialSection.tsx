import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  delay: number;
}

const TestimonialCard = ({ name, role, content, delay }: TestimonialCardProps) => (
  <motion.div 
    className="bg-gray-50 rounded-xl p-8 shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center mb-6">
      <div className="mr-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200"></div>
        </div>
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5" fill="currentColor" />
      ))}
    </div>
  </motion.div>
);

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      content: "Reoree has revolutionized how we manage our operations. The AI assistant alone has saved us countless hours by providing instant insights and automating routine tasks.",
      delay: 0.1
    },
    {
      name: "Michael Rivera",
      role: "Operations Director, GlobalSupply",
      content: "The analytics capabilities in Reoree helped us identify inefficiencies we didn't even know existed. Within three months, we've increased productivity by 27% and reduced costs.",
      delay: 0.2
    },
    {
      name: "Jessica Chen",
      role: "Founder, Innovate Designs",
      content: "As a small business owner, I was spending too much time on administrative work. With Reoree's automation, I've reclaimed 20+ hours per week to focus on growing my business.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Business Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how Reoree is transforming businesses across industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

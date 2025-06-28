import React from 'react';
import { Check, Zap, Mic, FileText } from 'lucide-react';

const OurSolution = () => {
  const solutions = [
    {
      id: 1,
      title: "Validify",
      description: "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
      icon: <Check className="w-8 h-8" />,
      borderColor: "border-green-400",
      iconBg: "bg-green-400/20",
      iconColor: "text-green-400"
    },
    {
      id: 2,
      title: "Redactify",
      description: "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
      icon: <Zap className="w-8 h-8" />,
      borderColor: "border-orange-400",
      iconBg: "bg-orange-400/20",
      iconColor: "text-orange-400"
    },
    {
      id: 3,
      title: "TranscriptX",
      description: "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
      icon: <Mic className="w-8 h-8" />,
      borderColor: "border-blue-400",
      iconBg: "bg-blue-400/20",
      iconColor: "text-blue-400"
    },
    {
      id: 4,
      title: "Chartwright",
      description: "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
      icon: <FileText className="w-8 h-8" />,
      borderColor: "border-pink-400",
      iconBg: "bg-pink-400/20",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <div className="relative bg-[#0f1729] py-20 px-4 font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Our Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${solution.borderColor} hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${solution.iconBg} rounded-full mb-6 ${solution.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300">
                {solution.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 ${solution.iconColor.replace('text-', 'bg-')} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30 delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-30 delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30 delay-1500"></div>
      </div>
    </div>
  );
};

export default OurSolution;
import { MessageCircle, Users, Shield, Lock, FileText } from 'lucide-react';

export default function OurTechnologies() {
  return (
    <div className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Technology</h2>
          <p className="text-gray-300 text-left max-w-4xl mx-auto leading-relaxed">
            At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions 
            use the latest advancements in natural language processing and machine learning to create a system that truly understands the 
            complexities of medical documentation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Sophisticated Natural Language Processing */}
          <div className="bg-[#132247] rounded-lg p-8 border border-slate-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Sophisticated Natural Language Processing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.
            </p>
          </div>

          {/* Learning Mode & Personalization */}
          <div className="bg-[#132247] rounded-lg p-8 border border-slate-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Learning Mode & Personalization
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.
            </p>
          </div>

          {/* Robust Data Privacy & Security */}
          <div className="bg-[#132247] rounded-lg p-8 border border-slate-700 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              {/* Compliance Badges */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-center w-[200px] rounded-2xl items-center bg-[#13324d] px-3 py-2 text-xs">
                  <Lock className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-gray-300 font-medium">HIPAA COMPLIANT</span>
                </div>
                <div className="flex items-center bg-transform border-2 rounded-3xl border-[#282e7d] px-3 py-2 text-xs">
                  <FileText className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-gray-300 font-medium">BUSINESS ASSOCIATE AGREEMENT</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Robust Data Privacy & Security
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
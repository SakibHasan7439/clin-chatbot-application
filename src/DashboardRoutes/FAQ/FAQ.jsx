import React, { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Is Clin Technologies HIPAA compliant?",
      answer: "Yes, Clin Technologies is fully HIPAA compliant. We implement comprehensive security measures including end-to-end encryption, secure data storage, access controls, audit logging, and regular security assessments to ensure your patient data remains protected and compliant with all HIPAA requirements."
    },
    {
      id: 2,
      question: "Can I integrate Clin Technologies with my existing EMR system?",
      answer: "Absolutely! Clin Technologies offers seamless integration with most major EMR systems including Epic, Cerner, AllScripts, and many others. Our API-first approach ensures smooth data flow between systems, and our technical team provides full support during the integration process to minimize disruption to your workflow."
    },
    {
      id: 3,
      question: "How does the AI personalize my documentation process?",
      answer: "Our AI learns from your documentation patterns, preferred terminology, and clinical workflows to create personalized templates and suggestions. It adapts to your specialty, documentation style, and frequently used phrases, making each note more accurate and reducing the time needed for documentation while maintaining your unique clinical voice."
    },
    {
      id: 4,
      question: "What if the AI-generated documentation isn't accurate?",
      answer: "You maintain full control over all documentation. Our AI provides suggestions and drafts that you can easily edit, modify, or reject. The system learns from your corrections to improve future suggestions. Additionally, we provide comprehensive audit trails and version control, so you can always track changes and maintain documentation integrity."
    },
    {
      id: 5,
      question: "What solutions does Clin Technologies offer?",
      answer: "Clin Technologies offers a comprehensive suite of healthcare solutions including AI-powered clinical documentation, automated coding assistance, patient data analytics, workflow optimization tools, voice-to-text transcription, and integration services. Our platform is designed to streamline healthcare operations while maintaining the highest standards of patient care."
    },
    {
      id: 6,
      question: "Who can use Clin Technologies?",
      answer: "Clin Technologies is designed for healthcare professionals across all specialties including physicians, nurses, physician assistants, medical scribes, healthcare administrators, and medical practices of all sizes - from solo practitioners to large hospital systems. Our solution adapts to various healthcare environments and workflows."
    },
    {
      id: 7,
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial that gives you full access to all features of Clin Technologies. No credit card is required to start your trial. During this period, you'll have access to our customer success team to help you get the most out of the platform and see how it can transform your documentation workflow."
    },
    {
      id: 8,
      question: "I have another question. How can I contact support?",
      answer: "We're here to help! You can reach our support team 24/7 through multiple channels: email us at support@clintechnologies.com, use our live chat feature on the website, call us at 1-800-CLIN-TECH, or submit a ticket through your dashboard. Our dedicated support team typically responds within 2 hours during business hours."
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className=" py-12 px-4 overflow-scroll">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">FAQ</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about Clin Technologies and our healthcare solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-white rounded overflow-hidden p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200 group"
              >
                <span className="text-white font-medium text-lg pr-4 group-hover:text-blue-300 transition-colors">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 text-slate-400 transition-all duration-300 ${
                  openItems.has(item.id) ? 'rotate-45 text-blue-400' : 'group-hover:text-blue-300'
                }`}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5 pt-1">
                  <div className="h-px bg-gradient-to-r from-slate-600 to-transparent mb-4"></div>
                  <p className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
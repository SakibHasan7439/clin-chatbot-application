import React from 'react';

export default function CaseUse() {
  const caseStudies = [
    {
      title: "Primary Care",
      description: "Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.",
      quote: "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.",
      author: "— Dr. SJ, MD"
    },
    {
      title: "Emergency Medicine",
      description: "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
      quote: null,
      author: "— Emergency Department (ED) Nurse Manager"
    },
    {
      title: "Behavioral Health",
      description: null,
      quote: "Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We've slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we've seen a significant reduction in documentation errors and compliance flags. It's not just faster; it's smarter documentation.",
      author: "— Clinical Director, Behavioral Health Practice"
    },
    {
      title: "Case Management",
      description: null,
      quote: "Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI is like having an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I'm getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing.",
      author: "— Social Worker/Case Manager"
    }
  ];

  return (
    <div className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Case Use</h2>
          <p className="text-gray-300 text-lg text-left">
            See how healthcare providers across specialties are transforming their practice with Clin Technologies:
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-[42px]">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-[#132247] transition-all duration-300 hover:-translate-y-3 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {study.title}
              </h3>
              
              {study.description && (
                <p className="text-white text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
              )}
              
              {study.quote && (
                <div className="p-4 mb-4">
                  <p className="text-white text-sm italic leading-relaxed">
                    "{study.quote}"
                  </p>
                </div>
              )}
              
              <p className="text-gray-400 text-right text-sm italic">
                {study.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
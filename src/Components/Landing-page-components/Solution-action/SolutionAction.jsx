import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const SolutionAction = () => {
  const [activeTab, setActiveTab] = useState('TranscriptX');
  const [currentExample, setCurrentExample] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const tabs = ['TranscriptX', 'Chartwright', 'Redactify', 'Validify'];
  const examples = [
    {
      id: 1,
      doctorsDictation: `"Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today, October 26th, 2023. Chief complaint... uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently, can go up to 8/10 after exercise. Some morning stiffness, lasts maybe 15 minutes. No significant swelling reported, denies locking or giving way. Uh... tried over-the-counter ibuprofen with some partial relief. No history of trauma. Otherwise healthy. Objective: Gait is non-antalgic. Right knee exam: No effusion visible. Mild tenderness to palpation over the medial joint line. McMurray's test is negative. Lachman and drawer tests stable. Range of motion is full, though terminal flexion elicits some discomfort medially. Assessment: Likely medial compartment osteoarthritis of the right knee. Differential includes medial meniscus tear, although less likely given exam findings. Plan: Uh... Obtain bilateral weight-bearing knee X-rays. Recommend continued NSAID use as needed, consider switching to Naproxen. Discussed physical therapy options for strengthening and range of motion. Follow up in 4-6 weeks or sooner if symptoms worsen. Patient understands and agrees with plan."`,
      transcriptXNote: `Patient: Sarah Chen

DOB: 03/22/1978

Date of Service: October 26, 2023

Chief Complaint:
Right knee pain x 3 months.

Subjective:
Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache located medially. Pain worsens with activity, particularly stair climbing. Pain rated 6/10 currently, increasing to 8/10 post-exercise. Reports approximately 15 minutes of morning stiffness. Denies significant swelling, locking, or episodes of giving way. Partial relief noted with over-the-counter ibuprofen. No history of trauma. Patient is otherwise healthy.

Objective:
Gait: Non-antalgic.

Right Knee Exam: No visible effusion. Mild tenderness to palpation over the medial joint line. McMurray's test negative. Lachman and drawer tests stable. Full range of motion with mild discomfort at terminal flexion.

Assessment:
Likely medial compartment osteoarthritis of the right knee. Differential diagnosis includes medial meniscus tear, though less likely based on examination findings.

Plan:
1. Obtain bilateral weight-bearing knee X-rays
2. Continue NSAID therapy as needed; consider switching to Naproxen
3. Physical therapy consultation for strengthening and range of motion exercises
4. Follow-up in 4-6 weeks or sooner if symptoms worsen
5. Patient education provided and understands treatment plan`
    },
    {
      id: 2,
      doctorsDictation: `"Patient is John Martinez, DOB 5/15/1985. Here for annual physical today, November 2nd, 2023. Um, no specific complaints. Generally feeling well. He's been exercising regularly, diet is good. Some stress at work lately but managing okay. Family history significant for diabetes in father, hypertension in mother. Social history: occasional alcohol, maybe 2-3 drinks per week, no tobacco, no drugs. Current medications just a multivitamin. Vitals today: blood pressure 128/82, heart rate 72, temp 98.6, weight 175 pounds. Physical exam: HEENT normal, heart regular rate and rhythm, lungs clear, abdomen soft, extremities normal. Labs from last week show cholesterol 195, HDL 45, LDL 125, glucose 88. Plan: continue current lifestyle, recheck cholesterol in one year, discussed stress management techniques."`,
      transcriptXNote: `Patient: John Martinez

DOB: 05/15/1985

Date of Service: November 2, 2023

Chief Complaint:
Annual physical examination.

Subjective:
Patient reports feeling well overall with no specific complaints. Maintains regular exercise routine and healthy diet. Reports some work-related stress but states he is managing adequately.

Family History:
Father: Diabetes mellitus
Mother: Hypertension

Social History:
Alcohol: Occasional use, 2-3 drinks per week
Tobacco: None
Illicit drugs: None

Current Medications:
Multivitamin daily

Vital Signs:
Blood pressure: 128/82 mmHg
Heart rate: 72 bpm
Temperature: 98.6°F
Weight: 175 lbs

Physical Examination:
HEENT: Normal
Cardiovascular: Regular rate and rhythm, no murmurs
Pulmonary: Lungs clear to auscultation bilaterally
Abdomen: Soft, non-tender
Extremities: Normal examination

Laboratory Results:
Total cholesterol: 195 mg/dL
HDL: 45 mg/dL
LDL: 125 mg/dL
Glucose: 88 mg/dL

Assessment:
Healthy adult male presenting for routine annual examination.

Plan:
1. Continue current healthy lifestyle including regular exercise and diet
2. Recheck lipid panel in 12 months
3. Discussed stress management techniques
4. Return for routine follow-up in one year or sooner as needed`
    }
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const nextExample = () => {
    if (currentExample < examples.length) {
      setCurrentExample(currentExample + 1);
    }
  };

  const prevExample = () => {
    if (currentExample > 1) {
      setCurrentExample(currentExample - 1);
    }
  };

  const currentExampleData = examples[currentExample - 1];

  return (
    <div className="relative bg-[#1e293b] py-20 px-4 font-['Poppins'] overflow-hidden">

      <div className="max-w-7xl mx-auto">
        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-slate-800/30 rounded-lg p-2 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-transform cursor-pointer border-b-3 border-blue-500 text-white shadow-lg'
                  : 'text-gray-400 bg-[#0f1729] cursor-pointer hover:text-white hover:bg-slate-700/50 border-l border-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Collapse Button */}
        <div className="text-center mb-8">
          <button
            onClick={toggleCollapse}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
          >
            {isCollapsed ? (
              <>
                <ChevronDown className="w-5 h-5" />
                Click to expand comparison
              </>
            ) : (
              <>
                <ChevronUp className="w-5 h-5" />
                Click to collapse comparison
              </>
            )}
          </button>
        </div>

        {/* Example Navigation */}
        {!isCollapsed && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevExample}
              disabled={currentExample === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                currentExample === 1
                  ? 'bg-slate-700/50 text-gray-500 cursor-not-allowed'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Example
            </button>
            
            <div className="flex gap-2">
              {examples.map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentExample(index + 1)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentExample === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  Example {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextExample}
              disabled={currentExample === examples.length}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                currentExample === examples.length
                  ? 'bg-slate-700/50 text-gray-500 cursor-not-allowed'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
            >
              Next Example
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className={`transition-all duration-500 overflow-hidden ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-none opacity-100'}`}>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Experience TranscriptX - Effortless, Accurate Medical Transcription
          </h2>

          {/* Comparison Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Doctor's Dictation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
                <h3 className="text-white font-semibold">Doctor's Dictation</h3>
                <span className="text-blue-200 text-sm">Audio Input</span>
              </div>
              <div className="p-6">
                <h4 className="text-white font-medium mb-4">Doctor's Dictation (Audio Input Simulation)</h4>
                <div className="text-gray-300 text-sm leading-relaxed max-h-96 overflow-y-auto bg-slate-900/50 p-4 rounded-lg">
                  {currentExampleData.doctorsDictation}
                </div>
              </div>
            </div>

            {/* TranscriptX Output */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="bg-orange-600 px-6 py-4 flex items-center justify-between">
                <h3 className="text-white font-semibold">TranscriptX Note</h3>
                <span className="text-orange-200 text-sm">AI-Generated Output</span>
              </div>
              <div className="p-6">
                <h4 className="text-white font-medium mb-4">TranscriptX - AI-Generated Note</h4>
                <div className="text-gray-300 text-sm leading-relaxed max-h-96 overflow-y-auto bg-slate-900/50 p-4 rounded-lg whitespace-pre-line">
                  {currentExampleData.transcriptXNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAction;
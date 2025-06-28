export default function Benefits() {
  const benefits = [
    "Reduction in documentation time by 40-80%",
    "Improved work-life balance with less after-hours charting",
    "Enhanced patient interaction due to less focus on note-taking",
    "More comprehensive and consistent clinical documentation",
    "Reduced risk of documentation errors and omissions"
  ];

  return (
    <div className="bg-[#1e293b] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Benefits</h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-12">
          Healthcare providers using Clin Technologies solutions report:
        </p>
        
        {/* Benefits List */}
        <div className="text-left max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-base leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 border-2 border-[#3276f2] shadow-blue-400 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition-colors duration-200 min-w-[120px]">
            Login
          </button>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 min-w-[120px]">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
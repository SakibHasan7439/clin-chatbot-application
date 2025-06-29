import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen z-2 bg-[#0a1021] overflow-hidden font-['Poppins']">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {/* Large slow-moving circles */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-0 w-80 h-80 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
        
        {/* Medium floating circles */}
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-400/15 rounded-full animate-bounce delay-500" style={{animationDuration: '3s'}}></div>
        
        {/* Small floating dots */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1300"></div>
        <div className="absolute top-60 left-3/4 w-2 h-2 bg-blue-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-80 right-1/2 w-4 h-4 bg-blue-500 rounded-full animate-ping delay-900"></div>
        
        {/* Additional moving elements */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-blue-300/30 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-4 border-2 border-blue-400 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border border-blue-300 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-2xl md:text-4xl font-bold text-blue-400 mb-8 tracking-wide">
          Clin Technologies
        </h1>

        {/* Main Description */}
        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-lg md:text-[1.4rem] text-gray-300 leading-relaxed">
            Revolutionizing clinical documentation through{' '}
            <span className="text-yellow-400 font-semibold">HIPAA COMPLIANT</span>{' '}
            advanced artificial intelligence, giving healthcare providers more time for what truly matters — patient care.{' '}
            <span className="text-yellow-400 font-semibold">try it for FREE</span>{' '}
            today
          </p>
        </div>

        {/* Sub Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-base md:text-lg lg:text-[1.2rem] text-white leading-relaxed">
            Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to={"/login"}>
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 font-medium min-w-[120px]">
            Login
          </button>
          </Link>
          <Link to={"/register"}>
            <button className="px-8 py-3 cursor-pointer bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 min-w-[120px]">
              Signup
            </button>
          </Link>
        </div>
      </div>

      {/* Additional animated elements for more dynamic feel */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-5px) translateX(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
      
      {/* Additional floating elements with custom animations */}
      <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-blue-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-blue-300/20 rounded-full animate-float-slow"></div>
    </div>
  );
};

export default HeroSection;
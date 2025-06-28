import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative bg-[#1e293b] py-20 px-4 font-['Poppins'] overflow-hidden">
      {/* Subtle background animations */}
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-16">
          About Clin Technologies
        </h2>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* First Paragraph */}
          <p className="text-lg md:text-xl">
            Headquartered in the Midwest, Clin Technologies is a{' '}
            <span className="text-white font-semibold">specialized AI firm</span>{' '}
            that empowers healthcare providers across the Midwest and beyond to conquer their most pressing operational challenges. We deliver this through a powerful and flexible AI platform that powers both a{' '}
            <span className="text-white font-semibold">suite of ready-to-deploy solutions</span>{' '}
            for documentation and compliance, and the creation of{' '}
            <span className="text-white font-semibold">fully bespoke engines</span>{' '}
            for enterprise-level transformation.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg md:text-xl">
            Our expertise lies in applying cutting-edge{' '}
            <span className="text-white font-semibold">Large Language Models (LLMs) and machine learning (ML)</span>{' '}
            to solve real-world challenges in healthcare documentation. We partner closely with individual practitioners, clinics, and healthcare organizations, leveraging{' '}
            <span className="text-white font-semibold">meticulously gathered real-world data</span>{' '}
            from professionals to build the exceptionally robust and uniquely effective datasets that power these advanced systems.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg md:text-xl">
            This same proven AI framework serves as the foundation for our enterprise partnerships. Whether you need an{' '}
            <span className="text-white font-semibold">immediate solution from our product suite</span>{' '}
            or a{' '}
            <span className="text-white font-semibold">strategic partner to build a custom engine</span>{' '}
            for challenges like Utilization Management, we provide the right tool for the job. Our mission is to transform your data into a proprietary asset, enabling data-driven decisions that{' '}
            <span className="text-white font-semibold">eliminate administrative friction</span>{' '}
            and allow you to focus on what matters most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
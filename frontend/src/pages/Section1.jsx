import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket,faSchool, faCogs, faBrain, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const Section1 = () => {
  // Define feature data with icons, colors, and heading positions
  const features = [
    { color: '#01A3D4', icon: faLightbulb, heading: 'SNS Spine', headingStyle: { top: '10%', left: '15%' } },
    { color: '#DE2A1B', icon: faRocket, heading: 'SNS Venture Capital & Investment', headingStyle: { top: '15%', right: '15%' } },
    { color: '#EB510B', icon: faSchool, heading: 'SNS Institutions', headingStyle: { bottom: '20%', left: '10%' } },
    { color: '#B0D402', icon: faBrain, heading: 'SNS Square Technologies', headingStyle: { bottom: '15%', right: '10%' } },
    { color: '#E10485', icon: faHandsHelping, heading: 'SNS Innovation Hub', headingStyle: { top: '50%', left: '5%' } },
  ];


  // Calculate feature positions dynamically
  const radius = 272; // Radius of the circle (half of 34rem)
  const center = { x: 0, y: 0 }; // Center of the circle

  return (
    <div className="min-h-screen   flex items-center justify-center relative">
      {/* Center Sun */}
      <div className="w-80 h-80 absolute bg-[#FCC900] border-[20px] border-white rounded-full flex items-center justify-center shadow-2xl"  style={{
            left: '350px',
            transform: 'translateX(-50%)',
    }}>
        <h2 className="text-black font-bold text-xl text-center">
          <span className="text-2xl">SNS</span> <br />
          Design Thinking <br />
          Consultancy
        </h2>
      </div>

      {/* Features and Heading Boxes */}
      <div className="absolute w-[34rem] h-[34rem] rounded-full border-[20px] border-black flex items-center justify-center"  style={{
    left: '10px',
    transform: 'translateX(10%)',
  }}>
        {features.map((feature, index) => {
          // Calculate angle for each feature
          const angle = (index * (360 / features.length)) * (Math.PI / 180); // Convert degrees to radians
          const x = center.x + radius * Math.cos(angle); // X-coordinate
          const y = center.y + radius * Math.sin(angle); // Y-coordinate

          return (
            <React.Fragment key={index}>
              {/* Feature Circle */}
              <div
                className="absolute w-20 h-20 rounded-full flex items-center justify-center shadow-md"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  backgroundColor: feature.color,
                  transform: 'translate(-50%, -50%)', // Center each feature
                }}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
              </div>

             {/* Heading Boxes */}
        <div
        className="absolute px-6 py-3  top-0 right-[-200px] bg-white bg-opacity-30  rounded-lg border border-gray-300"
        >
          <p className="text-center text-sm font-semibold text-gray-800">SNS Spine</p>
        </div>
        <div
        className="absolute px-6 py-3 top-0 right-[-200px] bg-white bg-opacity-30  rounded-lg border border-gray-300"
        >
          <p className="text-center text-sm font-semibold text-gray-800">SNS Venture Capital & Investment</p>
        </div>
        <div
        className="absolute px-6 py-3 bottom-0 left-[-170px] bg-white bg-opacity-30  rounded-lg border border-gray-300"
        >
          <p className="text-center text-sm font-semibold text-gray-800">SNS Institutions</p>
        </div>
        <div
        className="absolute px-6 py-3 bottom-[-60px] right-[-160px] bg-white bg-opacity-30  rounded-lg border border-gray-300"
        >
          <p className="text-center text-sm font-semibold text-gray-800">SNS Square Technologies</p>
        </div>
        <div
        className="absolute px-6 py-3 top-[250px] right-[-290px] bg-white bg-opacity-30  rounded-lg border border-gray-300"
        >
          <p className="text-center text-sm font-semibold text-gray-800">SNS Innovation Hub</p>
        </div>
            
            
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;

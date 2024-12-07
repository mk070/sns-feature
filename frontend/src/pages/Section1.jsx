import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faRocket, faSchool, faCogs, faBrain, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
  const features = [
    { color: "#01A3D4", icon: faLightbulb },
    { color: "#DE2A1B", icon: faRocket },
    { color: "#EB510B", icon: faSchool },
    { color: "#B0D402", icon: faBrain },
    { color: "#E10485", icon: faHandsHelping },
  ];

  const radius = 170; // Radius for positioning feature icons
  const centerX = 250; // Offset to the right of the semi-circle

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br  from-slate-50 via-gray-50 to-gray-100 relative overflow-hidden font-space-grotesk ">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-96 left-0 w-96 h-96 bg-gradient-to-l from-blue-400 to-green-500 opacity-30 rounded-full filter blur-3xl z-0"></div>

      {/* Center Circle */}
      <div
        className="w-96 h-96 absolute bg-[#FCC900] border-[15px] border-white rounded-full flex items-center justify-center shadow-2xl z-10"
        style={{
          left: "550px",
          transform: "translateX(-50%)",
        }}
      >
        <h2 className="text-black font-bold text-xl text-center">
          <span className="text-2xl">SNS</span> <br />
          Design Thinking <br />
          Consultancy
        </h2>
      </div>

      {/* Left Semi-Circle */}
      <div
        className="absolute w-[34rem] h-[34rem] rounded-full border-[18px] border-black"
        style={{
          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          left: "550px",
          transform: "translateX(-50%)",
        }}
      ></div>

      {/* Feature Icons
      {features.map((feature, index) => {
        // Calculate positions dynamically for icons on the right side
        const angle = (index * (180 / (features.length - 1))) * (Math.PI / 180); // Spread across the right half
        const x = radius * Math.cos(angle); // X-coordinate
        const y = radius * Math.sin(angle); // Y-coordinate

        return (
          <div
            key={index}
            className="absolute w-14 h-14 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${centerX + x}px)`, // Adjusted to align with the right side
              backgroundColor: feature.color,
              transform: "translate(-50%, -50%)",
            }}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-white text-lg" />
          </div>
        );
      })} */}

        <div
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: '70px',
              left: '580px', // 440 + 140
              backgroundColor: "#DE2A1B",
            }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>
        <div
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: '200px',
              left: '780px', // 620 + 140
              backgroundColor: "#B0D402",
            }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>
        <div
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: '340px',
              left: '820px', // 680 + 140
              backgroundColor: "#E10485",
            }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>
        <div
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: '480px',
              left: '780px', // 620 + 140
              backgroundColor: "#EB510B",
            }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>
        <div
            className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            style={{
              top: '600px',
              left: '580px', // 440 + 140
              backgroundColor: "#01A3D4",
            }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>

          <div
            className="absolute w-52 h-16 rounded-lg flex items-center justify-center shadow-md text-center"
            style={{
              top: '70px',
              left: '690px', // 610 + 140
              backgroundColor: "#DE2A1B",
            }}
          >
            <p>SNS Venture Capital & Investment</p>
          </div>
          <div
            className="absolute w-52 h-16 rounded-lg flex items-center justify-center shadow-md text-center"
            style={{
              top: '200px',
              left: '880px', // 710 + 140
              backgroundColor: "#B0D402",
            }}
          >
            <p>SNS Square Technologies</p>
          </div>
          <div
            className="absolute w-52 h-16 rounded-lg flex items-center justify-center shadow-md text-center"
            style={{
              top: '340px',
              left: '920px', // 780 + 140
              backgroundColor: "#E10485",
            }}
          >
            <p>SNS Innovation Hub</p>
          </div>
          <div
            className="absolute w-52 h-16 rounded-lg flex items-center justify-center shadow-md text-center"
            style={{
              top: '480px',
              left: '880px', // 710 + 140
              backgroundColor: "#EB510B",
            }}
          >
            <p>SNS Institutions</p>
          </div>
          <div
            className="absolute w-52 h-16 rounded-lg flex items-center justify-center shadow-md text-center"
            style={{
              top: '600px',
              left: '680px', // 540 + 140
              backgroundColor: "#01A3D4",
            }}
          >
            <p>SNS Spine</p>
          </div>

    </div>
  );
};

export default Section1;

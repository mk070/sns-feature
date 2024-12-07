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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Center Circle */}
      <div
        className="w-96 h-96 absolute bg-[#FCC900] border-[15px] border-white rounded-full flex items-center justify-center shadow-2xl z-10"
        style={{
          left: "550px",
          transform: "translateX(-50%)",
        }}
      >
        <h2 className="text-black font-bold text-[22px] text-center">
          <span className="text-[60px]">SNS</span><br />
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

      {/* Feature Icons */}
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        style={{
          top: "75px",
          left: "580px",
          backgroundColor: "#DE2A1B",
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        style={{
          top: "200px",
          left: "780px",
          backgroundColor: "#B0D402",
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        style={{
          top: "340px",
          left: "820px",
          backgroundColor: "#E10485",
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        style={{
          top: "480px",
          left: "780px",
          backgroundColor: "#EB510B",
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        style={{
          top: "600px",
          left: "580px",
          backgroundColor: "#01A3D4",
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
      </div>

      {/* Heading Boxes */}
      <div
        className="absolute w-96 h-16 rounded-full flex items-center justify-center shadow-md text-center text-white font-medium"
        style={{
          top: "75px",
          left: "650px",
          backgroundColor: "#DE2A1B",
        }}
      >
        <p>SNS Venture Capital & Investment</p>
      </div>
      <div
        className="absolute w-96 h-16 rounded-full flex items-center justify-center shadow-md text-center text-white font-medium"
        style={{
          top: "200px",
          left: "850px",
          backgroundColor: "#B0D402",
        }}
      >
        <p>SNS Square Technologies</p>
      </div>
      <div
        className="absolute w-96 h-16 rounded-full flex items-center justify-center shadow-md text-center text-white font-medium"
        style={{
          top: "340px",
          left: "890px",
          backgroundColor: "#E10485",
        }}
      >
        <p>SNS Innovation Hub</p>
      </div>
      <div
        className="absolute w-96 h-16 rounded-full flex items-center justify-center shadow-md text-center text-white font-medium"
        style={{
          top: "480px",
          left: "850px",
          backgroundColor: "#EB510B",
        }}
      >
        <p>SNS Institutions</p>
      </div>
      <div
        className="absolute w-96 h-16 rounded-full flex items-center justify-center shadow-md text-center text-white font-medium"
        style={{
          top: "600px",
          left: "650px",
          backgroundColor: "#01A3D4",
        }}
      >
        <p>SNS Spine</p>
      </div>
    </div>
  );
};

export default Section1;

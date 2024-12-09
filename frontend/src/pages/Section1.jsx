import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLaptop, faDumbbell, faLightbulb, faSchool } from '@fortawesome/free-solid-svg-icons'
import '../../src/App.css'
import img1 from '../assets/circle.png'
const Section1 = () => {
//   const features = [
//     { color: "#01A3D4", icon: faLightbulb },
//     { color: "#DE2A1B", icon: faRocket },
//     { color: "#EB510B", icon: faSchool },
//     { color: "#B0D402", icon: faBrain },
//     { color: "#E10485", icon: faHandsHelping },
//   ];
  const [hoveredBox, setHoveredBox] = useState(null);

  const features = [
    {
      title: "SNS Venture Capital & Investment",
      description:
        "Funding high-potential startups for strategic ownership stakes.",
    link:'',
      gradient: "linear-gradient(to right, #f9e7e1, #ff5c22)",
      top: "75px",
      left: "650px",
    },
    {
      title: "SNS Square Technologies",
      description:
        "Driving digital transformation with cutting-edge IT and software solutions.",
        link:'https://www.snssquare.com/',
      gradient: "linear-gradient(to right, #d8f3a3, #c5ff1b)",
      top: "200px",
      left: "850px",
    },
    {
      title: "SNS Innovation Hub",
      description:
        "Empowering entrepreneurs with mentorship, resources, and a platform for innovation.",
        link:'https://snsihub.ai/',
      gradient: "linear-gradient(to right, #f4a4c4, #ff1e5f)",
      top: "340px",
      left: "890px",
    },
    {
      title: "SNS Institutions",
      description: "Fostering holistic growth through high-quality education.",
      gradient: "linear-gradient(to right, #ffb390, #ff5714)",
      link:'https://main.snsgroups.com/',
      top: "480px",
      left: "850px",
    },
    {
      title: "SNS Spine",
      description:
        "Enabling mental and physical well-being through sports, gaming, entertainment, and clubs.",
        link:'https://snsspine.in/',
      gradient: "linear-gradient(to right, #89eaf2, #13e8ff)",
      top: "600px",
      left: "650px",
    },
  ];

  const radius = 170; // Radius for positioning feature icons
  const centerX = 250; // Offset to the right of the semi-circle

  return (
    <div className="min-h-screen flex relative hero overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Center Circle */}
      {/* <div
        className="w-96 h-96 absolute center bg-[#FCC900] border-[15px] border-white rounded-full flex items-center justify-center shadow-2xl z-10"
        id="Center-Circle"
        style={{
          left: "550px",
          transform: "translateX(-50%)",
        }}
      >
        <h2 className="text-black font-bold text-[20px] sm:text-[22px] text-center">
          <span className="text-[58px] sm:text-[60px]">SNS</span><br />
          Design Thinking <br />
          Consultancy
        </h2>
      </div>

      <div
        className="absolute w-[34rem] h-[34rem] rounded-full border-[18px] border-black"
        id="Semi-Circle"
        style={{
          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          left: "550px",
          transform: "translateX(-50%)",
        }}
      ></div> */}

        <div className="circle w-2/4 absolute left-44 top-[-10px]">
          <img src={img1} alt="" srcset="" />
        </div>

      {/* Feature Icons */}
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        id="feature-icon1"
        style={{
          top: "75px",
          left: "580px",
          backgroundColor: "#DE2A1B",
        }}
      >
        <FontAwesomeIcon icon={faBuilding} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        id="feature-icon2"
        style={{
          top: "200px",
          left: "780px",
          backgroundColor: "#B0D402",
        }}
      >
        <FontAwesomeIcon icon={faLaptop} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        id="feature-icon3"

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
        id="feature-icon4"

        style={{
          top: "480px",
          left: "780px",
          backgroundColor: "#EB510B",
        }}
      >
        <FontAwesomeIcon icon={faSchool} className="text-white text-lg" />
      </div>
      <div
        className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
        id="feature-icon5"
        style={{
          top: "600px",
          left: "580px",
          backgroundColor: "#01A3D4",
        }}
      >
        <FontAwesomeIcon icon={faDumbbell} className="text-white text-lg" />
      </div>

      {/* Heading Boxes */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`absolute  w-96 h-16 rounded-full flex flex-col items-center justify-center shadow-md text-center text-black font-semibold transition-all duration-300 ${
            hoveredBox === index ? "hovered" : ""
          }`}
          id={`heading-${index}`}           
          style={{
            top: feature.top,
            left: feature.left,
            background: feature.gradient,
            cursor: hoveredBox === index ? 'pointer' : 'default', // Add cursor style
          }}
          onMouseEnter={() => setHoveredBox(index)}
          onMouseLeave={() => setHoveredBox(null)}
          onClick={() => window.open(feature.link, '_blank')} // Navigate to site on click using feature.link
        >
          <p className="text-lg">{feature.title}</p>
          {hoveredBox === index && (
            <p className="mt-2 text-sm font-normal text-gray-800" id="desc">
              {feature.description}
            </p>
          )}
        </div>
      ))}

      {/* Custom Styles for Hover */}
      <style jsx>{`
        .hovered {
          transform: translateY(-30px);
          height: auto;
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default Section1;

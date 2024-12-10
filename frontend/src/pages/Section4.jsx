import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptop, faLightbulb, faSchool, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Section3 from './Section3';

const Section4 = () => {
  return (
    <div 
      className="hero min-h-screen relative overflow-hidden p-8"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom left, #ffffff 30%, #fefbf6 100%)"
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Circle Section */}
        <div className="circle-wrap relative" style={{ width: '420px', height: '420px' }}>
          {/* Outer White Circle with Shadow */}
          <div className="absolute inset-0 rounded-full bg-white shadow-md"></div>

          {/* Yellow Inner Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-yellow-500" style={{ width: '260px', height: '260px' }}>
              <div className="flex flex-col items-center justify-center w-full h-full text-center px-4">
                <h2 className="text-black text-xl font-bold leading-snug">
                  SNS<br/>Design Thinking<br/>Consultancy
                </h2>
              </div>
            </div>
          </div>

          {/* Colored Arc Segments */}
          {/* We'll create arcs by placing colored semicircles along the left side.
             Each arc: a full circle with half covered by white to appear as a semicircle. */}
          
          {/* Adjusting arcs to closely match the image: */}
          {/* Red Arc (Top) */}
          <div className="absolute" style={{
            width: '80px',
            height: '80px',
            top: '15px',
            left: '-25px',
            borderRadius: '50%',
            backgroundColor: '#DE2A1B',
          }}></div>
          <div className="absolute" style={{
            width: '80px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '15px',
            left: '-25px'
          }}></div>

          {/* Green Arc */}
          <div className="absolute" style={{
            width: '80px',
            height: '80px',
            top: '95px',
            left: '-25px',
            borderRadius: '50%',
            backgroundColor: '#B0D402',
          }}></div>
          <div className="absolute" style={{
            width: '80px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '95px',
            left: '-25px'
          }}></div>

          {/* Pink Arc */}
          <div className="absolute" style={{
            width: '80px',
            height: '80px',
            top: '175px',
            left: '-25px',
            borderRadius: '50%',
            backgroundColor: '#E10485',
          }}></div>
          <div className="absolute" style={{
            width: '80px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '175px',
            left: '-25px'
          }}></div>

          {/* Orange Arc */}
          <div className="absolute" style={{
            width: '80px',
            height: '80px',
            top: '255px',
            left: '-25px',
            borderRadius: '50%',
            backgroundColor: '#EB510B',
          }}></div>
          <div className="absolute" style={{
            width: '80px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '255px',
            left: '-25px'
          }}></div>

          {/* Blue Arc */}
          <div className="absolute" style={{
            width: '80px',
            height: '80px',
            top: '335px',
            left: '-25px',
            borderRadius: '50%',
            backgroundColor: '#01A3D4',
          }}></div>
          <div className="absolute" style={{
            width: '80px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            top: '335px',
            left: '-25px'
          }}></div>
        </div>

        {/* Boxes on the right side */}
        {/* Positioning each box to resemble the given image */}
        
        {/* SNS Venture Capital & Investment */}
        <div className="
          absolute 
          flex items-center 
          rounded-full 
          p-4 
          bg-gradient-to-r from-[#f9e7e1] to-[#ff5c22]
          hover:-translate-y-1 
          transition-all duration-300 
          cursor-pointer
        " 
          style={{ top: '60px', left: '500px', width: '320px' }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#DE2A1B' }}>
            <FontAwesomeIcon icon={faBuilding} className="text-white text-lg" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">SNS Venture Capital &amp; Investment</p>
            <p className="text-sm text-gray-800 mt-1">Funding high-potential startups for strategic ownership stakes.</p>
          </div>
        </div>

        {/* SNS Square Technologies */}
        <div className="
          absolute
          flex items-center 
          rounded-full 
          p-4 
          bg-gradient-to-r from-[#d8f3a3] to-[#c5ff1b]
          hover:-translate-y-1 
          transition-all duration-300 
          cursor-pointer
        "
          style={{ top: '150px', left: '620px', width: '320px' }}
          onClick={() => window.open("https://www.snssquare.com/", '_blank')}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#B0D402' }}>
            <FontAwesomeIcon icon={faLaptop} className="text-white text-lg" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">SNS Square Technologies</p>
            <p className="text-sm text-gray-800 mt-1">
              Driving digital transformation with cutting-edge IT and software solutions.
            </p>
          </div>
        </div>

        {/* SNS Innovation Hub */}
        <div className="
          absolute
          flex items-center 
          rounded-full 
          p-4 
          bg-gradient-to-r from-[#f4a4c4] to-[#ff1e5f]
          hover:-translate-y-1 
          transition-all duration-300 
          cursor-pointer
        "
          style={{ top: '240px', left: '660px', width: '320px' }}
          onClick={() => window.open("https://snsihub.ai/", '_blank')}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#E10485' }}>
            <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">SNS Innovation Hub</p>
            <p className="text-sm text-gray-800 mt-1">
              Empowering entrepreneurs with mentorship, resources and a platform for innovation.
            </p>
          </div>
        </div>

        {/* SNS Institutions */}
        <div className="
          absolute
          flex items-center 
          rounded-full 
          p-4 
          bg-gradient-to-r from-[#f9e7e1] to-[#ff5c22]
          hover:-translate-y-1 
          transition-all duration-300 
          cursor-pointer
        "
          style={{ top: '330px', left: '620px', width: '320px' }}
          onClick={() => window.open("https://main.snsgroups.com/", '_blank')}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#EB510B' }}>
            <FontAwesomeIcon icon={faSchool} className="text-white text-lg" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">SNS Institutions</p>
            <p className="text-sm text-gray-800 mt-1">
              Fostering holistic growth through high-quality education.
            </p>
          </div>
        </div>

        {/* SNS SPINE */}
        <div className="
          absolute
          flex items-center 
          rounded-full 
          p-4 
          bg-gradient-to-r from-[#89eaf2] to-[#13e8ff]
          hover:-translate-y-1 
          transition-all duration-300 
          cursor-pointer
        "
          style={{ top: '420px', left: '500px', width: '320px' }}
          onClick={() => window.open("https://snsspine.in/", '_blank')}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#01A3D4' }}>
            <FontAwesomeIcon icon={faDumbbell} className="text-white text-lg" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">SNS SPINE</p>
            <p className="text-sm text-gray-800 mt-1">
              Enabling mental and physical well-being through sports, gaming, entertainment and clubs.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section4;

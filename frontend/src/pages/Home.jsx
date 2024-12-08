import React, { useState } from 'react';
import Nav from '../layout/Nav';
import Section1 from './Section1';
import OurVision from '../components/OurVision';
import Footer from '../components/Footer';
import Section3 from './Section3';

const Home = ({ isMobile }) => {
  const [selectedSection, setSelectedSection] = useState('Section1');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Section1':
        return <Section1 />;
      case 'Section2':
        return <Section2 />;
      case 'Section3':
        return <Section3 />;
      default:
        return <Section1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-gray-100 relative overflow-hidden font-space-grotesk">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 sm:w-72 w-52 h-52 sm:h-72 bg-gradient-to-r from-[#FCC900] to-[#ffbd52] opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-[450px] left-0 sm:w-96 sm:h-96 w-48 h-48 bg-gradient-to-l from-[#ffbd52] to-[#FCC900] opacity-20 rounded-full filter blur-3xl z-0"></div>

      {/* Sticky Navigation Bar */}
      <Nav />

      {/* <OurVision /> */}
      {isMobile ? <Section3 /> : <Section1 />}
      <Footer />
    </div>
  );
};

export default Home;

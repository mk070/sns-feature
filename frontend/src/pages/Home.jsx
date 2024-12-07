import React, { useState } from 'react';
import Nav from '../layout/Nav';
import Section1 from './Section1';

const Home = () => {
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
    <div className="min-h-screen bg-gradient-to-br  from-slate-50 via-gray-50 to-gray-100 relative overflow-hidden font-space-grotesk">
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-[#FCC900] to-[#ffbd52] opacity-30 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-96 left-0 w-96 h-96 bg-gradient-to-l from-[#ffbd52] to-[#FCC900] opacity-30 rounded-full filter blur-3xl z-0"></div>
     <Nav />
     
     <Section1/>
    </div>
  );
};



export default Home;

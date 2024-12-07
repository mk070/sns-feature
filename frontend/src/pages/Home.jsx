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
    <>
     <Nav />
     <Section1/>
    </>
  );
};



export default Home;

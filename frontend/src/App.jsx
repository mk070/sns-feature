import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import './App.css';
import Home from './pages/Home';

const App = () => {
  const sections = ['/section1', '/section2', '/section3'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 425px)');

    // Function to update the isMobile state based on the screen size
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Initialize the mobile state on component mount
    handleResize();

    // Add the event listener for changes to the media query
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => { console.log(isMobile) }, [])

  const handleToggle = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentIndex(nextIndex);
    navigate(sections[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={!isMobile ? <Home /> : <Section3 />} />
          <Route path="/section1" element={!isMobile ? <Section1 /> : <Section3 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

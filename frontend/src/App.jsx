import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import './App.css';

const App = () => {
  const sections = ['/section1', '/section2', '/section3'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleToggle = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentIndex(nextIndex);
    navigate(sections[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div>
            <button
              onClick={() => navigate('/section1')}
              className="text-gray-800 px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 font-medium"
            >
              Section 1
            </button>
            <button
              onClick={() => navigate('/section2')}
              className="text-gray-800 px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 font-medium"
            >
              Section 2
            </button>
            <button
              onClick={() => navigate('/section3')}
              className="text-gray-800 px-4 py-2 mx-2 rounded-lg hover:bg-gray-100 font-medium"
            >
              Section 3
            </button>
          </div>
          <button
            onClick={handleToggle}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Toggle Section
          </button>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="flex-grow mt-20">
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

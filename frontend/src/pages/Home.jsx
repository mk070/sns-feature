import React, { useState } from 'react';

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
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedSection('Section1')}
            className={`text-gray-800 px-4 py-2 mx-2 rounded-lg transition ${
              selectedSection === 'Section1' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
            }`}
          >
            Section 1
          </button>
          <button
            onClick={() => setSelectedSection('Section2')}
            className={`text-gray-800 px-4 py-2 mx-2 rounded-lg transition ${
              selectedSection === 'Section2' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
            }`}
          >
            Section 2
          </button>
          <button
            onClick={() => setSelectedSection('Section3')}
            className={`text-gray-800 px-4 py-2 mx-2 rounded-lg transition ${
              selectedSection === 'Section3' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
            }`}
          >
            Section 3
          </button>
        </div>
      </nav>

      <div className="flex-grow mt-20 flex items-center justify-center">
        {renderSection()}
      </div>
    </div>
  );
};

const Section1 = () => (
  <div className="glass-card">
    <h2 className="text-xl font-semibold text-gray-900">Section 1</h2>
    <p className="text-gray-700 mt-2">Professional content for Section 1.</p>
  </div>
);

const Section2 = () => (
  <div className="glass-card">
    <h2 className="text-xl font-semibold text-gray-900">Section 2</h2>
    <p className="text-gray-700 mt-2">Professional content for Section 2.</p>
  </div>
);

const Section3 = () => (
  <div className="glass-card">
    <h2 className="text-xl font-semibold text-gray-900">Section 3</h2>
    <p className="text-gray-700 mt-2">Professional content for Section 3.</p>
  </div>
);

export default Home;

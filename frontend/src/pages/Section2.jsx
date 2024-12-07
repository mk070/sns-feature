import React from 'react';

const Section2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-300 flex flex-col items-center justify-center px-4 py-10 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Marine Sustainability Challenges
      </h1>

      {/* Colored Blurs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 opacity-50 blur-3xl rounded-full"></div>
      <div className="absolute top-40 right-20 w-60 h-60 bg-pink-200 opacity-50 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-32 w-48 h-48 bg-green-200 opacity-50 blur-3xl rounded-full"></div>
      <div className="absolute bottom-32 right-40 w-56 h-56 bg-purple-200 opacity-50 blur-3xl rounded-full"></div>

      {/* Hexagon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl relative z-10">
        {/* Hexagon 1 */}
        <div className="hexagon-wrapper">
          <div className="hexagon-glass">
            <div className="content">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              SNS Square Technologies
              </h3>
            </div>
          </div>
        </div>

        {/* Hexagon 2 */}
        <div className="hexagon-wrapper">
          <div className="hexagon-glass">
            <div className="content">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              SNS Venture Capital & Investment
              </h3>
            </div>
          </div>
        </div>

        {/* Hexagon 3 */}
        <div className="hexagon-wrapper ">
          <div className="hexagon-glass">
            <div className="content">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              SNS iNNovation Hub
              </h3>
            </div>
          </div>
        </div>

        {/* Hexagon 4 */}
        <div className="hexagon-wrapper">
          <div className="hexagon-glass">
            <div className="content">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              SNS Institutions
              </h3>
            </div>
          </div>
        </div>

        {/* Hexagon 5 */}
        <div className="hexagon-wrapper">
          <div className="hexagon-glass">
            <div className="content">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
              SNS Spine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

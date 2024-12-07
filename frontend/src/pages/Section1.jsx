import React from 'react';

const Section1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-white to-blue-500 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl p-4">
        {/* Card 1 */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-gray-900">Feature 1</h3>
          <p className="text-gray-700 mt-2">This is a description of Feature 1.</p>
        </div>

        {/* Card 2 */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-gray-900">Feature 2</h3>
          <p className="text-gray-700 mt-2">This is a description of Feature 2.</p>
        </div>

        {/* Card 3 */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-gray-900">Feature 3</h3>
          <p className="text-gray-700 mt-2">This is a description of Feature 3.</p>
        </div>

        {/* Card 4 */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-gray-900">Feature 4</h3>
          <p className="text-gray-700 mt-2">This is a description of Feature 4.</p>
        </div>

        {/* Card 5 */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-gray-900">Feature 5</h3>
          <p className="text-gray-700 mt-2">This is a description of Feature 5.</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;

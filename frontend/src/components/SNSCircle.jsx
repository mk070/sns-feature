import React from "react";

const SNSCircle = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="relative" style={{ width: '300px', height: '300px' }}>
        
        {/* Outer White Circle with Shadow */}
        <div className="absolute inset-0 rounded-full bg-white shadow-lg" />

        {/* Yellow Inner Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-yellow-500" style={{ width: '220px', height: '220px' }}>
            <div className="flex flex-col items-center justify-center w-full h-full text-center px-4">
              <h2 className="text-black text-lg font-bold leading-snug">
                SNS Design<br/>Thinking<br/>Consultancy
              </h2>
            </div>
          </div>
        </div>

        {/* Colored Arc Segments */}
        {/* Each arc is a half circle positioned along the left side of the main circle */}
        
        {/* Red Arc (top) */}
        <div className="absolute"
             style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               backgroundColor: '#DE2A1B',
               top: '20px',
               left: '-20px',
             }}>
        </div>

        {/* Green Arc */}
        <div className="absolute"
             style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               backgroundColor: '#B0D402',
               top: '70px',
               left: '-20px',
             }}>
        </div>

        {/* Pink Arc */}
        <div className="absolute"
             style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               backgroundColor: '#E10485',
               top: '120px',
               left: '-20px',
             }}>
        </div>

        {/* Orange Arc */}
        <div className="absolute"
             style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               backgroundColor: '#EB510B',
               top: '170px',
               left: '-20px',
             }}>
        </div>

        {/* Blue Arc */}
        <div className="absolute"
             style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               backgroundColor: '#01A3D4',
               top: '220px',
               left: '-20px',
             }}>
        </div>
        
        {/* To create the "arc" effect, we can overlay a white semi-circle on each colored circle
            so only a segment shows. This makes them look like arcs. */}
        
        {/* White Overlays to shape arcs (adjust these to get the exact arc shapes) */}

        <div className="absolute"
             style={{
               width: '60px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: 'white',
               top: '20px',
               left: '-20px',
             }}>
        </div>

        <div className="absolute"
             style={{
               width: '60px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: 'white',
               top: '70px',
               left: '-20px',
             }}>
        </div>

        <div className="absolute"
             style={{
               width: '60px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: 'white',
               top: '120px',
               left: '-20px',
             }}>
        </div>

        <div className="absolute"
             style={{
               width: '60px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: 'white',
               top: '170px',
               left: '-20px',
             }}>
        </div>

        <div className="absolute"
             style={{
               width: '60px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: 'white',
               top: '220px',
               left: '-20px',
             }}>
        </div>
        
      </div>
    </div>
  );
};

export default SNSCircle;

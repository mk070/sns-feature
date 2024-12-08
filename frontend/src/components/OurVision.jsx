import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OurVision = () => {
  const floatingTags = [
    { text: 'Learn', color: '#DE2A1B', top: '15%', left: '10%' },
    { text: 'Innovate', color: '#EB510B', bottom: '15%', left: '10%' },
    { text: 'Upskill', color: '#B0D402', top: '15%', right: '10%' },
    { text: 'Serve', color: '#E10485', bottom: '15%', right: '10%' },
    { text: 'Connect', color: '#FCC900', top: '50%', right: '5%' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen mt-[-30px] px-6 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Tags */}
      {floatingTags.map((tag, index) => (
        <div
          key={index}
          className="absolute px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-full shadow-md floating"
          style={{
            backgroundColor: tag.color,
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
            right: tag.right,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {tag.text}
        </div>
      ))}

      {/* Content */}
      <div className="text-center relative z-10">
        <span className="inline-block px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 bg-gray-200 rounded-full shadow-md">
          Mission of 1000 Startups in 10 years
        </span>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Build an Entrepreneurial Mindset Through our Design Thinking Framework
        </p>
        <h1 className="mt-4 sm:mt-6 text-3xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Launching{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCC900] to-[#ffbd52]">
            India’s Largest Startup
          </span>
          <br />
          Campus @ Coimbatore
        </h1>

        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-12 text-gray-900 text-sm sm:text-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2" />
            <span>Design Thinking</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2" />
            <span className="font-bold">Entrepreneurial Mindset</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2" />
            <span>Innovate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;

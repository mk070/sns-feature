import React from "react";
import snsLogo from "../assets/sns.png"; // Path to the SNS logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Left Section */}
          <div className="flex flex-col items-center sm:pl-16 lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <img
              src={snsLogo}
              alt="SNS Logo"
              className="w-20 h-auto mb-4"
            />
            <h2 className="text-3xl font-extrabold">SNS Design Thinking</h2>
            <p className="text-gray-400 text-lg mt-2 max-w-xs lg:max-w-md">
              Empowering innovation through design thinking and cutting-edge technology solutions.
            </p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col lg:flex-row sm:gap-20 gap-10 sm:text-center sm:mr-16 lg:text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">SNS iNNovation Hub</h3>
              <p className="text-gray-400">
                SNS Kalvi Nagar, Sathy Main Road NH-209,
                <br />
                Vazhiyampalayam, Saravanampatti,
                <br />
                Coimbatore, Tamil Nadu 641035.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">SNS Design Thinking Consultancy</h3>
              <p className="text-gray-400">
                The Community Team, WeWork Office,
                <br />
                BLOCK-L, Embassy TechVillage,
                <br />
                Outer Ring Rd, Devarabisanahalli, Bellandur,
                <br />
                Bengaluru, Karnataka 560103.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} SNS Design Thinking. All rights reserved.
          </p>
          <ul className="flex space-x-6 text-sm mt-4 lg:mt-0">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

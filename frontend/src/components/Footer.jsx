import React from "react";
import snsLogo from "../assets/sns.png"; // Path to the SNS logo
import group45 from '../assets/Group 46.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHandshake, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-b from-gray-700 to-gray-900 py-10 text-white">
    //   <div className="container mx-auto px-4">
    //     {/* Top Section */}
    //     <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
    //       {/* Left Section */}
    //       <div className="flex flex-col items-center sm:pl-16 lg:items-start text-center lg:text-left mb-8 lg:mb-0">
    //         <img
    //           src={snsLogo}
    //           alt="SNS Logo"
    //           className="w-20 h-auto mb-4"
    //         />
    //         <h2 className="text-3xl font-extrabold">SNS Design Thinking</h2>
    //         <p className="text-gray-400 text-lg mt-2 max-w-xs lg:max-w-md">
    //           Empowering innovation through design thinking and cutting-edge technology solutions.
    //         </p>
    //       </div>

    //       {/* Address Section */}
    //       <div className="flex flex-col lg:flex-row sm:gap-20 gap-10 sm:text-center sm:mr-16 lg:text-left">
    //         <div>
    //           <h3 className="text-xl font-bold mb-2">SNS iNNovation Hub</h3>
    //           <p className="text-gray-400">
    //             SNS Kalvi Nagar, Sathy Main Road NH-209,
    //             <br />
    //             Vazhiyampalayam, Saravanampatti,
    //             <br />
    //             Coimbatore, Tamil Nadu 641035.
    //           </p>
    //         </div>
    //         <div>
    //           <h3 className="text-xl font-bold mb-2">SNS Design Thinking Consultancy</h3>
    //           <p className="text-gray-400">
    //             The Community Team, WeWork Office,
    //             <br />
    //             BLOCK-L, Embassy TechVillage,
    //             <br />
    //             Outer Ring Rd, Devarabisanahalli, Bellandur,
    //             <br />
    //             Bengaluru, Karnataka 560103.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Divider */}
    //     <div className="border-t border-gray-700 my-6"></div>

    //     {/* Bottom Section */}
    //     <div className="flex flex-col lg:flex-row justify-between items-center">
    //       <p className="text-gray-500 text-sm text-center lg:text-left">
    //         © {new Date().getFullYear()} SNS Design Thinking. All rights reserved.
    //       </p>
    //       <ul className="flex space-x-6 text-sm mt-4 lg:mt-0">
    //         <li>
    //           <a href="#" className="text-gray-400 hover:text-white transition">
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="text-gray-400 hover:text-white transition">
    //             Terms of Service
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="text-gray-400 hover:text-white transition">
    //             Contact Us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-white text-black py-10 flex flex-col items-center text-center">
      {/* Logo Section */}
      <img
        src={group45}
        alt="SNS Logo"
        className="w-[320px] my-6 h-auto mb-6"
      />
<div>
<h2 className="text-lg font-bold mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            Our Locations
          </h2>
</div>
      {/* Locations and Contact Section */}
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center px-4">

        {/* SNS Innovation Hub */}
        <div className="flex-1 px-4 mb-6 md:mb-0 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-lg font-bold mb-2"></h2>
          <p className="text-sm leading-6 max-w-xs ">
          536, Thudiyalur - Saravanampatti Rd, Fathima Nagar, Vellakinar, Coimbatore, Tamil Nadu 641029
          </p>
        </div>

        {/* Locations Heading */}
        <div className="flex-1 px-4 mb-6 sm:mt-4 md:mb-0 md:flex md:flex-col md:items-center md:justify-center">
        
          <p className="text-sm leading-6 max-w-xs">
          The Community Team, WeWork Office,BLOCK-L, Embassy TechVillage,Outer Ring Rd, Devarabisanahalli, Bellandur,Bengaluru,<br /> Karnataka 560103.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 px-4 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm mb-1">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            95664 23456
          </p>
          <a
            href="https://main.snsgroups.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
            www.snsgroups.com
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 mt-8">
        Copyrighted © 2024 Design and upload by SNSGROUPS
      </p>
    </footer>


  );
};

export default Footer;

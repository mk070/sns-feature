
<div className="box2 relative">
{/* Icon Section */}
<div
  className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
  id="feature-icon2"
  style={{
    top: "200px",
    left: "780px",
    backgroundColor: "#B0D402",
  }}
>
  <FontAwesomeIcon icon={faLaptop} className="text-white text-lg" />
</div>

{/* Content Section */}
<div
  className={`absolute w-96 h-16 rounded-full flex flex-col items-center justify-center shadow-md text-center text-black font-semibold transition-all duration-300 ${
    hoveredBox === 0 ? "hovered" : ""
  }`}
  id="heading-0"
  style={{
    top: "200px",
    left: "850px",
    background: "linear-gradient(to right, #f9e7e1, #ff5c22)",
    cursor: "pointer",
  }}
  onMouseEnter={() => handleMouseEnter(0)}
  onMouseLeave={() => setHoveredBox(null)}
  onClick={() => window.open("feature.link", '_blank')}
>
  <p className="text-lg">SNS Venture Capital & Investment</p>
  {hoveredBox === 0 && (
    <p className="mt-2 text-sm font-normal text-gray-800" id="desc">
      Funding high-potential startups for strategic ownership stakes.
    </p>
  )}
</div>


</div>
<div className="box3 relative">
{/* Icon Section */}

<div
className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
id="feature-icon3"

style={{
top: "340px",
left: "820px",
backgroundColor: "#E10485",
}}
>
<FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
</div>
{/* Content Section */}

</div>
<div className="box4 relative">
{/* Icon Section */}
<div
className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
id="feature-icon4"

style={{
top: "480px",
left: "780px",
backgroundColor: "#EB510B",
}}
>
<FontAwesomeIcon icon={faSchool} className="text-white text-lg" />
</div>

{/* Content Section */}

</div>
<div className="box5 relative">
{/* Icon Section */}
<div
className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md"
id="feature-icon5"
style={{
top: "600px",
left: "580px",
backgroundColor: "#01A3D4",
}}
>
<FontAwesomeIcon icon={faDumbbell} className="text-white text-lg" />
</div>

{/* Content Section */}

</div>
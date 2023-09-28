import React from "react";
import Eform from "../Components/Eform";

import electrician from "../assets/images/electrician.jpg";
import "../assets/styles/global.scss";


const Electrician = () => {
  return (
    <>
      <img
        src={electrician}
        alt="electrician"
        style={{
          height: "50vh",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <h2
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          color: "white",
          fontSize: "3.2rem",
          fontWeight: "800",
        }}
      >
        Electrical Services Nepal
      </h2>

      <div className="electrical-grid-container">
        <div className="electrical-paragraph">
          <h2 className="electrical-para-heading">Services Offered</h2>
          <ul>
            <li>
              <span>Electrical Installations:</span> Covering new wiring,
              lighting, outlets, switches, panels, and other installations for
              homes, offices, and industrial facilities.
            </li>
            <li>
              <span>Repairs and Troubleshooting:</span> We're expertise in
              diagnosing and rectifying electrical issues, whether it's faulty
              wiring, tripped circuit breakers, or non-functional outlets.
            </li>
            <li>
              <span>Safety Inspections:</span> We look after the importance of
              regular safety inspections to identify potential hazards and
              ensure compliance with safety standards.
            </li>
            <li>
              <span>Energy Efficiency Upgrades:</span> We promote services that
              help clients reduce energy consumption through LED lighting
              installations, smart home solutions, and energy-efficient
              appliances.
            </li>
          </ul>
        </div>

        <div className="electrical-form">
          <Eform />
        </div>
      </div>
    </>
  );
};

export default Electrician;

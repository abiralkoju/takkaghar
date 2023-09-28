import React from "react";
import Eform from "../Components/Eform";

import plumber from "../assets/images/plumber.jpg";

const Plumber = () => {
  return (
    <>
      <img
        src={plumber}
        alt="plumber"
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
        Plumbing Services Nepal
      </h2>

      <div className="electrical-grid-container">
        <div className="electrical-paragraph">
          <h2 className="electrical-para-heading">Services Offered</h2>
          <ul>
            <li>
              <span>Fixture Installations:</span> Installation of plumbing
              fixtures such as sinks, faucets, showers, bathtubs, and toilets in
              both residential and commercial settings.
            </li>
            <li>
              <span>Plumbing Repairs:</span> We can address a variety of
              plumbing issues, including leaky faucets, clogged drains, burst
              pipes, and malfunctioning toilets. We've the ability to quickly
              diagnose and fix these common problems.
            </li>
            <li>
              <span>Safety Inspections:</span> We look after the importance of
              regular safety inspections to identify potential hazards and
              ensure compliance with safety standards.
            </li>
            <li>
              <span>Pipe Replacement and Repair:</span> We expertise in
              repairing or replacing damaged pipes, whether due to corrosion,
              leaks, or other issues. This could involve traditional methods or
              trenchless pipe repair technologies.
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

export default Plumber;

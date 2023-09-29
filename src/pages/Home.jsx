import React from "react";
import Navigation from "../Components/Navigation";
import Accordian from "../Components/Accordian";

import "../assets/styles/global.scss";

import hero from "../assets/images/hero img.jpg";

const Home = () => {
  return (
    <>
      <section className="hero-content">
        <img
          src={hero}
          alt="hero img"
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        />
        <h3
          className="hero-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            background: "black",
            fontWeight: "700",
            fontSize: "2.2rem",
            padding: "1.1rem",
            borderRadius: "10px",
          }}
        >
          We provide different home services
        </h3>
      </section>

      <section className="home-why-section" style={{ marginTop: "3.5rem" }}>
        <h2
          className="home-why-section-heading"
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            color: "#f7cf21",
            fontWeight: "700",
          }}
        >
          Why Choose Us?
        </h2>
        <div className="home-why-section-boxes">
          <div className="home-why-box box1">
            <h2 className="box-heading">Quality Products</h2>
            <ul>
              <li>We provide genuine products on our services.</li>
              <li>We assure support on our every service.</li>
              <li>Expert Technician.</li>
            </ul>
          </div>
          <div className="home-why-box box2">
            <h2 className="box-heading">Affordable Pricing</h2>
            <ul>
              <li>
                We are using newer technology to repair your appliances which
                lets to cut down the fees.
              </li>
              <li>
                We educate customer’s, with complete knowledge about the
                appliances they are using and the problem it is going through.
                So that no other fraud service provider can cheat on the
                customer’s interest.
              </li>
            </ul>
          </div>
          <div className="home-why-box box3">
            <h2 className="box-heading">On Time - No Hassle</h2>
            <ul>
              <li>We provide quick service to your door step.</li>
            </ul>
          </div>
        </div>
      </section>

      <Accordian />

      <div className="service-provide-div">
        <h2
          className="home-why-section-heading"
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            color: "#f7cf21",
            fontWeight: "700",
          }}
        >
          {/* Services We Provide */}
        </h2>
      </div>
    </>
  );
};

export default Home;

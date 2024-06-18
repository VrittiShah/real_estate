import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*Left Side*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={120} />
          <span className="secondaryText">
            Our vision is to revolutionize real estate with <br />
            innovation, integrity, and exceptional service.
          </span>
        </div>
        {/*Right Side */}
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Mumbai,Maharashtra</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

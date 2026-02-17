import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "4%", display: "flex", justifyContent: "center",
        alignItems:'center', flexDirection:'column' }}>
        <p style={{marginBottom:'0px'}}>copyright e-commerce designed by firdous</p>
        <div className="headerBdr">
          <div className="logo">
            fashion <br /> <span>tagline here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

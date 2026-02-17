import React from "react";
import banner from "../assets/images/banner.jpg";
import Mediaicon from "./Mediaicon";

const Banner = () => {
  return (
    <>
      <div className="bannerWrap">
        <Mediaicon />
        <img src={banner} alt="banner"/>

        <div className="txtWrap">
        <h1>summer collection</h1>
        <span>men's wear</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          beatae nobis saepe harum animi quo? Tempore Lorem ipsum dolor sit
          amet.
        </p>
        <button className="button">shop now</button>
      </div>


      </div>
      
      


    </>
  );
}

export default Banner;

import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

import productImg1 from "../assets/images/product-Img1.jpg";
import productImg2 from "../assets/images/productImg2.jpg";
import productImg3 from "../assets/images/productImg3.jpg";
import productImg4 from "../assets/images/productImg4.jpg";


const Featureproduct = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4%",
          padding:"0px",
        }}
      >
        <h4
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
            lineHeight: "15px",
          }}
        >
          featured products
        </h4>
        <div
         style={{
            margin: "10px 0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ul className="offer">
            <li>
              <a href="#">all</a>
            </li>
            <li>spring-summer</li>
            <li>sweatshirt</li>
            <li>sneakers</li>
            <li>gadgets</li>
            <li>outdoor</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-md-3" style={{ position: "relative"}}>
            <img src={productImg1} alt="img1" />
            <div className="featureProduct">
              <p>ted bekar women light</p>
              <span>gucci</span> <br />
              <div className="featureProductPrice">$70.00</div>$120.00
            </div>
          </div>
          <div className="col-md-3" style={{ position: "relative"}}>
            <img src={productImg2} alt="img2" />
            <div className="featureProduct">
              <p>ted bekar women light</p>
              <span>gucci</span> <br />
              <div className="featureProductPrice">$70.00</div>$120.00
            </div>
          </div>
          <div className="col-md-3" style={{ position: "relative"}}>
            <img src={productImg3} alt="img3" />
            <div className="featureProduct">
              <p>ted bekar women light</p>
              <span>gucci</span> <br />
              <div className="featureProductPrice">$70.00</div>$120.00
            </div>
          </div>
          <div className="col-md-3" style={{ position: "relative"}}>
            <img src={productImg4} alt="img4" />
            <div className="featureProduct">
              <p>ted bekar women light</p>
              <span>gucci</span> <br />
              <div className="featureProductPrice">$70.00</div>$120.00
            </div>
          </div>
        </div>
        <button className="button" style={{marginTop:'1rem', backgroundColor:'#fff', color:'#000', border:'1px solid #d9c8aa'}}>shop now</button>
      </div>

      
      
    </>
  );
};

export default Featureproduct;

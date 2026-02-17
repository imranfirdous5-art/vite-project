import React from "react";
import shoe from "../assets/images/shoes.jpg";
import bag from "../assets/images/bag.jpg";
import womenjacket from "../assets/images/womenjacket.jpg";
import menjacket from "../assets/images/menjacket.jpg";
import sunglas from "../assets/images/sunglas.jpg";
import offer from "../assets/images/offer.jpg";
import newtag from "../assets/images/newtag.png";

const Offers = () => {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding:"0px",
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
        {/* <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <div
                  className="row"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    className="col-md-6"
                    style={{
                      width: "auto",
                      marginBottom: "1rem",
                      position: "relative",
                    }}
                  >
                    <img src={shoe} alt="shoe" />
                    <div style={{ position: "absolute", bottom: "5%" }}>
                      buy 2 get up 50% off
                    </div>
                  </div>
                  <div className="col-md-6" style={{ width: "auto" }}>
                    <img src={bag} alt="bag" style={{ height: "26vh" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <img src={womenjacket} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="col-md-6"
                style={{ width: "auto", marginBottom: "1rem" }}
              >
                <img
                  src={menjacket}
                  alt="menjacket"
                  style={{ height: "240px" }}
                />
              </div>
              <div className="col-md-6" style={{ width: "auto" }}>
                <img src={sunglas} alt="sunglas" style={{ height: "250px" }} />
              </div>
            </div>
          </div>
        </div> */}

        <div className="row" style={{ display: "flex", flexDirection: "column", marginTop:"10px"}}>
          <div className="col-md-12" style={{ padding: "0px" }}>
            <div className="row" style={{ marginLeft: "0px" }}>
              <div className="col-md-3">
                {/* <div className="row" style={{display:'flex', flexDirection:'column'}}>
                  <div className="col-md-6">
                    <img src={shoe} alt="shoe" className="size"/>
                  </div>
                  <div className="col-md-6">
                    <img src={bag} alt="bag"/>
                  </div>
                </div> */}

                <div style={{ position: "relative" }}>
                  <img src={shoe} alt="shoe" />
                  <div className="shoetxt">
                    buy 2 get <br /> up 50% off
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <img src={bag} alt="bag" style={{ height: "168px" }} />
                </div>
              </div>
              <div className="col-md-5" style={{ position: "relative" }}>
                <img
                  src={womenjacket}
                  alt="womenjacket"
                  height="484px"
                  width="440px"
                />
                <div className="vintagetxt">
                  <span>winter jacket</span>
                  vintage look <br /> for women
                  <button className="button vintageBtn">shop now</button>
                </div>
                <img src={newtag} alt="newtag" style={{position:'absolute', top:'2%', right:'5%'}} />
              </div>
              <div className="col-md-4">
                {/* <div className="row" style={{display:'flex', flexDirection:'column'}}>
                  <div className="col-md-6">
                    <img src={menjacket} alt="menjacket" />
                  </div>
                  <div className="col-md-6">
                    <img src={sunglas} alt="sunglas" />
                  </div>
                </div> */}
                <div style={{ position: 'relative' }}>
                  <img src={menjacket} alt="menjacket" />
                  <div className="menJacketTxt">
                    <span>winter jacket</span>
                    fashion <br /> for men
                    <button className="button vintageBtn">shop now</button>
                  </div>
                </div>
                <div style={{ marginTop: "10px", position:'relative' }}>
                  <img src={sunglas} alt="sunglas" />
                  <img src={newtag} alt="newtag" style={{position:'absolute', top:'5%', right:'3%'}} />
                  <div className="sunglasTxt">40% off on sunglasses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12" style={{ marginTop: "15px", position:'relative' }}>
            <img src={offer} alt="offer" />
            <div className="offerBrand">we offer brand new styles <br/>
            <span>sign up now and get 50% off</span>
            <button className="button offerBrandButn">see full collection</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

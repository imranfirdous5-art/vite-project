import React from "react";
import subscribe from "../assets/images/subscribe.png"

const Subscribe = () => {
    return(
        <> 

        <div className="container" style={{ marginTop: "4%", position:'relative', backgroundColor:'#d7dbd5'}}>
            <div className="subscribeImg">
                {/* <img src={subscribe} alt="subscribe"/> */}
            </div>
            <div className="offerBrand subscribe">subscribe to out newsletter <br/>
            <span>sign up now and get 75% off</span>
            <button className="button offerBrandButn">sign up now</button>
            </div>
        </div>
        
        </>
       
    );
};

export default Subscribe;
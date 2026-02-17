import React from "react";
import men from "../assets/images/men.jpg"
import Women from "../assets/images/women.jpg";
import kids from "../assets/images/kids.jpg"

const ProductTypes = () => {
  return (
    <>
      <div className="container" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'4%', padding:'0px'}}>
        <h4 style={{textTransform:'uppercase', fontWeight:'600', lineHeight:'15px'}}>product types</h4>
        <span style={{fontSize:'15px'}}>up to 30% discount</span>
        <div className="row" style={{marginTop:'15px'}}>
            <div className="col-md-4" style={{position:'relative'}}>
                <img src={men} alt="men" />
                <button className="button" style={{position:'absolute', bottom:'10%', left:'40%'}}>shop men</button>
            </div>
            <div className="col-md-4" style={{position:'relative'}}>
                <img src={Women} alt="women" />
                <button className="button" style={{position:'absolute', bottom:'10%', left:'40%'}}>shop women</button>
            </div>
            <div className="col-md-4" style={{position:'relative'}}>
                <img src={kids} alt="kids" />
                <button className="button" style={{position:'absolute', bottom:'10%', left:'40%'}}>shop kids</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductTypes;

import React from "react";
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"

const Blogs = () => {
    return(
        <>
            <div className="container" style={{display:'flex', flexDirection:'column', alignItems:'center',
                marginTop:'4%', padding:'0px'}}>
                <h4 style={{textTransform:'uppercase', fontWeight:'600', lineHeight:'15px'}}>our blogs and news</h4>
            
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-md-6" style={{position:'relative'}}>
                        <img src={blog1} alt="blog1" />
                        <div className="blogWrap">the 15 secrets about fashion people</div>
                    </div>
                    <div className="col-md-6" style={{position:'relative'}}>
                        <img src={blog2} alt="blog2" />
                        <div className="blogWrap">the 15 secrets about fashion people</div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Blogs;

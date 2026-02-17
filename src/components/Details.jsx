import React from "react";

const Details = () => {
    return(
        <>
           <div className="container" style={{marginTop:'5%'}}>
            <div className="details">
                <ul>
                    <li><span>information</span></li>
                    <li>the brand</li>
                    <li>local stores</li>
                    <li>customer service</li>
                    <li>privacy & cookies</li>
                    <li>site map</li>
                </ul>
                <ul>
                    <li><span>my profile</span></li>
                    <li>getting started</li>
                    <li>FAQs</li>
                    <li>buying guide</li>
                    <li>order returns</li>
                    <li>affiliate program</li>
                </ul>
                <ul>
                    <li><span>your account</span></li>
                    <li>shipping & returns</li>
                    <li>secure shopping</li>
                    <li>testimonials</li>
                    <li>award winning</li>
                    <li>ethical trading</li>
                </ul>
                <ul>
                    <li><span>lookbook</span></li>
                    <li>getting started</li>
                    <li>FAQs</li>
                    <li>buying guide</li>
                    <li>order returns</li>
                    <li>affiliate program</li>
                </ul>
                <ul>
                    <li><span>contact details</span></li>
                    <li><div className="bold">telephone:</div> 0123-456-789</li>
                    <li><div className="bold">email:</div> demo@gmail.com</li>
                    <li><div className="bold">head office:</div> 123 yellow house <br /> main street london 6453736</li>
                    
                </ul>
            </div>
           </div>
        </>

    );
};

export default Details;
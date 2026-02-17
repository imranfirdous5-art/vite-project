import React from "react";
import { Link, NavLink } from "react-router";
// import Mediaicon from "./Mediaicon";

const Header = () => {
  return (
    <>
      <div className="headerBdr">
        <div className="logo">
          fashion <br /> <span>tagline here</span>
        </div>

        <nav>
          <ul>
            <li>
            <Link to='/'>home</Link>
            </li>
            <li>
            <Link to='/Offers'>shop</Link>
            </li>
            <li>
             <Link to='/ProductTypes'>men</Link>
            </li>
            <li>
              <Link to='/Featureproduct'>women</Link> 
            </li>
            <li>
            <Link to='/Blogs'>blogs</Link>  
            </li>
          </ul>
        </nav>
        <div className="icons">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <i class="fa fa-search"></i>
          <nav>
            <ul>
              <li>
                <Link to='/Signup'>signup</Link>
              </li>
            </ul>
          </nav>
          {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
          {/* <button className="bdr"><i class="fa fa-search"></i></button> */}
        </div>
      </div>
      
    </>
  );
};

export default Header;

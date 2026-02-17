import React from "react";
// import { Link, NavLink } from "react-router";

const Signup = () => {
  return (
    <>
    <div className="signupWrap">
        <h4 style={{textAlign:'center'}}>Signup Form</h4>
        <form action="" style={{display:'flex', flexDirection:'column'}}>
            <label htmlFor="" style={{marginTop:'10px'}}>Username</label>
            <input type="text" placeholder="Enter name here..." style={{padding:'5px', fontSize:'13px', border:'none'}}/>
            <label htmlFor="" style={{marginTop:'10px'}}>Email</label>
            <input type="text" placeholder="Enter name here..." style={{padding:'5px', fontSize:'13px', border:'none'}} />
            <label htmlFor="" style={{marginTop:'10px'}}>Password</label>
            <input type="text" placeholder="Enter name here..." style={{padding:'5px', fontSize:'13px', border:'none'}} />
            
      </form>
        <button className="signupButon">Signup</button>

        <button className="loginButon">Login</button>
    </div>
      

      
    </>
  );
};

export default Signup;

import React from "react";

const Mediaicon = () => {
  return (
    <>
      <div className="mediaicon">
        <i
          class="fa fa-facebook"
          aria-hidden="true"
          onClick={() => window.open("https://www.facebook.com/")}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="fa fa-twitter"
          aria-hidden="true"
          onClick={() => window.open("https://www.twitter.com/")}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="fa fa-google-plus"
          aria-hidden="true"
          onClick={() => window.open("https://www.google.com/")}
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="fa fa-instagram"
          aria-hidden="true"
          onClick={() => window.open("https://instagram.com", "_blank")}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </>
  );
};

export default Mediaicon;

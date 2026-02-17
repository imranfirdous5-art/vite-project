// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
// import Header from "./components/Header";
// import Banner from "./components/Banner";
import Offers from "./components/Offers";
// import Women from "./components/Women";
// import ProductTypes from "./components/ProductTypes";
// import Featureproduct from "./components/Featureproduct";
// import Subscribe from "./components/Subscribe";
// import Blogs from "./components/Blogs";
// import Details from "./components/Details";
// import Footer from "./components/Footer";
// import Signup from "./components/Signup";
// import Shop from "./components/Shop";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path="/women" element={<Women />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/offers" element={<Offers />} />
        {/* <Route path="/productTypes" element={<ProductTypes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/featureProduct" element={<Featureproduct />} /> */}
      </Routes>
      <Home/>
      {/* <Header/>
      <Banner/>
      <Footer/> */}
    </>
  );
}

export default App;

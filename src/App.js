import React, { useState } from "react";
import  {  Routes ,BrowserRouter,Route }from "react-router-dom";
import Home from './component/Home';
import { About } from "./component/About";
import NavBar from "./component/NavBar";
import { Aqi_level_detail } from "./component/Aqi_level_detail";
import Api from "./component/Api";

export default function App(props) {


  return (
    <>
      <BrowserRouter>
      {/* <NavBar /> */}
       <Routes>
         
         <Route path="/" element={ <NavBar /> } />
         <Route path="/about" element={<About />} />

          <Route  path="/aqileveldetail" element={<Aqi_level_detail />}  />
       </Routes>
      
      
      </BrowserRouter>

     
    </>
  );
}

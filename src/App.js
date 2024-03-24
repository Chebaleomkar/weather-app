import React, { useState } from "react";
import  {  Routes ,BrowserRouter,Route }from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { About } from "./component/About";
import NavBar from "./component/NavBar";
import { Aqi_level_detail } from "./component/Aqi_level_detail";
import Api from "./component/Api";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

export default function App(props) {
  const {t} = useTranslation();
  console.log('Nested translation:', t("WEATHER_NAMES.HOME"));

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

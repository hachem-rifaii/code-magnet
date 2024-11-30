import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import AnimationHome from '../../animation/animation.json'
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section   ">
        <div className="parent-avatar flex">
          <img src="../../../assests/me1.png" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <div className=""> 
      <h1 
      className="title"> CodeMagnent</h1>
      <p className="subtitle">
        Code Magnet is a small company dedicated to crafting innovative and
        precisely coded web pages. We strive to create a unique and engaging
        user experience by seamlessly blending design creativity with coding
        professionalism.
      </p>
</div>
<div className="all-icons flex">
  <div  className="icons icon-facebook"></div>
  <div className="icons icon-linkedin-square"></div>
  <div className="icons icon-github"></div>
  <div className="icons icon-instagram"></div>
</div>
      </div>

      <div className="right-section " style={{  width:"100%",translate: "100px 55px"}}>
      <Lottie animationData={AnimationHome}  />
      </div>
    </section>
  );
};

export default Hero;

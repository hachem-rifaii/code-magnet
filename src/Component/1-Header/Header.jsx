import React, { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [showModel, setshowModel] = useState(false);
  const [Them , setThem] = useState(localStorage.getItem("curentMode") ?? "dark");
  useEffect(() => {
    if(Them === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    } else{
      document.body.classList.remove("light");
      document.body.classList.add("dark")
    }
  }, [Them])
  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => setshowModel(true)}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="moon" 
      onClick={(() => {
        localStorage.setItem("curentMode" , Them === "dark" ? "light" : "dark" )

        setThem(localStorage.getItem("curentMode"))
      })}
      >
         <span  className={Them === "dark" ? "icon-moon-o" : "icon-wb_sunny"} ></span>
  
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-clear"
                onClick={() => setshowModel(false)}
              />
            </li>
            <li>
            <a href="#about"  onClick={() => setshowModel(false)}>About</a>
          </li>
          <li>
            <a href="#project"  onClick={() => setshowModel(false)}>Project</a>
          </li>
          <li>
            <a href="#contact"  onClick={() => setshowModel(false)}>Contact</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

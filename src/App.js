import React from "react";
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';



import Home from "./component/Home";
import About from './component/about';
import Deploy from './component/deploy';
import Navbar from "./component/navbar";



import solImg from './images/icons8-solidity-50.png'


import wallet from './images/icons8-metamask-logo-48.png';


const App = () => {

  {/* change dark and light mode */ }
  useEffect(() => {
    themeChange(true)

  }, [])


  { /* dark & light mode toogle fct*/ }
  function themeToggle() {
    var toggleEl = document.querySelector("[data-toggle-theme]");
    (function (theme = localStorage.getItem("theme")) {
      if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", theme);
        if (toggleEl) {
          [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
            el.classList.add(toggleEl.getAttribute('data-act-class'))
          });
        }
      }
    })();
    if (toggleEl) {
      [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
        el.addEventListener("click", function () {
          var themesList = el.getAttribute('data-toggle-theme');
          if (themesList) {
            var themesArray = themesList.split(",");
            if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
              if (themesArray.length == 1) {
                document.documentElement.removeAttribute("data-theme");
                localStorage.removeItem("theme");
              } else {
                document.documentElement.setAttribute("data-theme", themesArray[1]);
                localStorage.setItem("theme", themesArray[1]);
              }
            } else {
              document.documentElement.setAttribute("data-theme", themesArray[0]);
              localStorage.setItem("theme", themesArray[0]);
            }
          }
          [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
            el.classList.toggle(this.getAttribute('data-act-class'));
          });
        });
      });
    }
  }

  { /* call toogle*/ }
  function themeChange(attach = true) {
    if (attach === true) {
      document.addEventListener("DOMContentLoaded", function (event) {
        themeToggle()
      })
    } else {
      themeToggle()
    }
  }
  { /*  export toogle */ }
  if (typeof exports != "undefined") {
    module.exports = {
      themeChange: themeChange
    }
  } else {
    themeChange()
  }


  return (
    <>

<Navbar />
<Outlet />


      <Routes>


        <Route >
          <Route exact default path="/" element={<Home />} />
          <Route exact path="/about" element={< About />} />
        
          <Route exact path="/deploy" element={<Deploy />} />
        </Route>
      </Routes>



    </>
  );
}

export default App;

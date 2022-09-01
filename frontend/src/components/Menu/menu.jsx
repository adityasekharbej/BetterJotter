import React,{ useState } from 'react'
import {Link} from "react-router-dom"
import "./menu.css"


export const Menu = () => {
  
    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
      }

  return (
 <>
    <div id="menu">
    <div id="menu-bar" onClick={()=>menuOnClick()}>
      <div id="bar1" class="bar"></div>
      <div id="bar2" class="bar"></div>
      <div id="bar3" class="bar"></div>
    </div>
    <nav class="nav" id="nav">
      <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#"></Link></li>
        <li><Link to="#">Text Editor</Link></li>

        <li><Link to="#">Task Manager</Link></li>

        <li><Link to="/p">Password Manager</Link></li>

        <li><Link to="#"></Link></li>
        <li><Link to="#"></Link></li>
        <li><Link to="#">About</Link></li>
      </ul>
    </nav> 
  </div>
  
  <div class="menu-bg" id="menu-bg"></div>
  </>
  )
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import styled from "styled-components";

export const Menu = ({ setIsLogin, isLogin }) => {
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  return (
    <div>
      <div id="menu">
        <div id="menu-bar" onClick={() => menuOnClick()}>
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        <nav class="nav" id="nav">
          <ul>
            <li>
              <Link to="/" onClick={() => menuOnClick()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tasks" onClick={() => menuOnClick()}>
                Tasks
              </Link>
            </li>
            {/* <li>
              <Link to="/signup" onClick={() => menuOnClick()}>
                Signup
              </Link>
            </li> */}
             <li>
              <Link to="/passwordmanager" onClick={() => menuOnClick()}>
                Password Generator
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => menuOnClick()}>
                Login
              </Link>
            </li>
            {/* <li>
              <Link to="#" onClick={() => menuOnClick()}>
                Text Editor
              </Link>
            </li> */}

            {/* <li>
              <Link to="#" onClick={() => menuOnClick()}>
                Task Manager
              </Link>
            </li> */}

           

            
            <li>
              <Link to="#"></Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="menu-bg" id="menu-bg"></div>
    </div>
  );
};

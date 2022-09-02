import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu/menu";
import { Create } from "../components/PasswordManager/Create";
import Login from "../components/signup/Login";
import Signup from "../components/signup/Signup";
import About from "../pages/About";
import Task from "../pages/Task";
import { Welcome } from "../pages/Welcome";
import Home from "./../components/Homepage/Home";
export const MainRoutes = ({ setIsLogin, isLogin }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Menu />
              <Welcome/>
              {/* <Home setIsLogin={ setIsLogin } isLogin= {isLogin}/> */}
            </>
          }
        />
          <Route
          path="/create"
          element={
            <>
              {" "}
              <Menu />
              <Home setIsLogin={ setIsLogin } isLogin= {isLogin}/>
            </>
          }
        />
        <Route
          path="/passwordmanager"
          element={
            <>
              {" "}
              <Menu />
              <Create />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {" "}
              <Menu />
              <Login setIsLogin={ setIsLogin } isLogin= {isLogin}/>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              {" "}
              <Menu />
              <Signup />
            </>
          }
        />
        <Route
          path="/tasks"
          element={
            <>
              {" "}
              <Menu />
              <Task/>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {" "}
              <Menu />
              <About/>
            </>
          }
        />
      </Routes>
    </div>
  );
};

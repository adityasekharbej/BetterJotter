import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu/menu";
import { Create } from "../components/PasswordManager/Create";
import Login from "../components/signup/Login";
import Signup from "../components/signup/Signup";
import Task from "../pages/Task";
import Home from "./../components/Homepage/Home";
export const MainRoutes = ({ setIsLogin, isLogin }) => {
  return (
    <div>
      <Menu setIsLogin={ setIsLogin } isLogin= {isLogin}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Home setIsLogin={ setIsLogin } isLogin= {isLogin}/>
            </>
          }
        />
        <Route
          path="/passwordmanager"
          element={
            <>
              {" "}
              <Create />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {" "}
              <Login setIsLogin={ setIsLogin } isLogin= {isLogin}/>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              {" "}
              <Signup />
            </>
          }
        />
        <Route
          path="/tasks"
          element={
            <>
              {" "}
              <Task/>
            </>
          }
        />
      </Routes>
    </div>
  );
};

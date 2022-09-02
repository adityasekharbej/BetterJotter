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
      <Routes>
        <Route
          path="/"
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
      </Routes>
    </div>
  );
};

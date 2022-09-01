import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu/menu";
import { Create } from "../components/PasswordManager/Create";
import Login from "../components/signup/Login";
import Signup from "../components/signup/Signup";
import Home from "./../components/Homepage/Home";
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Menu />
              <Home />
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
              <Login />
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
      </Routes>
    </div>
  );
};

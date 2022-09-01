import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Menu } from "../components/Menu/menu";
import { Pablo } from "../components/PasswordManager/Pablo";
import { Navbar } from "../components/Navbar";
import { Account } from "../pages/Account";
import { Signin } from "../pages/Signin";
import { Protected } from "../components/Protected";

export const MainRoutes = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<Pablo />} />
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

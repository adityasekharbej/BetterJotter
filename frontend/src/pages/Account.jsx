import React from "react";
import { UserAuth } from "../context/AuthContext";

export const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <img src={user?.photoURL} alt="" />
      </div>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

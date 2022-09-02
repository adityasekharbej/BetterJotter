import { useEffect, useState } from "react";
import "./App.css";
import { MainRoutes } from "./Routes/MainRoutes";

import Task from './pages/Task';
import About from './pages/About';
import C from "./components/about/C";

import axios from "axios";
import Login from "./components/signup/Login";


function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axios.get("https://lit-basin-77633.herokuapp.com/users/verify", {
          headers: { Authorization: token },
        });
        console.log(verified);
        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);
  return (
    <div>

      {/* <MainRoutes /> */}
      {/* <Task/> */}
      {/* <C/> */}
      {/* <Home/> */}

      <MainRoutes setIsLogin={setIsLogin} isLogin= {isLogin}/>

    </div>
  );
}

export default App;

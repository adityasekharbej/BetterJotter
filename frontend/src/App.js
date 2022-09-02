import "./App.css";
import Home from "./components/Homepage/Home";

import { MainRoutes } from "./Routes/MainRoutes";
import Task from './pages/Task';
import About from './pages/About';

function App() {
  return (
    <div>
      <MainRoutes />
      {/* <Task/> */}
      <About/>
      {/* <Home/> */}
    </div>
  );
}

export default App;

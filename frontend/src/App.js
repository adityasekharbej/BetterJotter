import "./App.css";
import Home from "./components/Homepage/Home";

import { MainRoutes } from "./Routes/MainRoutes";
import Task from './pages/Task';

function App() {
  return (
    <div>
      {/* <MainRoutes /> */}
      <Task/>
      {/* <Home/> */}
    </div>
  );
}

export default App;

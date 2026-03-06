import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;

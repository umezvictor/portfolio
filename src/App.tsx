import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid content-container">
        <div className="row">
          <Sidebar />
          <div className="col-xl-10 col-sm-12 col-lg-10 col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

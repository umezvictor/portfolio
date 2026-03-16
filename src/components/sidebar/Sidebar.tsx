import { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // Store the pathname of the selected link. Default is "/"
  const [selected, setSelected] = useState("/");

  // Helper to determine the right class
  const getLinkClass = (path: string) =>
    selected === path ? "default-side-menu" : "";

  // Handles menu selection
  const handleSelect = (path: string) => {
    setSelected(path);
  };

  return (
    <div className="col-xl-2 d-none d-md-block col-lg-2 col-md-3">
      <div className="side-menu">
        <h5>Sections</h5>
        <NavLink
          to="/"
          onClick={() => handleSelect("/")}
          className={getLinkClass("/")}
        >
          Introduction
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => handleSelect("/about")}
          className={getLinkClass("/about")}
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => handleSelect("/projects")}
          className={getLinkClass("/projects")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          onClick={() => handleSelect("/skills")}
          className={getLinkClass("/skills")}
        >
          Skills & Tools
        </NavLink>
        <NavLink
          to="/experience"
          onClick={() => handleSelect("/experience")}
          className={getLinkClass("/experience")}
        >
          Experience
        </NavLink>
        <NavLink
          to="/education"
          onClick={() => handleSelect("/education")}
          className={getLinkClass("/education")}
        >
          Education
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => handleSelect("/contact")}
          className={getLinkClass("/contact")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/stats"
          onClick={() => handleSelect("/stats")}
          className={getLinkClass("/stats")}
        >
          Stats
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

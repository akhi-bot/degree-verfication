import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
// import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img
              src="https://juppiterailabs.com/wp-content/uploads/2021/09/logo_juppiter-300x72.png"
              alt="juppiter AI Labs"
            />
          </NavLink>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={`nav-links ${show && "show-links"}`}>
          <NavLink
            to="/add-degree"
            className={({ isActive }) =>
              `nav-link${isActive ? " active-link" : ""}`
            }
            onClick={() => setShow(false)}
          >
            Add Degree
          </NavLink>
          <NavLink
            to="/verify-degree"
            className={({ isActive }) =>
              `nav-link${isActive ? " active-link" : ""}`
            }
            onClick={() => setShow(false)}
          >
            Verify
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

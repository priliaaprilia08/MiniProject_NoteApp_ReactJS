import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const history = useNavigate();

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <a className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/note" className="nav-link">
              Note
            </Link>
          </a>
          <a className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </a>
          <a className="nav-item">
            {/* <Link to="/details" className="nav-link">
              Details
            </Link> */}
            <Button onClick={userlogout}>LogOut</Button>
          </a>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#0000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

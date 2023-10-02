import { useState } from "react";
import "../App.css";
import logo from "../Logos/Asset 16@4x.png";

export default function Nav() {
  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>  {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""} `}>
      <a href="/" >
        <img src={logo} alt='little_lemon' width='300px' height='100px'/>
      </a>
      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* desktop vanbar */}
      <ul className={`nav-links ${menuOpen? 'visible': ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}
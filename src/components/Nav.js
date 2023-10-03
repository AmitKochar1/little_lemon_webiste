import { useState } from "react";
import "../App.css";
import logo from "../Logos/Logo.svg";

export default function Navbar() {
  const[bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  }
  return(
    <>
    <nav >
      <a href='/'><img src={logo} alt='logo'/></a>
      <div>
        <ul  id='navbar'>
          <li><a href="/" className="active">
            Home
            </a>
          </li>
          <li><a href="/">
            Reservations
            </a>
          </li>
          <li><a href="/">
            About Us
            </a>
          </li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick} >
        <i id='bar' className={bar ? 'fas fa-times':"fas fa-bars"}></i>
      </div>
    </nav>
    </>
  )
}
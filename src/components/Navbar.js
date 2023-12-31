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
      <a href='/'><img src={logo} alt='logo' width={300}/></a>
      <div>
        <ul  id='navbar' className={bar ?'#navbar': 'navbar active'}>
          <li><a href="/" className="active">
            Home
            </a>
          </li>
          <li><a href="/reservations">
            Reservations
            </a>
          </li>
          <li><a href="/about-us">
            About Us
            </a>
          </li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick} >
        <i id='bar' className={bar ? "fas fa-bars" : 'fas fa-times'}></i>
      </div>
    </nav>
    </>
  )  
}
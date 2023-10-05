import { useState } from "react";
import "../App.css";
import logo from "../Logos/Logo.svg";
import {Link} from 'react-router-dom';

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




{/* <Link to='/'>Home</Link>
       <Link to='/reservations'>Reservation</Link>
       <Link to='/about-us'>About Us</Link> */}
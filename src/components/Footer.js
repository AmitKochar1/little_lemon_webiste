import "../App.css";
import { Link } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Reservation from "../pages/Reservation";
import image from '../Logos/Asset_20@4x.png'


export default function Footer() {
  return (
    <footer className="footer">
        <img src={image} alt='little lemon' width='100' height='150px'/>
        <div className="footer-element">
          <Link to='/' element={<Home />} className="footer-item">Home</Link>
          <Link to='/reservations' element={<Reservation/>} className="footer-item">Reservations</Link>
          <Link to='/about-us' element={<AboutUs />} className="footer-item">About Us</Link>
        </div>
        <div className="footer-element">
          <p className="footer-head">Contact Information</p>
          <p className="footer-item">Address: 1 Chicgao street</p>
          <p className="footer-item">Phone Number: (xxx)-xxx-xxxx </p>
          <p className="footer-item">Email: littlelemon@gmail.com</p>
        </div>
        <div className="footer-element">
          <p className="footer-head">Social Media</p>
          <a href='https://www.facebook.com/' className="footer-item ">Facebook</a>
          <a href="https://www.instagram.com/" className="footer-item ">Instagram</a>
          <a href="https://twitter.com/?lang=en" className="footer-item ">Twitter</a>
        </div>
    </footer>
  );
}
import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import ContactUs from "./ContactUs";


export default function Footer() {
  return (
    <footer>
      <nav className="container">
        <Link to='/contact-us' className="containerLink">Contact Us</Link>
      </nav>
      <Routes>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </footer>
  );
}
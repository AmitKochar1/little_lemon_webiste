import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <nav className="container">
        <Link to='/' className="containerLink">Home</Link>
        <Link to='/menu' className="containerLink" >Menu</Link>
        <Link to='/contact-us' className="containerLink">Contact Us</Link>
        <Link to='/about-us' className="containerLink">About Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/about-us' element={<AboutUs />}/>
      </Routes>
    </div>
  );
}

export default App;

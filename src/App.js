import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Home";
import Footer from "./components/Footer";
import Reservations from "./pages/Reservations";
import AboutUs from "./pages/AboutUs";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <nav className="container">
        <Link to='/' className="containerLink">Home</Link>
        <Link to='/reservations' className="containerLink">Reservations</Link>
        <Link to='/about-us' className="containerLink">About Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservations' element={<Reservations />}/>
        <Route path='/about-us' element={<AboutUs />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

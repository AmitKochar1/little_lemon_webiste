import "./App.css";
import Navbar from "./components/Navbar";
import ConfirmedBooking from "./pages/ConfirmedBooking"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservations' element={<Reservation/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
      
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import Reservation from "./pages/Reservation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservations' element={<Reservation/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
  );
}

export default App;

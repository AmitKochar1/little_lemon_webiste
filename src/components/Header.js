import "../App.css";
import logo from "../Logos/Asset_14@4x.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon" width="300px" height="100px" />
      </header>
      <nav>
        <ul className="nav-a">
          <li className="item-a">
            <a href="home">Home</a>
          </li>
          <li className="item-a">
            <a href="aboutUs">About Us</a>
          </li>
          <li className="item-a">
            <a href="Book a tablle">Reservations</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
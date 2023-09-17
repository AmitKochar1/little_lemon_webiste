import "../App.css";
import logo from "../Logos/Asset_14@4x.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon" width="300px" height="100px" />
      </header>
      <nav className="nav-a">
        <ul className="item-a">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="aboutUs">About Us</a>
          </li>
          <li>
            <a href="Book a tablle">Reservations</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
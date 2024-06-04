// Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTripadvisor,
  FaCalendar,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="upperSection">
            <div className="socialMedia">
              <p>FOLLOW US</p>
              <ul className="socialLinks">
                <li>
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaTripadvisor />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="reservations">
              <p>
                RESERVATIONS <a href="tel:+1444123459">+ 1-444-123-459</a>
              </p>
              <p>
                <Link to="/contact">
                  <FaCalendar />
                </Link>
                BOOK NOW
              </p>
            </div>
          </div>
          <div className="lowerSection">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <nav className="navbar">
              <ul className="navList">
                <li className="navItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Reservation</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Menu</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Pages</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Blog</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Shop</Link>
                </li>
                <li className="navItem">
                  <Link to="/">Elements</Link>
                </li>
              </ul>
            </nav>
            <div className="rightSection">
              <form>
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
              <div className="cart">
                <p>
                  Cart
                  <FaShoppingCart />
                  <span className="cartCount">0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

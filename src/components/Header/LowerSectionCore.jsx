import Logo from "../../assets/images/logo.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LowerSectionCore = ({ children }) => {
  return (
    <div className="lowerSection">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Reservation</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Menu</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Pages</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Blog</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Shop</Link>
          </li>
          <FaStar />
          <li className="navItem">
            <Link to="/">Elements</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default LowerSectionCore;

import Logo from "../../assets/images/logo.png";
import DarkLogo from "../../assets/images/logo-dark.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LowerSectionCore = ({ isBgOver, children }) => {
  return (
    <div className="lowerSection">
      <div className="container">
        <div className="row">
          <Link to="/" className="logo">
            {isBgOver ? (
              <img src={Logo} alt="logo" />
            ) : (
              <img src={DarkLogo} alt="dark logo" />
            )}
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
                <Link to="/products">Shop</Link>
              </li>
              <FaStar />
              <li className="navItem">
                <Link to="/">Elements</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LowerSectionCore;

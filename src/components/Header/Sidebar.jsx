import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import SocialMedia from "./SocialMedia";

const Sidebar = ({ isActive }) => {
  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="closeIcon">
        <IoMdClose />
      </div>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Original Home</Link>
          </li>
          <li className="navItem">
            <Link to="/">About Us</Link>
          </li>
          <li className="navItem">
            <Link to="/">Meet The Chefs</Link>
          </li>
          <li className="navItem">
            <Link to="/">Our Services</Link>
          </li>
          <li className="navItem">
            <Link to="/">Shop</Link>
          </li>
          <li className="navItem">
            <Link to="/">Landing</Link>
          </li>
        </ul>
      </nav>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <hr />
      <SocialMedia />
    </div>
  );
};

export default Sidebar;

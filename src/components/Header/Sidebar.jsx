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
      <Link>
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link>Original Home</Link>
            <Link>About Us</Link>
            <Link>Meet The Chefs</Link>
            <Link>Our Services</Link>
            <Link>Shop</Link>
            <Link>Landing</Link>
          </li>
        </ul>
      </nav>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <SocialMedia />
    </div>
  );
};

export default Sidebar;

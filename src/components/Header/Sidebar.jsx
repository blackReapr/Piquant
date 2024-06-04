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
          </li>

          <li className="navItem">
            <Link>About Us</Link>
          </li>
          <li className="navItem">
            <Link>Meet The Chefs</Link>
          </li>
          <li className="navItem">
            <Link>Our Services</Link>
          </li>
          <li className="navItem">
            <Link>Shop</Link>
          </li>
          <li className="navItem">
            <Link>Landing</Link>
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

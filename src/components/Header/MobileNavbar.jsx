import { FaBars } from "react-icons/fa";
import Logo from "../../assets/images/logo-dark.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > document.querySelector(".header").clientHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div
      className={`mobileNavbar ${isNavActive ? "active" : ""} ${
        isFixed ? "fixedNav" : ""
      }`}>
      <div className="container">
        <div className="row">
          <FaBars onClick={() => setIsNavActive(!isNavActive)} />
          <img src={Logo} alt="logo" />
          <nav className="navbar">
            <ul className="navList">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/">Reservations</Link>
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
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

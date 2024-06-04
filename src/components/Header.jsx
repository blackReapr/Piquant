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

import { CiMenuBurger } from "react-icons/ci";

import { Link } from "react-router-dom";

import LowerSectionCore from "./Header/LowerSectionCore";

import { useEffect, useState } from "react";

const Header = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  console.log(screenHeight);
  useEffect(() => {
    const onScroll = () => {
      setScreenHeight(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
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
            <LowerSectionCore>
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
            </LowerSectionCore>
            {screenHeight > 200 ? (
              <div className="stickyNav">
                <LowerSectionCore>
                  <CiMenuBurger />
                </LowerSectionCore>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

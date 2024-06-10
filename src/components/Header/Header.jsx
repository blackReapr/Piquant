import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Icons
import { FaCalendar, FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

// Components
import LowerSectionCore from "./LowerSectionCore";
import SocialMedia from "./SocialMedia";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";

const Header = ({ isBgOver }) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [isStickyNavActive, setIsStickyNavActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleClick = () => setIsSidebarActive(false);

  useEffect(() => {
    if (isSidebarActive) {
      document.body.classList.add("mainBody");
    } else {
      document.body.classList.remove("mainBody");
    }
  }, [isSidebarActive]);

  useEffect(() => {
    const onScroll = () => {
      setScreenHeight(prevHeight => {
        setIsStickyNavActive(prevHeight > window.scrollY ? false : true);
        return window.scrollY;
      });
      setIsSidebarActive(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isBgOver ? "overBg" : "default"}`}>
        <div className="upperSection">
          <div className="container">
            <div className="row">
              <SocialMedia />
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
                <CiMenuBurger
                  className="sidebarMenu"
                  onClick={() => setIsSidebarActive(!isSidebarActive)}
                />
              </div>
            </div>
          </div>
        </div>
        <MobileNavbar />
        <LowerSectionCore isBgOver={isBgOver}>
          <div className="rightSection">
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
            <Link to="/" className="cart">
              <p>
                Cart
                <FaShoppingCart />
                <span className="cartCount">0</span>
              </p>
              <div className="cartInfoPopUp">No products in the cart</div>
            </Link>
          </div>
        </LowerSectionCore>
        <div
          className={`stickyNav ${
            screenHeight < 350 || !isStickyNavActive ? "" : "active"
          } ${isSidebarActive ? "activeSidebar" : ""}`}
        >
          <LowerSectionCore isBgOver={true}>
            <CiMenuBurger
              onClick={() => setIsSidebarActive(!isSidebarActive)}
            />
          </LowerSectionCore>
        </div>
      </header>
      <Sidebar isActive={isSidebarActive} handleClick={handleClick} />
    </>
  );
};

export default Header;

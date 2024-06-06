import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/images/logo.png";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import SocialMedia from "./../Header/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="upperSide">
            <div className="footerColumn">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <ul className="contactInfo">
                <li className="contactItem">
                  <FaEnvelope />
                  piquant@qodeinteractive.com
                </li>
                <li className="contactItem">
                  <BsTelephoneFill />
                  1-444-123-4559
                </li>
                <li className="contactItem">
                  <FaLocationDot />
                  Raymond Boulevard 224, New York
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <h4 className="title">Recent Posts</h4>
              <ul className="postList">
                <li className="postItem">
                  <Link to="/">Chicken Tinga Nachos</Link>
                </li>
                <li className="postItem">
                  <Link to="/">Sweet and Sour Pork Chops</Link>
                </li>
                <li className="postItem">
                  <Link to="/">Green Chile And Chicken Stew</Link>
                </li>
                <li className="postItem">
                  <Link to="/">Pecan Pie Macarons</Link>
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <h4 className="title">Instagram</h4>
            </div>
            <div className="footerColumn">
              <h4 className="title">Twitter Feed</h4>
              <p className="info">Couldn't connect with Twitter</p>
            </div>
          </div>
          <div className="lowerSide">
            <p className="rights">
              © {new Date().getFullYear()} Qode Interactive, All Rights Reserved
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

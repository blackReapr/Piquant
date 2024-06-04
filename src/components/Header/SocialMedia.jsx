import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;

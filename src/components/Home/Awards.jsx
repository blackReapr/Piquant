// Images
import AwardsImage from "../../assets/images/home-1-awards.jpg";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaWifi } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const Awards = () => {
  return (
    <section className="awards">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h3 className="title">award winning restaurant</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="imgContainer">
              <img src={AwardsImage} alt="awards" />
            </div>
            <div className="contactInfo">
              <h5 className="title">Contact Info</h5>
              <ul className="contactList">
                <li className="contactItem">
                  <FaLocationDot /> Raymond Boulevard 224, New York
                </li>
                <li className="contactItem">
                  <FaEnvelope /> piquant@qodeinteractive.com
                </li>
                <li className="contactItem">
                  <BsTelephoneFill /> 1-444-123-4559
                </li>
                <li className="contactItem">
                  <FaWifi /> qodeinteractive.com
                </li>
              </ul>
            </div>
          </div>
          <div className="rightSide">
            <div className="scheduleContainer">
              <div className="schedule">
                <h4 className="title">
                  OPENING <span>HOURS</span>
                </h4>
                <ul className="weekdays">
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Monday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Tuesday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Wednesday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Thursday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Friday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>CLOSED</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Saturday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                  <li className="day">
                    <div className="dayName">
                      <CiClock2 /> Sunday
                    </div>
                    <span className="whiteDots"></span>
                    <div className="time">
                      <p>9:00 - 22:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

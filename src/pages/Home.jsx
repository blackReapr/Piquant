import { Link } from "react-router-dom";

// Components
import ArtGallery from "../components/Home/ArtGallery";
import Carousel from "../components/Home/Carousel";
import ProductsInfo from "../components/Home/ProductsInfo";
import RecommendedCarousel from "../components/Home/RecommendedCarousel";
import Awards from "../components/Home/Awards";

// Images
import Welcome from "../assets/images/welcome.jpg";
import ModificationImageOne from "../assets/images/modification-image-1.jpg";

import NewsImage from "../assets/images/news.jpg";
import FoodsAndDrink from "../assets/images/home-1-logo-1-300x150.png";

import { FaCalendarAlt } from "react-icons/fa";
import Reviews from "../components/Home/Reviews";
import Booking from "../components/Home/Booking";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="carousel">
          <Carousel />
        </div>
      </section>
      <ProductsInfo />
      <ArtGallery />
      <section className="welcome">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <h3 className="title">WELCOME TO PIQUANT</h3>
              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Link to="/"> Read More </Link>
            </div>
            <div className="rightSide">
              <img src={Welcome} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="recommended">
        <div className="container">
          <div className="row">
            <h3 className="title">Recommended By our chef</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <RecommendedCarousel />
          </div>
        </div>
      </section>
      <section className="modification">
        <div className="container">
          <div className="row">
            <h3 className="title">Simple Modification</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="modificationBox">
              <div className="modificationCard">
                <div className="content">
                  <h4 className="title">Hot & Spicy</h4>
                  <p className="info">
                    Vivamus sed fermentum tellus. Donec quis elit sapien.
                    Aliquam commodo tortor nisi, nec varius mi finibus at. In
                    nulla libero, dictum vel.
                  </p>
                  <Link to="/">READ MORE</Link>
                </div>
                <div className="imageContainer">
                  <img src={ModificationImageOne} alt="Hot & Spicy" />
                  <h4 className="title">Taste our exquisite recipes</h4>
                </div>
              </div>
              <div className="modificationCard">
                <div className="content">
                  <h4 className="title">Hot & Spicy</h4>
                  <p className="info">
                    Vivamus sed fermentum tellus. Donec quis elit sapien.
                    Aliquam commodo tortor nisi, nec varius mi finibus at. In
                    nulla libero, dictum vel.
                  </p>
                  <Link to="/">READ MORE</Link>
                </div>
                <div className="imageContainer">
                  <img src={ModificationImageOne} alt="Hot & Spicy" />
                  <h4 className="title">Taste our exquisite recipes</h4>
                </div>
              </div>
              <div className="modificationCard">
                <div className="content">
                  <h4 className="title">Hot & Spicy</h4>
                  <p className="info">
                    Vivamus sed fermentum tellus. Donec quis elit sapien.
                    Aliquam commodo tortor nisi, nec varius mi finibus at. In
                    nulla libero, dictum vel.
                  </p>
                  <Link to="/">READ MORE</Link>
                </div>
                <div className="imageContainer">
                  <img src={ModificationImageOne} alt="Hot & Spicy" />
                  <h4 className="title">Taste our exquisite recipes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="news">
        <div className="container">
          <div className="row">
            <h4 className="title">LATEST NEWS</h4>
            <p className="info">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>
            <div className="newsBox">
              <Link to="/" className="newsCard">
                <div className="newsImage">
                  <img src={NewsImage} alt="Ice cream" />
                </div>
                <div className="newsContent">
                  <p className="date">
                    <FaCalendarAlt /> NOV 04, 2015
                  </p>
                  <h3 className="cardTitle">NOUGAT ICE CREAM</h3>
                  <p className="cardInfo">
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Quisque at tellus felis. Sed fringilla, tellus non
                    congue porttitor, dui eros fauci..
                  </p>
                </div>
              </Link>
              <Link to="/" className="newsCard">
                <div className="newsImage">
                  <img src={NewsImage} alt="Ice cream" />
                </div>
                <div className="newsContent">
                  <p className="date">
                    <FaCalendarAlt /> NOV 04, 2015
                  </p>
                  <h3 className="cardTitle">NOUGAT ICE CREAM</h3>
                  <p className="cardInfo">
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Quisque at tellus felis. Sed fringilla, tellus non
                    congue porttitor, dui eros fauci..
                  </p>
                </div>
              </Link>
              <Link to="/" className="newsCard">
                <div className="newsImage">
                  <img src={NewsImage} alt="Ice cream" />
                </div>
                <div className="newsContent">
                  <p className="date">
                    <FaCalendarAlt /> NOV 04, 2015
                  </p>
                  <h3 className="cardTitle">NOUGAT ICE CREAM</h3>
                  <p className="cardInfo">
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Quisque at tellus felis. Sed fringilla, tellus non
                    congue porttitor, dui eros fauci..
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="foodsAndDrink">
        <div className="container">
          <div className="row">
            <img src={FoodsAndDrink} alt="Foods And Drink" />
          </div>
        </div>
      </section>
      <Awards />
      <Booking />
    </>
  );
};

export default Home;

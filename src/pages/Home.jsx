import { Link } from "react-router-dom";
import ArtGallery from "../components/Home/ArtGallery";
import Carousel from "../components/Home/Carousel";
import ProductsInfo from "../components/Home/ProductsInfo";
import Welcome from "../assets/images/welcome.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="carousel">
          <Carousel />
        </div>
      </section>
      <section className="productsInfo">
        <div className="container">
          <div className="row">
            <ProductsInfo />
          </div>
        </div>
      </section>
      <section className="artGallery">
        <ArtGallery />
      </section>
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
    </>
  );
};

export default Home;

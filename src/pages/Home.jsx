import Carousel from "../components/Home/Carousel";
import ProductsInfo from "../components/Home/ProductsInfo";

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
    </>
  );
};

export default Home;

import ArtGallery from "../components/Home/ArtGallery";
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
      <section className="artGallery">
        <ArtGallery />
      </section>
    </>
  );
};

export default Home;

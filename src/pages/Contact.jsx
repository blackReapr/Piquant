// Components
import ContactForm from "../components/Contact/ContactForm";
import ProductsInfo from "../components/Home/ProductsInfo";
import Reviews from "../components/Home/Reviews";

// Images
import ProductInfoFirst from "../assets/images/contact-product-1.jpg";
import ProductInfoSecond from "../assets/images/contact-product-2.jpg";
import ProductInfoThird from "../assets/images/contact-product-3.jpg";

const productsInfo = [
  {
    image: ProductInfoFirst,
    title: "Delicious Food",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    image: ProductInfoSecond,
    title: "AMAZING INTERIOR",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    image: ProductInfoThird,
    title: "The real burgers",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Contact = () => {
  return (
    <>
      <section className="reservationsSection">
        <div className="container">
          <div className="row">
            <h2 className="title">RESERVATIONS – CONTACT FORM</h2>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
      <Reviews />
      <ProductsInfo productsInfo={productsInfo} />
    </>
  );
};

export default Contact;

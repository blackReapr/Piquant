// Components
import ContactForm from "../components/Contact/ContactForm";
import ArticleInfo from "../components/Home/ArticleInfo";
import Reviews from "../components/Home/Reviews";
import FirstTopSection from "../components/Helper/FirstTopSection";

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
      <FirstTopSection title={"RESERVATIONS – CONTACT FORM"} />
      <ContactForm />
      <Reviews />
      <ArticleInfo productsInfo={productsInfo} />
    </>
  );
};

export default Contact;

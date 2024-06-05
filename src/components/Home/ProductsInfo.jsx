import ProductInfoCard from "./ProductInfoCard";

import DeliciousFood from "../../assets/images/home-1-image-1.jpg";
import EveryTaste from "../../assets/images/home-1-image-2.jpg";
import Burger from "../../assets/images/home-1-image-3.jpg";

const productsInfo = [
  {
    image: DeliciousFood,
    title: "Delicious Food",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    image: EveryTaste,
    title: "For every taste",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    image: Burger,
    title: "The real burgers",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const ProductsInfo = () => {
  return (
    <div className="cardBox">
      {productsInfo.map((item, index) => (
        <ProductInfoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductsInfo;

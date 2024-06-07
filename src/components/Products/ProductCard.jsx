import { Link } from "react-router-dom";

// Icons
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ image, title, price }) => {
  return (
    <Link to="#" className="productCard">
      <div className="productImage">
        <img src={image} alt="food" />
        <p className="addToCart">
          <FiShoppingCart /> add to cart
        </p>
      </div>
      <h4 className="productTitle">{title}</h4>
      <p className="productPrice">£{price}.00</p>
    </Link>
  );
};

export default ProductCard;

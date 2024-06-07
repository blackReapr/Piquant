import { Link } from "react-router-dom";

const TopRatedProductCard = ({ image, title, price }) => {
  return (
    <Link to="/" className="topRatedProductCard">
      <div className="topRatedProductCardImage">
        <img src={image} alt={title} />
      </div>
      <div className="topRatedProductContent">
        <h5 className="title">{title}</h5>
        <p className="price">${price}.00</p>
      </div>
    </Link>
  );
};

export default TopRatedProductCard;

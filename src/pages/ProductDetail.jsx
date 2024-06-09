import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Fragment } from "react";

// Icons
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";

// Components
import StarReview from "./../components/Helper/StarReview";

// Images
import ProfileImage from "../assets/images/profile.png";

const headers = {
  description: 0,
  reviews: 1,
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [activeHeader, setActiveHeader] = useState(headers.description);
  const [reviews, setReviews] = useState([]);
  const [reviewStarCount, setReviewStarCount] = useState(0);
  const [tempStarCount, setTempStarCount] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkSave, setCheckSave] = useState(false);

  const handleClick = () => toast.success("Added to Cart!");

  const handleMouseOut = () => {
    setTempStarCount(0);
  };

  const handleStarClick = e => {
    if (e.target.id) setReviewStarCount(Number(e.target.id) + 1);
  };

  const handleMouseOver = e => {
    if (e.target.id)
      setTempStarCount(
        reviewStarCount <= e.target.id ? Number(e.target.id) + 1 : 0
      );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (reviewStarCount === 0) return toast.error("Please select a raiting");
    if (review.length === 0) return toast.error("Please write your review");
    if (name.length < 4)
      return toast.error("Name must at least contain 4 characters");
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      return toast.error("Incorrect Email");
    if (checkSave) {
      const user = {
        name,
        email,
      };
      localStorage.setItem("user", JSON.stringify(user));
    }
    setName("");
    setEmail("");
    setReview("");
    setCheckSave(false);
    setReviewStarCount(0);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    const getProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(data);
    };
    const getReviews = async () => {
      const { data } = await axios.get("http://localhost:3000/reviews");
      setReviews(data);
    };
    getProduct();
    getReviews();
  }, [id]);

  return (
    <>
      <section className="navigationSection">
        <div className="container">
          <div className="row">
            <h4 className="title">SHOP</h4>
            <p className="currentLocation">
              <Link to="/">
                <IoIosHome />
              </Link>
              / {product.title}
            </p>
          </div>
        </div>
      </section>
      <section className="productsDetailsSection">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="rightSide">
              <div className="productHeader">
                <h3 className="title">{product.title}</h3>
                <span className="productPrice">£{product.price}.00</span>
              </div>
              <p className="productDescription">{product.description}</p>
              <div className="addToCart">
                <div className="productCountContainer">
                  <span className="productCount">{count}</span>
                  <div className="controlProductCount">
                    <button
                      className="incrementBtn"
                      onClick={() => setCount(count + 1)}
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      className="decrementBtn"
                      onClick={() =>
                        setCount(count - 1 === 0 ? count : count - 1)
                      }
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                </div>
                <button className="addToCartBtn" onClick={handleClick}>
                  <FiShoppingCart /> add to cart
                </button>
              </div>
              <div className="descriptionAndReviews">
                <div className="headers">
                  <p
                    onClick={() => setActiveHeader(headers.description)}
                    className={`descriptionHeader ${
                      activeHeader === headers.description ? "active" : ""
                    }`}
                  >
                    Description
                  </p>
                  <p
                    onClick={() => setActiveHeader(headers.reviews)}
                    className={`reviewsHeader ${
                      activeHeader === headers.reviews ? "active" : ""
                    }`}
                  >
                    reviews ({reviews.length})
                  </p>
                </div>
                <div className="content">
                  {activeHeader === headers.description ? (
                    <p className="descriptionContent">{product.description}</p>
                  ) : (
                    <>
                      <div className="reviewsContainer">
                        {reviews.map(item => (
                          <Fragment key={item.id}>
                            <img src={ProfileImage} alt="Profile" />
                            <StarReview review={item.raiting} />
                            <p className="reviewContent">{item.content}</p>
                          </Fragment>
                        ))}
                      </div>
                      <div className="addReview">
                        <h3 className="title">add a review</h3>
                        <p className="info">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <div className="raiting">
                          <p>Your raiting *</p>
                          <StarReview
                            review={
                              tempStarCount !== 0
                                ? tempStarCount
                                : reviewStarCount
                            }
                            reviewActive={true}
                            handleMouseOver={handleMouseOver}
                            handleMouseOut={handleMouseOut}
                            handleStarClick={handleStarClick}
                          />
                        </div>
                        <form onSubmit={e => handleSubmit(e)}>
                          <div className="reviewController">
                            <label htmlFor="review">Your review *</label>
                            <textarea
                              cols={45}
                              rows={8}
                              id="review"
                              value={review}
                              onChange={e => setReview(e.target.value)}
                            ></textarea>
                          </div>
                          <input
                            type="text"
                            placeholder="Name *"
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Email *"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                          <label htmlFor="save" className="saveInfo">
                            <input
                              type="checkbox"
                              id="save"
                              value={checkSave}
                              onChange={() => setCheckSave(!checkSave)}
                            />
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                          <button type="submit">submit</button>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

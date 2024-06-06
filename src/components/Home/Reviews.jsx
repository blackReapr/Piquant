import CommaIcon from "../../assets/images/testimonials-icon.png";
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <img src={CommaIcon} alt="comma icon" />
          <h4 className="title">Happy Customers</h4>
          <h6 className="subTitle">Delicious Food</h6>
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

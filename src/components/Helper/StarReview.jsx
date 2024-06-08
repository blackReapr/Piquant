// Icons
import { FaStar, FaRegStar } from "react-icons/fa";

const StarReview = ({ review }) => {
  return (
    <div className="reviewStars">
      {Array.from({ length: review }, (_, index) => index).map((_, index) => (
        <FaStar key={index} />
      ))}
      {Array.from({ length: 5 - review }, (_, index) => index).map(
        (_, index) => (
          <FaRegStar key={index + 5} />
        )
      )}
    </div>
  );
};

export default StarReview;

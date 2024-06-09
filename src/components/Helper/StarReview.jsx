// Icons
import { FaStar, FaRegStar } from "react-icons/fa";

const StarReview = ({
  review,
  reviewActive,
  handleMouseOver,
  handleMouseOut,
  handleStarClick,
}) => {
  return (
    <div className="reviewStars">
      {!reviewActive ? (
        <>
          {Array.from({ length: review }, (_, index) => index).map(
            (_, index) => (
              <FaStar className="active" key={index} />
            )
          )}
          {Array.from({ length: 5 - review }, (_, index) => index).map(
            (_, index) => (
              <FaRegStar className="active" key={index + 5} />
            )
          )}
        </>
      ) : (
        <>
          {Array.from({ length: review }, (_, index) => index).map(
            (_, index) => (
              <FaStar
                className="active"
                key={index}
                onMouseOver={e => handleMouseOver(e)}
                onClick={e => handleStarClick(e)}
                onMouseOut={e => handleMouseOut(e)}
                id={index}
              />
            )
          )}
          {Array.from({ length: 5 - review }, (_, index) => index).map(
            (_, index) => (
              <FaStar
                key={index + review}
                id={index + review}
                onClick={e => handleStarClick(e)}
                onMouseOver={e => handleMouseOver(e)}
                onMouseOut={handleMouseOut}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default StarReview;

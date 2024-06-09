import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import StarReview from "../Helper/StarReview";

const reviews = [
  {
    id: 1,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    author: "Donald Munoz",
    review: 3,
  },
  {
    id: 2,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    author: "Donald Munoz",
    review: 5,
  },
  {
    id: 3,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    author: "Donald Munoz",
    review: 1,
  },
  {
    id: 4,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    author: "Donald Munoz",
    review: 4,
  },
];

const ReviewsCarousel = () => {
  return (
    <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
      {reviews.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="review">
            <div className="reviewContent">{item.content}</div>
            <StarReview review={item.review} reviewActive={false} />
            <div className="reviewAuthor">{item.author}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;

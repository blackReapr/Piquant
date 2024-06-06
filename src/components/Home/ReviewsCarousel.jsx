import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaStar, FaRegStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

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
      {reviews.map(item => (
        <SwiperSlide key={item.id}>
          <div className="review">
            <div className="reviewContent">{item.content}</div>
            <div className="reviewStars">
              {Array.from({ length: item.review }, (_, index) => index).map(
                (_, index) => (
                  <FaStar key={index} />
                )
              )}
              {Array.from({ length: 5 - item.review }, (_, index) => index).map(
                (_, index) => (
                  <FaRegStar key={index + 5} />
                )
              )}
            </div>
            <div className="reviewAuthor">{item.author}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;

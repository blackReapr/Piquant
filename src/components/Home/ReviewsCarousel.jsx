import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { FaStar, FaRegStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <Swiper slidesPerView={1} modules={[Navigation, A11y]}>
      <SwiperSlide>
        <div className="review">
          <div className="reviewContent">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            illo excepturi, quod harum quisquam voluptate maiores sint natus quo
            fugiat.
          </div>
          <div className="reviewStars"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewsCarousel;

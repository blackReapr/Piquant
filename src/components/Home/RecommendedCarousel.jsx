import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardFood from "../../assets/images/single-food-1a.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: CardFood,
    title: "Masala Spiced Chickpeas",
    info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    isNew: true,
    price: 15,
  },
  {
    id: 2,
    image: CardFood,
    title: "Kung Pao Pastrami",
    info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 15,
  },
  {
    id: 3,
    image: CardFood,
    title: "Jalapeno-mango salsa",
    info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 15,
  },
  {
    id: 4,
    image: CardFood,
    title: "Masala Spiced Chickpeas",
    info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 15,
  },
  {
    id: 5,
    image: CardFood,
    title: "Masala Spiced Chickpeas",
    info: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    price: 15,
  },
];

const RecommendedCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to="/">
            <div className="card">
              {item?.isNew ? <span className="new">NEW</span> : ""}
              <span className="price">${item.price}</span>
              <div className="imgContainer">
                <img src={CardFood} alt="card food" />
              </div>
              <h4 className="title">{item.title}</h4>
              <p className="info">{item.info}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecommendedCarousel;

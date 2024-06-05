import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import FoodAndDrink from "../../assets/images/home-1-logo-1-180x90.png";
import Beef from "../../assets/images/home-1-slide-1-graphic-1.png";
import Wine from "../../assets/images/home-1-slide-1-graphic-10.png";

import LastSlideFirstImage from "../../assets/images/home-1-slide-1-graphic-7a.png";
import LastSlideSecondImage from "../../assets/images/home-1-slide-1-graphic-7b.png";
import LastSlideThirdImage from "../../assets/images/home-1-slide-1-graphic-7c.png";

import Pizza from "../../assets/images/home-1-slide-1-graphic-8.png";
import Burger from "../../assets/images/home-1-slide-1-graphic-2.png";

import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation>
      <SwiperSlide>
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <img src={FoodAndDrink} alt="menu" />
              <h4 className="title">Piquant Grill</h4>
              <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <Link to="/">PURCHASE</Link>
            </div>
            <div className="rightSide">
              <img src={Burger} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <img src={Beef} alt="menu" />
              <h4 className="title">Piquant Grill</h4>
              <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <Link to="/">PURCHASE</Link>
            </div>
            <div className="rightSide">
              <img src={Pizza} alt="pizza" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <img src={Wine} alt="menu" />
              <h4 className="title">Piquant Grill</h4>
              <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </p>
              <Link to="/">PURCHASE</Link>
            </div>
            <div className="rightSide">
              <img src={LastSlideFirstImage} alt="" />
              <img src={LastSlideSecondImage} alt="" />
              <img src={LastSlideThirdImage} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

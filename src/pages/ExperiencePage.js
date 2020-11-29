import React, { Fragment } from "react";
import "../styles/ExperiencePage.sass";
import img1 from "../images/dolomites-2897227_640.jpg";
import img2 from "../images/pexels-pixabay-247416.jpg";
import img3 from "../images/mountaineering-2124113_1920.jpg";
import img4 from "../images/mountain-climbing-802099_1920.jpg";
// Import Swiper and required components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper";

// Import styles for Swiper
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

const ExperiencePage = () => {

  SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);
  const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
  const imageItems = images.map((item) => {
    return (
      <SwiperSlide style={{ width: "100%" }}>
        <img src={item.img} alt="" />
      </SwiperSlide>
    );
  });
  
  return (
    <Fragment>
      <section className="experience">
        <Swiper
          className="swiper-container-first"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect="overflow"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
        >
          {imageItems}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default ExperiencePage;

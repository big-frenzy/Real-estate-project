import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map(function (card, i) {
            return (
              <SwiperSlide key={i}>
                <div className="r-card flexColStart">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

function SliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="r-button flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
}

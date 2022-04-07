import React from "react";

import Slider from "react-slick";

import Card from "../card";

import { settings } from "../../../utils/sliderConfig";

import sliders from "../../../json/sliders.json";

const slider: React.FC = () => {
  return (
    <>
      <Slider {...settings}>
        {sliders.map((slider) => (
          <Card
            title_top={slider.title_top}
            title_bottom={slider.title_bottom}
            value_top={slider["value_top:"]}
            value_bottom={slider["value_bottom:"]}
          />
        ))}
      </Slider>
    </>
  );
};

export default slider;

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import dataImg from "../data";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Carousel() {
  const option = {
    type: "loop",
    drag: "free",
    focus: "center",
    pagination: false,
    arrows: false,
    perPage: 12,
    gap: 20,
    pauseOnHover: false,
    autoScroll: {
      speed: 1,
      rewind: false,
    },
    breakpoints: {
      1000: {
        perPage: 6,
        gap: 20,
      },
      640: {
        perPage: 3.5,
        gap: 50,
      },
    },
  };

  return (
    <Splide className="carousel" options={option} extensions={{ AutoScroll }}>
      {dataImg.map((item, index) => (
        <SplideSlide key={index}>
          <div className="img-container">
            <img src={item.src} alt="gambar" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Carousel;

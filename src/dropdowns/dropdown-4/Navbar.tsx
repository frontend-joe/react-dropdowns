import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import logo from "./logo.png";

import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";

const slides = [
  {
    name: "Development",
    image: image1,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vuejs",
      "Svelte",
      "Preact",
      "Qwik",
      "Solidjs",
    ],
  },
  {
    name: "Design",
    image: image2,
    items: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Fireworks",
      "InVision",
      "Draw.io",
      "Canva",
      "Visio",
      "Jitter",
    ],
  },
  {
    name: "Deployment",
    image: image3,
    items: [
      "Netlify",
      "Vercel",
      "Heroku",
      "AWS",
      "GCP",
      "Azure",
      "Railway",
      "Jenkins",
      "CircleCI",
    ],
  },
];

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} />
      <div className="nav-items">
        <a href="#">Portfolio</a>
        <div className="dropdown">
          <button>Skills</button>
          <div className="menu">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {slides?.map((slide) => (
                <SwiperSlide key={slide.name}>
                  <img src={slide.image} />
                  <div>
                    <h2>{slide.name}</h2>
                    <div className="links">
                      {slide.items?.map((item) => (
                        <span>{item}</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

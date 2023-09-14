import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import homeHeroImg from "../../assets/home.svg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className="bgLightTeal pt-10">
      <div className="container p-4 text-white text-center">
        <div className="d-flex justify-content-center flex-column gap-5 align-items-center py-5">
          <LazyLoadImage
            src={homeHeroImg}
            className={`${style.heroImg}`}
            alt="smilly boy"
          />
          <div className="hero-text d-flex flex-column gap-3">
            <h1 className="fw-bold">START FRAMEWORK</h1>
            <div className="cut d-flex justify-content-center align-items-center gap-3">
              <div className="line"></div>
              <i className="fa fa-star" aria-hidden="true"></i>
              <div className="line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

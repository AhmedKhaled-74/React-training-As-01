import React, { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/poert2.png";
import img3 from "../../assets/poert3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  const [imgs, setImgs] = useState([img1, img2, img3, img1, img2, img3]);
  const [shown, setShown] = useState("");

  const changeSrc = (ele) => {
    setShown(ele);
  };

  return (
    <>
      <div className="d-flex justify-content-center colorDarkTeal align-items-center pt-10">
        <div className="container">
          <div className="py-5 px-2 text-center d-flex flex-column gap-3">
            <h2 className="h1 fw-bold">PORTFOLIO COMPONENT</h2>
            <div className="cut d-flex justify-content-center align-items-center gap-3">
              <div className="line bgDarkTeal"></div>
              <i className="fa fa-star" aria-hidden="true"></i>
              <div className="line bgDarkTeal"></div>
            </div>
            <div className="container py-5">
              <div className="row g-5">
                {imgs.map((src, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div
                        className={`${style.imgBox} item rounded-4 overflow-hidden position-relative `}
                      >
                        <LazyLoadImage
                          src={src}
                          className="img-fluid"
                          alt="illustration img"
                        ></LazyLoadImage>
                        <div
                          className={`d-flex ${style.overlay} justify-content-center align-items-center position-absolute top-0 bgLightTeal left-0 h-100 w-100 opacity-0`}
                          onClick={() => changeSrc(src)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <aside>
              <div
                className="modal fade "
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog pt-10  overflow-hidden ">
                  <LazyLoadImage
                    src={shown}
                    className="img-fluid  rounded-4"
                    alt="Modal Image"
                  ></LazyLoadImage>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

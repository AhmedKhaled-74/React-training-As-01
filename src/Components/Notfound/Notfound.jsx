import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import errImg from "../../assets/404 Error-bro.svg";
import style from "./Notfound.module.css";

export default function Notfound() {
  return (
    <aside>
      <div
        className={`pt-5 d-flex justify-content-center align-items-center ${style.vh}`}
      >
        <LazyLoadImage src={errImg} className="img-fluid mt-5"></LazyLoadImage>
      </div>
    </aside>
  );
}

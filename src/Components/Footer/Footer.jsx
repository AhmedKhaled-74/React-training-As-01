import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  function getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
  }
  return (
    <footer>
      <div className="text-white bgDarkTeal">
        <div className="py-5 container">
          <div className="row align-items-start">
            <div className="col-lg-4 d-flex text-center flex-column gap-2 justify-content-center align-items-center py-4">
              <h3>LOCATION</h3>
              <p>
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 d-flex text-center flex-column gap-2 justify-content-center align-items-center py-4">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex gap-2 justify-content-center">
                <div className={style.socialIcon}>
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className={style.socialIcon}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className={style.socialIcon}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className={style.socialIcon}>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-center flex-column gap-2 justify-content-center align-items-center py-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-white text-center p-4 ${style.bgDarkestTeal}`}>
        Copyright &copy; Your Website {getCurrentYear()}
      </div>
    </footer>
  );
}

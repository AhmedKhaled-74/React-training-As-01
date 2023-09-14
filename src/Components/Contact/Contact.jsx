import React, { useState } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center colorDarkTeal align-items-center pt-10 ">
      <div className="container">
        <div className="col-md-11 mx-auto py-5 px-2 text-center d-flex flex-column gap-3">
          <h2 className="h1 fw-bold">CONATCT SECTION</h2>
          <div className="cut d-flex justify-content-center align-items-center gap-3">
            <div className="line bgDarkTeal"></div>
            <i className="fa fa-star" aria-hidden="true"></i>
            <div className="line bgDarkTeal"></div>
          </div>
          <form
            className="container d-flex flex-column gap-5 mt-5"
            onSubmit={handleSubmit}
          >
            <div className="position-relative">
              <label
                htmlFor="userName"
                className={`colorLightTeal ${style.labelStyle}  ${
                  userName !== "" ? style.labelTop : ""
                }`}
              >
                userName :
              </label>
              <input
                type="text"
                id="userName"
                placeholder="userName"
                className="form-control shadow z-index-1 position-relative"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="position-relative">
              <label
                htmlFor="userAge"
                className={`colorLightTeal ${style.labelStyle} ${
                  userAge !== "" ? style.labelTop : ""
                }`}
              >
                userAge :
              </label>
              <input
                type="number"
                id="userAge"
                placeholder="userAge"
                className="form-control shadow z-index-1 position-relative"
                onChange={(e) => setUserAge(e.target.value)}
              />
            </div>
            <div className="position-relative">
              <label
                htmlFor="userEmail"
                className={`colorLightTeal ${style.labelStyle} ${
                  userEmail !== "" ? style.labelTop : ""
                }`}
              >
                userEmail :
              </label>
              <input
                type="email"
                id="userEmail"
                placeholder="userEmail"
                className="form-control shadow z-index-1 position-relative"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="position-relative">
              <label
                htmlFor="userPassword"
                className={`colorLightTeal ${style.labelStyle} ${
                  userPassword !== "" ? style.labelTop : ""
                }`}
              >
                userPassword :
              </label>
              <input
                type="password"
                id="userPassword"
                placeholder="userPassword"
                className="form-control shadow z-index-1 position-relative"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="text-start">
              <input
                type="submit"
                value={"send Message"}
                className="btn bgLightTeal text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

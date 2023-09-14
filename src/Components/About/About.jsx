import React from "react";

export default function About() {
  return (
    <div className="bgLightTeal d-flex justify-content-center text-white align-items-center pt-10 vh-100">
      <div className="container">
        <div className="col-md-11 mx-auto py-5 px-2 text-center d-flex flex-column gap-3">
          <h2 className="h1 fw-bold">ABOUT COMPONENT</h2>
          <div className="cut d-flex justify-content-center align-items-center gap-3">
            <div className="line"></div>
            <i className="fa fa-star" aria-hidden="true"></i>
            <div className="line"></div>
          </div>
          <div className="container">
            <div className="row g-5 text-start">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function HeaderTop() {
  return (
    <div className="header-top-area dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <span>
              <i className="fa-light fa-envelope" style={{ color: "white" }}></i>
              <a
                href="mailto:AvatarHeatAir@gmail.com"
                style={{ color: "white", textDecoration: "none", fontSize: "15px", marginRight: "15px" }}
              >
                AvatarHeatAir@gmail.com
              </a>
            </span>
            <span>
              <i className="fa-light fa-phone"></i>
              <a
                href="tel:+916391102990"
                style={{ color: "white", textDecoration: "none", fontSize: "15px" }}
              >
                +91 6391 10299
              </a>
            </span>
          </div>
          <div className="col-xl-4 col-lg-4 text-end">
            <div className="social-area">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

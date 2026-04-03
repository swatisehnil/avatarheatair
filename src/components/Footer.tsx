"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a href="/" className="logo">
                  <Image src="/assets/img/white-logo.png" alt="logo" width={160} height={50} />
                </a>
                <p>
                  We provide the best home repair <br /> services with reliable care.
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5>Address</h5>
                <p>
                 503 Morningside Ave Union Beach NJ 07735
                </p>
                <div className="company-email">
                  <a href="mailto:AvatarHeatAir@gmail.com">AvatarHeatAir@gmail.com</a>
                </div>
                <div className="phone-number">
                  <p>+91 6391 10299</p>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                <h5>Links</h5>
                <ul>
                  <li>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Get in Touch</h5>
                <ul>
                  <li>
                    <div className="social-area">
                      <a href="#"><i className="lab la-facebook-f"></i>Facebook</a>
                      <a href="#"><i className="lab la-instagram"></i>Instagram</a>
                      <a href="#"><i className="lab la-linkedin-in"></i>LinkedIn</a>
                      <a href="#"><i className="la la-skype"></i>Skype</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
             <p className="copyright-line">
  © 2026 design by{" "}
  <a href="https://rninfosoft.com" target="_blank" rel="noopener noreferrer">
    rninfosoft
  </a>. All rights reserved.
</p>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 text-md-end">
              <p className="privacy">Privacy Policy | Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";

interface Props {
  whiteLogo?: string;
  tagline?: string;
  address?: string;
  email?: string;
  phone?: string;
  socialLinks?: { facebook?: string; instagram?: string; linkedin?: string; skype?: string };
  copyrightText?: string;
}

export default function Footer({
  whiteLogo = "/assets/img/white-logo.png",
  tagline = "We provide the best home repair services with reliable care.",
  address = "503 Morningside Ave Union Beach NJ 07735",
  email = "AvatarHeatAir@gmail.com",
  phone = "+91 6391 10299",
  socialLinks = {},
  copyrightText = "© 2026 design by rninfosoft. All rights reserved.",
}: Props) {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a href="/" className="logo"><Image src={whiteLogo} alt="logo" width={160} height={50} /></a>
                <p>{tagline}</p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5>Address</h5>
                <p>{address}</p>
                <div className="company-email"><a href={`mailto:${email}`}>{email}</a></div>
                <div className="phone-number"><p>{phone}</p></div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                <h5>Links</h5>
                <ul>
                  <li>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Get in Touch</h5>
                <ul>
                  <li>
                    <div className="social-area">
                      <a href={socialLinks.facebook ?? "#"}><i className="lab la-facebook-f"></i>Facebook</a>
                      <a href={socialLinks.instagram ?? "#"}><i className="lab la-instagram"></i>Instagram</a>
                      <a href={socialLinks.linkedin ?? "#"}><i className="lab la-linkedin-in"></i>LinkedIn</a>
                      <a href={socialLinks.skype ?? "#"}><i className="la la-skype"></i>Skype</a>
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
              <p className="copyright-line">{copyrightText}</p>
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

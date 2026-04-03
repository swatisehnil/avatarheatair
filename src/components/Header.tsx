"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-area">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container-fluid">
            <div className="header-inner-box">

              {/* Logo */}
              <div className="logo">
                <Link className="navbar-brand" href="/">
                  <Image src="/assets/img/logo-1.png" alt="AvatarHeatAir" width={160} height={50} />
                </Link>
              </div>

              {/* Main Menu */}
              <div className="main-menu d-none d-lg-block">
                <ul>
                  <li className="active"><a className="navlink" href="/">Home</a></li>
                  <li><a className="navlink" href="/about">About</a></li>
                  <li>
                    <a className="navlink" href="#">Services</a>
                    <ul className="sub-menu">
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Service Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="navlink" href="#">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="#">Blogs</a></li>
                      <li><a href="#">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a className="navlink" href="#">Contact</a></li>
                </ul>
              </div>

              <div className="header-right">
                {/* Search Button */}
                <div className="search-trigger">
                  <i className="fal fa-search"></i>
                </div>
                {/* Header Button */}
                <a href="#" className="theme-btn d-none d-lg-inline-block">Request a Quote</a>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i className="las la-bars"></i>
                  </div>
                  <div className="mobile-nav">
                    <button type="button" className="close-nav">
                      <i className="las la-times-circle"></i>
                    </button>
                    <nav className="sidebar-nav">
                      <ul className="metismenu" id="mobile-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li>
                          <a className="has-arrow" href="#">Services</a>
                          <ul className="sub-menu">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Service Details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="has-arrow" href="#">Blog</a>
                          <ul className="sub-menu">
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Blog Details</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </nav>
                    <div className="action-bar">
                      <a href="mailto:AvatarHeatAir@gmail.com">
                        <i className="las la-envelope"></i>AvatarHeatAir@gmail.com
                      </a>
                      <a href="tel:+916391102990">
                        <i className="fal fa-phone"></i>+91 6391 10299
                      </a>
                      <a href="#" className="theme-btn">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

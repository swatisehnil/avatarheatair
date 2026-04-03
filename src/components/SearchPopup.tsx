"use client";

import Image from "next/image";

export default function SearchPopup() {
  return (
    <div className="search-popup">
      <span className="search-back-drop"></span>
      <div className="search-inner">
        <div className="container">
          <div className="logo">
            <a className="navbar-brand" href="/">
              <Image src="/assets/img/logo-1.png" alt="" width={160} height={50} />
            </a>
          </div>
          <button className="close-search">
            <span className="la la-times"></span>
          </button>
          <form method="post" action="#">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Type your keyword"
                required
              />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

interface Props {
  email?: string;
  phone?: string;
  socialLinks?: { facebook?: string; instagram?: string; youtube?: string; linkedin?: string };
}

export default function HeaderTop({ email = "AvatarHeatAir@gmail.com", phone = "+91 6391 10299", socialLinks = {} }: Props) {
  return (
    <div className="header-top-area dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <span>
              <i className="fa-light fa-envelope" style={{ color: "white" }}></i>
              <a href={`mailto:${email}`} style={{ color: "white", textDecoration: "none", fontSize: "15px", marginRight: "15px" }}>{email}</a>
            </span>
            <span>
              <i className="fa-light fa-phone"></i>
              <a href={`tel:${phone.replace(/\s/g, "")}`} style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>{phone}</a>
            </span>
          </div>
          <div className="col-xl-4 col-lg-4 text-end">
            <div className="social-area">
              <a href={socialLinks.facebook ?? "#"}><i className="fa-brands fa-facebook-f"></i></a>
              <a href={socialLinks.instagram ?? "#"}><i className="fa-brands fa-instagram"></i></a>
              <a href={socialLinks.youtube ?? "#"}><i className="fa-brands fa-youtube"></i></a>
              <a href={socialLinks.linkedin ?? "#"}><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

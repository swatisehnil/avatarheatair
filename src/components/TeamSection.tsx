"use client";

import Image from "next/image";

const teamMembers = [
  { id: 1, img: "/assets/img/team/1-1.jpg", name: "John Lewis", role: "Operator", delay: ".2s" },
  { id: 2, img: "/assets/img/team/1-2.jpg", name: "John Lewis", role: "Operator", delay: ".4s" },
  { id: 3, img: "/assets/img/team/1-3.jpg", name: "John Lewis", role: "Operator", delay: ".6s" },
  { id: 4, img: "/assets/img/team/1-4.jpg", name: "John Lewis", role: "Operator", delay: ".8s" },
];

export default function TeamSection() {
  return (
    <div className="team-section dark-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
            <div className="team-members-wrap">
              <div className="row">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={member.delay}
                  >
                    <div className="single-team-member">
                      <div className="team-bg">
                        <Image src={member.img} alt={member.name} width={300} height={350} />
                      </div>
                      <div className="team-hover-info">
                        <div className="team-title">
                          <h5>{member.name}</h5>
                          <span>{member.role}</span>
                        </div>
                      </div>
                      <div className="social-icon">
                        <a href="#"><i className="lab la-facebook-f"></i></a>
                        <a href="#"><i className="lab la-instagram"></i></a>
                        <a href="#"><i className="lab la-linkedin-in"></i></a>
                        <a href="#"><i className="la la-skype"></i></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
            <div className="team-content-wrap">
              <div className="section-title">
                <h6 className="text-white">Our Team</h6>
                <h2 className="text-white visible-slowly-right">
                  Meet Our talent & <br /> Professional Worker
                </h2>
              </div>
              <p>
               At Avatar Home Repair, our team consists of highly skilled and experienced professionals dedicated to delivering top-quality home services. 
              </p>
              <a href="#" className="theme-btn mt-30">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

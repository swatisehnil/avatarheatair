"use client";

import Image from "next/image";

const projects = [
  { id: 1, img: "/assets/img/project/1-1.jpg", title: "Plumbing Installation", category: "Home Repair", col: "col-xl-6 col-lg-6 col-md-6" },
  { id: 2, img: "/assets/img/project/1-2.jpg", title: "Painting Work", category: "Home Renovation", col: "col-xl-6 col-lg-6 col-md-6" },
  { id: 3, img: "/assets/img/project/1-3.jpg", title: "Kitchen Cabinet", category: "Leak Detection", col: "col-xl-4 col-lg-4 col-md-6" },
  { id: 4, img: "/assets/img/project/1-4.jpg", title: "Electrical Work", category: "Home Renovation", col: "col-xl-4 col-lg-4 col-md-6" },
  { id: 5, img: "/assets/img/project/1-5.jpg", title: "Plumbing Repair", category: "Home Renovation", col: "col-xl-4 col-lg-4 col-md-4 d-none d-lg-block" },
];

export default function ProjectSection() {
  return (
    <div className="project-section project-three section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center wow fadeInUp animated" data-wow-delay="200ms">
            <div className="section-title mb-0">
              <h6>Recent Project</h6>
              <h2 className="visible-slowly-right">
                We Provide you the Highest Quality Work
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-40">
          {projects.map((project) => (
            <div key={project.id} className={project.col}>
              <a href="#" className="single-project-wrapper">
                <div className="project-bg">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="project-details">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

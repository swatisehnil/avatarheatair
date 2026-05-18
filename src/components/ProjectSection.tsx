"use client";

import Image from "next/image";

interface Project { image: string; title: string; category: string; col: string; order: number }
interface Props { subtitle?: string; heading?: string; projects?: Project[] }

const DEFAULT_PROJECTS: Project[] = [
  { image: "/assets/img/project/1-1.jpg", title: "Plumbing Installation", category: "Home Repair", col: "col-xl-6 col-lg-6 col-md-6", order: 1 },
  { image: "/assets/img/project/1-2.jpg", title: "Painting Work", category: "Home Renovation", col: "col-xl-6 col-lg-6 col-md-6", order: 2 },
  { image: "/assets/img/project/1-3.jpg", title: "Kitchen Cabinet", category: "Leak Detection", col: "col-xl-4 col-lg-4 col-md-6", order: 3 },
  { image: "/assets/img/project/1-4.jpg", title: "Electrical Work", category: "Home Renovation", col: "col-xl-4 col-lg-4 col-md-6", order: 4 },
  { image: "/assets/img/project/1-5.jpg", title: "Plumbing Repair", category: "Home Renovation", col: "col-xl-4 col-lg-4 col-md-4 d-none d-lg-block", order: 5 },
];

export default function ProjectSection({ subtitle = "Recent Project", heading = "We Provide you the Highest Quality Work", projects = DEFAULT_PROJECTS }: Props) {
  const sorted = [...(projects.length > 0 ? projects : DEFAULT_PROJECTS)].sort((a, b) => a.order - b.order);
  return (
    <div className="project-section project-three section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center wow fadeInUp animated" data-wow-delay="200ms">
            <div className="section-title mb-0">
              <h6>{subtitle}</h6>
              <h2 className="visible-slowly-right">{heading}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-40">
          {sorted.map((project, i) => (
            <div key={i} className={project.col}>
              <a href="#" className="single-project-wrapper">
                <div className="project-bg">
                  <Image src={project.image} alt={project.title} width={600} height={400} style={{ width: "100%" }} />
                  <div className="project-details"><h4>{project.title}</h4><p>{project.category}</p></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

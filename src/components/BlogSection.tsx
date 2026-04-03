"use client";

import { useEffect } from "react";
import Image from "next/image";

const blogs = [
  { id: 1, img: "/assets/img/blog/1-1.jpg", category: "Installation", title: "What Are All The Different Plumbing Tiles?", date: "November 30 2025", comments: "1 comment", delay: ".2s" },
  { id: 2, img: "/assets/img/blog/1-2.jpg", category: "Repairing", title: "How to start a metal fabrication business", date: "April 15 2025", comments: "1 comment", delay: ".4s" },
  { id: 3, img: "/assets/img/blog/1-3.jpg", category: "Renovation", title: "A Complete Guide To The Slate Plumbings", date: "April 8 2025", comments: "1 comment", delay: ".6s" },
  { id: 4, img: "/assets/img/blog/1-4.jpg", category: "Factory", title: "The Benefits of Buying plumbing Online", date: "April 2 2025", comments: "1 comment", delay: ".8s" },
];

export default function BlogSection() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).jQuery) {
        const $ = (window as any).jQuery;
        if ($.fn.owlCarousel) {
          $(".blog-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            dots: true,
            nav: false,
            responsive: {
              0: { items: 1 },
              576: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            },
          });
        }
      }
    };
    const timer = setTimeout(init, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center">
            <div className="section-title">
              <h6>From Our Blog</h6>
              <h2 className="visible-slowly-right">
                Articles About Avatar Home Service
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="blog-carousel owl-carousel">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href="#"
                className="single-blog-item wow fadeInUp"
                data-wow-delay={blog.delay}
              >
                <div className="blog-img">
                  <Image src={blog.img} alt={blog.title} width={400} height={270} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{blog.category}</span>
                  </div>
                  <div className="blog-title">
                    <h4>{blog.title}</h4>
                  </div>
                  <div className="blog-info">
                    <span>{blog.date}</span>
                    <span>{blog.comments}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

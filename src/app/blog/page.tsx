import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <div className="banner-section blog-dtl-bg section-padding pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="blog-banner-wrap">
                <div className="section-title">
                  <h2 className="text-white">Plumbing Installation: <br /> Three ways you can invest properly</h2>
                </div>
                <div className="blog-meta-wrap">
                  <div className="blog-meta">
                    <p><i className="las la-calendar-alt"></i>03 May 2026</p>
                  </div>
                  <div className="blog-meta">
                    <p><i className="las la-comments"></i>02 Comments</p>
                  </div>
                  <div className="blog-meta">
                    <p><i className="las la-user-alt"></i>By Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Details Page */}
      <div className="blog-details-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12">
              <div className="blog-content-wrap">
                <p><span className="dropcap_style">M</span>aintaining a safe and functional home is essential for comfort and peace of mind. At Avtar Home Service, we specialize in providing reliable plumbing and home repair services that cover everything from small fixes to complex installations. Neglecting plumbing or repair issues can lead to bigger problems over time. A small leak, clogged drain, or faulty fixture can cause water damage, increase utility bills, or even create safety hazards. Regular maintenance and timely repairs help prevent these issues, saving you time and money in the long run.</p>
                <div className="blog-quote-wrap">
                  <div className="quote-icon">
                    <Image src="/assets/img/straight-quotes.png" alt="Quote" width={40} height={40} />
                  </div>
                  <div className="blog-quote-text">
                    <p>Your home deserves the best care. With Avtar Home Service, you get professional, trustworthy, and efficient plumbing and home repair solutions. Whether it&apos;s a minor fix or a major installation, we handle every job with precision and dedication.</p>
                    <h6 className="blog-author">Jhone Marko / <span>CEO, Phoenix</span></h6>
                  </div>
                </div>
                <h3 className="mt-20 mb-30">Plumbing Repair For Small &amp; Large Project</h3>
                <p>At Avtar Home Service, we specialize in providing trusted plumbing repair solutions for both small and large projects. Whether it&apos;s a minor leak under your sink or a full-scale pipe replacement, our skilled technicians handle every job with precision, care, and attention to detail. Small plumbing issues, such as dripping faucets, clogged drains, or slow-running sinks, can quickly turn into bigger problems if left unresolved. That&apos;s why we prioritize fast response times and efficient repairs to prevent any damage to your home or business. Even minor pipe leaks, toilet repairs, and under-sink fixture issues are addressed promptly to ensure your plumbing system remains functional and safe.</p>
                <div className="row gy-4 mt-30 mb-30">
                  <div className="col-md-6">
                    <div className="blog-feature-img">
                      <Image src="/assets/img/blog/blog-details-img-1.jpg" alt="Blog Detail 1" width={400} height={300} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-feature-img">
                      <Image src="/assets/img/blog/blog-details-img-2.jpg" alt="Blog Detail 2" width={400} height={300} />
                    </div>
                  </div>
                </div>
                <p>For larger plumbing projects, Avtar Home Service offers comprehensive solutions designed to meet the needs of both residential and commercial clients. Full pipe replacements, bathroom remodel plumbing upgrades, and kitchen fixture installations are completed efficiently and safely.</p>
                <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="blog-tag-wrap d-flex align-items-center">
                      <h5>Tags:</h5>
                      <span>Advisor</span>
                      <span>Financials</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 text-xl-end">
                    <div className="social-icon">
                      <a href="#"><i className="lab la-facebook-f"></i></a>
                      <a href="#"><i className="lab la-skype"></i></a>
                      <a href="#"><i className="lab la-instagram"></i></a>
                      <a href="#"><i className="lab la-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div className="pagination-wrap">
                  <a href="#"><i className="las la-long-arrow-alt-left"></i>Previous Post</a>
                  <a href="#">Next Post<i className="las la-long-arrow-alt-right"></i></a>
                </div>
              </div>

              {/* Comments Section */}
              <div className="commetns-section-wrap">
                <div className="comments-headline">
                  <h3>Comments (2)</h3>
                </div>
                <div className="single-comments-wrap">
                  <div className="single-comments-inner">
                    <div className="comments-autor-thumb">
                      <Image src="/assets/img/blog/comment-1.png" alt="Patric Evra" width={70} height={70} />
                    </div>
                    <div className="comments-content">
                      <h6>Patric Evra</h6>
                      <p className="comments-date">June 02, 2025 - 9:44 am</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <a href="#" className="reply-btn">Reply</a>
                </div>
                <div className="single-comments-wrap">
                  <div className="single-comments-inner">
                    <div className="comments-autor-thumb">
                      <Image src="/assets/img/blog/comment-2.jpg" alt="Monica Benedict" width={70} height={70} />
                    </div>
                    <div className="comments-content">
                      <h6>Monica Benedict</h6>
                      <p className="comments-date">June 06, 2025 - 7:28 am</p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <a href="#" className="reply-btn">Reply</a>
                </div>
              </div>

              {/* Leave A Comment */}
              <div className="comments-form-wrap">
                <h3>Leave A Comment</h3>
                <div className="comments-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-md-6 col-12">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="col-12">
                        <input type="tel" placeholder="Phone" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Write a Comment"></textarea>
                      </div>
                      <div className="col-12">
                        <input type="submit" value="Post Comment" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-12">
              <div className="blog-sidebar">
                <div className="search-bar-wrap d-flex">
                  <input type="search" placeholder="search" />
                  <i className="fal fa-search"></i>
                </div>
                <div className="blog-category">
                  <h5>Categories</h5>
                  <ul>
                    <li><i className="las la-angle-double-right"></i><a href="#">Repair</a></li>
                    <li><i className="las la-angle-double-right"></i><a href="#">Inspection</a></li>
                    <li><i className="las la-angle-double-right"></i><a href="#">Plumbing Installation</a></li>
                    <li><i className="las la-angle-double-right"></i><a href="#">Plumbing Fabrication</a></li>
                    <li><i className="las la-angle-double-right"></i><a href="#">Home Renovation</a></li>
                  </ul>
                </div>
                <div className="recent-post-wrap">
                  <h5>Recent Post</h5>
                  <div className="single-recent-post">
                    <div className="recent-post-thumbs">
                      <Image src="/assets/img/blog/recent-post-1.jpg" alt="Recent Post 1" width={80} height={80} />
                    </div>
                    <div className="recent-post-content">
                      <p>May 22, 2025</p>
                      <a href="#">
                        <h6>The main things that affect Plumbing tiles prices today</h6>
                      </a>
                    </div>
                  </div>
                  <div className="single-recent-post">
                    <div className="recent-post-thumbs">
                      <Image src="/assets/img/blog/recent-post-2.jpg" alt="Recent Post 2" width={80} height={80} />
                    </div>
                    <div className="recent-post-content">
                      <p>May 15, 2025</p>
                      <a href="#">
                        <h6>How to find jobs in the plumbing service</h6>
                      </a>
                    </div>
                  </div>
                  <div className="single-recent-post">
                    <div className="recent-post-thumbs">
                      <Image src="/assets/img/blog/recent-post-3.jpg" alt="Recent Post 3" width={80} height={80} />
                    </div>
                    <div className="recent-post-content">
                      <p>May 07, 2025</p>
                      <a href="#">
                        <h6>The most profitable plumbing business ideas</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="popular-tag-wrap">
                  <h5>Popular Tag</h5>
                  <span>Repair</span>
                  <span>Maintenance</span>
                  <span>Inspection</span>
                  <span>Industrial</span>
                  <span>Manufacture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SearchPopup />

      {/* Back to Top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}

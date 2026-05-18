export const dynamic = 'force-dynamic';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";
import { connectDB } from "@/lib/mongodb";
import BlogPageModel from "@/lib/models/BlogPage";

async function getData() {
  try {
    await connectDB();
    const doc = await BlogPageModel.findOne().lean();
    return doc ? JSON.parse(JSON.stringify(doc)) : null;
  } catch { return null; }
}

export default async function BlogPage() {
  const doc = await getData();
  const d = doc as any;

  // ── defaults ──
  const bannerTitle    = d?.bannerTitle    ?? "Plumbing Installation: Three ways you can invest properly";
  const bannerDate     = d?.bannerDate     ?? "03 May 2026";
  const bannerComments = d?.bannerComments ?? "02 Comments";
  const bannerAuthor   = d?.bannerAuthor   ?? "By Admin";

  const introText       = d?.introText       ?? "Maintaining a safe and functional home is essential for comfort and peace of mind. At Avtar Home Service, we specialize in providing reliable plumbing and home repair services.";
  const quoteText       = d?.quoteText       ?? "Your home deserves the best care. With Avtar Home Service, you get professional, trustworthy, and efficient plumbing and home repair solutions.";
  const quoteAuthorName = d?.quoteAuthorName ?? "Jhone Marko";
  const quoteAuthorRole = d?.quoteAuthorRole ?? "CEO, Phoenix";
  const subHeading      = d?.subHeading      ?? "Plumbing Repair For Small & Large Project";
  const bodyText        = d?.bodyText        ?? "At Avtar Home Service, we specialize in providing trusted plumbing repair solutions for both small and large projects.";
  const featureImage1   = d?.featureImage1   ?? "/assets/img/blog/blog-details-img-1.jpg";
  const featureImage2   = d?.featureImage2   ?? "/assets/img/blog/blog-details-img-2.jpg";
  const bodyText2       = d?.bodyText2       ?? "For larger plumbing projects, Avtar Home Service offers comprehensive solutions designed to meet the needs of both residential and commercial clients.";

  const tags        = d?.tags?.length        ? d.tags        : ["Advisor", "Financials"];
  const prevPostLink = d?.prevPostLink       ?? "#";
  const nextPostLink = d?.nextPostLink       ?? "#";

  const comments = d?.comments?.length ? d.comments : [
    { image: "/assets/img/blog/comment-1.png", name: "Patric Evra",     date: "June 02, 2025 - 9:44 am", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
    { image: "/assets/img/blog/comment-2.jpg", name: "Monica Benedict", date: "June 06, 2025 - 7:28 am", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
  ];

  const categories = d?.categories?.length ? d.categories : [
    { label: "Repair",                link: "#" },
    { label: "Inspection",            link: "#" },
    { label: "Plumbing Installation", link: "#" },
    { label: "Plumbing Fabrication",  link: "#" },
    { label: "Home Renovation",       link: "#" },
  ];

  const recentPosts = d?.recentPosts?.length ? d.recentPosts : [
    { image: "/assets/img/blog/recent-post-1.jpg", date: "May 22, 2025", title: "The main things that affect Plumbing tiles prices today", link: "#" },
    { image: "/assets/img/blog/recent-post-2.jpg", date: "May 15, 2025", title: "How to find jobs in the plumbing service", link: "#" },
    { image: "/assets/img/blog/recent-post-3.jpg", date: "May 07, 2025", title: "The most profitable plumbing business ideas", link: "#" },
  ];

  const popularTags = d?.popularTags?.length ? d.popularTags : ["Repair", "Maintenance", "Inspection", "Industrial", "Manufacture"];

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="banner-section blog-dtl-bg section-padding pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="blog-banner-wrap">
                <div className="section-title">
                  <h2 className="text-white">{bannerTitle}</h2>
                </div>
                <div className="blog-meta-wrap">
                  <div className="blog-meta"><p><i className="las la-calendar-alt"></i>{bannerDate}</p></div>
                  <div className="blog-meta"><p><i className="las la-comments"></i>{bannerComments}</p></div>
                  <div className="blog-meta"><p><i className="las la-user-alt"></i>{bannerAuthor}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Details */}
      <div className="blog-details-page section-padding">
        <div className="container">
          <div className="row">

            {/* Main Content */}
            <div className="col-xl-8 col-lg-8 col-12">
              <div className="blog-content-wrap">

                {/* Intro paragraph */}
                {introText && (
                  <p><span className="dropcap_style">{introText.charAt(0)}</span>{introText.slice(1)}</p>
                )}

                {/* Quote block */}
                {quoteText && (
                  <div className="blog-quote-wrap">
                    <div className="quote-icon">
                      <Image src="/assets/img/straight-quotes.png" alt="Quote" width={40} height={40} />
                    </div>
                    <div className="blog-quote-text">
                      <p>{quoteText}</p>
                      <h6 className="blog-author">{quoteAuthorName} / <span>{quoteAuthorRole}</span></h6>
                    </div>
                  </div>
                )}

                {/* Sub heading */}
                {subHeading && <h3 className="mt-20 mb-30">{subHeading}</h3>}

                {/* Body text */}
                {bodyText && <p>{bodyText}</p>}

                {/* Feature images */}
                <div className="row gy-4 mt-30 mb-30">
                  {featureImage1 && (
                    <div className="col-md-6">
                      <div className="blog-feature-img">
                        <Image src={featureImage1} alt="Blog Detail 1" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                      </div>
                    </div>
                  )}
                  {featureImage2 && (
                    <div className="col-md-6">
                      <div className="blog-feature-img">
                        <Image src={featureImage2} alt="Blog Detail 2" width={400} height={300} style={{ width: "100%", height: "auto" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Closing paragraph */}
                {bodyText2 && <p>{bodyText2}</p>}

                {/* Tags & Social */}
                <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="blog-tag-wrap d-flex align-items-center">
                      <h5>Tags:</h5>
                      {tags.map((tag: string, i: number) => <span key={i}>{tag}</span>)}
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

                {/* Pagination */}
                <div className="pagination-wrap">
                  <a href={prevPostLink}><i className="las la-long-arrow-alt-left"></i>Previous Post</a>
                  <a href={nextPostLink}>Next Post<i className="las la-long-arrow-alt-right"></i></a>
                </div>
              </div>

              {/* Comments */}
              {comments.length > 0 && (
                <div className="commetns-section-wrap">
                  <div className="comments-headline">
                    <h3>Comments ({comments.length})</h3>
                  </div>
                  {comments.map((c: any, i: number) => (
                    <div key={i} className="single-comments-wrap">
                      <div className="single-comments-inner">
                        <div className="comments-autor-thumb">
                          {c.image && <Image src={c.image} alt={c.name} width={70} height={70} />}
                        </div>
                        <div className="comments-content">
                          <h6>{c.name}</h6>
                          <p className="comments-date">{c.date}</p>
                          <p>{c.text}</p>
                        </div>
                      </div>
                      <a href="#" className="reply-btn">Reply</a>
                    </div>
                  ))}
                </div>
              )}

              {/* Leave A Comment */}
              <div className="comments-form-wrap">
                <h3>Leave A Comment</h3>
                <div className="comments-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6 col-12"><input type="text" placeholder="Name" /></div>
                      <div className="col-md-6 col-12"><input type="email" placeholder="Email" /></div>
                      <div className="col-12"><input type="tel" placeholder="Phone" /></div>
                      <div className="col-12"><textarea name="message" id="message" cols={30} rows={10} placeholder="Write a Comment"></textarea></div>
                      <div className="col-12"><input type="submit" value="Post Comment" /></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-12">
              <div className="blog-sidebar">

                {/* Search */}
                <div className="search-bar-wrap d-flex">
                  <input type="search" placeholder="search" />
                  <i className="fal fa-search"></i>
                </div>

                {/* Categories */}
                {categories.length > 0 && (
                  <div className="blog-category">
                    <h5>Categories</h5>
                    <ul>
                      {categories.map((c: any, i: number) => (
                        <li key={i}><i className="las la-angle-double-right"></i><a href={c.link}>{c.label}</a></li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="recent-post-wrap">
                    <h5>Recent Post</h5>
                    {recentPosts.map((p: any, i: number) => (
                      <div key={i} className="single-recent-post">
                        <div className="recent-post-thumbs">
                          {p.image && <Image src={p.image} alt={p.title} width={80} height={80} />}
                        </div>
                        <div className="recent-post-content">
                          <p>{p.date}</p>
                          <a href={p.link}><h6>{p.title}</h6></a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Popular Tags */}
                {popularTags.length > 0 && (
                  <div className="popular-tag-wrap">
                    <h5>Popular Tag</h5>
                    {popularTags.map((tag: string, i: number) => <span key={i}>{tag}</span>)}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SearchPopup />
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}

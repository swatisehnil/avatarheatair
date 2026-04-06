import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchPopup from "@/components/SearchPopup";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area bread-bg">
        <div className="overlay-5"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Service Details</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="service-details-area section-padding">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-8 col-lg-8">
              <div className="service-details-wrap">
                <div className="feature-img">
                  <Image src="/assets/img/service/service-feat-img.jpg" alt="Service" width={800} height={500} />
                </div>
                <p>At Avtar Heat &amp; Air, we provide dependable plumbing and home repair solutions designed to keep your home running smoothly. Whether you&apos;re dealing with a leaking pipe, clogged drain, or need a full fixture installation, our experienced technicians deliver fast, efficient, and long-lasting results.</p>
                <h5>Reliable Plumbing &amp; Home Repair Services</h5>
                <p>We provide trusted plumbing and home repair solutions to ensure your home stays comfortable, safe, and fully functional. From small fixes to complex repairs, our skilled technicians handle every job with precision and care. We understand how important it is to resolve issues quickly, which is why we focus on fast response times and dependable service.</p>
                <p>We work with modern tools and high-quality materials to ensure durability and performance. Every project is handled with attention to detail, minimizing future issues and saving you time and money.</p>
                <div className="service-details-img">
                  <div className="row gy-5">
                    <div className="col-md-6">
                      <Image src="/assets/img/service/service-details-img-1.jpg" alt="Service Detail 1" width={400} height={300} />
                    </div>
                    <div className="col-md-6">
                      <Image src="/assets/img/service/service-details-img-2.jpg" alt="Service Detail 2" width={400} height={300} />
                    </div>
                  </div>
                </div>
                <p>We provide trusted plumbing and home repair services to keep your home safe, comfortable, and fully functional. From leak repairs and drain cleaning to fixture installations and pipe replacements, our skilled technicians handle every job with precision and care. With a focus on fast response times and reliable service, we ensure that all your home repair needs are resolved quickly and efficiently, giving you peace of mind.</p>
                <h5>Experienced &amp; Professional Team</h5>
                <p>Our technicians are trained, experienced, and committed to delivering top-quality workmanship. We take the time to understand your needs, explain the problem clearly, and provide the most suitable solution.</p>
                <p>Our skilled technicians bring years of experience and deliver reliable, high-quality service. We focus on clear communication, efficient work, and ensuring every job is done right the first time.</p>
                <div className="service-details-img">
                  <Image src="/assets/img/service/service-details-img-3.jpg" alt="Service Detail 3" width={800} height={400} />
                </div>
                <p>We provide trusted plumbing and home repair solutions to ensure your home stays comfortable, safe, and fully functional. From small fixes to complex repairs, our skilled technicians handle every job with precision and care. We understand how important it is to resolve issues quickly, which is why we focus on fast response times and dependable service.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="sidebar-wrap white-bg">
                <div className="contact-form">
                  <h5>Get in Touch</h5>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea name="message" id="message" cols={10} rows={10} placeholder="Message"></textarea>
                    <input type="submit" value="Get In Touch" />
                  </form>
                </div>
                <div className="contact-info">
                  <h5>Contact Info</h5>
                  <ul className="contact-list-item">
                    <li>
                      <i className="las la-map-marker"></i>
                      Address —<br />
                      503 Morningside Ave Union Beach NJ 07735
                    </li>
                    <li>
                      <i className="las la-envelope"></i>
                      AvatarHeatAir@gmail.com
                    </li>
                    <li>
                      <i className="las la-phone"></i>
                      +91 6391 10299
                    </li>
                  </ul>
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

"use client";

import Image from "next/image";

interface SocialLinks { facebook: string; instagram: string; linkedin: string; skype: string }
interface Member { image: string; name: string; role: string; socialLinks: SocialLinks; order: number }
interface Props { subtitle?: string; heading?: string; description?: string; teamMembers?: Member[]; ctaText?: string; ctaLink?: string }

const DEFAULT_MEMBERS: Member[] = [
  { image: "/assets/img/team/1-1.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" }, order: 1 },
  { image: "/assets/img/team/1-2.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" }, order: 2 },
  { image: "/assets/img/team/1-3.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" }, order: 3 },
  { image: "/assets/img/team/1-4.jpg", name: "John Lewis", role: "Operator", socialLinks: { facebook: "#", instagram: "#", linkedin: "#", skype: "#" }, order: 4 },
];

const DELAYS = [".2s", ".4s", ".6s", ".8s"];

export default function TeamSection({
  subtitle = "Our Team",
  heading = "Meet Our talent & Professional Worker",
  description = "At Avatar Home Repair, our team consists of highly skilled and experienced professionals dedicated to delivering top-quality home services.",
  teamMembers = DEFAULT_MEMBERS,
  ctaText = "See More",
  ctaLink = "#",
}: Props) {
  const sorted = [...(teamMembers.length > 0 ? teamMembers : DEFAULT_MEMBERS)].sort((a, b) => a.order - b.order);
  return (
    <div className="team-section dark-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
            <div className="team-members-wrap">
              <div className="row">
                {sorted.map((member, i) => (
                  <div key={i} className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={DELAYS[i] ?? ".2s"}>
                    <div className="single-team-member">
                      <div className="team-bg"><Image src={member.image} alt={member.name} width={300} height={350} /></div>
                      <div className="team-hover-info">
                        <div className="team-title"><h5>{member.name}</h5><span>{member.role}</span></div>
                      </div>
                      <div className="social-icon">
                        <a href={member.socialLinks?.facebook ?? "#"}><i className="lab la-facebook-f"></i></a>
                        <a href={member.socialLinks?.instagram ?? "#"}><i className="lab la-instagram"></i></a>
                        <a href={member.socialLinks?.linkedin ?? "#"}><i className="lab la-linkedin-in"></i></a>
                        <a href={member.socialLinks?.skype ?? "#"}><i className="la la-skype"></i></a>
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
                <h6 className="text-white">{subtitle}</h6>
                <h2 className="text-white visible-slowly-right">{heading}</h2>
              </div>
              <p>{description}</p>
              <a href={ctaLink} className="theme-btn mt-30">{ctaText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const PHONE  = "732-320-5193";
const NAVY   = "#1a1a2e";
const ORANGE = "#DB7C37";

const services = [
  { img: "/assets/img/heating/h-1.jpg",                       icon: <FurnaceIcon />,    title: "Furnace Installation & Repair",  desc: "Expert furnace installation, repair & tune-ups for reliable home heating." },
  { img: "/assets/img/Conditioning/air-1.jpg",                icon: <HeatPumpIcon />,   title: "Heat Pump Installation",         desc: "High-efficiency heat pump systems for year-round comfort." },
  { img: "/assets/img/heating/h-2.jpg",                       icon: <BoilerIcon />,     title: "Boiler Maintenance",             desc: "Professional boiler installation, repair & maintenance services." },
  { img: "/assets/img/Conditioning/air-2.jpg",                icon: <MiniSplitIcon />,  title: "Ductless Mini-Split Systems",    desc: "Energy-efficient ductless heating solutions for any space." },
  { img: "/assets/img/heating/h-4.png",                       icon: <ThermostatIcon />, title: "Thermostat Upgrades",            desc: "Smart thermostat upgrades for better control & savings." },
  { img: "/assets/img/service/service-details-img-1.jpg",     icon: <EmergencyIcon />,  title: "Emergency Heating Services",     desc: "24/7 emergency heating repair when you need it the most." },
];

const locations = ["Middletown Twp", "Keyport", "Holmdel Twp", "Monmouth County", "Colts Neck Twp", "Middlesex County", "Hazlet Twp"];

const whyCards = [
  { icon: <AwardIcon />,  title: "Free Estimates or Consultations",   desc: "Get honest advice and upfront pricing with no obligation." },
  { icon: <DollarIcon />, title: "Financing Options",                  desc: "Flexible financing options to fit your budget." },
  { icon: <ShieldIcon />, title: "Satisfaction Guarantee",             desc: "We stand behind our work and your comfort." },
  { icon: <PeopleIcon />, title: "Experienced & Trusted Technicians",  desc: "Highly trained professionals you can count on." },
];

const steps = [
  { num: "01", title: "Inspection & Planning",  desc: "We inspect your property, evaluate your current system, and design the best heating solution for your home.",  img: "/assets/img/process/1-1.jpg" },
  { num: "02", title: "Installation",           desc: "Our certified technicians install your new system with precision using top-quality components.",                img: "/assets/img/process/1-2.jpg" },
  { num: "03", title: "Testing & Maintenance",  desc: "We thoroughly test the system for optimal performance and guide you on ongoing maintenance.",                   img: "/assets/img/process/1-3.jpg" },
];

const faqs = [
  { q: "How often should I service my heating system?",    a: "It's recommended to service your heating system at least once a year, ideally before the cold season, to ensure efficiency, safety, and long-term performance." },
  { q: "What heating system is most energy efficient?",     a: "Heat pumps are currently the most energy-efficient option, followed by high-efficiency gas furnaces. Our technicians can help you choose the best system for your home and budget." },
  { q: "How long does a heating system installation take?", a: "Most heating system installations are completed within one day, depending on the system type and property size." },
  { q: "Do you offer 24/7 emergency heating services?",    a: `Yes! We provide 24/7 emergency heating services. Call ${PHONE} any time and our team will respond promptly.` },
];

const RESPONSIVE_CSS = `
  .hlp-section        { padding: 72px 40px; }
  .hlp-cta-section    { padding: 56px 40px; }
  .hlp-emergency-sec  { background: #1a1a2e; padding: 48px 40px; }
  .hlp-hero-inner     { position: relative; width: 100%; max-width: 1400px; margin: 0 auto; padding: 80px 50px 100px 60px; min-height: 560px; display: flex; align-items: center; }
  .hlp-hero-content   { max-width: 540px; position: relative; z-index: 2; }
  .hlp-hero-badge     { position: absolute; bottom: 32px; right: 50px; background: rgba(8,12,40,0.92); border: 2px solid #DB7C37; border-radius: 12px; padding: 16px 22px; text-align: center; z-index: 3; backdrop-filter: blur(6px); }
  .hlp-services-grid  { display: grid; grid-template-columns: repeat(6, 1fr); gap: 18px; }
  .hlp-energy-grid    { display: grid; grid-template-columns: 300px 1fr 260px; gap: 48px; align-items: center; }
  .hlp-area-grid      { display: grid; grid-template-columns: 1fr 1.4fr; gap: 52px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .hlp-loc-grid       { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; }
  .hlp-emergency-grid { display: grid; grid-template-columns: 260px 1fr auto; gap: 36px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .hlp-why-grid       { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .hlp-process-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .hlp-map-wrap       { border-radius: 12px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.1); height: 340px; }
  .hlp-faq-grid       { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
  .hlp-testi-grid     { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1200px; margin: 0 auto; }
  @media (max-width: 1023px) { .hlp-testi-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 767px)  { .hlp-testi-grid { grid-template-columns: 1fr; } }

  @media (max-width: 1023px) {
    .hlp-section        { padding: 56px 30px; }
    .hlp-cta-section    { padding: 48px 30px; }
    .hlp-emergency-sec  { padding: 44px 30px; }
    .hlp-hero-inner     { padding: 70px 36px 90px; }
    .hlp-hero-content   { max-width: 100%; }
    .hlp-services-grid  { grid-template-columns: repeat(3, 1fr); }
    .hlp-energy-grid    { grid-template-columns: 1fr 260px; gap: 32px; }
    .hlp-area-grid      { grid-template-columns: 1fr; gap: 28px; }
    .hlp-emergency-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
    .hlp-why-grid       { grid-template-columns: repeat(2, 1fr); }
    .hlp-process-grid   { grid-template-columns: repeat(2, 1fr); }
    .hlp-map-wrap       { height: 280px; }
    .hlp-faq-grid       { gap: 36px; }
  }

  @media (max-width: 767px) {
    .hlp-section        { padding: 48px 20px; }
    .hlp-cta-section    { padding: 44px 20px; }
    .hlp-emergency-sec  { padding: 40px 20px; }
    .hlp-hero-inner     { padding: 60px 20px 100px; }
    .hlp-hero-content   { max-width: 100%; }
    .hlp-hero-badge     { right: 20px; bottom: 20px; }
    .hlp-faq-grid       { grid-template-columns: 1fr; gap: 32px; }
    .hlp-services-grid  { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .hlp-energy-grid    { grid-template-columns: 1fr; gap: 28px; }
    .hlp-area-grid      { grid-template-columns: 1fr; gap: 28px; }
    .hlp-emergency-grid { grid-template-columns: 1fr; gap: 20px; text-align: center; justify-items: center; }
    .hlp-why-grid       { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .hlp-process-grid   { grid-template-columns: 1fr; }
    .hlp-map-wrap       { height: 240px; }
  }

  @media (max-width: 480px) {
    .hlp-section        { padding: 40px 16px; }
    .hlp-cta-section    { padding: 36px 16px; }
    .hlp-emergency-sec  { padding: 32px 16px; }
    .hlp-services-grid  { grid-template-columns: 1fr 1fr; gap: 12px; }
    .hlp-why-grid       { grid-template-columns: 1fr; }
  }
`;

/* ════════════════════ MAIN COMPONENT ════════════════════ */
export default function HeatingLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", overflowX: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden", background: NAVY }}>
        {/* Full-width background image */}
        <Image
          src="/assets/img/heating/hero-tech.png"
          alt="Avatar Heat Air Technician"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        {/* Dark overlay — strong on left, lighter on right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,14,40,0.97) 0%, rgba(10,14,40,0.92) 38%, rgba(10,14,40,0.55) 65%, rgba(10,14,40,0.15) 100%)" }} />

        {/* Content */}
        <div className="hlp-hero-inner">
          <div className="hlp-hero-content">
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, margin: "0 0 14px" }}>
              Heating Installation &amp;<br />
              Furnace Repair <span style={{ color: ORANGE }}>Near You</span>
            </h1>
            <p style={{ fontSize: 15, color: "#c8cce0", marginBottom: 22, lineHeight: 1.75 }}>
              Affordable heating solutions across Monmouth &amp; Middlesex County, NJ.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Fast, Reliable & Affordable Service", "All Major Brands, Models & Styles", "Licensed & Experienced Technicians", "Satisfaction Guaranteed"].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff", fontSize: 14, fontWeight: 500 }}>
                  <span style={{ width: 20, height: 20, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${PHONE}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 18px rgba(219,124,55,0.5)" }}>
                <PhoneIcon color="#fff" size={15} /> {PHONE}
              </a>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", padding: "13px 24px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                Request Free Quote
              </a>
            </div>
          </div>

          {/* 24/7 badge — bottom-right */}
          <div className="hlp-hero-badge">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
              <div style={{ width: 36, height: 36, border: `2.5px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ClockIcon color={ORANGE} size={16} />
              </div>
              <span style={{ fontSize: 34, fontWeight: 900, color: "#fff", lineHeight: 1 }}>24/7</span>
            </div>
            <div style={{ fontSize: 10, color: "#ccc", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>EMERGENCY</div>
            <div style={{ fontSize: 10, color: ORANGE, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>HEATING SERVICE</div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="hlp-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>OUR HEATING SERVICES</p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, color: NAVY, margin: 0 }}>
              Complete Heating Solutions for Your Home &amp; Business
            </h2>
          </div>
          <div className="hlp-services-grid">
            {services.map((s, i) => (
              <div key={i}
                style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 3px 18px rgba(0,0,0,0.09)", background: "#fff", transition: "transform .2s,box-shadow .2s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.14)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 18px rgba(0,0,0,0.09)"; }}
              >
                <div style={{ position: "relative", height: 130 }}>
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:480px) 50vw, (max-width:1023px) 33vw, 17vw" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
                  <div style={{ position: "absolute", bottom: -17, left: "50%", transform: "translateX(-50%)", width: 36, height: 36, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(219,124,55,0.5)", zIndex: 2 }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ padding: "26px 10px 18px", textAlign: "center" }}>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 6, lineHeight: 1.35 }}>{s.title}</h4>
                  <p style={{ fontSize: 11, color: "#666", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENERGY SAVING ══ */}
      <section className="hlp-section" style={{ background: "#f5f0e8" }}>
        <div className="hlp-energy-grid" style={{ maxWidth: 1200, margin: "0 auto", alignItems: "center" }}>

          {/* Left: circular image */}
          <div style={{ width: 300, height: 300, borderRadius: "50%", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.18)", flexShrink: 0, position: "relative", margin: "0 auto" }}>
            <Image src="/assets/img/heating/h-4.png" alt="High Efficiency Heating" fill sizes="300px" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>

          {/* Center: heading + 4 icons */}
          <div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 34px)", fontWeight: 800, color: NAVY, lineHeight: 1.3, margin: "0 0 14px" }}>
              Save Money with Our{" "}
              <span style={{ color: ORANGE }}>High-Efficiency</span>{" "}Heating Systems
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 32 }}>
              Our cutting-edge furnaces, heat pumps, and smart thermostats are designed to maximize comfort while minimizing energy use.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { icon: <LeafIcon />,        label: "Lower Energy Bills" },
                { icon: <HomeIcon />,        label: "Maximum Comfort" },
                { icon: <ShieldSmallIcon />, label: "Reliable Performance" },
                { icon: <EcoIcon />,         label: "Environment Friendly" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", minWidth: 80 }}>
                  <div style={{ width: 62, height: 62, background: "#fff", border: "1.5px solid #e8e8e8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 12px rgba(0,0,0,0.08)" }}>
                    {f.icon}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 6px 28px rgba(0,0,0,0.09)", textAlign: "center", border: "1.5px solid #ffe0c0" }}>
            <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
              <ThermostatBigIcon />
            </div>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85, marginBottom: 22 }}>
              Start saving today — request a free quote for your energy-efficient heating system, furnace near me.
            </p>
            <a href="/contact" style={{ display: "block", background: ORANGE, color: "#fff", padding: "14px 18px", borderRadius: 9, fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center", boxShadow: "0 4px 16px rgba(219,124,55,0.38)" }}>
              Get My Free Quote
            </a>
          </div>

        </div>
      </section>

      {/* ══ SERVICE AREA ══ */}
      <section className="hlp-section" style={{ background: "#fff" }}>
        <div className="hlp-area-grid">

          {/* Left: heading + 2-col pin grid */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: ORANGE, letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 10px" }}>OUR SERVICE AREAS</p>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 28, lineHeight: 1.25 }}>
              Proudly Serving Monmouth &amp; Middlesex County, NJ
            </h2>
            <div className="hlp-loc-grid">
              {locations.map((loc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#333", fontWeight: 500, padding: "7px 0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="10" r="3" stroke={ORANGE} strokeWidth="2" /></svg>
                  {loc}
                </div>
              ))}
            </div>
          </div>

          {/* Right: map */}
          <div className="hlp-map-wrap" style={{ height: 380 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193595.15830869428!2d-74.11976364628152!3d40.367469586892904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1677069314806!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══ EMERGENCY BANNER ══ */}
      <section className="hlp-emergency-sec">
        <div className="hlp-emergency-grid">
          {/* Van image */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/assets/img/heating/van.png" alt="Avatar Heat Air Service Van" width={260} height={180} style={{ objectFit: "contain", maxWidth: "100%", height: "auto", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 800, color: ORANGE, marginBottom: 8 }}>24/7 Emergency Heating Service</h2>
            <p style={{ color: "#9aa8c8", fontSize: 15, margin: 0, lineHeight: 1.75 }}>
              When your heating system fails, we're here day or night. Call now for fast emergency service across Monmouth &amp; Middlesex County, NJ.
            </p>
          </div>
          <a href={`tel:${PHONE}`} style={{ background: ORANGE, color: "#fff", padding: "20px 30px", borderRadius: 10, textDecoration: "none", textAlign: "center", minWidth: 205, boxShadow: "0 6px 20px rgba(219,124,55,0.4)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: 0.8, marginBottom: 5 }}>
              <PhoneIcon color="#fff" size={13} /> Call Now
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 0.5 }}>{PHONE}</div>
          </a>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="hlp-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, color: NAVY, marginBottom: 48 }}>
            Why Homeowners Choose Avatar Home Service
          </h2>
          <div className="hlp-why-grid">
            {whyCards.map((c, i) => (
              <div key={i}
                style={{ display: "flex", flexDirection: "column", gap: 0, padding: "32px 24px 28px", border: "1.5px solid #eee", borderRadius: 12, background: "#fafafa", transition: "border .2s,box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.border = `1.5px solid ${ORANGE}`; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(219,124,55,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.border = "1.5px solid #eee"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ marginBottom: 14 }}>{c.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.35 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WORKING PROCESS ══ */}
      <section className="hlp-section" style={{ background: "#f3f4f8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>HOW IT WORKS</p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 800, color: NAVY, margin: 0 }}>Working Process in 3 Steps</h2>
          </div>
          <div className="hlp-process-grid">
            {steps.map((s, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: "hidden", background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: 210 }}>
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(15,20,40,0.35)" }} />
                  <div style={{ position: "absolute", top: 18, left: 18, background: ORANGE, color: "#fff", fontWeight: 900, fontSize: 22, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(219,124,55,0.5)" }}>
                    {s.num}
                  </div>
                </div>
                <div style={{ padding: "22px 22px 24px" }}>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="hlp-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="hlp-faq-grid">

            {/* LEFT — FAQ */}
            <div>
              <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>FAQ</p>
              <h2 style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, margin: "0 0 32px", lineHeight: 1.25 }}>
                Everything You Need To Know About Heating
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ border: `1.5px solid ${openFaq === i ? ORANGE : "#e5e5e5"}`, borderRadius: 10, overflow: "hidden", transition: "border .2s" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: openFaq === i ? "rgba(219,124,55,0.04)" : "#fff", border: "none", cursor: "pointer", textAlign: "left", gap: 12 }}>
                      <span style={{ fontWeight: 600, fontSize: 14, color: NAVY, lineHeight: 1.4 }}>{faq.q}</span>
                      <span style={{ fontSize: 22, color: ORANGE, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s", lineHeight: 1 }}>+</span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#555", lineHeight: 1.85, background: "rgba(219,124,55,0.03)" }}>{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", minHeight: 420, boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}>
              <Image
                src="/assets/img/heating/h-1.jpg"
                alt="Heating Service"
                fill
                sizes="(max-width:767px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              {/* overlay card */}
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, background: "rgba(10,14,40,0.88)", borderRadius: 12, padding: "18px 22px", backdropFilter: "blur(6px)", border: `1px solid rgba(219,124,55,0.3)` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <PhoneIcon color="#fff" size={20} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 11, color: "#9aa8c8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Call Us Anytime</p>
                    <a href={`tel:${PHONE}`} style={{ fontSize: 20, fontWeight: 900, color: "#fff", textDecoration: "none", letterSpacing: 0.5 }}>{PHONE}</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══ TESTIMONIALS ══ */}
      <section className="hlp-section" style={{ background: "#f0ede8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 10px" }}>TESTIMONIAL</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 52 }}>
            Happy Client Says About Us
          </h2>
          <div className="hlp-testi-grid">
            {[
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Joe Root",     role: "Supervisor",      img: "/assets/img/testimonial/1.jpg" },
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Albert Krish", role: "Social Activist",  img: "/assets/img/testimonial/2.jpg" },
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Bill Lorris",  role: "Business Man",     img: "/assets/img/testimonial/3.jpg" },
            ].map((t, i) => (
              <div key={i} style={{ position: "relative", paddingTop: 32 }}>
                <div style={{ position: "absolute", top: 0, left: 28, width: 56, height: 56, background: ORANGE, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, boxShadow: "0 4px 16px rgba(219,124,55,0.4)" }}>
                  <svg width="22" height="18" viewBox="0 0 30 24" fill="#fff"><path d="M0 24V14.4C0 6.4 5.2 1.6 15.6 0l1.8 3.2C12 4.4 9.2 7.2 8.8 11.2H14V24H0zm16 0V14.4C16 6.4 21.2 1.6 31.6 0l1.8 3.2C28 4.4 25.2 7.2 24.8 11.2H30V24H16z" /></svg>
                </div>
                <div style={{ background: "#fff", borderRadius: 14, padding: "50px 28px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, margin: "0 0 28px", fontStyle: "italic" }}>"{t.quote}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #eee" }}>
                      <Image src={t.img} alt={t.name} width={52} height={52} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: NAVY }}>{t.name}</p>
                      <p style={{ margin: 0, fontSize: 13, color: "#888" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* ════════════════════ SVG ICON COMPONENTS ════════════════════ */

function PhoneIcon({ color = "#fff", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
function ClockIcon({ color = "#fff", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function FurnaceIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>; }
function HeatPumpIcon()   { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" /></svg>; }
function BoilerIcon()     { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="9" y1="7" x2="15" y2="7" /><circle cx="12" cy="14" r="3" /></svg>; }
function MiniSplitIcon()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="8" rx="2" /><line x1="12" y1="13" x2="12" y2="20" /><line x1="8" y1="20" x2="16" y2="20" /></svg>; }
function ThermostatIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="17" r="4" /><line x1="12" y1="3" x2="12" y2="13" /><line x1="9" y1="6" x2="12" y2="6" /><line x1="9" y1="9" x2="12" y2="9" /></svg>; }
function EmergencyIcon()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>; }

function LeafIcon()       { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.11M7 14c.77-2.14 2.7-4.06 5-5" /><path d="M21 4C16 3 11.83 5 9.5 8.5c-1.5 2.2-2 4.5-1.5 7.5" /></svg>; }
function EcoIcon()        { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><path d="M2 22c1.25-1.25 2.75-2.25 4.5-2.5C9 19 11 20 12 22" /><path d="M12 2C6.5 2 2 6.5 2 12c0 2 .5 3.8 1.5 5.4" /><path d="M22 12c0-5.5-4.5-10-10-10" /><path d="M22 12c0 3.3-1.7 6.2-4.4 7.9" /><path d="M12 12c0-2.8 1.3-5.3 3.5-7" /></svg>; }
function HomeIcon()       { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>; }
function ShieldSmallIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>; }
function ThermostatBigIcon() { return <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="17" r="4" /><line x1="12" y1="3" x2="12" y2="13" /><line x1="9" y1="6" x2="12" y2="6" /><line x1="9" y1="9" x2="12" y2="9" /></svg>; }
function PinIcon()        { return <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>; }

function AwardIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v12M15 9.5a3 3 0 00-6 0c0 2 6 2 6 4a3 3 0 01-6 0" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

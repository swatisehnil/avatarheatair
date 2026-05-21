"use client";

import { useState } from "react";
import Image from "next/image";

const PHONE = "732-320-5193";
const NAVY  = "#1a1a2e";
const ORANGE = "#DB7C37";

const services = [
  {
    icon: <WrenchIcon />,
    title: "Plumbing Repair",
    desc: "Leaky pipes, clogged drains, or faulty water heaters? Our expert plumbers restore functionality fast, preventing water damage and costly repairs.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Plumbing Maintenance",
    desc: "Regular inspections and drain cleaning extend your system's lifespan, prevent leaks, and ensure efficient water flow throughout your home.",
  },
  {
    icon: <DrainIcon />,
    title: "Drain Cleaning & Frozen Pipes",
    desc: "We clear stubborn clogs and thaw or repair frozen pipes before they burst, protecting your plumbing and preventing costly water damage.",
  },
  {
    icon: <FilterIcon />,
    title: "Water Filtration",
    desc: "Clean, safe drinking water for your home with reverse osmosis and carbon filter systems serving Monmouth, Middlesex, and Ocean County, NJ.",
  },
  {
    icon: <FlameIcon />,
    title: "Oil to Gas Conversion",
    desc: "Switch from oil to gas for lower fuel costs, cleaner operation, and improved efficiency. Our licensed team handles the full conversion safely.",
  },
];

const features = [
  { icon: <ShieldCheckIcon />, title: "Licensed & Insured",      desc: "Our plumbers are fully licensed, insured, and highly trained." },
  { icon: <DollarIcon />,      title: "Upfront Pricing",         desc: "No hidden fees. We provide clear, upfront pricing." },
  { icon: <ClockBadgeIcon />,  title: "24/7 Emergency Service",  desc: "We're available anytime for your plumbing emergencies." },
];

const steps = [
  { num: "1", title: "Inspection & Diagnosis",  desc: "We assess the issue and provide the best solution.",                               img: "/assets/img/plumbing/p-1.jpg" },
  { num: "2", title: "Professional Service",     desc: "Our experts complete the repair or installation with care and precision.",          img: "/assets/img/plumbing/p-2.jpg" },
  { num: "3", title: "Quality Check",            desc: "We test everything to ensure your plumbing works perfectly.",                      img: "/assets/img/process/1-3.jpg" },
];

const locations = ["Middletown Twp", "Keyport", "Holmdel Twp", "Monmouth County", "Colts Neck Twp", "Middlesex County", "Hazlet Twp"];

const faqs = [
  { q: "Do you provide emergency plumbing services?",       a: "Yes, we offer quick and reliable emergency plumbing services to handle urgent issues like leaks, pipe bursts, and severe clogs 24/7." },
  { q: "How often should I schedule plumbing maintenance?", a: "It is recommended to inspect your plumbing system at least once a year to prevent leaks, blockages, and costly repairs." },
  { q: "How long does a plumbing installation take?",       a: "Installation time depends on the project size, but most standard installations are completed within a few hours to one day." },
  { q: "What areas do you serve?",                          a: "We proudly serve Monmouth County, Middlesex County, Ocean County, and surrounding areas in New Jersey including Middletown, Holmdel, Colts Neck, Hazlet, and more." },
];

const testimonials = [
  { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Joe Root",     role: "Supervisor",      img: "/assets/img/testimonial/1.jpg" },
  { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Albert Krish", role: "Social Activist", img: "/assets/img/testimonial/2.jpg" },
  { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Bill Lorris",  role: "Business Man",    img: "/assets/img/testimonial/3.jpg" },
];

const CSS = `
  .plumb-section      { padding: 72px 40px; }
  .plumb-hero-inner   { position: relative; z-index: 2; width: 100%; max-width: 1200px; margin: 0 auto; padding: 100px 60px 110px; }
  .plumb-hero-content { max-width: 580px; }
  .plumb-hero-badge   { position: absolute; right: 60px; bottom: 40px; width: 110px; height: 110px; border-radius: 50%; background: rgba(10,14,40,0.72); backdrop-filter: blur(6px); border: 2px solid rgba(219,124,55,0.55); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 10px; }
  .plumb-about-grid   { display: grid; grid-template-columns: 1.1fr 1fr; gap: 52px; align-items: start; max-width: 1200px; margin: 0 auto; }
  .plumb-feat-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; max-width: 1200px; margin: 0 auto; }
  .plumb-steps-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-items: center; max-width: 1200px; margin: 0 auto; }
  .plumb-area-grid    { display: grid; grid-template-columns: 1fr 1.4fr; gap: 52px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .plumb-map-wrap     { border-radius: 14px; overflow: hidden; box-shadow: 0 6px 28px rgba(0,0,0,0.12); height: 380px; }
  .plumb-faq-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; max-width: 1200px; margin: 0 auto; }
  .plumb-testi-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .plumb-loc-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; }

  @media (max-width: 1023px) {
    .plumb-about-grid  { grid-template-columns: 1fr; }
    .plumb-feat-grid   { grid-template-columns: 1fr; }
    .plumb-steps-grid  { grid-template-columns: 1fr; gap: 24px; }
    .plumb-area-grid   { grid-template-columns: 1fr; gap: 28px; }
    .plumb-faq-grid    { grid-template-columns: 1fr; }
    .plumb-testi-grid  { grid-template-columns: 1fr; }
    .plumb-map-wrap    { height: 280px; }
  }
  @media (max-width: 767px) {
    .plumb-section      { padding: 48px 20px; }
    .plumb-hero-inner   { padding: 70px 20px 100px; }
    .plumb-hero-content { max-width: 100%; }
    .plumb-hero-badge   { right: 20px; bottom: 20px; }
    .plumb-testi-grid   { grid-template-columns: 1fr; }
    .plumb-loc-grid     { grid-template-columns: 1fr; }
    .plumb-map-wrap     { height: 240px; }
  }
`;

export default function PlumbingLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", overflowX: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden", background: NAVY }}>
        <Image src="/assets/img/plumbing/plumb-hero.png" alt="Plumbing Service" fill sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,14,40,0.97) 0%, rgba(10,14,40,0.92) 38%, rgba(10,14,40,0.55) 65%, rgba(10,14,40,0.10) 100%)" }} />

        <div className="plumb-hero-inner">
          <div className="plumb-hero-content">
            <h1 style={{ fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, margin: "0 0 14px" }}>
              Expert Plumbing<br />Repair &amp; Installation{" "}
              <span style={{ color: ORANGE }}>Near You</span>
            </h1>
            <p style={{ fontSize: 15, color: "#c8cce0", marginBottom: 22, lineHeight: 1.75 }}>
              Frozen pipes, leak detection, drain cleaning, lack of water pressure, clogs &amp; backflow — we handle it all.
            </p>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 28 }}>
              {["Licensed Plumbers", "Upfront Pricing", "24/7 Emergency"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, color: "#fff", fontSize: 13, fontWeight: 600 }}>
                  <span style={{ width: 18, height: 18, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${PHONE}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 18px rgba(219,124,55,0.5)" }}>
                <PhoneIcon color="#fff" size={14} /> Call Now &nbsp;{PHONE}
              </a>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", padding: "13px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                Request Free Quote
              </a>
            </div>
          </div>

          {/* 24/7 badge */}
          <div className="plumb-hero-badge">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
              <div style={{ width: 28, height: 28, border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ClockBadgeIcon size={12} color={ORANGE} />
              </div>
              <span style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1 }}>24/7</span>
            </div>
            <div style={{ fontSize: 9, color: "#ccc", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>EMERGENCY</div>
            <div style={{ fontSize: 9, color: ORANGE, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>PLUMBING</div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES + RIGHT COLUMN ══ */}
      <section className="plumb-section" style={{ background: "#fff" }}>
        <div className="plumb-about-grid">

          {/* Left: service list */}
          <div>
            {services.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 28, paddingBottom: 28, borderBottom: i < services.length - 1 ? "1px solid #f0f0f0" : "none", alignItems: "flex-start" }}>
                <div style={{ width: 50, height: 50, background: "#f5f6fa", border: "1.5px solid #e8e8e8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: NAVY, margin: "0 0 7px" }}>{s.title}</h4>
                  <p style={{ fontSize: 15, color: "#000000", lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: image + contact card */}
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.13)", marginBottom: 22, lineHeight: 0 }}>
              <Image src="/assets/img/plumbing/p-2.jpg" alt="Plumber at work" width={560} height={380}
                style={{ width: "100%", height: "380px", display: "block", objectFit: "cover", objectPosition: "center top" }} />
            </div>

            {/* Contact card */}
            <div style={{ background: NAVY, borderRadius: 14, padding: "26px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 52, height: 52, background: "rgba(219,124,55,0.15)", border: `2px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <PhoneIcon color={ORANGE} size={22} />
              </div>
              <div>
                <p style={{ margin: "0 0 6px", fontWeight: 600, fontSize: 14, color: "#c8cce0", lineHeight: 1.7 }}>
                  For residential or commercial plumbing repair in Monmouth and Middlesex and Ocean Counties in New Jersey.
                </p>
                <p style={{ margin: "0 0 10px", fontSize: 13, color: "#8a9bc0", lineHeight: 1.7 }}>
                  Plumbing Export-heat and air conditioning Service-Boiler Service we are here to help you.
                </p>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "#9aa8c8", fontWeight: 500 }}>Call us anytime at</p>
                <a href={`tel:${PHONE}`} style={{ fontSize: 24, fontWeight: 900, color: ORANGE, textDecoration: "none", letterSpacing: 0.5 }}>{PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3 FEATURE CARDS ══ */}
      <section style={{ background: "#f7f8fc", padding: "40px" }}>
        <div className="plumb-feat-grid">
          {features.map((f, i) => (
            <div key={i} style={{
              display: "flex", gap: 18, alignItems: "flex-start", padding: "28px 32px",
              borderRight: i < features.length - 1 ? "1px solid #e0e0e0" : "none",
            }}>
              <div style={{ width: 52, height: 52, background: "#fff", border: "1.5px solid #e0e0e0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {f.icon}
              </div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: "0 0 6px" }}>{f.title}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WORKING PROCESS ══ */}
      <section className="plumb-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 44 }}>
            Working Process in 3 Steps
          </h2>
          <div className="plumb-steps-grid">
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ flex: 1 }}>
                  {/* Step card */}
                  <div style={{ background: "#f7f8fc", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 18px rgba(0,0,0,0.07)" }}>
                    <div style={{ position: "relative", height: 160 }}>
                      <Image src={s.img} alt={s.title} fill sizes="(max-width:767px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(10,14,40,0.3)" }} />
                      <div style={{ position: "absolute", top: 14, left: 14, width: 36, height: 36, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff", boxShadow: "0 3px 10px rgba(219,124,55,0.5)" }}>
                        {s.num}
                      </div>
                    </div>
                    <div style={{ padding: "18px 20px 20px" }}>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: "0 0 8px" }}>{s.title}</h4>
                      <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div style={{ width: 40, display: "flex", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREAS ══ */}
      <section className="plumb-section" style={{ background: "#f7f8fc" }}>
        <div className="plumb-area-grid">

          {/* Left: heading + 2-col location grid */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: ORANGE, letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 10px" }}>OUR SERVICE AREAS</p>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 28, lineHeight: 1.25 }}>
              Proudly Serving Monmouth &amp; Middlesex County, NJ
            </h2>
            <div className="plumb-loc-grid">
              {locations.map((loc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#333", fontWeight: 500, padding: "7px 0" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="10" r="3" stroke={ORANGE} strokeWidth="2" /></svg>
                  {loc}
                </div>
              ))}
            </div>
          </div>

          {/* Right: map */}
          <div className="plumb-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193595.15830869428!2d-74.11976364628152!3d40.367469586892904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1677069314806!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══ FAQ + IMAGE ══ */}
      <section className="plumb-section" style={{ background: "#fff" }}>
        <div className="plumb-faq-grid">
          {/* Left: FAQ */}
          <div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: NAVY, marginBottom: 28, lineHeight: 1.3 }}>
              Everything You Need To Know About Plumbing
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: `1.5px solid ${openFaq === i ? ORANGE : "#e5e5e5"}`, borderRadius: 10, overflow: "hidden", transition: "border .2s" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 18px", background: openFaq === i ? "rgba(219,124,55,0.04)" : "#fff", border: "none", cursor: "pointer", textAlign: "left", gap: 10 }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: NAVY, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ fontSize: 22, color: ORANGE, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s", lineHeight: 1 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 18px 14px", fontSize: 13, color: "#555", lineHeight: 1.85, background: "rgba(219,124,55,0.03)" }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + happy clients card */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", lineHeight: 0 }}>
              <Image src="/assets/img/plumbing/p-1.jpg" alt="Happy Plumber" width={520} height={380}
                style={{ width: "100%", height: "380px", display: "block", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            {/* Happy clients overlay card */}
            <div style={{ position: "absolute", bottom: 20, right: 20, background: NAVY, borderRadius: 12, padding: "18px 22px", textAlign: "center", minWidth: 150, boxShadow: "0 6px 24px rgba(0,0,0,0.25)" }}>
              <p style={{ margin: "0 0 4px", fontSize: 12, color: "#9aa8c8", fontWeight: 600 }}>Happy Clients</p>
              <p style={{ margin: "0 0 4px", fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>124+</p>
              <p style={{ margin: 0, fontSize: 11, color: "#7a8ba8" }}>Adipiscing elit, do eiusmod.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="plumb-section" style={{ background: "#f0ede8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 10px" }}>TESTIMONIAL</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 52 }}>
            Happy Client Says About Us
          </h2>
          <div className="plumb-testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ position: "relative", paddingTop: 32 }}>
                {/* Orange quote badge — protrudes above card */}
                <div style={{ position: "absolute", top: 0, left: 28, width: 56, height: 56, background: ORANGE, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, boxShadow: "0 4px 16px rgba(219,124,55,0.4)" }}>
                  <svg width="22" height="18" viewBox="0 0 30 24" fill="#fff"><path d="M0 24V14.4C0 6.4 5.2 1.6 15.6 0l1.8 3.2C12 4.4 9.2 7.2 8.8 11.2H14V24H0zm16 0V14.4C16 6.4 21.2 1.6 31.6 0l1.8 3.2C28 4.4 25.2 7.2 24.8 11.2H30V24H16z" /></svg>
                </div>
                {/* Card */}
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

/* ══ ICONS ══ */
function PhoneIcon({ color = "#fff", size = 16 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
}
function WrenchIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>; }
function ClipboardIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>; }
function DrainIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M8 6l4 4 4-4" /><rect x="3" y="11" width="18" height="3" rx="1.5" /><path d="M7 14v6M12 14v6M17 14v6" /></svg>; }
function FilterIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>; }
function FlameIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0011 17c1.38 0 2.5-1.12 2.5-2.5 0-1.38-.5-2-1.5-3.5C13 9.5 14 8 14 6.5 14 5.12 13.38 4 12 3c0 2.5-2 4-3.5 5.5C7.5 10 7 11 7 12.5c0 .5.17 1.34.5 2z" /></svg>; }
function ShieldCheckIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>; }
function DollarIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v12M15 9.5a3 3 0 00-6 0c0 2 6 2 6 4a3 3 0 01-6 0" /></svg>; }
function ClockBadgeIcon({ size = 22, color = ORANGE }: { size?: number; color?: string }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>; }

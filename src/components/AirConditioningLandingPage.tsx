"use client";

import { useState } from "react";
import Image from "next/image";

const PHONE = "732-320-5193";
const NAVY  = "#1a1a2e";
const ORANGE = "#DB7C37";

const serviceCards = [
  { icon: <WrenchIcon />,     title: "AC Repair",          desc: "Quick response for all AC issues. We fix compressors, electrical problems, condensers, air handlers, filters, and more." },
  { icon: <AcUnitIcon />,     title: "AC Installation",    desc: "Professional installation & replacement tailored to your home's size and your financial plan." },
  { icon: <ThermoIcon />,     title: "Smart Thermostat",   desc: "We install and repair all types of thermostats to improve comfort and save on energy bills." },
  { icon: <GearIcon />,       title: "AC Maintenance",     desc: "Tune-ups and maintenance to keep your AC running efficiently and extend system life." },
];

const aboutBullets = [
  { title: "AC Installation & Replacement", desc: "Choose the right system for your home and budget. Energy-efficient options with rebates & tax credits." },
  { title: "AC Repair Near You",            desc: "Fast diagnosis and repair for all major brands." },
  { title: "Smart Thermostat Services",     desc: "Install & repair smart thermostats to save energy and lower bills." },
  { title: "Energy-Efficient Cooling",      desc: "High-performance AC systems that deliver comfort with lower energy costs." },
];

const maintenanceCols = [
  { icon: <CalendarIcon />, title: "Best Time: Spring or Fall", desc: "Schedule maintenance in Spring (Mar–May) or Fall (Sept–Nov) for off-season checks." },
  { icon: <CheckShieldIcon />, title: "What We Check",         desc: "We check compressor, condenser, and filters in April to avoid costly summer breakdowns." },
  { icon: <WarningIcon />,     title: "Signs You Need Service", desc: "Poor cooling, high energy bills, weak airflow, or unusual noises means it's time for a check-up." },
];

const locations = [
  "Middletown Twp", "Keyport",
  "Holmdel Twp",    "Monmouth County",
  "Colts Neck Twp", "Middlesex County",
  "Hazlet Twp",     "",
];

const faqs = [
  { q: "How do I choose the right AC unit for my home?",  a: "The right AC unit depends on your room size, insulation, and budget. Our technicians will assess your space and recommend the most energy-efficient system that fits your needs." },
  { q: "When should I schedule AC maintenance?",          a: "Schedule AC maintenance in spring (March–May) before the hot season or fall (September–November). Regular tune-ups prevent costly breakdowns and improve efficiency." },
  { q: "What are the signs my AC needs repair?",          a: "Common signs include weak or warm airflow, unusual noises, foul odors, frequent cycling, or a spike in your electricity bill. Call us for a fast diagnosis." },
  { q: "How often should I change my AC filters?",        a: "Standard 1-inch filters should be changed every 1–3 months. Thicker filters (4–5 inch) last 6–12 months. Regular filter changes improve air quality and system efficiency." },
];

const CSS = `
  .ac-hero-inner   { position: relative; max-width: 1400px; margin: 0 auto; padding: 80px 60px 100px; min-height: 500px; display: flex; align-items: center; }
  .ac-hero-content { max-width: 520px; position: relative; z-index: 2; }
  .ac-hero-badge   { position: absolute; bottom: 32px; right: 60px; background: rgba(8,12,40,0.92); border: 2px solid #DB7C37; border-radius: 12px; padding: 16px 22px; text-align: center; z-index: 3; }
  .ac-section      { padding: 72px 40px; }
  .ac-about-grid   { display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: start; max-width: 1200px; margin: 0 auto; }
  .ac-cards-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .ac-maint-grid   { display: grid; grid-template-columns: 300px 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .ac-maint-cols   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .ac-area-grid    { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .ac-emg-grid     { display: grid; grid-template-columns: 240px 1fr auto; gap: 40px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .ac-faq-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; max-width: 1200px; margin: 0 auto; }
  .ac-testi-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1200px; margin: 0 auto; }
  @media (max-width: 1023px) { .ac-testi-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 767px)  { .ac-testi-grid { grid-template-columns: 1fr; } }

  @media (max-width: 1023px) {
    .ac-hero-inner  { padding: 70px 36px 90px; }
    .ac-about-grid  { grid-template-columns: 1fr; }
    .ac-cards-grid  { grid-template-columns: repeat(2, 1fr); }
    .ac-maint-grid  { grid-template-columns: 1fr; gap: 32px; }
    .ac-maint-cols  { grid-template-columns: repeat(3, 1fr); }
    .ac-area-grid   { grid-template-columns: 1fr; }
    .ac-emg-grid    { grid-template-columns: 1fr 1fr; gap: 24px; }
    .ac-faq-grid    { grid-template-columns: 1fr; }
  }
  @media (max-width: 767px) {
    .ac-section     { padding: 48px 20px; }
    .ac-hero-inner  { padding: 60px 20px 100px; }
    .ac-hero-content{ max-width: 100%; }
    .ac-hero-badge  { right: 20px; bottom: 20px; }
    .ac-cards-grid  { grid-template-columns: 1fr 1fr; gap: 16px; }
    .ac-maint-cols  { grid-template-columns: 1fr; }
    .ac-emg-grid    { grid-template-columns: 1fr; text-align: center; justify-items: center; }
  }
  @media (max-width: 480px) {
    .ac-cards-grid  { grid-template-columns: 1fr; }
  }
`;

export default function AirConditioningLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", overflowX: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden", background: NAVY }}>
        <Image src="/assets/img/Conditioning/air-1.jpg" alt="AC Technician" fill sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,14,40,0.97) 0%, rgba(10,14,40,0.92) 38%, rgba(10,14,40,0.55) 65%, rgba(10,14,40,0.10) 100%)" }} />

        <div className="ac-hero-inner">
          <div className="ac-hero-content">
            <h1 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, margin: "0 0 14px" }}>
              Air Conditioning<br />Installation &amp; Repair{" "}
              <span style={{ color: ORANGE }}>Near You</span>
            </h1>
            <p style={{ fontSize: 15, color: "#c8cce0", marginBottom: 20, lineHeight: 1.75 }}>
              Affordable AC services across Monmouth &amp; Middlesex County, NJ.
            </p>
            {/* inline checkmarks */}
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
              {["Licensed Technicians", "Upfront Pricing", "Satisfaction Guaranteed"].map((item, i) => (
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
          <div className="ac-hero-badge">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
              <div style={{ width: 34, height: 34, border: `2.5px solid ${ORANGE}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ClockIcon color={ORANGE} size={15} />
              </div>
              <span style={{ fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1 }}>24/7</span>
            </div>
            <div style={{ fontSize: 10, color: "#ccc", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>EMERGENCY</div>
            <div style={{ fontSize: 10, color: ORANGE, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>HVAC SERVICES</div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="ac-section" style={{ background: "#fff" }}>
        <div className="ac-about-grid">
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, lineHeight: 1.25, margin: "0 0 16px" }}>
              Air Conditioning Repair &amp;<br />Installation Services
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 10 }}>
              We provide reliable and efficient air conditioning services to keep your home and office cool and comfortable. Whether your AC is not cooling properly or you need a new installation, our expert technicians are here to help.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {aboutBullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 22, height: 22, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <svg width="9" height="9" viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.7 }}>
                    <strong style={{ color: NAVY }}>{b.title}</strong>
                    <span style={{ color: "#666" }}> — {b.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            {/* Main image */}
            <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.13)", marginBottom: 18, lineHeight: 0 }}>
              <Image src="/assets/img/Conditioning/air-4.jpg" alt="AC Service Technician" width={540} height={340}
                style={{ width: "100%", height: "340px", display: "block", objectFit: "cover", objectPosition: "center" }} />
            </div>
            {/* Tax credit card */}
            <div style={{ background: NAVY, borderRadius: 12, padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, background: "rgba(219,124,55,0.15)", border: `2px solid ${ORANGE}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <DollarCircleIcon />
              </div>
              <div>
                <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1.55 }}>
                  You may qualify for energy efficiency tax credits and rebates.
                </p>
                <p style={{ margin: 0, fontSize: 13, color: "#8a9bc0", lineHeight: 1.65 }}>
                  We help you choose the right system and maximize your savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICE CARDS ══ */}
      <section className="ac-section" style={{ background: "#f7f8fc" }}>
        <div className="ac-cards-grid">
          {serviceCards.map((c, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "32px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #eee", textAlign: "center", transition: "transform .2s, box-shadow .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.13)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; }}
            >
              <div style={{ width: 64, height: 64, background: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                {c.icon}
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{c.title}</h4>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MAINTENANCE ══ */}
      <section className="ac-section" style={{ background: "#fff" }}>
        <div className="ac-maint-grid">
          {/* Left heading */}
          <div>
            <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>AC MAINTENANCE &amp; TUNE-UP</p>
            <h2 style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, lineHeight: 1.3, margin: 0 }}>
              Keep Your AC Running Efficiently Year-Round
            </h2>
          </div>
          {/* Right 3 cols */}
          <div className="ac-maint-cols">
            {maintenanceCols.map((col, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: 18 }}>
                <div style={{ marginBottom: 10 }}>{col.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.35 }}>{col.title}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: 0 }}>{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICE AREAS ══ */}
      <section className="ac-section" style={{ background: "#f7f8fc" }}>
        <div className="ac-area-grid">
          <div>
            <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>OUR SERVICE AREAS</p>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 34px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.25 }}>
              Proudly Serving Monmouth &amp;<br />Middlesex County, NJ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px" }}>
              {locations.filter(l => l).map((loc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#333", fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="10" r="3" stroke={ORANGE} strokeWidth="2" /></svg>
                  {loc}
                </div>
              ))}
            </div>
          </div>
          {/* Map */}
          <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,0,0,0.1)", height: 360 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193595.15830869428!2d-74.11976364628152!3d40.367469586892904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1677069314806!5m2!1sen!2sus"
              width="100%" height="360" style={{ border: 0, display: "block" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* ══ EMERGENCY BANNER ══ */}
      <section style={{ background: NAVY, padding: "44px 40px" }}>
        <div className="ac-emg-grid">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/assets/img/heating/van.png" alt="Avatar Heat Air Van" width={220} height={150}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }} />
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, margin: "0 0 10px" }}>
              <span style={{ color: ORANGE }}>24 Hour</span>{" "}
              <span style={{ color: "#fff" }}>HVAC Emergency Services</span>
            </h2>
            <p style={{ color: "#9aa8c8", fontSize: 15, margin: 0, lineHeight: 1.75 }}>
              Help when you need it most! Our emergency AC repair technicians are available 24/7.
            </p>
          </div>
          <a href={`tel:${PHONE}`} style={{ background: ORANGE, color: "#fff", padding: "18px 28px", borderRadius: 10, textDecoration: "none", textAlign: "center", boxShadow: "0 6px 20px rgba(219,124,55,0.4)", whiteSpace: "nowrap" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: 0.8, marginBottom: 6 }}>
              <PhoneIcon color="#fff" size={13} /> Call Now
            </div>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 0.5 }}>{PHONE}</div>
          </a>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="ac-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 32 }}>AC SERVICES FAQ</h2>
          <div className="ac-faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: `1.5px solid ${openFaq === i ? ORANGE : "#e5e5e5"}`, borderRadius: 10, overflow: "hidden", transition: "border .2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: openFaq === i ? "rgba(219,124,55,0.04)" : "#fff", border: "none", cursor: "pointer", textAlign: "left", gap: 10 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: NAVY, lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ fontSize: 22, color: ORANGE, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .25s", lineHeight: 1 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 16px", fontSize: 13, color: "#555", lineHeight: 1.85, background: "rgba(219,124,55,0.03)" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="ac-section" style={{ background: "#f0ede8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: 2.5, textTransform: "uppercase", margin: "0 0 10px" }}>TESTIMONIAL</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 52 }}>
            Happy Client Says About Us
          </h2>
          <div className="ac-testi-grid">
            {[
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Joe Root",     role: "Supervisor",   img: "/assets/img/testimonial/1.jpg" },
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Albert Krish", role: "Social Activist", img: "/assets/img/testimonial/2.jpg" },
              { quote: "The magic formula that successful businesses have discovered is to treat customers with exceptional service.", name: "Bill Lorris",  role: "Business Man",  img: "/assets/img/testimonial/3.jpg" },
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

/* ══ ICONS ══ */
function PhoneIcon({ color = "#fff", size = 15 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
}
function ClockIcon({ color = ORANGE, size = 15 }: { color?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function WrenchIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>;
}
function AcUnitIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="9" rx="2" /><line x1="12" y1="14" x2="12" y2="20" /><line x1="8" y1="20" x2="16" y2="20" /><line x1="7" y1="9" x2="7" y2="10" /><line x1="12" y1="9" x2="12" y2="10" /><line x1="17" y1="9" x2="17" y2="10" /></svg>;
}
function ThermoIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="17" r="4" /><line x1="12" y1="3" x2="12" y2="13" /><line x1="9" y1="7" x2="12" y2="7" /><line x1="9" y1="10" x2="12" y2="10" /></svg>;
}
function GearIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
}
function CalendarIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function CheckShieldIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
}
function WarningIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
}
function DollarCircleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v12M15 9.5a3 3 0 00-6 0c0 2 6 2 6 4a3 3 0 01-6 0" /></svg>;
}

"use client";

import { useState } from "react";
import Image from "next/image";

const PHONE  = "732-320-5193";
const PHONE2 = "908-601-1700";
const NAVY   = "#1a1a2e";
const ORANGE = "#DB7C37";

const categories  = ["Heating Repair","Furnace Installation","HVAC Maintenance","Boiler Services","Energy Efficiency"];
const popularTags = ["Furnace","Heating","HVAC","Boiler","Energy Saving"];

const recentPosts = [
  { img:"/assets/img/blog/recent-post-1.jpg", date:"May 22, 2026", title:"Furnace Efficiency Tips" },
  { img:"/assets/img/blog/recent-post-2.jpg", date:"May 15, 2026", title:"Signs Your Boiler Needs Repair" },
  { img:"/assets/img/blog/recent-post-3.jpg", date:"May 07, 2026", title:"Smart Thermostat Savings" },
];

const introBullets = [
  { t:"Home Size and Layout:",       d:"Larger homes or multi-story houses may need powerful systems like furnaces or boilers, while smaller homes might benefit from compact ductless mini-splits." },
  { t:"Climate:",                    d:"For colder climates for example Middletown Twp, New Jersey, Monmouth County choose energy-efficient furnaces or heat pumps built for low temperatures. In warmer areas, standard heat pumps are a great fit." },
  { t:"Insulation and Airflow:",     d:"Leaky ducts or weak insulation can drive up energy costs. Get an energy audit to find solutions and save money." },
  { t:"Current System:",             d:"In Monmouth and Middlesex and near me. If you're swapping out an old heater, confirm whether it uses gas, electricity, or oil to cut down on installation costs." },
];

const systemOptions = [
  {
    img:"/assets/img/blog/1-1.jpg", title:"Furnaces:",
    bullets:[
      { l:"Best For:", d:"Large homes or cold climates." },
      { l:"How It Works:", d:"Burns gas, oil, or uses electricity to heat air, distributed through ducts." },
      { l:"Energy Efficiency:", d:"Look for Energy Star-certified models with an AFUE rating of 95% or higher to save up to 30% on energy bills." },
      { l:"Pros:", d:"Fast heating, reliable in extreme cold." },
      { l:"Cons:", d:"Requires ductwork, which can leak if not maintained." },
    ],
  },
  {
    img:"/assets/img/blog/1-2.jpg", title:"Heat Pumps:",
    bullets:[
      { l:"Best For:", d:"Mild to cold climates, energy-conscious homeowners." },
      { l:"How It Works:", d:"Transfers heat from outside or the ground to warm your home." },
      { l:"Energy Efficiency:", d:"Air-source heat pumps can achieve SEER ratings of 15–20, reducing energy use by up to 50%." },
      { l:"Pros:", d:"Highly efficient, provides both heating and cooling." },
      { l:"Cons:", d:"May need a backup system in very cold climates." },
    ],
  },
  {
    img:"/assets/img/blog/1-3.jpg", title:"Boilers:",
    bullets:[
      { l:"Best For:", d:"Homes with radiators or in-floor heating." },
      { l:"How It Works:", d:"Heats water or steam, circulated through radiators or pipes." },
      { l:"Energy Efficiency:", d:"Modern condensing boilers achieve up to 98% efficiency." },
      { l:"Pros:", d:"Even heat distribution, quiet operation." },
      { l:"Cons:", d:"Higher upfront cost." },
    ],
  },
  {
    img:"/assets/img/blog/1-4.jpg", title:"Ductless Mini-Splits:",
    bullets:[
      { l:"Best For:", d:"Small homes, additions, or homes without ductwork." },
      { l:"How It Works:", d:"Wall-mounted units deliver heat directly to specific zones." },
      { l:"Energy Efficiency:", d:"Highly efficient with zoned heating." },
      { l:"Pros:", d:"Flexible installation." },
      { l:"Cons:", d:"Limited capacity for large homes." },
    ],
  },
  {
    img:"/assets/img/blog/1-5.jpg", title:"Smart Thermostats:",
    bullets:[
      { l:"Best For:", d:"Any system to boost efficiency." },
      { l:"How It Works:", d:"Controls temperature settings automatically or remotely." },
      { l:"Energy Efficiency:", d:"Can reduce heating costs by 10–15%." },
      { l:"Pros:", d:"Easy to install and user-friendly." },
      { l:"Cons:", d:"Requires compatible systems." },
    ],
  },
];

const signs = [
  { n:"1", t:"Your Furnace Is Over 15 Years Old",           d:"Furnaces usually last 15–20 years with proper upkeep. Older furnaces waste energy compared to modern 95%+ AFUE systems." },
  { n:"2", t:"Rising Energy Bills",                         d:"Your furnace may be losing efficiency and working harder, increasing bills." },
  { n:"3", t:"Frequent Repairs",                            d:"Repeated furnace failures and repair costs over $500–$1,000 may indicate replacement is smarter." },
  { n:"4", t:"Inconsistent Heating or Subpar Performance",  d:"Uneven heating and poor airflow are signs your furnace may be failing." },
  { n:"5", t:"Strange Noises or Safety Risks",              d:"Clanging, rattling, soot buildup, or carbon monoxide concerns indicate it may be time for replacement." },
];

const comments = [
  { img:"/assets/img/blog/comment-1.png", name:"James Williams", date:"May 03, 2026 - 9:44 am",  text:"Very informative guide! Helped me understand the best heating options for my home in Middletown Twp." },
  { img:"/assets/img/blog/comment-2.jpg", name:"Sarah Thompson",  date:"May 03, 2026 - 10:15 am", text:"Great tips on energy efficiency. We're considering a heat pump based on this article!" },
];

const sysIcons = [
  <svg key="f" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="13" y2="15"/></svg>,
  <svg key="h" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="b" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg key="d" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  <svg key="s" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
];

const CSS = `
  .bdp-wrap   { max-width:1001px; margin:0 auto; padding:56px 40px; font-family:'Segoe UI',Arial,sans-serif; }
  .bdp-h2     { font-size:clamp(19px,2vw,24px); font-weight:800; color:${NAVY}; margin:28px 0 16px; }
  .bdp-h3     { font-size:clamp(18px,1.8vw,22px); font-weight:800; color:${NAVY}; margin:28px 0 16px; }
  .bdp-p      { font-size:16px; color:#444; line-height:1.9; margin:0 0 14px; }
  .bdp-sys    { display:flex; gap:16px; align-items:flex-start; padding:16px 0; border-bottom:1px solid #f0f0f0; }
  @media(max-width:1023px){ .bdp-wrap{ grid-template-columns:1fr; padding:40px 24px; gap:36px; } }
  @media(max-width:767px) { .bdp-wrap{ padding:28px 16px; } }
`;

export default function BlogDetailPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });

  return (
    <div style={{ fontFamily:"'Segoe UI',Arial,sans-serif", overflowX:"hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* HERO */}
      <section style={{ position:"relative", height:320, overflow:"hidden", background:NAVY }}>
        <Image src="/assets/img/blog/blog-details.jpg" alt="Blog" fill sizes="100vw"
          style={{ objectFit:"cover", objectPosition:"center top" }} priority />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(10,14,40,0.95) 0%,rgba(10,14,40,0.7) 55%,rgba(10,14,40,0.3) 100%)" }} />
        <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 60px", maxWidth:860 }}>
          <h1 style={{ fontSize:"clamp(22px,3vw,38px)", fontWeight:900, color:"#fff", lineHeight:1.25, margin:"0 0 16px" }}>
            How to Choose the Right<br />Heating System for Your Home?
          </h1>
          <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
            {[{i:"📅",t:"03 May 2026"},{i:"💬",t:"02 Comments"},{i:"👤",t:"By Admin"}].map((m,i)=>(
              <span key={i} style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#c8cce0", fontWeight:500 }}><span>{m.i}</span>{m.t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="bdp-wrap">

        {/* ══ MAIN CONTENT ══ */}
        <div>
          {/* Intro */}
          <p className="bdp-p">The first step in choosing the right heating system.</p>
          <ul style={{ listStyle:"none", padding:0, margin:"0 0 24px", display:"flex", flexDirection:"column", gap:10 }}>
            {introBullets.map((b,i)=>(
              <li key={i} style={{ display:"flex", gap:10, fontSize:15, color:"#444", lineHeight:1.75 }}>
                <span style={{ width:8, height:8, background:ORANGE, borderRadius:"50%", flexShrink:0, marginTop:7 }} />
                <span><strong style={{ color:NAVY }}>{b.t}</strong> {b.d}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <div style={{ background:"#fff8f2", border:`2px solid ${ORANGE}`, borderRadius:10, padding:"20px 22px", display:"flex", gap:14, alignItems:"flex-start", margin:"0 0 28px" }}>
            <div style={{ fontSize:38, color:ORANGE, lineHeight:1, fontFamily:"Georgia,serif", flexShrink:0, marginTop:-4 }}>"</div>
            <div>
              <p style={{ fontSize:15, color:"#444", lineHeight:1.8, margin:"0 0 10px", fontStyle:"italic" }}>
                Our certified technicians at Avatar Home Service offer free energy audits to assess your home's heating needs and recommend the most efficient system. Contact us for a consultation!
              </p>
              <p style={{ margin:0, fontSize:13, fontWeight:700, color:NAVY }}>— Avatar Home Service Team</p>
            </div>
          </div>

          {/* Section 1 */}
          <h2 className="bdp-h2">1. Assess Your Home's Needs</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 200px", gap:24, alignItems:"start", marginBottom:28 }}>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
              {[
                { t:"Home Size and Layout:", d:"Larger homes or multi-story houses may need powerful systems like furnaces or boilough ducts." },
                { t:"For colder climates:", d:"Middletown Twp, choose energy-efficient furnaces or heat pumps built for low energy bills." },
                { t:"Insulation:", d:"standrm bmp are a great fit." },
              ].map((item,i)=>(
                <li key={i} style={{ display:"flex", gap:10, fontSize:15, color:"#444", lineHeight:1.7 }}>
                  <span style={{ width:7, height:7, background:ORANGE, borderRadius:"50%", flexShrink:0, marginTop:6 }} />
                  <span><strong style={{ color:NAVY }}>{item.t}</strong> {item.d}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderRadius:10, overflow:"hidden", lineHeight:0, boxShadow:"0 4px 16px rgba(0,0,0,0.1)" }}>
              <Image src="/assets/img/blog/blog-details-img-1.jpg" alt="Assess" width={200} height={220}
                style={{ width:"100%", height:220, objectFit:"cover" }} />
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="bdp-h2">2. Understand Your Heating System Options</h2>
          <div style={{ display:"flex", flexDirection:"column", marginBottom:28 }}>
            {systemOptions.map((s,i)=>(
              <div key={i} className="bdp-sys">
                <div style={{ width:100, height:80, borderRadius:8, overflow:"hidden", flexShrink:0, lineHeight:0 }}>
                  <Image src={s.img} alt={s.title} width={100} height={80} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <div style={{ width:44, height:44, background:`rgba(219,124,55,0.10)`, border:`2px solid ${ORANGE}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:4 }}>
                  {sysIcons[i]}
                </div>
                <div>
                  <h5 style={{ fontSize:16, fontWeight:700, color:NAVY, margin:"0 0 8px" }}>{s.title}</h5>
                  <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:3 }}>
                    {s.bullets.map((b,j)=>(
                      <li key={j} style={{ fontSize:15, color:"#444", lineHeight:1.65 }}>
                        <strong style={{ color:NAVY }}>{b.l}</strong> {b.d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA bar 1 */}
          <div style={{ background:NAVY, borderRadius:12, padding:"18px 22px", display:"flex", alignItems:"center", gap:18, flexWrap:"wrap", marginBottom:28 }}>
            <div style={{ width:44, height:44, background:ORANGE, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            </div>
            <div style={{ flex:1 }}>
              <p style={{ margin:"0 0 2px", fontWeight:700, fontSize:14, color:"#fff" }}>Not Sure Which System Is Right?</p>
              <p style={{ margin:0, fontSize:14, color:"#9aa8c8" }}>Our experts at Avatar Home Service can help you compare options and find the most energy-efficient solution for your home.</p>
            </div>
            <a href={`tel:${PHONE}`} style={{ background:ORANGE, color:"#fff", padding:"14px 20px", borderRadius:8, fontWeight:900, fontSize:16, textDecoration:"none", whiteSpace:"nowrap", boxShadow:"0 4px 14px rgba(219,124,55,0.4)", textAlign:"center" }}>
              Call Now:<br />{PHONE}
            </a>
          </div>

          {/* Section 3 */}
          <h2 className="bdp-h2">3. Prioritize Energy Efficiency</h2>
          <p className="bdp-p">
            Don't buy heating or air conditioning without our free estimate. You have thousands of dollars and valuable time to gain and absolutely nothing to lose by calling now at {PHONE}.
          </p>
          <div style={{ border:`1.5px solid ${ORANGE}`, borderRadius:10, padding:"14px 18px", marginBottom:28, background:"#fff8f2" }}>
            <p style={{ margin:"0 0 4px", fontSize:15, color:"#444", lineHeight:1.7 }}>
              <strong style={{ color:NAVY }}>Serving:</strong> Monmouth, Middlesex County and surrounding counties in New Jersey.
            </p>
            <p style={{ margin:0, fontSize:15, color:"#444", lineHeight:1.7 }}>
              <strong style={{ color:NAVY }}>Towns:</strong> Middletown Twp, Holmdel, Marlboro, Manalapan, Union Beach, Keyport.
            </p>
          </div>

          {/* Top 5 Signs */}
          <h3 className="bdp-h3">Top 5 Signs Your Furnace Needs Replacement</h3>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 180px", gap:24, alignItems:"start", marginBottom:28 }}>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {signs.map((s,i)=>(
                <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ width:26, height:26, background:ORANGE, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontWeight:800, fontSize:12, color:"#fff" }}>{s.n}</div>
                  <p style={{ margin:0, fontSize:15, color:"#444", lineHeight:1.7 }}>
                    <strong style={{ color:NAVY }}>{s.t}</strong><br />{s.d}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ borderRadius:10, overflow:"hidden", lineHeight:0, boxShadow:"0 4px 16px rgba(0,0,0,0.1)" }}>
              <Image src="/assets/img/blog/blog-details-img-2.jpg" alt="Furnace" width={180} height={240}
                style={{ width:"100%", height:240, objectFit:"cover" }} />
            </div>
          </div>

          {/* CTA bar 2 */}
          <div style={{ background:NAVY, borderRadius:12, padding:"20px 22px", marginBottom:48 }}>
            <p style={{ margin:"0 0 14px", fontWeight:700, fontSize:15, color:"#fff" }}>Why Replace Your Furnace with Avatar Home Service?</p>
            <div style={{ display:"flex", gap:18, alignItems:"center", flexWrap:"wrap", justifyContent:"space-between" }}>
              <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                {[
                  { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>, label:"Free Consultations" },
                  { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, label:"Certified Technicians" },
                  { icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label:"Transparent Pricing" },
                ].map((f,i)=>(
                  <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, textAlign:"center" }}>
                    <div style={{ width:42, height:42, background:"rgba(219,124,55,0.15)", border:`2px solid ${ORANGE}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      {f.icon}
                    </div>
                    <span style={{ fontSize:11, color:"#c8cce0", fontWeight:600 }}>{f.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ textAlign:"right" }}>
                <p style={{ margin:"0 0 4px", fontSize:12, color:"#9aa8c8" }}>Serving: Middletown Twp, Holmdel Twp, Colts Neck Twp, Monmouth County and Middlesex County in New Jersey.</p>
                <a href={`tel:${PHONE2}`} style={{ fontSize:18, fontWeight:900, color:ORANGE, textDecoration:"none" }}>Call: {PHONE2}</a>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div style={{ borderTop:"2px solid #f0f0f0", paddingTop:28, marginBottom:36 }}>
            <h3 style={{ fontSize:19, fontWeight:800, color:NAVY, margin:"0 0 24px" }}>Comments ({comments.length})</h3>
            {comments.map((c,i)=>(
              <div key={i} style={{ display:"flex", gap:14, marginBottom:20, paddingBottom:20, borderBottom:i<comments.length-1?"1px solid #f0f0f0":"none" }}>
                <div style={{ width:52, height:52, borderRadius:"50%", overflow:"hidden", flexShrink:0, border:"2px solid #eee" }}>
                  <Image src={c.img} alt={c.name} width={52} height={52} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:5 }}>
                    <div>
                      <p style={{ margin:"0 0 2px", fontWeight:700, fontSize:15, color:NAVY }}>{c.name}</p>
                      <p style={{ margin:0, fontSize:11, color:"#888" }}>{c.date}</p>
                    </div>
                    <a href="#" style={{ background:NAVY, color:"#fff", padding:"5px 14px", borderRadius:6, fontSize:11, fontWeight:600, textDecoration:"none" }}>Reply</a>
                  </div>
                  <p style={{ margin:0, fontSize:15, color:"#555", lineHeight:1.75 }}>{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leave A Comment */}
          <div>
            <h3 style={{ fontSize:19, fontWeight:800, color:NAVY, margin:"0 0 20px" }}>Leave A Comment</h3>
            <form onSubmit={e=>e.preventDefault()}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"
                  style={{ border:"1.5px solid #e0e0e0", borderRadius:7, padding:"11px 14px", fontSize:15, outline:"none" }} />
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" type="email"
                  style={{ border:"1.5px solid #e0e0e0", borderRadius:7, padding:"11px 14px", fontSize:15, outline:"none" }} />
              </div>
              <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone"
                style={{ border:"1.5px solid #e0e0e0", borderRadius:7, padding:"11px 14px", fontSize:15, outline:"none", width:"100%", marginBottom:14, display:"block", boxSizing:"border-box" }} />
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Write a Comment" rows={5}
                style={{ border:"1.5px solid #e0e0e0", borderRadius:7, padding:"11px 14px", fontSize:15, outline:"none", width:"100%", resize:"vertical", marginBottom:16, display:"block", boxSizing:"border-box" }} />
              <button type="submit" style={{ background:ORANGE, color:"#fff", padding:"12px 30px", borderRadius:7, fontWeight:700, fontSize:14, border:"none", cursor:"pointer", boxShadow:"0 4px 14px rgba(219,124,55,0.38)" }}>
                Post Comment
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

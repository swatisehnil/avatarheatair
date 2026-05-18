"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  { label: "Hero Slider", href: "/admin/hero", icon: "🖼️", desc: "Edit hero banner slides, headings, descriptions" },
  { label: "About", href: "/admin/about", icon: "ℹ️", desc: "Update about section content and images" },
  { label: "Services", href: "/admin/services", icon: "🔧", desc: "Manage service cards shown on home page" },
  { label: "Projects", href: "/admin/projects", icon: "📁", desc: "Add or edit project portfolio items" },
  { label: "Promo / Skills", href: "/admin/promo", icon: "📊", desc: "Edit custom order section and skill bars" },
  { label: "Video", href: "/admin/video", icon: "▶️", desc: "Change the YouTube video link" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "💬", desc: "Manage client testimonials carousel" },
  { label: "Team", href: "/admin/team", icon: "👥", desc: "Update team member profiles" },
  { label: "Blog", href: "/admin/blog", icon: "📝", desc: "Edit blog post listings shown on home page" },
  { label: "Site Settings", href: "/admin/settings", icon: "⚙️", desc: "Contact info, social links, footer text" },
];

export default function AdminDashboard() {
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState("");

  async function handleSeed() {
    setSeeding(true);
    setSeedMsg("");
    const res = await fetch("/api/admin/seed", { method: "POST" });
    const data = await res.json();
    setSeeding(false);
    setSeedMsg(data.message || (res.ok ? "Seeded!" : "Error seeding"));
  }

  return (
    <div>
      {/* Welcome */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: 12, padding: "28px 32px", marginBottom: 28, color: "#fff" }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Welcome to AvatarHeatAir CMS 👋</h2>
        <p style={{ margin: "8px 0 20px", color: "#bbb", fontSize: 15 }}>Select a section below to start editing your website content.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={handleSeed}
            disabled={seeding}
            style={{ padding: "9px 20px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: seeding ? "not-allowed" : "pointer" }}
          >
            {seeding ? "Seeding..." : "🌱 Seed Default Data"}
          </button>
          {seedMsg && <span style={{ fontSize: 13, color: "#a8e6cf" }}>{seedMsg}</span>}
          <span style={{ fontSize: 12, color: "#888" }}>Run this once to populate MongoDB with default content</span>
        </div>
      </div>

      {/* Section Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
            <div style={{
              background: "#fff", borderRadius: 10, padding: "20px 22px",
              border: "1.5px solid #eee", cursor: "pointer",
              transition: "box-shadow .2s, border-color .2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#DB7C37"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(219,124,55,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#eee"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{s.label}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "#666", lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

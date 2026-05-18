"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Slide { backgroundImage: string; subtitle: string; heading: string; description: string; ctaText: string; ctaLink: string }

const emptySlide = (): Slide => ({ backgroundImage: "", subtitle: "", heading: "", description: "", ctaText: "Get a Free Quote", ctaLink: "/contact" });

export default function HeroAdmin() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/hero").then(r => r.json()).then(d => setSlides(d.slides ?? []));
  }, []);

  function updateSlide(i: number, field: keyof Slide, value: string) {
    setSlides(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: value } : s));
  }
  function addSlide() { setSlides(prev => [...prev, emptySlide()]); }
  function removeSlide(i: number) { setSlides(prev => prev.filter((_, idx) => idx !== i)); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/hero", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slides }) });
    setSaving(false);
    setMsg(res.ok ? "✅ Saved successfully!" : "❌ Save failed");
    setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div><h2 style={{ margin: 0, color: "#1a1a2e" }}>Hero Slider</h2><p style={{ color: "#666", margin: "4px 0 0", fontSize: 14 }}>Manage slides shown in the home page banner.</p></div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      {slides.map((slide, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h4 style={{ margin: 0, color: "#1a1a2e" }}>Slide {i + 1}</h4>
            <button onClick={() => removeSlide(i)} style={dangerBtnStyle}>Remove</button>
          </div>

          <ImagePicker label="Background Image" value={slide.backgroundImage} onChange={v => updateSlide(i, "backgroundImage", v)} />

          {(["subtitle", "heading", "description", "ctaText", "ctaLink"] as (keyof Slide)[]).map(field => (
            <div key={field} style={{ marginTop: 14 }}>
              <label style={labelStyle}>{field.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())}</label>
              {field === "description"
                ? <textarea value={slide[field]} onChange={e => updateSlide(i, field, e.target.value)} rows={3} style={inputStyle as any} />
                : <input value={slide[field]} onChange={e => updateSlide(i, field, e.target.value)} style={inputStyle} />
              }
            </div>
          ))}
        </div>
      ))}

      <button onClick={addSlide} style={outlineBtnStyle}>+ Add Slide</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "9px 22px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 8 } as const;
const dangerBtnStyle = { padding: "5px 14px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 13, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

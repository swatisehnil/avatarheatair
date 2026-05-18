"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Feature { icon: string; title: string; description: string }
interface AboutData { subtitle: string; heading: string; description: string; primaryImage: string; secondaryImage: string; features: Feature[]; ctaText: string; ctaLink: string }

const defaultData: AboutData = { subtitle: "", heading: "", description: "", primaryImage: "", secondaryImage: "", features: [], ctaText: "", ctaLink: "" };

export default function AboutAdmin() {
  const [data, setData] = useState<AboutData>(defaultData);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/about").then(r => r.json()).then(d => setData(d)); }, []);

  function set(field: keyof AboutData, value: any) { setData(prev => ({ ...prev, [field]: value })); }
  function updateFeature(i: number, field: keyof Feature, value: string) {
    setData(prev => ({ ...prev, features: prev.features.map((f, idx) => idx === i ? { ...f, [field]: value } : f) }));
  }
  function addFeature() { setData(prev => ({ ...prev, features: [...prev.features, { icon: "", title: "", description: "" }] })); }
  function removeFeature(i: number) { setData(prev => ({ ...prev, features: prev.features.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/about", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>About Section</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Section Content</h4>
        {(["subtitle", "heading"] as (keyof AboutData)[]).map(f => (
          <div key={f} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{String(f).charAt(0).toUpperCase() + String(f).slice(1)}</label>
            <input value={data[f] as string} onChange={e => set(f, e.target.value)} style={inputStyle} />
          </div>
        ))}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={data.description} onChange={e => set("description", e.target.value)} rows={3} style={inputStyle as any} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 14 }}>
          <ImagePicker label="Primary Image" value={data.primaryImage} onChange={v => set("primaryImage", v)} />
          <ImagePicker label="Secondary Image" value={data.secondaryImage} onChange={v => set("secondaryImage", v)} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div><label style={labelStyle}>CTA Button Text</label><input value={data.ctaText} onChange={e => set("ctaText", e.target.value)} style={inputStyle} /></div>
          <div><label style={labelStyle}>CTA Link</label><input value={data.ctaLink} onChange={e => set("ctaLink", e.target.value)} style={inputStyle} /></div>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Feature Cards</h4>
        {data.features.map((f, i) => (
          <div key={i} style={{ borderBottom: i < data.features.length - 1 ? "1px solid #f0f0f0" : "none", paddingBottom: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Feature {i + 1}</span>
              <button onClick={() => removeFeature(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 12 }}>
              <ImagePicker label="Feature Icon" value={f.icon} onChange={v => updateFeature(i, "icon", v)} />
              <div><label style={labelStyle}>Title</label><input value={f.title} onChange={e => updateFeature(i, "title", e.target.value)} style={inputStyle} /></div>
            </div>
            <div><label style={labelStyle}>Description</label><input value={f.description} onChange={e => updateFeature(i, "description", e.target.value)} style={inputStyle} /></div>
          </div>
        ))}
        <button onClick={addFeature} style={outlineBtnStyle}>+ Add Feature</button>
      </div>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

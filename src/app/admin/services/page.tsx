"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Service { icon: string; title: string; description: string; link: string; order: number }
interface Data { subtitle: string; heading: string; services: Service[] }

export default function ServicesAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", services: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/services").then(r => r.json()).then(d => setData(d)); }, []);

  function setField(f: "subtitle" | "heading", v: string) { setData(p => ({ ...p, [f]: v })); }
  function updateService(i: number, field: keyof Service, value: string | number) {
    setData(p => ({ ...p, services: p.services.map((s, idx) => idx === i ? { ...s, [field]: value } : s) }));
  }
  function addService() { setData(p => ({ ...p, services: [...p.services, { icon: "", title: "", description: "", link: "#", order: p.services.length + 1 }] })); }
  function removeService(i: number) { setData(p => ({ ...p, services: p.services.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/services", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Services Section</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Section Header</h4>
        {(["subtitle", "heading"] as const).map(f => (
          <div key={f} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input value={data[f]} onChange={e => setField(f, e.target.value)} style={inputStyle} />
          </div>
        ))}
      </div>

      {data.services.map((s, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h4 style={{ margin: 0, color: "#1a1a2e" }}>Service {i + 1}</h4>
            <button onClick={() => removeService(i)} style={dangerBtnStyle}>Remove</button>
          </div>

          {/* Icon Image Picker */}
          <ImagePicker
            label="Service Icon"
            value={s.icon}
            onChange={v => updateService(i, "icon", v)}
          />

          <div style={{ marginTop: 14 }}>
            <label style={labelStyle}>Title</label>
            <input value={s.title} onChange={e => updateService(i, "title", e.target.value)} style={inputStyle} />
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={labelStyle}>Description</label>
            <textarea value={s.description} onChange={e => updateService(i, "description", e.target.value)} rows={2} style={inputStyle as any} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginTop: 14 }}>
            <div><label style={labelStyle}>Link</label><input value={s.link} onChange={e => updateService(i, "link", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Order</label><input type="number" value={s.order} onChange={e => updateService(i, "order", Number(e.target.value))} style={inputStyle} /></div>
          </div>
        </div>
      ))}
      <button onClick={addService} style={outlineBtnStyle}>+ Add Service</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

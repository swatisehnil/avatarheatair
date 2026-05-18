"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Testimonial { image: string; name: string; role: string; quote: string; order: number }
interface Data { subtitle: string; heading: string; testimonials: Testimonial[] }

export default function TestimonialsAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", testimonials: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/testimonials").then(r => r.json()).then(d => setData(d)); }, []);

  function setField(f: "subtitle" | "heading", v: string) { setData(p => ({ ...p, [f]: v })); }
  function update(i: number, field: keyof Testimonial, value: string | number) {
    setData(p => ({ ...p, testimonials: p.testimonials.map((t, idx) => idx === i ? { ...t, [field]: value } : t) }));
  }
  function add() { setData(p => ({ ...p, testimonials: [...p.testimonials, { image: "", name: "", role: "", quote: "", order: p.testimonials.length + 1 }] })); }
  function remove(i: number) { setData(p => ({ ...p, testimonials: p.testimonials.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/testimonials", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Testimonials Section</h2>
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

      {data.testimonials.map((t, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h4 style={{ margin: 0 }}>Testimonial {i + 1}</h4>
            <button onClick={() => remove(i)} style={dangerBtnStyle}>Remove</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <ImagePicker label="Author Photo" value={t.image} onChange={v => update(i, "image", v)} />
            <div>
              <div style={{ marginBottom: 14 }}><label style={labelStyle}>Name</label><input value={t.name} onChange={e => update(i, "name", e.target.value)} style={inputStyle} /></div>
              <div style={{ marginBottom: 14 }}><label style={labelStyle}>Role / Title</label><input value={t.role} onChange={e => update(i, "role", e.target.value)} style={inputStyle} /></div>
              <div><label style={labelStyle}>Order</label><input type="number" value={t.order} onChange={e => update(i, "order", Number(e.target.value))} style={inputStyle} /></div>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={labelStyle}>Quote</label>
            <textarea value={t.quote} onChange={e => update(i, "quote", e.target.value)} rows={2} style={inputStyle as any} />
          </div>
        </div>
      ))}
      <button onClick={add} style={outlineBtnStyle}>+ Add Testimonial</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

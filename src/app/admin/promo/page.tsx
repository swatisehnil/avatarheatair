"use client";

import { useEffect, useState } from "react";

interface Bar { id: string; label: string; percentage: number }
interface Data { subtitle: string; heading: string; description: string; email: string; progressBars: Bar[] }

export default function PromoAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", description: "", email: "", progressBars: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/promo").then(r => r.json()).then(d => setData(d)); }, []);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }
  function updateBar(i: number, field: keyof Bar, value: string | number) {
    setData(p => ({ ...p, progressBars: p.progressBars.map((b, idx) => idx === i ? { ...b, [field]: value } : b) }));
  }
  function addBar() { setData(p => ({ ...p, progressBars: [...p.progressBars, { id: `bar${p.progressBars.length + 1}`, label: "", percentage: 75 }] })); }
  function removeBar(i: number) { setData(p => ({ ...p, progressBars: p.progressBars.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/promo", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Promo / Skills Section</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Content</h4>
        {(["subtitle", "heading"] as const).map(f => (
          <div key={f} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input value={data[f]} onChange={e => set(f, e.target.value)} style={inputStyle} />
          </div>
        ))}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={data.description} onChange={e => set("description", e.target.value)} rows={3} style={inputStyle as any} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Contact Email</label>
          <input type="email" value={data.email} onChange={e => set("email", e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Progress / Skill Bars</h4>
        {data.progressBars.map((b, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr auto", gap: 12, alignItems: "end", marginBottom: 14 }}>
            <div><label style={labelStyle}>ID</label><input value={b.id} onChange={e => updateBar(i, "id", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Label</label><input value={b.label} onChange={e => updateBar(i, "label", e.target.value)} style={inputStyle} /></div>
            <div>
              <label style={labelStyle}>% ({b.percentage})</label>
              <input type="range" min={0} max={100} value={b.percentage} onChange={e => updateBar(i, "percentage", Number(e.target.value))} style={{ width: "100%" }} />
            </div>
            <button onClick={() => removeBar(i)} style={{ ...dangerBtnStyle, marginBottom: 1 }}>✕</button>
          </div>
        ))}
        <button onClick={addBar} style={outlineBtnStyle}>+ Add Bar</button>
      </div>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const dangerBtnStyle = { padding: "6px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 13, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

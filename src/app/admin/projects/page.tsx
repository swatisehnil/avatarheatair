"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Project { image: string; title: string; category: string; col: string; order: number }
interface Data { subtitle: string; heading: string; projects: Project[] }

const COL_OPTIONS = [
  "col-xl-6 col-lg-6 col-md-6",
  "col-xl-4 col-lg-4 col-md-6",
  "col-xl-4 col-lg-4 col-md-4 d-none d-lg-block",
  "col-xl-3 col-lg-3 col-md-6",
];

export default function ProjectsAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", projects: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/projects").then(r => r.json()).then(d => setData(d)); }, []);

  function setField(f: "subtitle" | "heading", v: string) { setData(p => ({ ...p, [f]: v })); }
  function update(i: number, field: keyof Project, value: string | number) {
    setData(p => ({ ...p, projects: p.projects.map((s, idx) => idx === i ? { ...s, [field]: value } : s) }));
  }
  function addProject() { setData(p => ({ ...p, projects: [...p.projects, { image: "", title: "", category: "", col: COL_OPTIONS[0], order: p.projects.length + 1 }] })); }
  function removeProject(i: number) { setData(p => ({ ...p, projects: p.projects.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/projects", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Projects Section</h2>
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

      {data.projects.map((p, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h4 style={{ margin: 0 }}>Project {i + 1}</h4>
            <button onClick={() => removeProject(i)} style={dangerBtnStyle}>Remove</button>
          </div>

          <ImagePicker label="Project Image" value={p.image} onChange={v => update(i, "image", v)} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
            <div><label style={labelStyle}>Title</label><input value={p.title} onChange={e => update(i, "title", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Category</label><input value={p.category} onChange={e => update(i, "category", e.target.value)} style={inputStyle} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginTop: 14 }}>
            <div>
              <label style={labelStyle}>Column Size</label>
              <select value={p.col} onChange={e => update(i, "col", e.target.value)} style={inputStyle}>
                {COL_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div><label style={labelStyle}>Order</label><input type="number" value={p.order} onChange={e => update(i, "order", Number(e.target.value))} style={inputStyle} /></div>
          </div>
        </div>
      ))}
      <button onClick={addProject} style={outlineBtnStyle}>+ Add Project</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

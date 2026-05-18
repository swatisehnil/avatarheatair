"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface SocialLinks { facebook: string; instagram: string; linkedin: string; skype: string }
interface Member { image: string; name: string; role: string; socialLinks: SocialLinks; order: number }
interface Data { subtitle: string; heading: string; description: string; teamMembers: Member[]; ctaText: string; ctaLink: string }

const emptySocial = (): SocialLinks => ({ facebook: "#", instagram: "#", linkedin: "#", skype: "#" });

export default function TeamAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", description: "", teamMembers: [], ctaText: "", ctaLink: "" });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/team").then(r => r.json()).then(d => setData(d)); }, []);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }
  function update(i: number, field: keyof Member, value: any) {
    setData(p => ({ ...p, teamMembers: p.teamMembers.map((m, idx) => idx === i ? { ...m, [field]: value } : m) }));
  }
  function updateSocial(i: number, field: keyof SocialLinks, value: string) {
    setData(p => ({ ...p, teamMembers: p.teamMembers.map((m, idx) => idx === i ? { ...m, socialLinks: { ...m.socialLinks, [field]: value } } : m) }));
  }
  function add() { setData(p => ({ ...p, teamMembers: [...p.teamMembers, { image: "", name: "", role: "", socialLinks: emptySocial(), order: p.teamMembers.length + 1 }] })); }
  function remove(i: number) { setData(p => ({ ...p, teamMembers: p.teamMembers.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/team", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Team Section</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Section Content</h4>
        {(["subtitle", "heading"] as const).map(f => (
          <div key={f} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input value={data[f]} onChange={e => set(f, e.target.value)} style={inputStyle} />
          </div>
        ))}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={data.description} onChange={e => set("description", e.target.value)} rows={2} style={inputStyle as any} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div><label style={labelStyle}>CTA Button Text</label><input value={data.ctaText} onChange={e => set("ctaText", e.target.value)} style={inputStyle} /></div>
          <div><label style={labelStyle}>CTA Link</label><input value={data.ctaLink} onChange={e => set("ctaLink", e.target.value)} style={inputStyle} /></div>
        </div>
      </div>

      {data.teamMembers.map((m, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <h4 style={{ margin: 0 }}>Member {i + 1}</h4>
            <button onClick={() => remove(i)} style={dangerBtnStyle}>Remove</button>
          </div>
          <div style={{ marginBottom: 14 }}>
            <ImagePicker label="Member Photo" value={m.image} onChange={v => update(i, "image", v)} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div><label style={labelStyle}>Name</label><input value={m.name} onChange={e => update(i, "name", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Role</label><input value={m.role} onChange={e => update(i, "role", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Order</label><input type="number" value={m.order} onChange={e => update(i, "order", Number(e.target.value))} style={inputStyle} /></div>
          </div>
          <div>
            <label style={labelStyle}>Social Links</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
              {(["facebook", "instagram", "linkedin", "skype"] as (keyof SocialLinks)[]).map(s => (
                <div key={s}><label style={{ ...labelStyle, fontWeight: 400, color: "#666", fontSize: 12 }}>{s.charAt(0).toUpperCase() + s.slice(1)}</label><input value={m.socialLinks?.[s] ?? "#"} onChange={e => updateSocial(i, s, e.target.value)} style={inputStyle} /></div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button onClick={add} style={outlineBtnStyle}>+ Add Member</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface SocialLinks { facebook: string; instagram: string; youtube: string; linkedin: string; skype: string }
interface Data { email: string; phone: string; address: string; socialLinks: SocialLinks; logo: string; whiteLogo: string; copyrightText: string }

const defaultSocial: SocialLinks = { facebook: "#", instagram: "#", youtube: "#", linkedin: "#", skype: "#" };

export default function SettingsAdmin() {
  const [data, setData] = useState<Data>({ email: "", phone: "", address: "", socialLinks: defaultSocial, logo: "", whiteLogo: "", copyrightText: "" });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/settings").then(r => r.json()).then(d => setData({ ...defaultSocial, ...d, socialLinks: { ...defaultSocial, ...(d.socialLinks ?? {}) } })); }, []);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }
  function setSocial(f: keyof SocialLinks, v: string) { setData(p => ({ ...p, socialLinks: { ...p.socialLinks, [f]: v } })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/settings", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Site Settings</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Contact Information</h4>
        {(["email", "phone", "address"] as const).map(f => (
          <div key={f} style={{ marginBottom: 14 }}>
            <label style={labelStyle}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input value={data[f]} onChange={e => set(f, e.target.value)} style={inputStyle} />
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Social Media Links</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {(Object.keys(data.socialLinks) as (keyof SocialLinks)[]).map(f => (
            <div key={f}>
              <label style={labelStyle}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
              <input value={data.socialLinks[f]} onChange={e => setSocial(f, e.target.value)} placeholder="URL or #" style={inputStyle} />
            </div>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>Logos & Footer</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <ImagePicker label="Main Logo" value={data.logo} onChange={v => set("logo", v)} />
          <ImagePicker label="White Logo" value={data.whiteLogo} onChange={v => set("whiteLogo", v)} />
        </div>
        <div style={{ marginTop: 14 }}>
          <label style={labelStyle}>Copyright Text</label>
          <input value={data.copyrightText} onChange={e => set("copyrightText", e.target.value)} style={inputStyle} />
        </div>
      </div>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

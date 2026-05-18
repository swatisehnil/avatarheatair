"use client";

import { useEffect, useState } from "react";

export default function VideoAdmin() {
  const [videoUrl, setVideoUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/video").then(r => r.json()).then(d => setVideoUrl(d.videoUrl ?? "")); }, []);

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/video", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ videoUrl }) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Video Section</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>
      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 16px" }}>YouTube Video URL</h4>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Video URL</label>
          <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." style={inputStyle} />
        </div>
        {videoUrl && (
          <div style={{ marginTop: 16, borderRadius: 8, overflow: "hidden", border: "1px solid #eee" }}>
            <iframe
              width="100%" height="220"
              src={`https://www.youtube.com/embed/${videoUrl.split("v=")[1]?.split("&")[0] ?? ""}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen style={{ display: "block", border: "none" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

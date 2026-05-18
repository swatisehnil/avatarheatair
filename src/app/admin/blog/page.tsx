"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Post { image: string; category: string; title: string; date: string; comments: string; link: string; order: number }
interface Data { subtitle: string; heading: string; posts: Post[] }

export default function BlogAdmin() {
  const [data, setData] = useState<Data>({ subtitle: "", heading: "", posts: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => { fetch("/api/admin/blog").then(r => r.json()).then(d => setData(d)); }, []);

  function setField(f: "subtitle" | "heading", v: string) { setData(p => ({ ...p, [f]: v })); }
  function update(i: number, field: keyof Post, value: string | number) {
    setData(p => ({ ...p, posts: p.posts.map((b, idx) => idx === i ? { ...b, [field]: value } : b) }));
  }
  function add() { setData(p => ({ ...p, posts: [...p.posts, { image: "", category: "", title: "", date: "", comments: "0 comments", link: "#", order: p.posts.length + 1 }] })); }
  function remove(i: number) { setData(p => ({ ...p, posts: p.posts.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/blog", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Blog Section</h2>
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

      {data.posts.map((b, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <h4 style={{ margin: 0 }}>Post {i + 1}</h4>
            <button onClick={() => remove(i)} style={dangerBtnStyle}>Remove</button>
          </div>
          <div style={{ marginBottom: 14 }}>
            <ImagePicker label="Post Image" value={b.image} onChange={v => update(i, "image", v)} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div><label style={labelStyle}>Category</label><input value={b.category} onChange={e => update(i, "category", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Date</label><input value={b.date} onChange={e => update(i, "date", e.target.value)} placeholder="January 1 2025" style={inputStyle} /></div>
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={labelStyle}>Title</label>
            <input value={b.title} onChange={e => update(i, "title", e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 14 }}>
            <div><label style={labelStyle}>Comments Label</label><input value={b.comments} onChange={e => update(i, "comments", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Link</label><input value={b.link} onChange={e => update(i, "link", e.target.value)} style={inputStyle} /></div>
            <div><label style={labelStyle}>Order</label><input type="number" value={b.order} onChange={e => update(i, "order", Number(e.target.value))} style={inputStyle} /></div>
          </div>
        </div>
      ))}
      <button onClick={add} style={outlineBtnStyle}>+ Add Post</button>
    </div>
  );
}

const btnStyle = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "8px 18px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 4 } as const;
const dangerBtnStyle = { padding: "4px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const labelStyle = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

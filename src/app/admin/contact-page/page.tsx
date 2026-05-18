"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface InfoBox { icon: string; text: string }

interface Data {
  breadcrumbTitle: string;
  infoBoxes: InfoBox[];
  formSubtitle: string;
  formHeading: string;
  contactBgImage: string;
  mapEmbedUrl: string;
}

const empty: Data = {
  breadcrumbTitle: "",
  infoBoxes: [],
  formSubtitle: "",
  formHeading: "",
  contactBgImage: "",
  mapEmbedUrl: "",
};

export default function ContactPageAdmin() {
  const [data, setData] = useState<Data>(empty);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/contact-page").then(r => r.json()).then(d => setData({ ...empty, ...d }));
  }, []);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }

  function updateBox(i: number, f: keyof InfoBox, v: string) {
    set("infoBoxes", data.infoBoxes.map((b, idx) => idx === i ? { ...b, [f]: v } : b));
  }
  function addBox() { set("infoBoxes", [...data.infoBoxes, { icon: "", text: "" }]); }
  function removeBox(i: number) { set("infoBoxes", data.infoBoxes.filter((_, idx) => idx !== i)); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/contact-page", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    setSaving(false);
    setMsg(res.ok ? "✅ Saved!" : "❌ Failed");
    setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Contact Page</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <Section title="Breadcrumb">
        <Field label="Page Title" value={data.breadcrumbTitle} onChange={v => set("breadcrumbTitle", v)} />
      </Section>

      {/* ── Contact Info Boxes ── */}
      <Section title="Contact Info Boxes">
        <p style={{ fontSize: 12, color: "#999", marginTop: 0, marginBottom: 16 }}>
          Typically 3 boxes: Address, Email, Phone. Each has an icon image and a text line.
        </p>
        {data.infoBoxes.map((box, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Box {i + 1}</span>
              <button onClick={() => removeBox(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <div style={{ marginBottom: 12 }}>
              <ImagePicker label="Icon Image" value={box.icon} onChange={v => updateBox(i, "icon", v)} />
            </div>
            <Field label="Text (address / email / phone)" value={box.text} onChange={v => updateBox(i, "text", v)} />
          </div>
        ))}
        <button onClick={addBox} style={outlineBtnStyle}>+ Add Box</button>
      </Section>

      {/* ── Contact Form Section ── */}
      <Section title="Contact Form Section">
        <div style={{ marginBottom: 14 }}>
          <ImagePicker label="Background Image (left panel)" value={data.contactBgImage} onChange={v => set("contactBgImage", v)} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Subtitle (e.g. Get in Touch)" value={data.formSubtitle} onChange={v => set("formSubtitle", v)} />
          <Field label="Heading" value={data.formHeading} onChange={v => set("formHeading", v)} />
        </div>
      </Section>

      {/* ── Google Map ── */}
      <Section title="Google Map">
        <div style={{ marginBottom: 10 }}>
          <label style={labelStyle}>Map Embed URL</label>
          <textarea
            value={data.mapEmbedUrl}
            onChange={e => set("mapEmbedUrl", e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: "vertical" } as any}
            placeholder="https://www.google.com/maps/embed?pb=..."
          />
          <p style={{ fontSize: 11, color: "#999", marginTop: 6 }}>
            Go to Google Maps → Share → Embed a map → copy the <code>src</code> URL from the iframe code.
          </p>
        </div>
        {data.mapEmbedUrl && (
          <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #e0e0e0", marginTop: 8 }}>
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <h4 style={{ margin: "0 0 18px", fontSize: 15, color: "#1a1a2e", borderBottom: "1px solid #f0f0f0", paddingBottom: 12 }}>{title}</h4>
      {children}
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      {label && <label style={labelStyle}>{label}</label>}
      <input value={value} onChange={e => onChange(e.target.value)} style={inputStyle} />
    </div>
  );
}

const btnStyle        = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "7px 16px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const dangerBtnStyle  = { padding: "5px 10px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const labelStyle      = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle      = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Service  { img: string; title: string; link: string }
interface Counter  { number: number; suffix: string; label: string }
interface SliderItem { text: string; isStroke: boolean }

interface Data {
  breadcrumbTitle: string;
  aboutSubtitle: string; aboutHeading: string; aboutDescription: string;
  aboutPrimaryImage: string; aboutSecondaryImage: string; aboutListItems: string[];
  serviceSubtitle: string; serviceHeading: string; serviceDesc1: string; serviceDesc2: string;
  services: Service[];
  counterSubtitle: string; counterHeading: string; counterDescription: string; counterImage: string;
  counters: Counter[];
  sliderItems: SliderItem[];
}

const defaultData: Data = {
  breadcrumbTitle: "About Us",
  aboutSubtitle: "", aboutHeading: "", aboutDescription: "",
  aboutPrimaryImage: "", aboutSecondaryImage: "", aboutListItems: [],
  serviceSubtitle: "", serviceHeading: "", serviceDesc1: "", serviceDesc2: "",
  services: [],
  counterSubtitle: "", counterHeading: "", counterDescription: "", counterImage: "",
  counters: [],
  sliderItems: [],
};

export default function AboutPageAdmin() {
  const [data, setData] = useState<Data>(defaultData);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/about-page").then(r => r.json()).then(d => setData(d));
  }, []);

  function set(field: keyof Data, value: any) { setData(p => ({ ...p, [field]: value })); }

  // List items helpers
  function setListItem(i: number, v: string) {
    const items = [...data.aboutListItems]; items[i] = v; set("aboutListItems", items);
  }
  function addListItem() { set("aboutListItems", [...data.aboutListItems, ""]); }
  function removeListItem(i: number) { set("aboutListItems", data.aboutListItems.filter((_, idx) => idx !== i)); }

  // Services
  function updateService(i: number, f: keyof Service, v: string) {
    set("services", data.services.map((s, idx) => idx === i ? { ...s, [f]: v } : s));
  }
  function addService() { set("services", [...data.services, { img: "", title: "", link: "#" }]); }
  function removeService(i: number) { set("services", data.services.filter((_, idx) => idx !== i)); }

  // Counters
  function updateCounter(i: number, f: keyof Counter, v: string | number) {
    set("counters", data.counters.map((c, idx) => idx === i ? { ...c, [f]: v } : c));
  }
  function addCounter() { set("counters", [...data.counters, { number: 0, suffix: "+", label: "" }]); }
  function removeCounter(i: number) { set("counters", data.counters.filter((_, idx) => idx !== i)); }

  // Slider items
  function updateSlider(i: number, f: keyof SliderItem, v: string | boolean) {
    set("sliderItems", data.sliderItems.map((s, idx) => idx === i ? { ...s, [f]: v } : s));
  }
  function addSlider() { set("sliderItems", [...data.sliderItems, { text: "", isStroke: false }]); }
  function removeSlider(i: number) { set("sliderItems", data.sliderItems.filter((_, idx) => idx !== i)); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/about-page", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>About Page</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div style={cardStyle}>
        <h4 style={cardTitle}>Breadcrumb</h4>
        <Field label="Page Title" value={data.breadcrumbTitle} onChange={v => set("breadcrumbTitle", v)} />
      </div>

      {/* ── About Section ── */}
      <div style={cardStyle}>
        <h4 style={cardTitle}>About Section</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label="Subtitle" value={data.aboutSubtitle} onChange={v => set("aboutSubtitle", v)} />
          <Field label="Heading" value={data.aboutHeading} onChange={v => set("aboutHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={data.aboutDescription} onChange={e => set("aboutDescription", e.target.value)} rows={3} style={inputStyle as any} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
          <ImagePicker label="Primary Image" value={data.aboutPrimaryImage} onChange={v => set("aboutPrimaryImage", v)} />
          <ImagePicker label="Secondary Image" value={data.aboutSecondaryImage} onChange={v => set("aboutSecondaryImage", v)} />
        </div>

        <label style={labelStyle}>Checklist Items</label>
        {data.aboutListItems.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input value={item} onChange={e => setListItem(i, e.target.value)} style={{ ...inputStyle, flex: 1 }} placeholder="e.g. Professional Worker" />
            <button onClick={() => removeListItem(i)} style={dangerBtnStyle}>✕</button>
          </div>
        ))}
        <button onClick={addListItem} style={outlineBtnStyle}>+ Add Item</button>
      </div>

      {/* ── Service Dark Section ── */}
      <div style={cardStyle}>
        <h4 style={cardTitle}>Services Section (Dark Background)</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label="Subtitle" value={data.serviceSubtitle} onChange={v => set("serviceSubtitle", v)} />
          <Field label="Heading" value={data.serviceHeading} onChange={v => set("serviceHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description Paragraph 1</label>
          <textarea value={data.serviceDesc1} onChange={e => set("serviceDesc1", e.target.value)} rows={2} style={inputStyle as any} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Description Paragraph 2</label>
          <textarea value={data.serviceDesc2} onChange={e => set("serviceDesc2", e.target.value)} rows={2} style={inputStyle as any} />
        </div>

        {data.services.map((s, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Service Card {i + 1}</span>
              <button onClick={() => removeService(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <ImagePicker label="Icon Image" value={s.img} onChange={v => updateService(i, "img", v)} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
              <Field label="Title" value={s.title} onChange={v => updateService(i, "title", v)} />
              <Field label="Link" value={s.link} onChange={v => updateService(i, "link", v)} />
            </div>
          </div>
        ))}
        <button onClick={addService} style={outlineBtnStyle}>+ Add Service Card</button>
      </div>

      {/* ── Counter Section ── */}
      <div style={cardStyle}>
        <h4 style={cardTitle}>Stats / Counter Section</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label="Subtitle" value={data.counterSubtitle} onChange={v => set("counterSubtitle", v)} />
          <Field label="Heading" value={data.counterHeading} onChange={v => set("counterHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Description</label>
          <textarea value={data.counterDescription} onChange={e => set("counterDescription", e.target.value)} rows={2} style={inputStyle as any} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <ImagePicker label="Section Image" value={data.counterImage} onChange={v => set("counterImage", v)} />
        </div>

        <label style={labelStyle}>Counter Items</label>
        {data.counters.map((c, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto 2fr auto", gap: 10, alignItems: "flex-end", marginBottom: 10 }}>
            <div><label style={{ ...labelStyle, fontSize: 11 }}>Number</label><input type="number" value={c.number} onChange={e => updateCounter(i, "number", Number(e.target.value))} style={inputStyle} /></div>
            <div><label style={{ ...labelStyle, fontSize: 11 }}>Suffix</label><input value={c.suffix} onChange={e => updateCounter(i, "suffix", e.target.value)} style={{ ...inputStyle, width: 56 }} placeholder="+" /></div>
            <div><label style={{ ...labelStyle, fontSize: 11 }}>Label</label><input value={c.label} onChange={e => updateCounter(i, "label", e.target.value)} style={inputStyle} /></div>
            <button onClick={() => removeCounter(i)} style={{ ...dangerBtnStyle, alignSelf: "flex-end" }}>✕</button>
          </div>
        ))}
        <button onClick={addCounter} style={outlineBtnStyle}>+ Add Counter</button>
      </div>

      {/* ── Service Slider Ticker ── */}
      <div style={cardStyle}>
        <h4 style={cardTitle}>Scrolling Text Ticker</h4>
        {data.sliderItems.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <input value={s.text} onChange={e => updateSlider(i, "text", e.target.value)} style={{ ...inputStyle, flex: 1 }} placeholder="Slider text" />
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555", whiteSpace: "nowrap" }}>
              <input type="checkbox" checked={s.isStroke} onChange={e => updateSlider(i, "isStroke", e.target.checked)} />
              Outline style
            </label>
            <button onClick={() => removeSlider(i)} style={dangerBtnStyle}>✕</button>
          </div>
        ))}
        <button onClick={addSlider} style={outlineBtnStyle}>+ Add Item</button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} style={inputStyle} />
    </div>
  );
}

const btnStyle       = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "7px 16px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const dangerBtnStyle  = { padding: "5px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const cardStyle       = { background: "#fff", borderRadius: 10, padding: "22px 24px", border: "1px solid #eee", marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } as const;
const cardTitle       = { margin: "0 0 18px", fontSize: 15, color: "#1a1a2e", borderBottom: "1px solid #f0f0f0", paddingBottom: 12 } as const;
const labelStyle      = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle      = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

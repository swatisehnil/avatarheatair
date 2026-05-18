"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Feature    { img: string; title: string; desc: string }
interface ProcessTab { id: string; label: string; stepLabel: string; heading: string; description: string; image: string }
interface Faq        { question: string; answer: string }

interface Data {
  breadcrumbTitle: string; breadcrumbClass: string;
  aboutSubtitle: string; aboutHeading: string; aboutParagraphs: string[]; aboutImage: string;
  testimonialImage: string; testimonialQuote: string; testimonialSubText: string;
  testimonialAuthorImage: string; testimonialAuthorName: string; testimonialAuthorRole: string;
  ctaTitle: string; ctaButtonText: string; ctaButtonLink: string;
  features: Feature[];
  processSubtitle: string; processHeading: string; processTabs: ProcessTab[];
  faqSubtitle: string; faqHeading: string; faqImage: string;
  happyClientsCount: number; happyClientsLabel: string; happyClientsText: string;
  faqs: Faq[];
}

const empty: Data = {
  breadcrumbTitle: "", breadcrumbClass: "breadcum-info",
  aboutSubtitle: "Designed To Grow Your Business", aboutHeading: "", aboutParagraphs: [], aboutImage: "",
  testimonialImage: "", testimonialQuote: "", testimonialSubText: "",
  testimonialAuthorImage: "", testimonialAuthorName: "", testimonialAuthorRole: "",
  ctaTitle: "Secure Your Service Appointment!", ctaButtonText: "Contact Us", ctaButtonLink: "/contact",
  features: [],
  processSubtitle: "What We Offer", processHeading: "Working Process in 3 Steps", processTabs: [],
  faqSubtitle: "FAQ", faqHeading: "", faqImage: "",
  happyClientsCount: 124, happyClientsLabel: "Happy Clients", happyClientsText: "",
  faqs: [],
};

const BREADCRUMB_CLASSES = ["breadcum-info", "breadcum-img", "breadcum-imgs"];

export default function ServicePageEditor({ slug, title }: { slug: string; title: string }) {
  const [data, setData] = useState<Data>(empty);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`/api/admin/service-pages/${slug}`).then(r => r.json()).then(d => setData({ ...empty, ...d }));
  }, [slug]);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }

  // Paragraphs
  function setParagraph(i: number, v: string) { const a = [...data.aboutParagraphs]; a[i] = v; set("aboutParagraphs", a); }
  function addParagraph() { set("aboutParagraphs", [...data.aboutParagraphs, ""]); }
  function removeParagraph(i: number) { set("aboutParagraphs", data.aboutParagraphs.filter((_, idx) => idx !== i)); }

  // Features
  function updateFeature(i: number, f: keyof Feature, v: string) {
    set("features", data.features.map((x, idx) => idx === i ? { ...x, [f]: v } : x));
  }
  function addFeature() { set("features", [...data.features, { img: "", title: "", desc: "" }]); }
  function removeFeature(i: number) { set("features", data.features.filter((_, idx) => idx !== i)); }

  // Process tabs
  function updateTab(i: number, f: keyof ProcessTab, v: string) {
    set("processTabs", data.processTabs.map((x, idx) => idx === i ? { ...x, [f]: v } : x));
  }
  function addTab() { set("processTabs", [...data.processTabs, { id: `step${data.processTabs.length + 1}`, label: "", stepLabel: `Step ${data.processTabs.length + 1}`, heading: "", description: "", image: "" }]); }
  function removeTab(i: number) { set("processTabs", data.processTabs.filter((_, idx) => idx !== i)); }

  // FAQs
  function updateFaq(i: number, f: keyof Faq, v: string) {
    set("faqs", data.faqs.map((x, idx) => idx === i ? { ...x, [f]: v } : x));
  }
  function addFaq() { set("faqs", [...data.faqs, { question: "", answer: "" }]); }
  function removeFaq(i: number) { set("faqs", data.faqs.filter((_, idx) => idx !== i)); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch(`/api/admin/service-pages/${slug}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 900 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>{title}</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <Section title="Breadcrumb">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Page Title" value={data.breadcrumbTitle} onChange={v => set("breadcrumbTitle", v)} />
          <div>
            <label style={labelStyle}>Background Style</label>
            <select value={data.breadcrumbClass} onChange={e => set("breadcrumbClass", e.target.value)} style={inputStyle}>
              {BREADCRUMB_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </Section>

      {/* ── About / Intro ── */}
      <Section title="Intro Section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label="Subtitle" value={data.aboutSubtitle} onChange={v => set("aboutSubtitle", v)} />
          <Field label="Heading" value={data.aboutHeading} onChange={v => set("aboutHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <ImagePicker label="Side Image" value={data.aboutImage} onChange={v => set("aboutImage", v)} />
        </div>
        <label style={labelStyle}>Description Paragraphs</label>
        {data.aboutParagraphs.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <textarea value={p} onChange={e => setParagraph(i, e.target.value)} rows={2} style={{ ...inputStyle, flex: 1 } as any} />
            <button onClick={() => removeParagraph(i)} style={dangerBtnStyle}>✕</button>
          </div>
        ))}
        <button onClick={addParagraph} style={outlineBtnStyle}>+ Add Paragraph</button>
      </Section>

      {/* ── Testimonial (single) ── */}
      <Section title="Testimonial Block">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
          <ImagePicker label="Left Image" value={data.testimonialImage} onChange={v => set("testimonialImage", v)} />
          <ImagePicker label="Author Photo" value={data.testimonialAuthorImage} onChange={v => set("testimonialAuthorImage", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Quote</label>
          <textarea value={data.testimonialQuote} onChange={e => set("testimonialQuote", e.target.value)} rows={2} style={inputStyle as any} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Sub Text</label>
          <textarea value={data.testimonialSubText} onChange={e => set("testimonialSubText", e.target.value)} rows={2} style={inputStyle as any} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Author Name" value={data.testimonialAuthorName} onChange={v => set("testimonialAuthorName", v)} />
          <Field label="Author Role" value={data.testimonialAuthorRole} onChange={v => set("testimonialAuthorRole", v)} />
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section title="CTA Banner">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 14 }}>
          <Field label="Title" value={data.ctaTitle} onChange={v => set("ctaTitle", v)} />
          <Field label="Button Text" value={data.ctaButtonText} onChange={v => set("ctaButtonText", v)} />
          <Field label="Button Link" value={data.ctaButtonLink} onChange={v => set("ctaButtonLink", v)} />
        </div>
      </Section>

      {/* ── Features ── */}
      <Section title="Feature Cards">
        {data.features.map((f, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Feature {i + 1}</span>
              <button onClick={() => removeFeature(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 2fr", gap: 14, alignItems: "start" }}>
              <div style={{ width: 120 }}>
                <ImagePicker label="Icon" value={f.img} onChange={v => updateFeature(i, "img", v)} />
              </div>
              <Field label="Title" value={f.title} onChange={v => updateFeature(i, "title", v)} />
              <Field label="Description" value={f.desc} onChange={v => updateFeature(i, "desc", v)} />
            </div>
          </div>
        ))}
        <button onClick={addFeature} style={outlineBtnStyle}>+ Add Feature</button>
      </Section>

      {/* ── Process ── */}
      <Section title="Working Process">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
          <Field label="Subtitle" value={data.processSubtitle} onChange={v => set("processSubtitle", v)} />
          <Field label="Heading" value={data.processHeading} onChange={v => set("processHeading", v)} />
        </div>
        {data.processTabs.map((tab, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Step {i + 1}</span>
              <button onClick={() => removeTab(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              <Field label="Tab Label" value={tab.label} onChange={v => updateTab(i, "label", v)} />
              <Field label="Step Label (e.g. Step 1)" value={tab.stepLabel} onChange={v => updateTab(i, "stepLabel", v)} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <Field label="Heading" value={tab.heading} onChange={v => updateTab(i, "heading", v)} />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={labelStyle}>Description</label>
              <textarea value={tab.description} onChange={e => updateTab(i, "description", e.target.value)} rows={3} style={inputStyle as any} />
            </div>
            <ImagePicker label="Step Image" value={tab.image} onChange={v => updateTab(i, "image", v)} />
          </div>
        ))}
        <button onClick={addTab} style={outlineBtnStyle}>+ Add Step</button>
      </Section>

      {/* ── FAQ ── */}
      <Section title="FAQ Section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <Field label="Subtitle" value={data.faqSubtitle} onChange={v => set("faqSubtitle", v)} />
          <Field label="Heading" value={data.faqHeading} onChange={v => set("faqHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <ImagePicker label="Side Image" value={data.faqImage} onChange={v => set("faqImage", v)} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gap: 14, marginBottom: 16 }}>
          <div>
            <label style={labelStyle}>Happy Clients Count</label>
            <input type="number" value={data.happyClientsCount} onChange={e => set("happyClientsCount", Number(e.target.value))} style={inputStyle} />
          </div>
          <Field label="Label" value={data.happyClientsLabel} onChange={v => set("happyClientsLabel", v)} />
          <Field label="Sub Text" value={data.happyClientsText} onChange={v => set("happyClientsText", v)} />
        </div>

        {data.faqs.map((faq, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>FAQ {i + 1}</span>
              <button onClick={() => removeFaq(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Field label="Question" value={faq.question} onChange={v => updateFaq(i, "question", v)} />
            </div>
            <div>
              <label style={labelStyle}>Answer</label>
              <textarea value={faq.answer} onChange={e => updateFaq(i, "answer", e.target.value)} rows={2} style={inputStyle as any} />
            </div>
          </div>
        ))}
        <button onClick={addFaq} style={outlineBtnStyle}>+ Add FAQ</button>
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
      <label style={labelStyle}>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} style={inputStyle} />
    </div>
  );
}

const btnStyle        = { padding: "9px 22px", background: "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" } as const;
const outlineBtnStyle = { padding: "7px 16px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const dangerBtnStyle  = { padding: "5px 12px", background: "#fff", color: "#e74c3c", border: "1px solid #e74c3c", borderRadius: 6, fontSize: 12, cursor: "pointer" } as const;
const labelStyle      = { display: "block" as const, fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 5 };
const inputStyle      = { width: "100%", padding: "9px 12px", border: "1.5px solid #e0e0e0", borderRadius: 7, fontSize: 14, boxSizing: "border-box" as const, outline: "none" };

"use client";

import { useEffect, useState } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface Comment    { image: string; name: string; date: string; text: string }
interface Category   { label: string; link: string }
interface RecentPost { image: string; date: string; title: string; link: string }

interface Data {
  bannerTitle: string; bannerDate: string; bannerComments: string; bannerAuthor: string;
  introText: string; quoteText: string; quoteAuthorName: string; quoteAuthorRole: string;
  subHeading: string; bodyText: string; featureImage1: string; featureImage2: string; bodyText2: string;
  tags: string[]; prevPostLink: string; nextPostLink: string;
  comments: Comment[];
  categories: Category[];
  recentPosts: RecentPost[];
  popularTags: string[];
}

const empty: Data = {
  bannerTitle: "", bannerDate: "", bannerComments: "", bannerAuthor: "",
  introText: "", quoteText: "", quoteAuthorName: "", quoteAuthorRole: "",
  subHeading: "", bodyText: "", featureImage1: "", featureImage2: "", bodyText2: "",
  tags: [], prevPostLink: "#", nextPostLink: "#",
  comments: [], categories: [], recentPosts: [], popularTags: [],
};

export default function BlogPageAdmin() {
  const [data, setData] = useState<Data>(empty);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/blog-page").then(r => r.json()).then(d => setData({ ...empty, ...d }));
  }, []);

  function set(f: keyof Data, v: any) { setData(p => ({ ...p, [f]: v })); }

  // Tags
  function setTag(i: number, v: string) { const a = [...data.tags]; a[i] = v; set("tags", a); }
  function addTag() { set("tags", [...data.tags, ""]); }
  function removeTag(i: number) { set("tags", data.tags.filter((_, idx) => idx !== i)); }

  // Popular tags
  function setPopularTag(i: number, v: string) { const a = [...data.popularTags]; a[i] = v; set("popularTags", a); }
  function addPopularTag() { set("popularTags", [...data.popularTags, ""]); }
  function removePopularTag(i: number) { set("popularTags", data.popularTags.filter((_, idx) => idx !== i)); }

  // Comments
  function updateComment(i: number, f: keyof Comment, v: string) {
    set("comments", data.comments.map((c, idx) => idx === i ? { ...c, [f]: v } : c));
  }
  function addComment() { set("comments", [...data.comments, { image: "", name: "", date: "", text: "" }]); }
  function removeComment(i: number) { set("comments", data.comments.filter((_, idx) => idx !== i)); }

  // Categories
  function updateCategory(i: number, f: keyof Category, v: string) {
    set("categories", data.categories.map((c, idx) => idx === i ? { ...c, [f]: v } : c));
  }
  function addCategory() { set("categories", [...data.categories, { label: "", link: "#" }]); }
  function removeCategory(i: number) { set("categories", data.categories.filter((_, idx) => idx !== i)); }

  // Recent Posts
  function updateRecentPost(i: number, f: keyof RecentPost, v: string) {
    set("recentPosts", data.recentPosts.map((p, idx) => idx === i ? { ...p, [f]: v } : p));
  }
  function addRecentPost() { set("recentPosts", [...data.recentPosts, { image: "", date: "", title: "", link: "#" }]); }
  function removeRecentPost(i: number) { set("recentPosts", data.recentPosts.filter((_, idx) => idx !== i)); }

  async function save() {
    setSaving(true); setMsg("");
    const res = await fetch("/api/admin/blog-page", {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    });
    setSaving(false); setMsg(res.ok ? "✅ Saved!" : "❌ Failed"); setTimeout(() => setMsg(""), 3000);
  }

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: "#1a1a2e" }}>Blog Page</h2>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {msg && <span style={{ fontSize: 14, color: msg.startsWith("✅") ? "#27ae60" : "#e74c3c" }}>{msg}</span>}
          <button onClick={save} disabled={saving} style={btnStyle}>{saving ? "Saving..." : "Save Changes"}</button>
        </div>
      </div>

      {/* ── Banner ── */}
      <Section title="Banner">
        <Field label="Post Title" value={data.bannerTitle} onChange={v => set("bannerTitle", v)} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 14 }}>
          <Field label="Date" value={data.bannerDate} onChange={v => set("bannerDate", v)} />
          <Field label="Comments" value={data.bannerComments} onChange={v => set("bannerComments", v)} />
          <Field label="Author" value={data.bannerAuthor} onChange={v => set("bannerAuthor", v)} />
        </div>
      </Section>

      {/* ── Blog Content ── */}
      <Section title="Blog Content">
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Intro Paragraph (with dropcap)</label>
          <textarea value={data.introText} onChange={e => set("introText", e.target.value)} rows={4} style={inputStyle as any} />
        </div>

        <div style={{ marginBottom: 14, padding: "14px", background: "#fafafa", border: "1px solid #eee", borderRadius: 8 }}>
          <label style={{ ...labelStyle, marginBottom: 10 }}>Quote Block</label>
          <div style={{ marginBottom: 10 }}>
            <label style={labelStyle}>Quote Text</label>
            <textarea value={data.quoteText} onChange={e => set("quoteText", e.target.value)} rows={3} style={inputStyle as any} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Author Name" value={data.quoteAuthorName} onChange={v => set("quoteAuthorName", v)} />
            <Field label="Author Role" value={data.quoteAuthorRole} onChange={v => set("quoteAuthorRole", v)} />
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <Field label="Sub Heading" value={data.subHeading} onChange={v => set("subHeading", v)} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Body Paragraph</label>
          <textarea value={data.bodyText} onChange={e => set("bodyText", e.target.value)} rows={4} style={inputStyle as any} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
          <ImagePicker label="Feature Image 1" value={data.featureImage1} onChange={v => set("featureImage1", v)} />
          <ImagePicker label="Feature Image 2" value={data.featureImage2} onChange={v => set("featureImage2", v)} />
        </div>

        <div>
          <label style={labelStyle}>Closing Paragraph</label>
          <textarea value={data.bodyText2} onChange={e => set("bodyText2", e.target.value)} rows={3} style={inputStyle as any} />
        </div>
      </Section>

      {/* ── Tags & Pagination ── */}
      <Section title="Tags & Pagination">
        <label style={labelStyle}>Post Tags</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
          {data.tags.map((tag, i) => (
            <div key={i} style={{ display: "flex", gap: 4 }}>
              <input value={tag} onChange={e => setTag(i, e.target.value)} style={{ ...inputStyle, width: 120 }} placeholder="Tag" />
              <button onClick={() => removeTag(i)} style={dangerBtnStyle}>✕</button>
            </div>
          ))}
          <button onClick={addTag} style={outlineBtnStyle}>+ Tag</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Previous Post Link" value={data.prevPostLink} onChange={v => set("prevPostLink", v)} />
          <Field label="Next Post Link" value={data.nextPostLink} onChange={v => set("nextPostLink", v)} />
        </div>
      </Section>

      {/* ── Comments ── */}
      <Section title="Comments">
        {data.comments.map((c, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Comment {i + 1}</span>
              <button onClick={() => removeComment(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            {/* Avatar full-width row */}
            <div style={{ marginBottom: 12 }}>
              <ImagePicker label="Avatar" value={c.image} onChange={v => updateComment(i, "image", v)} />
            </div>
            {/* Name + Date side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 12 }}>
              <Field label="Name" value={c.name} onChange={v => updateComment(i, "name", v)} />
              <Field label="Date" value={c.date} onChange={v => updateComment(i, "date", v)} />
            </div>
            {/* Comment text */}
            <div>
              <label style={labelStyle}>Comment Text</label>
              <textarea value={c.text} onChange={e => updateComment(i, "text", e.target.value)} rows={2} style={inputStyle as any} />
            </div>
          </div>
        ))}
        <button onClick={addComment} style={outlineBtnStyle}>+ Add Comment</button>
      </Section>

      {/* ── Sidebar ── */}
      <Section title="Sidebar — Categories">
        {data.categories.map((c, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr auto", gap: 10, marginBottom: 8, alignItems: "flex-end" }}>
            <Field label={i === 0 ? "Category Name" : ""} value={c.label} onChange={v => updateCategory(i, "label", v)} />
            <Field label={i === 0 ? "Link" : ""} value={c.link} onChange={v => updateCategory(i, "link", v)} />
            <button onClick={() => removeCategory(i)} style={{ ...dangerBtnStyle, alignSelf: "flex-end" }}>✕</button>
          </div>
        ))}
        <button onClick={addCategory} style={outlineBtnStyle}>+ Add Category</button>
      </Section>

      <Section title="Sidebar — Recent Posts">
        {data.recentPosts.map((p, i) => (
          <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontWeight: 600, fontSize: 13 }}>Recent Post {i + 1}</span>
              <button onClick={() => removeRecentPost(i)} style={dangerBtnStyle}>Remove</button>
            </div>
            {/* Thumbnail full-width row */}
            <div style={{ marginBottom: 12 }}>
              <ImagePicker label="Thumbnail" value={p.image} onChange={v => updateRecentPost(i, "image", v)} />
            </div>
            {/* Date + Title side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 12 }}>
              <Field label="Date" value={p.date} onChange={v => updateRecentPost(i, "date", v)} />
              <Field label="Title" value={p.title} onChange={v => updateRecentPost(i, "title", v)} />
            </div>
            {/* Link full width */}
            <Field label="Link" value={p.link} onChange={v => updateRecentPost(i, "link", v)} />
          </div>
        ))}
        <button onClick={addRecentPost} style={outlineBtnStyle}>+ Add Recent Post</button>
      </Section>

      <Section title="Sidebar — Popular Tags">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {data.popularTags.map((tag, i) => (
            <div key={i} style={{ display: "flex", gap: 4 }}>
              <input value={tag} onChange={e => setPopularTag(i, e.target.value)} style={{ ...inputStyle, width: 120 }} placeholder="Tag" />
              <button onClick={() => removePopularTag(i)} style={dangerBtnStyle}>✕</button>
            </div>
          ))}
          <button onClick={addPopularTag} style={outlineBtnStyle}>+ Tag</button>
        </div>
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

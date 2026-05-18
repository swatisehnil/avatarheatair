"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  value: string;
  onChange: (path: string) => void;
  label?: string;
}

export default function ImagePicker({ value, onChange, label = "Image" }: Props) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [groups, setGroups] = useState<Record<string, string[]>>({});
  const [activeFolder, setActiveFolder] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch("/api/admin/images")
      .then(r => r.json())
      .then(d => { setImages(d.images ?? []); setGroups(d.groups ?? {}); })
      .finally(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json();
      if (res.ok && data.path) {
        onChange(data.path);
        if (open) {
          const r = await fetch("/api/admin/images");
          const d = await r.json();
          setImages(d.images ?? []);
          setGroups(d.groups ?? {});
        }
      }
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  const folders = ["all", ...Object.keys(groups).sort()];
  const displayed = (activeFolder === "all" ? images : (groups[activeFolder] ?? []))
    .filter(img => !search || img.toLowerCase().includes(search.toLowerCase()));

  function select(img: string) {
    onChange(img);
    setOpen(false);
    setSearch("");
  }

  return (
    <div style={{ marginBottom: 4 }}>
      {label && <label style={S.label}>{label}</label>}

      <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileUpload} />

      {value ? (
        /* ── Selected state ── */
        <div style={S.selectedCard}>
          {/* Thumbnail */}
          <div style={S.thumb}>
            <img
              src={value}
              alt="preview"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 8 }}
              onError={e => {
                (e.currentTarget as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect fill='%23eee' width='72' height='72' rx='8'/%3E%3Ctext x='50%25' y='50%25' font-size='9' text-anchor='middle' fill='%23aaa' dy='.3em'%3Eno img%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Info + actions */}
          <div style={S.selectedInfo}>
            <div style={S.filename} title={value}>
              {value.split("/").pop()}
            </div>
            <div style={S.btnRow}>
              <button type="button" onClick={() => fileInputRef.current?.click()} style={S.btnSecondary} disabled={uploading}>
                {uploading ? "Uploading…" : "Replace"}
              </button>
              <button type="button" onClick={() => setOpen(true)} style={S.btnSecondary}>
                Gallery
              </button>
              <button type="button" onClick={() => onChange("")} style={S.btnDanger}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ── Empty state ── */
        <div style={S.emptyCard}>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            style={S.uploadBtn}
            disabled={uploading}
          >
            <span style={{ fontSize: 28, lineHeight: 1, color: "#DB7C37" }}>↑</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#DB7C37" }}>
              {uploading ? "Uploading…" : "Upload Image"}
            </span>
            <span style={{ fontSize: 11, color: "#999" }}>JPG, PNG, GIF, WEBP</span>
          </button>

          <div style={S.orDivider}>
            <span style={S.orLine} />
            <span style={S.orText}>or</span>
            <span style={S.orLine} />
          </div>

          <button type="button" onClick={() => setOpen(true)} style={S.galleryBtn}>
            <span style={{ fontSize: 22 }}>🖼️</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>Choose Existing</span>
            <span style={{ fontSize: 11, color: "#999" }}>Browse media library</span>
          </button>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div style={S.overlay}>
          <div ref={modalRef} style={S.modal}>
            {/* Header */}
            <div style={S.modalHeader}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>Choose Image</h3>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => { setOpen(false); setTimeout(() => fileInputRef.current?.click(), 50); }}
                  style={S.btnSecondary}
                >
                  Upload New
                </button>
                <button onClick={() => setOpen(false)} style={S.closeBtn}>✕</button>
              </div>
            </div>

            {/* Search */}
            <input
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search images…"
              style={S.searchInput}
            />

            {/* Folder tabs */}
            <div style={S.folderRow}>
              {folders.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFolder(f)}
                  style={{
                    ...S.folderTab,
                    background: activeFolder === f ? "#DB7C37" : "#f5f5f5",
                    color: activeFolder === f ? "#fff" : "#555",
                    border: activeFolder === f ? "none" : "1px solid #e5e5e5",
                  }}
                >
                  {f === "all" ? `All (${images.length})` : `${f.split("/").pop()} (${(groups[f] ?? []).length})`}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
              {loading ? (
                <div style={S.emptyMsg}>Loading images…</div>
              ) : displayed.length === 0 ? (
                <div style={S.emptyMsg}>No images found</div>
              ) : (
                <div style={S.imgGrid}>
                  {displayed.map(img => {
                    const sel = img === value;
                    return (
                      <div
                        key={img}
                        onClick={() => select(img)}
                        title={img}
                        style={{
                          cursor: "pointer",
                          borderRadius: 8,
                          overflow: "hidden",
                          border: sel ? "2.5px solid #DB7C37" : "2px solid transparent",
                          background: "#f5f5f5",
                          position: "relative",
                          boxShadow: sel ? "0 0 0 3px rgba(219,124,55,0.25)" : "none",
                          transition: "border 0.15s",
                        }}
                        onMouseEnter={e => { if (!sel) (e.currentTarget as HTMLDivElement).style.border = "2px solid #ccc"; }}
                        onMouseLeave={e => { if (!sel) (e.currentTarget as HTMLDivElement).style.border = "2px solid transparent"; }}
                      >
                        <img
                          src={img}
                          alt=""
                          style={{ width: "100%", height: 80, objectFit: "cover", display: "block" }}
                          onError={e => {
                            (e.currentTarget as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23eee' width='80' height='80'/%3E%3Ctext x='50%25' y='50%25' font-size='10' text-anchor='middle' fill='%23999' dy='.3em'%3Eno img%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        {sel && (
                          <div style={{ position: "absolute", top: 5, right: 5, background: "#DB7C37", color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>✓</div>
                        )}
                        <div style={{ padding: "3px 5px", fontSize: 10, color: "#666", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", background: "#fff" }}>
                          {img.split("/").pop()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={S.modalFooter}>
              <span style={{ fontSize: 12, color: "#aaa" }}>{displayed.length} image{displayed.length !== 1 ? "s" : ""}</span>
              <button onClick={() => setOpen(false)} style={S.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#444",
    marginBottom: 6,
  } as React.CSSProperties,

  /* Selected state card */
  selectedCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: "12px 14px",
    border: "1.5px solid #e0e0e0",
    borderRadius: 10,
    background: "#fafafa",
  } as React.CSSProperties,

  thumb: {
    flexShrink: 0,
    width: 72,
    height: 72,
    borderRadius: 8,
    overflow: "hidden",
    border: "1.5px solid #e8e8e8",
    background: "#f0f0f0",
  } as React.CSSProperties,

  selectedInfo: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  } as React.CSSProperties,

  filename: {
    fontSize: 12,
    color: "#555",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } as React.CSSProperties,

  btnRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 6,
  } as React.CSSProperties,

  /* Empty state card */
  emptyCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: 0,
    border: "1.5px solid #e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    background: "#fff",
  } as React.CSSProperties,

  uploadBtn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    padding: "18px 16px",
    border: "none",
    borderRight: "1.5px solid #e0e0e0",
    background: "#fff8f3",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: 1.4,
  } as React.CSSProperties,

  orDivider: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    background: "#fff",
    gap: 4,
    flexShrink: 0,
  } as React.CSSProperties,

  orLine: {
    display: "block",
    width: 1,
    flex: 1,
    background: "#e0e0e0",
  } as React.CSSProperties,

  orText: {
    fontSize: 11,
    color: "#bbb",
    fontWeight: 600,
    lineHeight: 1,
  } as React.CSSProperties,

  galleryBtn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    padding: "18px 16px",
    border: "none",
    background: "#fff",
    cursor: "pointer",
    textAlign: "center",
    lineHeight: 1.4,
  } as React.CSSProperties,

  /* Shared buttons */
  btnSecondary: {
    padding: "5px 12px",
    background: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    color: "#333",
    whiteSpace: "nowrap",
    lineHeight: 1.4,
  } as React.CSSProperties,

  btnDanger: {
    padding: "5px 12px",
    background: "#fff5f5",
    border: "1px solid #fca5a5",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    color: "#dc2626",
    whiteSpace: "nowrap",
    lineHeight: 1.4,
  } as React.CSSProperties,

  /* Modal */
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  } as React.CSSProperties,

  modal: {
    background: "#fff",
    borderRadius: 14,
    padding: 22,
    width: "100%",
    maxWidth: 680,
    maxHeight: "88vh",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
  } as React.CSSProperties,

  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  } as React.CSSProperties,

  searchInput: {
    padding: "9px 12px",
    border: "1.5px solid #e0e0e0",
    borderRadius: 7,
    fontSize: 13,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
  } as React.CSSProperties,

  folderRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    flexShrink: 0,
  } as React.CSSProperties,

  folderTab: {
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    lineHeight: 1.5,
  } as React.CSSProperties,

  imgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
    gap: 8,
    padding: 2,
  } as React.CSSProperties,

  emptyMsg: {
    textAlign: "center",
    padding: 48,
    color: "#aaa",
    fontSize: 13,
  } as React.CSSProperties,

  modalFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTop: "1px solid #f0f0f0",
    flexShrink: 0,
  } as React.CSSProperties,

  cancelBtn: {
    padding: "7px 20px",
    background: "#f5f5f5",
    border: "none",
    borderRadius: 7,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    color: "#333",
  } as React.CSSProperties,

  closeBtn: {
    background: "none",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    color: "#999",
    lineHeight: 1,
    padding: "2px 6px",
    borderRadius: 4,
  } as React.CSSProperties,
};

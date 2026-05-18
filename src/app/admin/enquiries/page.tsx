"use client";

import { useEffect, useState } from "react";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading]     = useState(true);
  const [filter, setFilter]       = useState<"all" | "unread" | "read">("all");

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/enquiries");
    const data = await res.json();
    setEnquiries(data);
    setLoading(false);
  }

  async function markRead(id: string) {
    await fetch(`/api/admin/enquiries/${id}`, { method: "PATCH" });
    setEnquiries(prev => prev.map(e => e._id === id ? { ...e, read: true } : e));
  }

  async function remove(id: string) {
    if (!confirm("Delete this enquiry?")) return;
    await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    setEnquiries(prev => prev.filter(e => e._id !== id));
  }

  const filtered = enquiries.filter(e =>
    filter === "all" ? true : filter === "unread" ? !e.read : e.read
  );

  const unreadCount = enquiries.filter(e => !e.read).length;

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h2 style={{ margin: 0, color: "#1a1a2e" }}>Enquiries</h2>
          {unreadCount > 0 && (
            <span style={{ background: "#DB7C37", color: "#fff", borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>
              {unreadCount} new
            </span>
          )}
        </div>
        <button onClick={load} style={outlineBtnStyle}>↻ Refresh</button>
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {(["all", "unread", "read"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 18px", borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: "pointer",
              background: filter === f ? "#DB7C37" : "#f5f5f5",
              color: filter === f ? "#fff" : "#555",
              border: filter === f ? "none" : "1px solid #e0e0e0",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === "unread" && unreadCount > 0 ? ` (${unreadCount})` : ""}
          </button>
        ))}
      </div>

      {/* List */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 60, color: "#aaa" }}>Loading…</div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#aaa", background: "#fff", borderRadius: 10, border: "1px solid #eee" }}>
          No enquiries found.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map(e => (
            <div
              key={e._id}
              style={{
                background: "#fff",
                border: e.read ? "1px solid #eee" : "1.5px solid #DB7C37",
                borderRadius: 10,
                padding: "18px 22px",
                boxShadow: e.read ? "0 2px 8px rgba(0,0,0,0.04)" : "0 2px 12px rgba(219,124,55,0.12)",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "#DB7C37", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 700, flexShrink: 0,
                  }}>
                    {e.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e" }}>{e.name}</span>
                      {!e.read && (
                        <span style={{ background: "#DB7C37", color: "#fff", borderRadius: 10, padding: "1px 8px", fontSize: 10, fontWeight: 700 }}>NEW</span>
                      )}
                    </div>
                    <a href={`mailto:${e.email}`} style={{ fontSize: 13, color: "#DB7C37", textDecoration: "none" }}>{e.email}</a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: "#aaa" }}>
                    {new Date(e.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </span>
                  {!e.read && (
                    <button onClick={() => markRead(e._id)} style={markReadBtnStyle}>Mark as Read</button>
                  )}
                  <button onClick={() => remove(e._id)} style={deleteBtnStyle}>Delete</button>
                </div>
              </div>

              {/* Message */}
              <div style={{
                fontSize: 14, color: "#444", lineHeight: 1.7,
                background: "#fafafa", borderRadius: 7, padding: "10px 14px",
                borderLeft: "3px solid #e0e0e0",
              }}>
                {e.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const outlineBtnStyle = { padding: "7px 16px", background: "transparent", color: "#DB7C37", border: "2px solid #DB7C37", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" } as const;
const markReadBtnStyle = { padding: "4px 12px", background: "#f0fdf4", color: "#166534", border: "1px solid #86efac", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" } as const;
const deleteBtnStyle   = { padding: "4px 12px", background: "#fff5f5", color: "#dc2626", border: "1px solid #fca5a5", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" } as const;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password. Please try again.");
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a1a2e" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: "40px 48px", width: "100%", maxWidth: 420, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Image src="/assets/img/logo-1.png" alt="Logo" width={160} height={50} style={{ objectFit: "contain" }} />
          <h2 style={{ marginTop: 16, color: "#1a1a2e", fontSize: 22, fontWeight: 700 }}>Admin Panel</h2>
          <p style={{ color: "#666", fontSize: 14, marginTop: 4 }}>Sign in to manage your content</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 6 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #ddd", borderRadius: 8, fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color .2s" }}
              onFocus={e => e.target.style.borderColor = "#DB7C37"}
              onBlur={e => e.target.style.borderColor = "#ddd"}
            />
          </div>
          {error && (
            <div style={{ background: "#fff3f3", border: "1px solid #f5c6cb", color: "#c0392b", padding: "10px 14px", borderRadius: 8, fontSize: 14, marginBottom: 16 }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{ width: "100%", padding: "12px", background: loading ? "#e8a87c" : "#DB7C37", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", transition: "background .2s" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(f: keyof typeof form, v: string) {
    setForm(p => ({ ...p, [f]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => set("name", e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => set("email", e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          cols={30}
          rows={10}
          value={form.message}
          onChange={e => set("message", e.target.value)}
          required
        />

        {status === "success" && (
          <div style={{ padding: "10px 14px", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 7, color: "#166534", fontSize: 14, marginBottom: 12 }}>
            ✅ Your message has been sent! We will get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div style={{ padding: "10px 14px", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 7, color: "#991b1b", fontSize: 14, marginBottom: 12 }}>
            ❌ Something went wrong. Please try again.
          </div>
        )}

        <input
          type="submit"
          value={status === "sending" ? "Sending…" : "Send Message"}
          disabled={status === "sending"}
          style={status === "sending" ? { opacity: 0.7, cursor: "not-allowed" } : {}}
        />
      </form>
    </div>
  );
}

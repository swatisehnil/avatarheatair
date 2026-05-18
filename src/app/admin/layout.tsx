"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const homePageSections = [
  { label: "Hero Slider",    href: "/admin/hero",         icon: "🖼️" },
  { label: "About",          href: "/admin/about",        icon: "ℹ️" },
  { label: "Services",       href: "/admin/services",     icon: "🔧" },
  { label: "Projects",       href: "/admin/projects",     icon: "📁" },
  { label: "Promo / Skills", href: "/admin/promo",        icon: "📊" },
  { label: "Video",          href: "/admin/video",        icon: "▶️" },
  { label: "Testimonials",   href: "/admin/testimonials", icon: "💬" },
  { label: "Team",           href: "/admin/team",         icon: "👥" },
  { label: "Blog",           href: "/admin/blog",         icon: "📝" },
];

const staticPages = [
  { label: "About Page", href: "/admin/about-page", icon: "📄" },
];

const contactPages = [
  { label: "Contact Page", href: "/admin/contact-page", icon: "📞" },
];

const blogPages = [
  { label: "Blog Page", href: "/admin/blog-page", icon: "📰" },
];

const servicePages = [
  { label: "Heating System",   href: "/admin/service-pages/heating-system",   icon: "🔥" },
  { label: "Air Conditioning", href: "/admin/service-pages/air-conditioning", icon: "❄️" },
  { label: "Plumbing",         href: "/admin/service-pages/plumbing",         icon: "🚿" },
];

const allNavLabels: Record<string, string> = {
  "/admin":              "Dashboard",
  "/admin/settings":     "Site Settings",
  "/admin/enquiries":    "Enquiries",
  ...Object.fromEntries(homePageSections.map(s => [s.href, s.label])),
  ...Object.fromEntries(staticPages.map(s => [s.href, s.label])),
  ...Object.fromEntries(blogPages.map(s => [s.href, s.label])),
  ...Object.fromEntries(servicePages.map(s => [s.href, s.label])),
  ...Object.fromEntries(contactPages.map(s => [s.href, s.label])),
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();

  const isHomeSection    = homePageSections.some(s => s.href === pathname);
  const isStaticSection  = staticPages.some(s => s.href === pathname);
  const isBlogSection    = blogPages.some(s => s.href === pathname);
  const isServiceSection = servicePages.some(s => s.href === pathname);
  const isContactSection = contactPages.some(s => s.href === pathname);

  const [homeOpen,     setHomeOpen]     = useState(isHomeSection);
  const [pagesOpen,    setPagesOpen]    = useState(isStaticSection);
  const [blogOpen,     setBlogOpen]     = useState(isBlogSection);
  const [servicesOpen, setServicesOpen] = useState(isServiceSection);
  const [contactOpen,  setContactOpen]  = useState(isContactSection);

  useEffect(() => {
    if (isHomeSection)    setHomeOpen(true);
    if (isStaticSection)  setPagesOpen(true);
    if (isBlogSection)    setBlogOpen(true);
    if (isServiceSection) setServicesOpen(true);
    if (isContactSection) setContactOpen(true);
  }, [pathname, isHomeSection, isStaticSection, isBlogSection, isServiceSection, isContactSection]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  if (pathname === "/admin/login") return <>{children}</>;

  const pageTitle = allNavLabels[pathname] ?? "Admin";

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sidebar ── */}
      <aside style={{ width: 240, background: "#1a1a2e", color: "#fff", display: "flex", flexDirection: "column", flexShrink: 0 }}>

        <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <Image src="/assets/img/white-logo.png" alt="Logo" width={140} height={44} style={{ objectFit: "contain" }} />
          <p style={{ fontSize: 11, color: "#aaa", marginTop: 6, letterSpacing: 1, textTransform: "uppercase" }}>Content Manager</p>
        </div>

        <nav style={{ flex: 1, padding: "12px 0", overflowY: "auto" }}>

          <NavLink href="/admin" label="Dashboard" icon="🏠" active={pathname === "/admin"} />

          {/* Home Page */}
          <Dropdown
            icon="🏡" label="Home Page"
            open={homeOpen} onToggle={() => setHomeOpen(o => !o)}
            active={isHomeSection}
          >
            {homePageSections.map(item => (
              <DropdownLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </Dropdown>

          {/* About */}
          <Dropdown
            icon="📑" label="About"
            open={pagesOpen} onToggle={() => setPagesOpen(o => !o)}
            active={isStaticSection}
          >
            {staticPages.map(item => (
              <DropdownLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </Dropdown>

          {/* Blog */}
          <Dropdown
            icon="📰" label="Blog"
            open={blogOpen} onToggle={() => setBlogOpen(o => !o)}
            active={isBlogSection}
          >
            {blogPages.map(item => (
              <DropdownLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </Dropdown>

          {/* Contact */}
          <Dropdown
            icon="📞" label="Contact"
            open={contactOpen} onToggle={() => setContactOpen(o => !o)}
            active={isContactSection}
          >
            {contactPages.map(item => (
              <DropdownLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </Dropdown>

          {/* Service Pages */}
          <Dropdown
            icon="🛠️" label="Service Pages"
            open={servicesOpen} onToggle={() => setServicesOpen(o => !o)}
            active={isServiceSection}
          >
            {servicePages.map(item => (
              <DropdownLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </Dropdown>

          <NavLink href="/admin/enquiries" label="Enquiries" icon="✉️" active={pathname === "/admin/enquiries"} />

          <NavLink href="/admin/settings" label="Site Settings" icon="⚙️" active={pathname === "/admin/settings"} />

        </nav>

        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button
            onClick={handleLogout}
            style={{ width: "100%", padding: "9px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 7, fontSize: 13, cursor: "pointer" }}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#f5f6fa" }}>
        <header style={{ background: "#fff", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e9ecef", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e", margin: 0 }}>{pageTitle}</h1>
          <a href="/" target="_blank" style={{ fontSize: 13, color: "#DB7C37", textDecoration: "none", fontWeight: 500 }}>View Site →</a>
        </header>
        <main style={{ flex: 1, padding: 32, overflowY: "auto" }}>{children}</main>
      </div>
    </div>
  );
}

/* ── Reusable components ── */

function NavLink({ href, label, icon, active }: { href: string; label: string; icon: string; active: boolean }) {
  return (
    <Link href={href} style={{
      display: "flex", alignItems: "center", gap: 10, padding: "10px 20px",
      color: active ? "#DB7C37" : "#ccc",
      background: active ? "rgba(219,124,55,0.12)" : "transparent",
      borderLeft: active ? "3px solid #DB7C37" : "3px solid transparent",
      textDecoration: "none", fontSize: 14, fontWeight: active ? 600 : 400, transition: "all .15s",
    }}>
      <span>{icon}</span><span>{label}</span>
    </Link>
  );
}

function Dropdown({ icon, label, open, onToggle, active, children }: {
  icon: string; label: string; open: boolean; onToggle: () => void; active: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <button onClick={onToggle} style={{
        display: "flex", alignItems: "center", gap: 10, padding: "10px 20px",
        width: "100%", background: active ? "rgba(219,124,55,0.12)" : "transparent",
        border: "none", borderLeft: active ? "3px solid #DB7C37" : "3px solid transparent",
        color: active ? "#DB7C37" : "#ccc",
        fontSize: 14, fontWeight: active ? 600 : 400,
        cursor: "pointer", textAlign: "left", transition: "all .15s",
      }}>
        <span>{icon}</span>
        <span style={{ flex: 1 }}>{label}</span>
        <span style={{ fontSize: 10, display: "inline-block", transition: "transform .2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
      </button>
      {open && (
        <div style={{ background: "rgba(0,0,0,0.2)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownLink({ item, active }: { item: { href: string; label: string; icon: string }; active: boolean }) {
  return (
    <Link href={item.href} style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "9px 20px 9px 36px",
      color: active ? "#DB7C37" : "#aaa",
      background: active ? "rgba(219,124,55,0.1)" : "transparent",
      borderLeft: active ? "3px solid #DB7C37" : "3px solid transparent",
      textDecoration: "none", fontSize: 13, fontWeight: active ? 600 : 400,
      transition: "all .15s", marginLeft: -3,
    }}>
      <span style={{ fontSize: 13 }}>{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

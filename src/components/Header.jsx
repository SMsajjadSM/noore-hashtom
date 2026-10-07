import { useState } from "react";
import { SunIcon, MoonIcon, PhoneIcon } from "./icons";
import { LOGO_SRC } from "../data/contact";

const LINKS = [
  { href: "#home", label: "خانه" },
  { href: "#products", label: "محصولات" },
  { href: "#about", label: "درباره ما" },
  { href: "#contact", label: "تماس" },
];

function BrandLogo() {
  const [failed, setFailed] = useState(false);

  if (!LOGO_SRC || failed) {
    return (
      <span className="font-display text-2xl" style={{ color: "var(--primary-strong)" }}>
        نور هشتم
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="نور هشتم"
      className="brand-logo"
      onError={() => setFailed(true)}
    />
  );
}

export default function Header({ theme, toggle, onOpenModal }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-px mx-auto flex items-center justify-between py-2 max-w-6xl">
        <a href="#home" className="flex items-center gap-2">
          <BrandLogo />
        </a>

        <nav
          aria-label="ناوبری اصلی"
          className="hidden md:flex items-center gap-8 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="تغییر پوسته"
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => onOpenModal(null)}
            className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
          >
            <PhoneIcon size={16} /> تماس
          </button>

          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            onClick={() => setOpen((o) => !o)}
            aria-label="منو"
            aria-expanded={open}
          >
            <span className={`burger ${open ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <div className={`md:hidden mobile-nav ${open ? "open" : ""}`}>
        <div
          className="container-px pb-4 flex flex-col gap-3 max-w-6xl mx-auto"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="pt-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

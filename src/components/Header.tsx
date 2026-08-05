"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "#home"],
  ["Solutions", "#solutions"],
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["Why Us", "#why-us"],
  ["Process", "#process"],
  ["Contact", "#contact"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnWideScreen = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", closeOnWideScreen);
    return () => window.removeEventListener("resize", closeOnWideScreen);
  }, []);

  return (
    <header className="site-header">
      <div className="shell flex h-[78px] items-center justify-between gap-5">
        <a aria-label="Comwerkz home" className="brand" href="#home">
          <span>Comwerkz</span>
          <small>Technology P.L.</small>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-primary desktop-cta" href="#contact">
          Request a Site Survey
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="menu-button lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={28} />}
        </button>
      </div>

      <div className={`mobile-menu lg:hidden ${open ? "is-open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="shell py-5">
          {navigation.map(([label, href]) => (
            <a className="mobile-nav-link" href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-primary mt-4 w-full justify-center" href="#contact" onClick={() => setOpen(false)}>
            Request a Site Survey
          </a>
        </nav>
      </div>
    </header>
  );
}

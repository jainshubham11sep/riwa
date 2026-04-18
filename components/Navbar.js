"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-all ${
        scrolled ? "border-b border-stone" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="display text-[28px] leading-none tracking-tight">Riwa</span>
          <span className="eyebrow text-[10px]">India</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-[13px] tracking-wide ${
                  active ? "active font-medium" : "text-ink/80 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-ink !py-2 !px-4 !text-[11px]">
            Inquire
          </Link>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`h-[1.5px] bg-ink transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] bg-ink transition-transform ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x pb-8 pt-2 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="display text-3xl tracking-tight"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-ink w-fit mt-2">
            Inquire now
          </Link>
        </div>
      </div>
    </header>
  );
}

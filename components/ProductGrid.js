"use client";

import { useState, useEffect } from "react";

const PRODUCTS = [
  { name: "Tops", image: "/images/Tops.jpeg" },
  { name: "Tops", image: "/images/Tops_2.jpeg" },
  { name: "Dresses", image: "/images/Dresses.jpeg" },
  { name: "Dresses", image: "/images/Dresses2.jpeg" },
  { name: "Jackets", image: "/images/Jackets.jpeg" },
  { name: "Menswear", image: "/images/Menswear.png" },
  { name: "Kidswear", image: "/images/Kidswear.jpeg" },
  { name: "Bags", image: "/images/Bags.jpeg" },
  { name: "Scarves & Accessories", image: "/images/Scarves%20%26%20Accessories.jpeg" },
  { name: "Wash Bags & Accessories", image: "/images/Wash%20bags%20%26%20Accessories.jpeg" },
  { name: "Bedding Sets", image: "/images/Bedding%20Sets.jpeg" },
  { name: "Table Linens", image: "/images/Table%20Linens.jpeg" },
  { name: "Table Linens", image: "/images/Table%20Linens%202.jpeg" },
  { name: "Curtains", image: "/images/Curtains.jpeg" },
];

export default function ProductGrid() {
  const [active, setActive] = useState(null); // { src, name, index }

  // Close on Escape key
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const prev = () =>
    setActive((a) => PRODUCTS[(a.index - 1 + PRODUCTS.length) % PRODUCTS.length]
      ? { ...PRODUCTS[(a.index - 1 + PRODUCTS.length) % PRODUCTS.length], index: (a.index - 1 + PRODUCTS.length) % PRODUCTS.length }
      : a);

  const next = () =>
    setActive((a) => PRODUCTS[(a.index + 1) % PRODUCTS.length]
      ? { ...PRODUCTS[(a.index + 1) % PRODUCTS.length], index: (a.index + 1) % PRODUCTS.length }
      : a);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PRODUCTS.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="group reveal-on-view cursor-zoom-in"
            style={{ transitionDelay: `${i * 40}ms` }}
            onClick={() => setActive({ ...p, index: i })}
          >
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-3">
              <p className="display text-xl">{p.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={() => setActive(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none z-10"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.name}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <p className="mt-3 text-white/80 text-sm tracking-widest uppercase">
              {active.name}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function SubcategoryGallery({ subcategories }) {
  const [active, setActive] = useState(null); // { image, name, flatIndex }

  const flat = subcategories.flatMap((s) =>
    s.images.map((image) => ({ image, name: s.name }))
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const prev = () =>
    setActive((a) => {
      const i = (a.flatIndex - 1 + flat.length) % flat.length;
      return { ...flat[i], flatIndex: i };
    });

  const next = () =>
    setActive((a) => {
      const i = (a.flatIndex + 1) % flat.length;
      return { ...flat[i], flatIndex: i };
    });

  let flatIdx = 0;

  return (
    <>
      <div className="space-y-16">
        {subcategories.map((sub) => {
          const startIdx = flatIdx;
          flatIdx += sub.images.length;

          // Pick column count based on number of images
          const cols =
            sub.images.length === 1
              ? "grid-cols-1 md:grid-cols-2"
              : sub.images.length === 2
              ? "grid-cols-2"
              : "grid-cols-2 md:grid-cols-3";

          return (
            <div key={sub.name}>
              {/* Subcategory heading */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="display text-2xl md:text-3xl">{sub.name}</h3>
                <span className="flex-1 h-px bg-stone" />
              </div>

              {/* Images */}
              <div className={`grid ${cols} gap-4 md:gap-6`}>
                {sub.images.map((src, imgIdx) => {
                  const fi = startIdx + imgIdx;
                  return (
                    <div
                      key={src}
                      className="group cursor-zoom-in"
                      onClick={() =>
                        setActive({ image: src, name: sub.name, flatIndex: fi })
                      }
                    >
                      <div className="overflow-hidden aspect-[3/4]">
                        <img
                          src={src}
                          alt={sub.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none z-10"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
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

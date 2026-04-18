"use client";

import { useState } from "react";
import { FALLBACK_IMAGE } from "@/lib/data";

/* Lightweight image wrapper that uses plain <img> so we don't depend on
   Next/Image optimization and external loaders. Falls back to a known-good
   image if the original URL fails to load. */
export default function Img({ src, alt, className = "", ratio = "aspect-[4/5]" }) {
  const [current, setCurrent] = useState(src);
  return (
    <div className={`img-zoom ${ratio} ${className} bg-stone/40`}>
      <img
        src={current}
        alt={alt}
        loading="lazy"
        onError={() => {
          if (current !== FALLBACK_IMAGE) setCurrent(FALLBACK_IMAGE);
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

import Link from "next/link";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
import ProductGrid from "@/components/ProductGrid";
import { CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Products",
  description:
    "Explore Riwa India's product range — womenswear, menswear, kidswear, accessories, home furnishings and more.",
};

export default function ProductsIndex() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <p className="eyebrow fade-up">Products</p>
        <h1 className="display text-5xl md:text-7xl mt-4 leading-[1.03] fade-up-2 max-w-4xl">
          Six categories. One quality standard.
        </h1>
        <p className="mt-6 max-w-2xl text-ink/70 md:text-lg leading-relaxed fade-up-3">
          Every product at Riwa India is manufactured in accordance with
          international export standards — whether you need a 300‑unit capsule
          or a full seasonal programme.
        </p>
      </section>

      {/* Category cards */}
      <section className="bg-bone">
        <div className="container-x py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group reveal-on-view block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Img src={c.image} alt={c.name} ratio="aspect-[4/5]" />
                <div className="mt-4 flex items-baseline justify-between">
                  <h2 className="display text-xl md:text-2xl">{c.name}</h2>
                  <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    View →
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-ink/60 leading-relaxed">{c.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product image grid with lightbox */}
      <section className="container-x py-20">
        <SectionHeader
          eyebrow="Browse by item"
          title="All products."
        />
        <div className="mt-12">
          <ProductGrid />
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-x py-20">
          <SectionHeader
            eyebrow="Not sure where to start?"
            title="We'll guide you to the right programme."
            subtitle="Send us your references and target quantities — we'll recommend fabrics, prints and timelines that fit your brand."
          />
          <div className="mt-8">
            <Link href="/contact" className="btn-ink">Talk to our team</Link>
          </div>
        </div>
      </section>
    </>
  );
}

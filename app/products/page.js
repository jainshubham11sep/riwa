import Link from "next/link";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
import { CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Products",
  description:
    "Explore Riwa India's six product verticals — womenswear, menswear, kidswear, accessories, home furnishings and printed fabrics.",
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

      <section className="container-x pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group reveal-on-view"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Img src={c.image} alt={c.name} ratio="aspect-[4/5]" />
              <div className="mt-5 flex items-baseline justify-between">
                <h2 className="display text-3xl">{c.name}</h2>
                <span className="eyebrow opacity-70 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
              <p className="mt-2 text-ink/70">{c.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <SectionHeader
          eyebrow="Not sure where to start?"
          title="We'll guide you to the right programme."
          subtitle="Send us your references and target quantities — we'll recommend fabrics, prints and timelines that fit your brand."
        />
        <div className="mt-8">
          <Link href="/contact" className="btn-ink">Talk to our team</Link>
        </div>
      </section>
    </>
  );
}

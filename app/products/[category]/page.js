import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
import SubcategoryGallery from "@/components/SubcategoryGallery";
import { CATEGORIES } from "@/lib/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const c = CATEGORIES.find((x) => x.slug === params.category);
  if (!c) return { title: "Product" };
  return {
    title: c.name,
    description: c.description,
  };
}

export default function CategoryPage({ params }) {
  const idx = CATEGORIES.findIndex((c) => c.slug === params.category);
  if (idx === -1) notFound();
  const c = CATEGORIES[idx];
  // Show 3 other categories as suggestions
  const related = CATEGORIES.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow fade-up">
            <Link href="/products" className="hover:underline">
              Products
            </Link>{" "}
            / {c.name}
          </p>
          <h1 className="display text-5xl md:text-7xl mt-4 leading-[1.03] fade-up-2">
            {c.name}.
          </h1>
          <p className="mt-6 max-w-xl text-ink/70 md:text-lg leading-relaxed fade-up-3">
            {c.description}
          </p>
          <div className="mt-8 fade-up-4">
            <Link href="/contact" className="btn-ink">Inquire about {c.name.toLowerCase()}</Link>
          </div>
        </div>
        <div className="md:col-span-5 fade-up-3">
          <Img src={c.image} alt={c.name} ratio="aspect-[4/5]" />
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-x py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 reveal-on-view">
            <SectionHeader eyebrow="Highlights" title="What we offer." />
          </div>
          <div className="md:col-span-7 reveal-on-view">
            <ul className="divide-y divide-stone">
              {c.highlights.map((h) => (
                <li key={h} className="py-5 flex gap-5">
                  <span className="display text-clay text-2xl">·</span>
                  <p className="md:text-lg">{h}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeader
          eyebrow="Gallery"
          title={`${c.name} — a closer look.`}
        />
        <div className="mt-12">
          <SubcategoryGallery subcategories={c.subcategories} />
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-x py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <SectionHeader eyebrow="Explore more" title="Other categories." />
            <Link href="/products" className="btn-ghost shrink-0">All products</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group reveal-on-view block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Img src={r.image} alt={r.name} ratio="aspect-[4/5]" />
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="display text-xl md:text-2xl">{r.name}</h3>
                  <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    View →
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-ink/60 leading-relaxed">{r.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

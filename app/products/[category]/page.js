import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
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
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];

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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {c.gallery.map((src, i) => (
            <Img
              key={src}
              src={src}
              alt={`${c.name} — image ${i + 1}`}
              ratio="aspect-[4/5]"
            />
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="hairline pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Next category</p>
            <Link href={`/products/${next.slug}`} className="display text-4xl md:text-5xl hover:underline">
              {next.name} →
            </Link>
          </div>
          <Link href="/products" className="btn-ghost">All products</Link>
        </div>
      </section>
    </>
  );
}

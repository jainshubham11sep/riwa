import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProductGrid from "@/components/ProductGrid";

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

      {/* Product image grid with lightbox */}
      <section className="container-x pb-24">
        <ProductGrid />
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

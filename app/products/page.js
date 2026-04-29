import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Products",
  description:
    "Explore Riwa India's product range — womenswear, menswear, kidswear, accessories, home furnishings and more.",
};

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

      {/* Product image grid */}
      <section className="container-x pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group reveal-on-view"
              style={{ transitionDelay: `${i * 40}ms` }}
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

import Link from "next/link";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About",
  description:
    "Riwa India is a Jaipur-based manufacturing and export house specialising in garments, fabrics, accessories and home furnishings — rooted in Rajasthan's textile heritage.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <p className="eyebrow fade-up">About Riwa India</p>
        <h1 className="display text-5xl md:text-7xl mt-4 max-w-4xl fade-up-2">
          A Jaipur house, built on craft,
          <span className="italic"> compliance</span> and collaboration.
        </h1>
      </section>

      <section className="container-x grid md:grid-cols-12 gap-12 pb-24">
        <div className="md:col-span-7 reveal-on-view">
          <p className="md:text-lg leading-relaxed text-ink/80">
            Riwa India is a Jaipur-based manufacturing and export house,
            rooted in the rich textile heritage of Rajasthan. We specialise in
            creating high-quality womenswear, menswear, kidswear,
            accessories and home furnishing products for global brands.
          </p>
          <p className="mt-6 md:text-lg leading-relaxed text-ink/80">
            Located in Jaipur — a city renowned for its artisanal craftsmanship
            and vibrant textile traditions — we combine age-old techniques
            with contemporary design sensibilities. Our strength lies in our
            in-house block printing and screen printing, allowing us to develop
            exclusive fabrics and products tailored to each client's vision.
          </p>
          <p className="mt-6 md:text-lg leading-relaxed text-ink/80">
            From handcrafted prints to modern silhouettes, every piece we
            create reflects a balance of authenticity, quality and global
            appeal.
          </p>
        </div>
        <div className="md:col-span-5 reveal-on-view">
          <Img
            src="/images/Dresses.jpeg"
            alt="Garments crafted at Riwa India"
            ratio="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-x py-24">
          <SectionHeader
            eyebrow="What we offer"
            title="End-to-end manufacturing for modern brands."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-8">
            {[
              "End-to-end garment manufacturing across categories",
              "Custom fabric development with buyer-specific prints",
              "In-house block printing & screen printing",
              "Accessories and home furnishing production",
              "Fabric supply in exclusive or customised designs",
              "Sampling, fit correction and design development",
            ].map((item, i) => (
              <div key={item} className="flex gap-6 reveal-on-view">
                <span className="display text-3xl text-clay w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="md:text-lg text-ink/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 reveal-on-view order-2 md:order-1">
          <Img
            src="/images/labour%201.jpeg"
            alt="Workers producing garments at the Riwa India facility"
            ratio="aspect-[4/5]"
          />
        </div>
        <div className="md:col-span-7 reveal-on-view order-1 md:order-2">
          <SectionHeader
            eyebrow="Designed for growing brands"
            title="A flexible, collaborative approach."
            subtitle="At Riwa India, we understand the challenges of building a fashion or lifestyle brand. Whether you are a startup or an established label, we offer a flexible and collaborative approach to bring your ideas to life."
          />
          <ul className="mt-8 space-y-4 md:text-lg">
            <li className="flex gap-4">
              <span className="display text-2xl text-clay">·</span>
              Low minimum order quantities (MOQs).
            </li>
            <li className="flex gap-4">
              <span className="display text-2xl text-clay">·</span>
              Sampling and design development assistance.
            </li>
            <li className="flex gap-4">
              <span className="display text-2xl text-clay">·</span>
              Transparent communication and dependable timelines.
            </li>
            <li className="flex gap-4">
              <span className="display text-2xl text-clay">·</span>
              Competitive pricing with uncompromised quality.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x py-24 text-center">
          <p className="eyebrow text-white/60">Our vision</p>
          <p className="display text-3xl md:text-5xl mt-6 max-w-4xl mx-auto leading-tight">
            To become a trusted global partner for brands seeking authentic
            Indian craftsmanship, customised production and scalable
            manufacturing solutions — all from the heart of Jaipur.
          </p>
          <div className="mt-12">
            <Link href="/contact" className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-ink">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

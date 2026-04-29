import Link from "next/link";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
import { CATEGORIES, FACTORY_IMAGES, HERO_IMAGES } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-x pt-10 md:pt-16 pb-20 md:pb-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow fade-up">Jaipur · Rajasthan · India</p>
            <h1 className="display text-5xl md:text-7xl lg:text-[96px] leading-[1.02] tracking-tight mt-4 fade-up-2">
              Textiles,
              <br />
              crafted in
              <span className="italic"> Jaipur</span>.
            </h1>
            <p className="mt-8 max-w-xl text-ink/70 md:text-lg leading-relaxed fade-up-3">
              Riwa India is a manufacturing and export house producing
              womenswear, menswear, kidswear, accessories, home furnishings and
              printed fabrics — underpinned by in-house block and screen
              printing, low MOQs and transparent timelines.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 fade-up-4">
              <Link href="/products" className="btn-ink">
                Explore products
              </Link>
              <Link href="/contact" className="btn-ghost">
                Start an inquiry
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-5 gap-4 fade-up-3">
            <div className="col-span-3">
              <Img
                src={HERO_IMAGES[0].src}
                alt={HERO_IMAGES[0].alt}
                ratio="aspect-[3/4]"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <Img
                src={HERO_IMAGES[1].src}
                alt={HERO_IMAGES[1].alt}
                ratio="aspect-square"
              />
              <Img
                src={HERO_IMAGES[2].src}
                alt={HERO_IMAGES[2].alt}
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="hairline-b hairline">
        <div className="overflow-hidden py-5">
          <div className="flex whitespace-nowrap marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  "Block printing",
                  "Screen printing",
                  "Low MOQs",
                  "Custom fabric",
                  "Womenswear",
                  "Menswear",
                  "Kidswear",
                  "Home furnishings",
                  "Export compliance",
                  "Made in Jaipur",
                ].map((t) => (
                  <span
                    key={`${i}-${t}`}
                    className="px-8 eyebrow text-ink/60"
                  >
                    {t} ·
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section className="container-x py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 reveal-on-view">
          <Img
            src="/images/labour%201.jpeg"
            alt="Workers producing garments at Riwa India"
            ratio="aspect-[4/5]"
          />
        </div>
        <div className="md:col-span-7 reveal-on-view">
          <SectionHeader
            eyebrow="Our story"
            title="Rooted in Rajasthan, designed for the world."
            subtitle="We combine age-old techniques with contemporary design sensibilities. Our strength lies in in-house block and screen printing, which allows us to develop exclusive fabrics and products tailored to each client's vision — from handcrafted prints to modern silhouettes."
          />
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="display text-4xl">100%</div>
              <p className="eyebrow mt-1">Made in Jaipur</p>
            </div>
            <div>
              <div className="display text-4xl">Low</div>
              <p className="eyebrow mt-1">MOQs</p>
            </div>
            <div>
              <div className="display text-4xl">Global</div>
              <p className="eyebrow mt-1">Export ready</p>
            </div>
          </div>
          <Link href="/about" className="btn-ghost mt-10">
            About Riwa India
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-bone">
        <div className="container-x py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal-on-view">
            <SectionHeader
              eyebrow="What we make"
              title="A range built for modern brands."
              subtitle="End-to-end production across six product categories, each manufactured in accordance with international export standards."
            />
            <Link href="/products" className="btn-ghost">View all</Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group reveal-on-view block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Img src={c.image} alt={c.name} ratio="aspect-[4/5]" />
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="display text-2xl">{c.name}</h3>
                  <span className="eyebrow opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-ink/70">{c.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING TEASER */}
      <section className="container-x py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6 reveal-on-view">
          <SectionHeader
            eyebrow="Manufacturing"
            title="Inside the Riwa India factory."
            subtitle="From pattern to packing, our integrated facility brings together generational block‑printers, skilled machinists, and a dedicated quality team — all under one roof in Jaipur."
          />
          <Link href="/manufacturing" className="btn-ghost mt-8">
            Tour our facility
          </Link>
        </div>
        <div className="md:col-span-6 grid grid-cols-2 gap-4 reveal-on-view">
          {FACTORY_IMAGES.slice(0, 4).map((img) => (
            <Img
              key={img.src}
              src={img.src}
              alt={img.alt}
              ratio="aspect-square"
            />
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="bg-ink text-white">
        <div className="container-x py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-white/60">For growing brands</p>
            <h2 className="display text-4xl md:text-6xl mt-4">
              Launch with low risk. Scale with confidence.
            </h2>
            <p className="mt-6 text-white/75 max-w-xl leading-relaxed md:text-lg">
              Your dream of launching a brand with low MOQ can truly be realised
              with our collaboration. We support our partners with sampling and
              design development, transparent communication, dependable
              timelines and competitive pricing with uncompromised quality.
            </p>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            {[
              { t: "Low MOQs", d: "Start small, grow steadily." },
              { t: "Sampling", d: "Design development assistance." },
              { t: "Timelines", d: "Dependable, communicated upfront." },
              { t: "Quality", d: "Export compliance, every time." },
            ].map((i) => (
              <div key={i.t} className="border-t border-white/15 pt-5">
                <p className="eyebrow text-white/60">{i.t}</p>
                <p className="mt-2">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 text-center">
        <p className="eyebrow">Ready to build something together?</p>
        <h2 className="display text-4xl md:text-6xl mt-4 max-w-3xl mx-auto">
          Custom manufacturing, low MOQs, export‑compliant production — from Jaipur, India.
        </h2>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="btn-ink">Start an inquiry</Link>
          <Link href="/manufacturing" className="btn-ghost">See the factory</Link>
        </div>
      </section>
    </>
  );
}

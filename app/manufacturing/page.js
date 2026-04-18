import Link from "next/link";
import Img from "@/components/Img";
import SectionHeader from "@/components/SectionHeader";
import { CAPABILITIES, FACTORY_IMAGES } from "@/lib/data";

export const metadata = {
  title: "Manufacturing",
  description:
    "Tour Riwa India's Jaipur factory setup — block printing, screen printing, cutting, stitching, quality and export operations under one roof.",
};

export default function ManufacturingPage() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow fade-up">Factory setup & capabilities</p>
          <h1 className="display text-5xl md:text-7xl mt-4 leading-[1.03] fade-up-2">
            A working factory, not a showroom.
          </h1>
          <p className="mt-8 max-w-xl text-ink/70 md:text-lg leading-relaxed fade-up-3">
            From pattern to packing, our integrated facility in Jaipur brings
            together generational block-printers, skilled machinists, and a
            dedicated quality team — delivering handcrafted textiles at export
            scale.
          </p>
        </div>
        <div className="md:col-span-5 fade-up-3">
          <Img
            src={FACTORY_IMAGES[0].src}
            alt={FACTORY_IMAGES[0].alt}
            ratio="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-bone">
        <div className="container-x py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="What we do, in-house."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {CAPABILITIES.map((c, i) => (
              <div key={c.title} className="reveal-on-view" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="display text-clay text-3xl">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-2xl mt-3">{c.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory image grid */}
      <section className="container-x py-24">
        <SectionHeader
          eyebrow="Inside the factory"
          title="A look around."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {FACTORY_IMAGES.map((img, i) => (
            <div key={img.src} className="reveal-on-view" style={{ transitionDelay: `${i * 40}ms` }}>
              <Img src={img.src} alt={img.alt} ratio="aspect-square" />
            </div>
          ))}
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-ink text-white">
        <div className="container-x py-24">
          <p className="eyebrow text-white/60">The process</p>
          <h2 className="display text-4xl md:text-6xl mt-4 max-w-3xl">
            From brief to shipment, in clear steps.
          </h2>
          <div className="mt-14 grid md:grid-cols-5 gap-8">
            {[
              { n: "01", t: "Brief", d: "We listen — target product, fabric, colour, volume and timeline." },
              { n: "02", t: "Sample", d: "Pattern, print and fabric development with iterative sampling." },
              { n: "03", t: "Approval", d: "Final sign-off on designs, fit, prints and shade cards." },
              { n: "04", t: "Produce", d: "Cutting, block / screen printing, stitching, finishing — in-house." },
              { n: "05", t: "Export", d: "QC, documentation and FOB / CIF shipment to your port." },
            ].map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-5">
                <p className="display text-3xl text-clay">{s.n}</p>
                <p className="mt-2 font-medium">{s.t}</p>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/contact" className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-ink">
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

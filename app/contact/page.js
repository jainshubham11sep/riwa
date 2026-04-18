import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Start an inquiry with Riwa India — share your brand, products of interest, quantities and timeline. Based in Jaipur, Rajasthan, India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <p className="eyebrow fade-up">Contact</p>
        <h1 className="display text-5xl md:text-7xl mt-4 leading-[1.03] fade-up-2 max-w-4xl">
          Let's build your next collection.
        </h1>
        <p className="mt-6 max-w-2xl text-ink/70 md:text-lg leading-relaxed fade-up-3">
          Tell us about your brand, products of interest, approximate
          quantities and timeline. We usually reply within one business day.
        </p>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 reveal-on-view">
          <ContactForm />
        </div>

        <aside className="md:col-span-5 reveal-on-view">
          <div className="hairline pt-6">
            <p className="eyebrow">Where we are</p>
            <p className="mt-3 md:text-lg text-ink/80">
              Riwa India<br />
              Jaipur, Rajasthan — India
            </p>
          </div>
          <div className="hairline pt-6 mt-10">
            <p className="eyebrow">Write to us</p>
            <p className="mt-3 md:text-lg text-ink/80">
              <a className="hover:underline" href="mailto:hello@riwaindia.com">
                hello@riwaindia.com
              </a>
            </p>
          </div>
          <div className="hairline pt-6 mt-10">
            <p className="eyebrow">Hours</p>
            <p className="mt-3 md:text-lg text-ink/80">
              Monday – Saturday<br />
              10:00 – 19:00 IST
            </p>
          </div>
          <div className="hairline pt-6 mt-10">
            <p className="eyebrow">What to share</p>
            <ul className="mt-3 space-y-2 text-ink/80">
              <li>· Categories / products of interest</li>
              <li>· Estimated quantities &amp; MOQ range</li>
              <li>· Fabric, print, colour references</li>
              <li>· Target shipping date &amp; destination</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

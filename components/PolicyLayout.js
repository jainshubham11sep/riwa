import Link from "next/link";

export default function PolicyLayout({ eyebrow, title, updated, children }) {
  return (
    <>
      <section className="container-x pt-16 md:pt-24 pb-12">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="display text-5xl md:text-7xl mt-4 leading-[1.03] fade-up-2 max-w-4xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-4 text-ink/60 text-sm fade-up-3">Last updated: {updated}</p>
        )}
      </section>

      <section className="container-x pb-24 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-3 reveal-on-view">
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li><Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/shipping" className="hover:underline">Shipping Policy</Link></li>
            <li><Link href="/refund" className="hover:underline">Refund &amp; Cancellation</Link></li>
          </ul>
        </aside>
        <article className="md:col-span-9 prose-policy reveal-on-view">
          {children}
        </article>
      </section>
    </>
  );
}

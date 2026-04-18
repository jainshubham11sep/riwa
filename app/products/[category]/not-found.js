import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display text-5xl md:text-7xl mt-4">
        That category doesn't exist.
      </h1>
      <p className="mt-4 text-ink/70">
        Browse our product verticals below.
      </p>
      <div className="mt-10">
        <Link href="/products" className="btn-ink">All products</Link>
      </div>
    </section>
  );
}

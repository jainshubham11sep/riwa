import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display text-6xl md:text-8xl mt-4">Lost in the pattern.</h1>
      <p className="mt-6 text-ink/70 max-w-md mx-auto">
        The page you're looking for can't be found. Let's take you back to a
        known path.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <Link href="/" className="btn-ink">Home</Link>
        <Link href="/products" className="btn-ghost">Browse products</Link>
      </div>
    </section>
  );
}

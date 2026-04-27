import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-stone bg-[#fdf5ec]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="/images/riwa-logo.png"
            alt="Riwa India"
            className="h-24 w-auto"
          />
          <p className="eyebrow mt-3">Jaipur · Rajasthan · India</p>
          <p className="mt-6 text-ink/70 max-w-md leading-relaxed">
            A manufacturing and export house crafting womenswear, menswear,
            kidswear, accessories, home furnishings and printed fabrics for
            global brands — with in‑house block and screen printing.
          </p>
          <Link href="/contact" className="btn-ghost mt-8">
            Start an inquiry
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-[14px]">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/manufacturing" className="hover:underline">Manufacturing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Policies</p>
          <ul className="space-y-3 text-[14px]">
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link href="/refund" className="hover:underline">Refund</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-[14px] text-ink/80">
            <li>Jaipur, Rajasthan</li>
            <li>India</li>
            <li><a href="mailto:hello@riwaindia.com" className="hover:underline">hello@riwaindia.com</a></li>
          </ul>
        </div>
      </div>
      <div className="hairline">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-ink/60">
          <p>© {year} Riwa India. All rights reserved.</p>
          <p className="tracking-widest2 uppercase text-[10px]">
            Custom Manufacturing · Low MOQ · Global Export
          </p>
        </div>
      </div>
    </footer>
  );
}

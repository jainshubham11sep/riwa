import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: {
    default: "Riwa India — Textile Manufacturing & Export House, Jaipur",
    template: "%s · Riwa India",
  },
  description:
    "Riwa India is a Jaipur-based manufacturing and export house specialising in womenswear, menswear, kidswear, accessories, home furnishings and printed fabrics with in-house block and screen printing.",
  keywords: [
    "Riwa India",
    "Jaipur textile manufacturer",
    "garment export house",
    "block printing",
    "screen printing",
    "private label manufacturer",
    "low MOQ clothing manufacturer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

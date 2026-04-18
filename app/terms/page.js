import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of Riwa India's website and services.",
};

export default function TermsPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Terms & Conditions" updated="April 2026">
      <h2>1. Introduction</h2>
      <p>
        Welcome to Riwa India. By accessing our website and placing an inquiry
        or order, you agree to comply with and be bound by the following terms
        and conditions.
      </p>

      <h2>2. Nature of Business</h2>
      <p>
        Riwa India is a Jaipur-based manufacturing and export house specialising
        in customised production of garments, fabrics, accessories and home
        furnishings. Most products are <strong>made-to-order</strong> based on
        buyer specifications.
      </p>

      <h2>3. Orders & Minimum Quantities (MOQ)</h2>
      <ul>
        <li>All orders are subject to agreed <strong>minimum order quantities (MOQs)</strong>.</li>
        <li>Orders are confirmed only after mutual agreement on design, pricing and specifications.</li>
        <li>Sampling may be required before bulk production.</li>
      </ul>

      <h2>4. Sampling Policy</h2>
      <ul>
        <li>Sampling charges are applicable and may vary depending on design complexity.</li>
        <li>Samples are produced for approval before bulk production.</li>
        <li>Sample costs may or may not be adjusted in bulk orders (as mutually agreed).</li>
      </ul>

      <h2>5. Pricing & Payments</h2>
      <ul>
        <li>Prices are quoted based on product specifications, quantity and customisation.</li>
        <li>A <strong>percentage advance payment (e.g., 30%–50%)</strong> is required to initiate production.</li>
        <li>The remaining balance must be cleared before shipment unless otherwise agreed.</li>
        <li>All international payments must be made via approved banking channels.</li>
      </ul>

      <h2>6. Production & Timelines</h2>
      <ul>
        <li>Production timelines vary depending on order size and complexity.</li>
        <li>Estimated timelines are shared at the time of order confirmation.</li>
        <li>Delays due to unforeseen circumstances (raw material delays, logistics, etc.) will be communicated.</li>
      </ul>

      <h2>7. Customisation & Design Approval</h2>
      <ul>
        <li>All designs, prints, colours and specifications must be approved by the buyer before production.</li>
        <li>Slight variations in colour, print or fabric may occur due to the handmade nature of block printing and dyeing.</li>
        <li>Once approved, changes may not be possible.</li>
      </ul>

      <h2>8. Quality & Compliance</h2>
      <ul>
        <li>All products are manufactured following <strong>international export standards and compliances</strong>.</li>
        <li>Buyers may request specific compliance requirements (e.g., testing, certifications) at additional cost.</li>
      </ul>

      <h2>9. Shipping & Delivery</h2>
      <ul>
        <li>Shipping terms (FOB, CIF, etc.) will be mutually agreed upon.</li>
        <li>Delivery timelines depend on shipping method and destination.</li>
        <li>Riwa India is not responsible for delays caused by customs, shipping carriers or external factors.</li>
      </ul>

      <h2>10. Duties & Taxes</h2>
      <ul>
        <li>International buyers are responsible for <strong>custom duties, taxes and import regulations</strong> in their respective countries.</li>
      </ul>

      <h2>11. Returns, Refunds & Cancellations</h2>
      <ul>
        <li>As most products are <strong>custom-made</strong>, returns or cancellations are generally not accepted once production has begun.</li>
        <li>In case of manufacturing defects, claims must be raised within a specified timeframe (e.g., 7 days of delivery) with valid proof.</li>
        <li>Refunds or replacements will be evaluated on a case-by-case basis.</li>
      </ul>

      <h2>12. Intellectual Property</h2>
      <ul>
        <li>Buyer-provided designs remain the property of the buyer.</li>
        <li>Riwa India will not reproduce or sell custom designs without permission.</li>
        <li>Any designs developed by Riwa India remain its intellectual property unless otherwise agreed.</li>
      </ul>

      <h2>13. Limitation of Liability</h2>
      <p>
        Riwa India shall not be liable for any indirect, incidental or
        consequential damages arising from the use of its products or services.
      </p>

      <h2>14. Force Majeure</h2>
      <p>
        Riwa India shall not be held responsible for delays or failure to
        perform due to events beyond control, including natural disasters,
        pandemics, government restrictions or supply chain disruptions.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These terms shall be governed by the laws of India, with jurisdiction in
        Jaipur, Rajasthan.
      </p>

      <h2>16. Updates to Terms</h2>
      <p>
        Riwa India reserves the right to update these terms at any time without
        prior notice.
      </p>
    </PolicyLayout>
  );
}

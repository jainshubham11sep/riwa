import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Shipping Policy",
  description: "Order processing, shipping methods, duties and delivery timelines at Riwa India.",
};

export default function ShippingPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Shipping Policy" updated="April 2026">
      <h2>1. Order Processing Time</h2>
      <ul>
        <li>Sampling: typically <strong>7–15 days</strong>.</li>
        <li>Bulk Production: typically <strong>3–8 weeks</strong>, depending on order size and complexity.</li>
      </ul>

      <h2>2. Shipping Methods</h2>
      <p>
        We offer international shipping through reliable logistics partners.
        Shipping terms may include:
      </p>
      <ul>
        <li>FOB (Free on Board)</li>
        <li>CIF (Cost, Insurance, Freight)</li>
        <li>Other mutually agreed terms</li>
      </ul>

      <h2>3. Delivery Timeline</h2>
      <p>Delivery timelines vary based on destination and shipping method:</p>
      <ul>
        <li>Air shipping: faster delivery</li>
        <li>Sea shipping: cost-effective for bulk orders</li>
      </ul>

      <h2>4. Shipping Charges</h2>
      <p>Shipping costs are calculated based on:</p>
      <ul>
        <li>Order volume</li>
        <li>Weight and dimensions</li>
        <li>Destination country</li>
      </ul>

      <h2>5. Customs, Duties & Taxes</h2>
      <ul>
        <li>Buyers are responsible for all <strong>import duties, taxes and customs clearance</strong> in their country.</li>
        <li>Riwa India is not responsible for delays caused by customs.</li>
      </ul>

      <h2>6. Tracking & Updates</h2>
      <p>Tracking details will be shared once the order is dispatched.</p>

      <h2>7. Delays</h2>
      <p>Riwa India is not liable for delays caused by:</p>
      <ul>
        <li>Logistics partners</li>
        <li>Customs clearance</li>
        <li>Unforeseen circumstances</li>
      </ul>

      <h2>8. Damaged Shipments</h2>
      <p>If the shipment is damaged in transit:</p>
      <ul>
        <li>Notify us within <strong>48 hours of delivery</strong>.</li>
        <li>Share proof for further assistance.</li>
      </ul>
    </PolicyLayout>
  );
}

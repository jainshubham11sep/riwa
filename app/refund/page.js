import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Riwa India's refund and cancellation terms for made-to-order production.",
};

export default function RefundPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Refund & Cancellation Policy" updated="April 2026">
      <h2>1. Made-to-Order Policy</h2>
      <p>
        All products at Riwa India are primarily <strong>custom-made or
        made-to-order</strong>, based on buyer specifications.
      </p>

      <h2>2. Order Cancellation</h2>
      <ul>
        <li>Orders cannot be cancelled once production has begun.</li>
        <li>Advance payments are <strong>non-refundable</strong>.</li>
      </ul>

      <h2>3. Refund Policy</h2>
      <p>
        Refunds are generally not applicable due to the customised nature of
        products. However, exceptions may be considered in cases of:
      </p>
      <ul>
        <li>Manufacturing defects</li>
        <li>Incorrect items delivered</li>
      </ul>

      <h2>4. Claim Process</h2>
      <ul>
        <li>Any claim must be raised within <strong>7 days of delivery</strong>.</li>
        <li>Clear photographic / video evidence must be provided.</li>
        <li>Claims will be reviewed and resolved on a case-by-case basis.</li>
      </ul>

      <h2>5. Resolution</h2>
      <p>Approved claims may be resolved through:</p>
      <ul>
        <li>Replacement of goods</li>
        <li>Partial refund</li>
        <li>Credit note for future orders</li>
      </ul>

      <h2>6. Non-Returnable Items</h2>
      <p>
        Customised products, approved samples and bulk orders are
        <strong> non-returnable</strong> unless defective.
      </p>

      <h2>7. Important Note</h2>
      <p>
        Minor variations in colour, print or texture are not considered
        defects, especially in handcrafted processes like block printing.
      </p>
    </PolicyLayout>
  );
}

import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Privacy Policy",
  description: "How Riwa India collects, uses and safeguards your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout eyebrow="Legal" title="Privacy Policy" updated="April 2026">
      <h2>1. Introduction</h2>
      <p>
        Riwa India respects your privacy and is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use
        and safeguard your data.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>Name, email address, phone number</li>
        <li>Company details and business information</li>
        <li>Shipping and billing address</li>
        <li>Order and inquiry details</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>Your information is used to:</p>
      <ul>
        <li>Respond to inquiries and process orders</li>
        <li>Communicate regarding production and shipments</li>
        <li>Improve our services and website experience</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2>4. Data Protection</h2>
      <p>
        We implement appropriate security measures to protect your personal
        information from unauthorised access, misuse or disclosure.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>We do not sell or rent your personal information. Data may be shared only with:</p>
      <ul>
        <li>Logistics and shipping partners</li>
        <li>Payment processing institutions</li>
        <li>Legal authorities if required</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Our website may use cookies to enhance user experience and analyse
        website traffic.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request access, correction or deletion of your personal data by
        contacting us.
      </p>

      <h2>8. Updates to Policy</h2>
      <p>Riwa India reserves the right to update this policy at any time.</p>

      <h2>9. Contact Us</h2>
      <p>
        For any privacy-related concerns, please contact us at{" "}
        <a className="underline" href="mailto:hello@riwaindia.com">hello@riwaindia.com</a>.
      </p>
    </PolicyLayout>
  );
}

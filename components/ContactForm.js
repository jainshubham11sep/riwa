"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sent

  function onSubmit(e) {
    e.preventDefault();
    // In production this would POST to an API route / email service.
    // For the static site we just show a confirmation state.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-stone p-10">
        <p className="eyebrow">Thank you</p>
        <h3 className="display text-3xl mt-3">Your inquiry has been noted.</h3>
        <p className="mt-4 text-ink/70">
          A member of the Riwa India team will get back to you shortly at the
          email you provided. For urgent queries, write to{" "}
          <a className="underline" href="mailto:hello@riwaindia.com">
            hello@riwaindia.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Company / brand" name="company" />
        <Field type="email" label="Email" name="email" required />
        <Field label="Country" name="country" />
      </div>

      <div>
        <label className="eyebrow block mb-2">Category of interest</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Womenswear",
            "Menswear",
            "Kidswear",
            "Accessories",
            "Home furnishings",
            "Printed fabrics",
          ].map((c) => (
            <label
              key={c}
              className="flex items-center gap-3 border border-stone px-4 py-3 cursor-pointer hover:border-ink transition-colors"
            >
              <input type="checkbox" name="categories" value={c} />
              <span className="text-sm">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <Field
        label="Estimated quantity / MOQ"
        name="quantity"
        placeholder="e.g. 300 units per style"
      />

      <div>
        <label className="eyebrow block mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border border-stone focus:border-ink outline-none px-4 py-3 bg-white"
          placeholder="Tell us about your brand, products, fabrics, timelines…"
        />
      </div>

      <button type="submit" className="btn-ink">
        Submit inquiry
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }) {
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-stone focus:border-ink outline-none px-4 py-3 bg-white"
      />
    </div>
  );
}

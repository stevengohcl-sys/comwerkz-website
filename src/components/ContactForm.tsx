"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Enterprise Network Infrastructure",
  "AI Consulting for SMEs",
  "Smart Security & Building Solutions",
  "Smart Energy Solutions",
  "Autonomous Robotics",
  "General enquiry"
];

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Website enquiry: ${String(data.get("service"))}`;
    const body = [
      `Name: ${String(data.get("name"))}`,
      `Company: ${String(data.get("company"))}`,
      `Email: ${String(data.get("email"))}`,
      `Phone: ${String(data.get("phone"))}`,
      `Service: ${String(data.get("service"))}`,
      "",
      String(data.get("message"))
    ].join("\n");

    setMessage("Your email application is opening with the enquiry details. Please review and send it to complete your enquiry.");
    window.location.href = `mailto:sales@comwerkz.com.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          Company
          <input autoComplete="organization" name="company" type="text" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Email <span aria-hidden="true">*</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          Phone <span aria-hidden="true">*</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>
      </div>
      <label>
        What can we help with? <span aria-hidden="true">*</span>
        <select defaultValue="" name="service" required>
          <option disabled value="">
            Select a solution
          </option>
          {serviceOptions.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        Project or requirement <span aria-hidden="true">*</span>
        <textarea minLength={10} name="message" required rows={5} />
      </label>
      <button className="button button-primary w-full justify-center" type="submit">
        Prepare enquiry email
      </button>
      <p aria-live="polite" className="form-note" role="status">
        {message || "This form opens your email application. Direct form delivery will be connected during production setup."}
      </p>
    </form>
  );
}

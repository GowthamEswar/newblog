"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3200);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-title">Contact Us</div>
      <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="cf-name">Name</label>
        <input type="text" id="cf-name" name="name" placeholder="Your name" required />
        <label htmlFor="cf-email">Email</label>
        <input type="email" id="cf-email" name="email" placeholder="you@email.com" required />
        <label htmlFor="cf-message">Message / Donation Details</label>
        <textarea id="cf-message" name="message" rows={4} placeholder="How would you like to help?" required />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && (
          <div className="contact-success">
            Thank you for reaching out! We'll be in touch soon.
          </div>
        )}
      </form>
    </div>
  );
}

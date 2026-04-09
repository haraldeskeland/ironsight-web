"use client";

import { useState, type FormEvent } from "react";

const subjects = ["Bug Report", "Feature Request", "Account Issue", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) form.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent-green/20 bg-accent-green/5 p-8 text-center">
        <p className="font-game text-xl text-accent-green">Message Sent!</p>
        <p className="mt-2 text-text-secondary">We will get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-accent-gold hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-text-secondary">Name</label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-white placeholder-text-secondary focus:border-accent-gold/50 focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-text-secondary">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-white placeholder-text-secondary focus:border-accent-gold/50 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm text-text-secondary">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-white focus:border-accent-gold/50 focus:outline-none"
        >
          <option value="">Select a topic...</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-text-secondary">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-white placeholder-text-secondary focus:border-accent-gold/50 focus:outline-none"
          placeholder="Describe your issue or feedback..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-accent-red">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

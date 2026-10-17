"use client";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "https://bespoke-concha-640a74.netlify.app";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch {
      alert("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg">We are here to help — reach out any time</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>
            <div className="space-y-5">
              {[
                { icon: "📍", label: "Location", value: "iGym, Saddar Rawalpindi / Bank Road" },
                { icon: "📞", label: "Phone", value: "To be provided" },
                { icon: "💬", label: "WhatsApp", value: "To be provided" },
                { icon: "✉️", label: "Email", value: "To be provided" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-teal text-xs font-semibold mb-0.5">{c.label}</p>
                    <p className="text-charcoal font-medium text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-navy rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Ready to Enroll?</h3>
              <p className="text-white/60 text-sm mb-4">Reserve your seat in the next Level 2 batch starting 22 September.</p>
              <a href="/enroll" className="inline-block bg-teal text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal/80 transition-colors">
                Enroll Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-teal/15 text-teal flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
                <h3 className="font-bold text-navy text-xl mb-2">Message Sent!</h3>
                <p className="text-charcoal/60 text-sm">We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-navy mb-6">Send a Message</h2>
                <form onSubmit={submit} className="space-y-4">
                  {[
                    { label: "Your Name", name: "name", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Phone / WhatsApp", name: "phone", type: "tel" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1">
                      <label className="text-sm font-semibold text-charcoal">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handle}
                        required={f.name !== "phone"}
                        className="border border-charcoal/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal text-charcoal"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-charcoal">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      required
                      rows={4}
                      className="border border-charcoal/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal text-charcoal resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy text-white py-3 rounded-lg font-semibold text-sm hover:bg-navy/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-light rounded-2xl h-48 flex items-center justify-center text-charcoal/30">
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <p className="text-sm">Map — iGym, Saddar Rawalpindi / Bank Road</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

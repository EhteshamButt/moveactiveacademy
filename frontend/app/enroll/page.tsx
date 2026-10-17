"use client";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "https://bespoke-concha-640a74.netlify.app";

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "", father_name: "", date_of_birth: "", gender: "",
    whatsapp: "", email: "", city: "", occupation: "", education: "",
    course: "Level 2 Fitness Trainer Certification", learning_mode: "",
    reason: "", heard_from: "",
  });

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`${API}/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-light flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-teal/15 text-teal flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
          <h2 className="text-2xl font-bold text-navy mb-3">Application Received!</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Thank you! Your application has been received. Our admissions team will contact you on WhatsApp shortly.
          </p>
        </div>
      </div>
    );
  }

  const field = (label: string, name: keyof typeof form, type = "text", required = true) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-charcoal">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handle}
        required={required}
        className="border border-charcoal/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal text-charcoal"
      />
    </div>
  );

  const select = (label: string, name: keyof typeof form, options: string[], required = true) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-charcoal">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        name={name}
        value={form[name]}
        onChange={handle}
        required={required}
        className="border border-charcoal/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal text-charcoal bg-white"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enroll Now</h1>
          <p className="text-white/70 text-lg">Reserve your seat — next batch: 22 September</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-navy mb-1">Student Application Form</h2>
            <p className="text-charcoal/60 text-sm mb-8">Fields marked with <span className="text-red-500">*</span> are required.</p>

            <form onSubmit={submit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {field("Full Name", "full_name")}
                {field("Father / Guardian Name", "father_name", "text", false)}
                {field("Date of Birth", "date_of_birth", "date", false)}
                {select("Gender", "gender", ["Male", "Female", "Other"])}
                {field("WhatsApp Number", "whatsapp", "tel")}
                {field("Email Address", "email", "email")}
                {field("City", "city")}
                {field("Current Occupation", "occupation", "text", false)}
                {field("Highest Education", "education", "text", false)}
                {select("Course Applying For", "course", ["Level 2 Fitness Trainer Certification"])}
                {select("Preferred Learning Mode", "learning_mode", ["In-Person", "Online", "Hybrid"])}
                {select("How Did You Hear About Us?", "heard_from", ["Instagram", "Facebook", "Friend / Referral", "Google", "WhatsApp", "Other"], false)}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-charcoal">
                  Why Do You Want to Join? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handle}
                  required
                  rows={4}
                  className="border border-charcoal/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal text-charcoal resize-none"
                  placeholder="Tell us about your goals and motivation..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-charcoal/70">
                  I confirm that the information provided is accurate and I agree to the academy&apos;s terms and conditions.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal text-white py-3.5 rounded-lg font-bold text-base hover:bg-teal/80 transition-colors disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

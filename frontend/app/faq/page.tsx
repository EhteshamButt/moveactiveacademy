"use client";
import { useState } from "react";

const faqs = [
  { q: "Who is eligible for the Level 2 Fitness Trainer Certification?", a: "The program is open to students, working professionals, housewives and anyone passionate about fitness. Specific eligibility requirements will be confirmed by the academy." },
  { q: "How long is the course?", a: "Course duration to be confirmed by the academy. Please contact us or check back for updates." },
  { q: "What topics are covered?", a: "The curriculum includes Exercise Anatomy & Physiology, Body Systems, Diet / Nutrition Basics, Assessments, Practical Training, and Exercise Programming." },
  { q: "What is the learning mode?", a: "The course is delivered in-person with practical sessions at iGym, Saddar Rawalpindi / Bank Road." },
  { q: "How are students assessed?", a: "Students are assessed through both written and practical assessments covering all curriculum areas." },
  { q: "What certificate do I receive?", a: "You receive a Move Active Academy Level 2 Fitness Trainer Certificate with a unique Certificate ID that can be verified online." },
  { q: "How do I verify a certificate?", a: "Visit the Verify Certificate page and enter the Certificate ID. The system will display the student name, course, issue date and status." },
  { q: "What career opportunities does this open up?", a: "Graduates can work in gyms, become personal trainers, freelance, coach online, or start their own fitness business." },
  { q: "Can I work as a freelance trainer after this certification?", a: "Yes. The certification and practical skills gained are directly applicable to freelance and independent training work." },
  { q: "What is the course fee?", a: "Fee to be confirmed. Please contact the academy for current pricing." },
  { q: "Are installments available?", a: "Installment options to be confirmed by the academy. Please contact us for details." },
  { q: "Where is the course held?", a: "iGym, Saddar Rawalpindi / Bank Road. One of the region's premier training facilities." },
  { q: "When is the next batch?", a: "The next batch starts 22 September. Seats are limited — enroll early to secure your place." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-navy text-sm pr-4">{q}</span>
        <span className={`text-teal font-bold text-xl shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-charcoal/70 text-sm leading-relaxed border-t border-charcoal/10 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg">Everything you need to know before enrolling</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
          <div className="mt-10 bg-navy rounded-2xl p-6 text-center">
            <p className="text-white font-semibold mb-2">Still have questions?</p>
            <p className="text-white/60 text-sm mb-4">Our admissions team is available on WhatsApp to answer any queries.</p>
            <a href="/contact" className="inline-block bg-teal text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal/80 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

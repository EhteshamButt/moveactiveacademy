import Link from "next/link";

const steps = [
  { step: "01", title: "Complete the Course", desc: "Attend all sessions and complete the required practical hours." },
  { step: "02", title: "Pass Assessments", desc: "Successfully complete both written and practical assessments." },
  { step: "03", title: "Receive Your Certificate", desc: "Your certificate is issued with a unique Certificate ID." },
  { step: "04", title: "Verify Anytime", desc: "Anyone can verify your certificate online using your Certificate ID." },
];

const includes = [
  "Student Name",
  "Unique Certificate ID (e.g. 1-001)",
  "Course Name",
  "Issue Date",
  "Valid Till",
  "Academy Name — Move Active Academy",
  "Verification Status",
];

export default function Certification() {
  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certification</h1>
          <p className="text-white/70 text-lg">What you receive upon successful completion</p>
        </div>
      </section>

      {/* Certificate Preview + Details */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Certificate preview */}
          <div className="bg-light rounded-2xl p-10 border-4 border-navy/10 text-center shadow-sm">
            <p className="text-navy/30 text-xs uppercase tracking-widest mb-6">Certificate Preview</p>
            <div className="border-2 border-teal/30 rounded-xl p-8">
              <p className="text-teal text-xs uppercase tracking-widest mb-2">Move Active Academy</p>
              <h2 className="text-2xl font-bold text-navy mb-1">Certificate of Completion</h2>
              <p className="text-charcoal/50 text-sm mb-4">This certifies that</p>
              <p className="text-xl font-bold text-charcoal mb-1">Student Name</p>
              <p className="text-charcoal/50 text-sm mb-4">has successfully completed</p>
              <p className="text-lg font-bold text-teal mb-6">Level 2 Fitness Trainer Certification</p>
              <div className="flex justify-between text-xs text-charcoal/50">
                <span>Certificate ID: 1-001</span>
                <span>Issue Date: —</span>
              </div>
            </div>
            <p className="text-charcoal/30 text-xs mt-4">Sample only — actual certificate design to be provided</p>
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">What Your Certificate Includes</h2>
            <ul className="space-y-3 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-charcoal">
                  <span className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-white text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-light rounded-xl p-5 text-sm text-charcoal/70 mb-6">
              <strong className="text-navy">Note:</strong> Official IFA wording and any external accreditation details will reflect only what the academy can substantiate. Please contact us for full details.
            </div>
            <Link href="/verify" className="inline-block bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal/80 transition-colors">
              Verify a Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-light py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-10">The Certification Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-left">
                <span className="text-4xl font-bold text-teal/20">{s.step}</span>
                <h4 className="font-bold text-navy mt-2 mb-2">{s.title}</h4>
                <p className="text-charcoal/60 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info band */}
      <section className="bg-navy py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to earn your certificate?</h3>
            <p className="text-white/60 text-sm">Enroll in the next batch at iGym, Saddar Rawalpindi.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/enroll" className="bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal/80 transition-colors">Enroll Now</Link>
            <Link href="/verify" className="border border-white/30 text-white px-6 py-2.5 rounded-lg font-semibold hover:border-teal transition-colors">Verify Certificate</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

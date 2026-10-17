import Link from "next/link";

const curriculum = [
  "Exercise Anatomy & Physiology",
  "Body Systems",
  "Diet / Nutrition Basics",
  "Assessments",
  "Practical Training",
  "Exercise Programming",
];

export default function Courses() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-white/70 text-lg">Professional fitness education and certification programs</p>
        </div>
      </section>

      {/* Featured Course */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-light rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-navy h-48 flex items-center justify-center">
              <div className="text-center text-white/30">
                <div className="text-5xl mb-2">🏋️</div>
                <p className="text-sm">Course image — to be provided</p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED</span>
                <span className="bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full">Level 2</span>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Level 2 Fitness Trainer Certification</h2>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                A comprehensive, career-focused program that equips you with the knowledge, skills and practical experience to become a certified fitness professional. Designed for beginners and aspiring trainers who want to build a real career in fitness.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Next Batch", value: "22 September" },
                  { label: "Venue", value: "iGym, Saddar Rawalpindi" },
                  { label: "Mode", value: "In-Person + Practical" },
                  { label: "Duration", value: "To be confirmed" },
                  { label: "Fees", value: "To be confirmed" },
                  { label: "Eligibility", value: "To be confirmed" },
                ].map((d, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-charcoal/10">
                    <p className="text-teal text-xs font-semibold mb-1">{d.label}</p>
                    <p className="text-charcoal font-medium text-sm">{d.value}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-navy mb-4">Course Curriculum</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {curriculum.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal/15 text-teal flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                    <span className="text-charcoal text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/enroll" className="bg-teal text-white px-8 py-3.5 rounded-lg font-bold hover:bg-teal/80 transition-colors">
                Reserve Your Seat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-light py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-8">More Courses Coming Soon</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {["Level 3 Personal Trainer", "Nutrition Specialist", "Sports Conditioning"].map((name, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-dashed border-charcoal/20 text-left">
                <span className="inline-block bg-charcoal/10 text-charcoal text-xs font-semibold px-3 py-1 rounded-full mb-3">COMING SOON</span>
                <h4 className="font-bold text-navy">{name}</h4>
                <p className="text-charcoal/50 text-sm mt-1">Details to be announced.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const placeholderReviews = [
  {
    name: "Student Name",
    course: "Level 2 Fitness Trainer Certification",
    batch: "Batch 1",
    text: "This course completely changed my career. The practical training was unlike anything I expected — real, hands-on and incredibly well-structured.",
    outcome: "Now working as a gym trainer",
  },
  {
    name: "Student Name",
    course: "Level 2 Fitness Trainer Certification",
    batch: "Batch 1",
    text: "I was a housewife with a passion for fitness. Move Active Academy gave me the confidence and certification to start my own fitness journey as a professional.",
    outcome: "Freelance personal trainer",
  },
  {
    name: "Student Name",
    course: "Level 2 Fitness Trainer Certification",
    batch: "Batch 1",
    text: "The curriculum was thorough and the trainers were always available to help. I passed my assessments with confidence.",
    outcome: "Enrolled in Level 3 program",
  },
];

export default function Reviews() {
  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Reviews</h1>
          <p className="text-white/70 text-lg">Real outcomes from real students</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-2">What Our Students Say</h2>
            <p className="text-charcoal/60">Only testimonials published with student permission</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-xl">👤</div>
                  <div>
                    <p className="font-bold text-navy text-sm">{r.name}</p>
                    <p className="text-teal text-xs">{r.batch}</p>
                  </div>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="border-t border-charcoal/10 pt-3">
                  <p className="text-teal text-xs font-semibold">✅ {r.outcome}</p>
                  <p className="text-charcoal/40 text-xs mt-1">{r.course}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/40 text-sm mt-8">
            Real student testimonials and photos will be published once permissions are obtained from the academy.
          </p>
        </div>
      </section>

      <section className="bg-teal py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Become Our Next Success Story</h2>
          <p className="text-white/80 mb-6">Enroll in the next batch and transform your fitness career.</p>
          <a href="/enroll" className="bg-white text-navy px-8 py-3.5 rounded-lg font-bold hover:bg-white/90 transition-colors">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}

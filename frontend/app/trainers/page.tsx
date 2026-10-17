const placeholderTrainers = [
  {
    name: "To be provided",
    title: "Head Trainer",
    bio: "Trainer bio, qualifications and experience will be provided by the academy before launch.",
    tags: ["Level 2 Certified", "Exercise Programming", "Practical Training"],
  },
  {
    name: "To be provided",
    title: "Fitness Educator",
    bio: "Trainer bio, qualifications and experience will be provided by the academy before launch.",
    tags: ["Anatomy & Physiology", "Nutrition Basics", "Assessments"],
  },
];

export default function Trainers() {
  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Trainers</h1>
          <p className="text-white/70 text-lg">Learn from industry-active, certified fitness professionals</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-2">Meet the Team</h2>
            <p className="text-charcoal/60">Each trainer profile is based on real information supplied by the academy</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderTrainers.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-navy/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-navy/20 flex items-center justify-center text-3xl">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{t.name}</h3>
                  <p className="text-teal text-sm font-medium mb-3">{t.title}</p>
                  <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">{t.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag, j) => (
                      <span key={j} className="bg-teal/10 text-teal text-xs px-2.5 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/40 text-sm mt-8">
            Full trainer profiles with photos, qualifications and bios will be published once provided by the academy.
          </p>
        </div>
      </section>

      <section className="bg-navy py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Train With Our Experts</h2>
          <p className="text-white/60 mb-6">Get certified under the guidance of experienced fitness professionals.</p>
          <a href="/enroll" className="bg-teal text-white px-8 py-3.5 rounded-lg font-bold hover:bg-teal/80 transition-colors">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}

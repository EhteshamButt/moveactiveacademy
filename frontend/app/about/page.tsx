export default function About() {
  const pillars = [
    { title: "Our Mission", icon: "🎯", desc: "To create skilled, knowledgeable and confident fitness professionals through practical, career-focused education." },
    { title: "Our Vision", icon: "🌟", desc: "To become Pakistan's leading fitness education academy, setting the standard for trainer certification and development." },
    { title: "Our Philosophy", icon: "💡", desc: "We believe learning must be practical, not just theoretical. Every session is designed to build real-world competency." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Move Active Academy</h1>
          <p className="text-white/70 text-lg">Learn to move. Train to transform.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">Who We Are</h2>
            <p className="text-charcoal/70 mb-4 leading-relaxed">
              Move Active Academy is a professional fitness education institution based at iGym, Saddar Rawalpindi. We are focused on creating skilled, knowledgeable and confident fitness professionals through practical training and career-focused education.
            </p>
            <p className="text-charcoal/70 mb-4 leading-relaxed">
              Our flagship program — the Level 2 Fitness Trainer Certification — is designed not just to teach theory, but to develop real professionals who are ready to work in gyms, train clients, and build successful careers in the fitness industry.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              We are located at iGym, Bank Road / Saddar Rawalpindi, one of the region's premier training facilities — giving students real hands-on exposure from day one.
            </p>
          </div>
          <div className="bg-light rounded-2xl h-64 md:h-80 flex items-center justify-center text-charcoal/30">
            <div className="text-center">
              <div className="text-6xl mb-2">🏋️</div>
              <p className="text-sm">Academy / venue photo — to be provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-10">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm text-left">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Journey With Us</h2>
          <p className="text-white/60 mb-6">Reserve your seat in the next Level 2 Fitness Trainer Certification batch.</p>
          <a href="/enroll" className="bg-teal text-white px-8 py-3.5 rounded-lg font-bold hover:bg-teal/80 transition-colors">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}

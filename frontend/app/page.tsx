import Link from "next/link";

const curriculum = [
  "Exercise Anatomy & Physiology",
  "Body Systems",
  "Diet / Nutrition Basics",
  "Assessments",
  "Practical Training",
  "Exercise Programming",
];

const careerCards = [
  { icon: "🏋️", title: "Work in Gyms", desc: "Join professional fitness facilities as a certified trainer." },
  { icon: "👤", title: "Personal Training", desc: "Build your own client base and deliver one-to-one sessions." },
  { icon: "💼", title: "Freelancing", desc: "Offer flexible training services on your own schedule." },
  { icon: "📱", title: "Online Coaching", desc: "Reach clients worldwide through digital platforms." },
  { icon: "🏢", title: "Own Fitness Business", desc: "Start your own gym, studio or fitness brand." },
  { icon: "⚡", title: "Practical Client Skills", desc: "Develop hands-on skills that clients actually value." },
];

const benefits = [
  { icon: "✅", title: "Practical Training", desc: "Hands-on experience from day one." },
  { icon: "🎓", title: "Experienced Educators", desc: "Learn from certified, industry-active trainers." },
  { icon: "📚", title: "Industry Curriculum", desc: "Focused on real-world fitness scenarios." },
  { icon: "📋", title: "Practical Assessments", desc: "Assessed on real performance, not just theory." },
  { icon: "🗺️", title: "Career Guidance", desc: "Post-certification career support and pathways." },
  { icon: "🔄", title: "Flexible Learning", desc: "Suitable for students, professionals and housewives." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-teal/20 text-teal text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Now Enrolling — Next Batch: 22 September
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              LEVEL 2 FITNESS TRAINER{" "}
              <span className="text-teal">CERTIFICATION</span>
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Professional education, practical experience and real career opportunities.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">📅 Next Batch: <strong>22 September</strong></div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">📍 iGym, Saddar Rawalpindi / Bank Road</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-teal text-sm font-semibold">🔥 Limited Seats Available</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/enroll" className="bg-teal hover:bg-teal/80 text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg">
                Enroll Now / Reserve Your Seat
              </Link>
              <Link href="/verify" className="border border-white/30 hover:border-teal text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors">
                Verify Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-2">Featured Course</h2>
          <p className="text-charcoal/60 mb-10">Everything you need to become a certified fitness professional</p>
          <div className="bg-light rounded-2xl p-8 max-w-3xl mx-auto text-left shadow-sm">
            <span className="inline-block bg-teal text-white text-xs font-bold px-3 py-1 rounded-full mb-4">FEATURED</span>
            <h3 className="text-2xl font-bold text-navy mb-2">Level 2 Fitness Trainer Certification</h3>
            <p className="text-charcoal/70 mb-6">A career-focused program designed to produce skilled, knowledgeable and confident fitness professionals through practical training.</p>
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div><span className="text-teal font-semibold">Venue:</span> iGym, Saddar Rawalpindi</div>
              <div><span className="text-teal font-semibold">Next Batch:</span> 22 September</div>
              <div><span className="text-teal font-semibold">Mode:</span> In-Person + Practical</div>
              <div><span className="text-teal font-semibold">Duration:</span> To be confirmed</div>
            </div>
            <Link href="/courses" className="bg-navy text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-navy/90 transition-colors">
              View Full Course Details
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-2">What You Will Learn</h2>
          <p className="text-charcoal/60 mb-10">A comprehensive, industry-focused curriculum</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {curriculum.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-3 text-left">
                <span className="w-8 h-8 rounded-full bg-teal/15 text-teal flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <span className="text-charcoal font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-2">Why Choose Move Active Academy?</h2>
          <p className="text-charcoal/60 mb-10">Designed for students, professionals, housewives and aspiring fitness professionals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-light rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{b.icon}</div>
                <h4 className="font-bold text-navy mb-1">{b.title}</h4>
                <p className="text-charcoal/60 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Career Pathways</h2>
          <p className="text-white/60 mb-10">What you can do after certification</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerCards.map((c, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-left hover:bg-white/15 transition-colors">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h4 className="font-bold text-white mb-1">{c.title}</h4>
                <p className="text-white/60 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/career" className="mt-8 inline-block border border-teal text-teal hover:bg-teal hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore All Career Pathways
          </Link>
        </div>
      </section>

      {/* Verify CTA */}
      <section className="bg-light py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Verify a Certificate</h2>
          <p className="text-charcoal/60 mb-6">Confirm the authenticity of any Move Active Academy certificate instantly.</p>
          <Link href="/verify" className="bg-navy text-white px-8 py-3.5 rounded-lg font-bold hover:bg-navy/90 transition-colors">
            Verify Certificate Now
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Start Your Fitness Career?</h2>
          <p className="text-white/80 mb-6">Join the next batch at iGym, Saddar Rawalpindi. Limited seats available.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/enroll" className="bg-white text-navy px-8 py-3.5 rounded-lg font-bold hover:bg-white/90 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const careers = [
  { icon: "🏋️", title: "Work in Gyms", desc: "Join professional fitness facilities as a certified trainer. Gyms and fitness centres actively seek qualified Level 2 trainers.", color: "bg-navy" },
  { icon: "👤", title: "Personal Training", desc: "Build a loyal client base and deliver one-to-one personalised training sessions tailored to individual goals.", color: "bg-teal" },
  { icon: "💼", title: "Freelancing", desc: "Offer flexible training services at parks, homes or rented studio spaces — on your own schedule.", color: "bg-navy" },
  { icon: "📱", title: "Online Coaching", desc: "Reach clients worldwide through digital platforms, apps and social media. A growing and lucrative career path.", color: "bg-teal" },
  { icon: "🏢", title: "Start Your Own Fitness Business", desc: "Use your certification as the foundation to open your own gym, studio or fitness brand.", color: "bg-navy" },
  { icon: "⚡", title: "Develop Practical Client Skills", desc: "Apply exercise programming, assessments and nutrition basics to deliver real results for real people.", color: "bg-teal" },
];

export default function Career() {
  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Pathways</h1>
          <p className="text-white/70 text-lg">Where your certification can take you</p>
        </div>
      </section>

      {/* Career Cards */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-2">6 Career Directions After Certification</h2>
            <p className="text-charcoal/60">One certification — multiple pathways</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-teal">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{c.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-8">Who Is This Program For?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Students", "Working Professionals", "Housewives", "Aspiring Fitness Professionals"].map((who, i) => (
              <div key={i} className="bg-light rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-teal/15 text-teal text-xl flex items-center justify-center mx-auto mb-3">
                  {["🎓", "💼", "🏠", "🏃"][i]}
                </div>
                <p className="font-semibold text-navy text-sm">{who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Take the First Step Today</h2>
          <p className="text-white/80 mb-6">Enroll in the Level 2 Fitness Trainer Certification and unlock your fitness career.</p>
          <Link href="/enroll" className="bg-white text-navy px-8 py-3.5 rounded-lg font-bold hover:bg-white/90 transition-colors">
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}

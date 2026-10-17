import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/image (7).png"
              alt="Move Active Academy"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-white/60 text-sm mb-4 max-w-xs">
            Learn to move. Train to transform. Professional fitness education and certification in Rawalpindi.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center text-sm transition-colors">f</a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center text-sm transition-colors">in</a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center text-sm transition-colors">yt</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-teal">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {[
              { href: "/courses", label: "Courses" },
              { href: "/certification", label: "Certification" },
              { href: "/career", label: "Career Pathways" },
              { href: "/trainers", label: "Trainers" },
              { href: "/verify", label: "Verify Certificate" },
              { href: "/faq", label: "FAQs" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-teal transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-teal">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>📍 iGym, Saddar Rawalpindi / Bank Road</li>
            <li>📞 To be provided</li>
            <li>💬 WhatsApp: To be provided</li>
            <li>✉️ Email: To be provided</li>
          </ul>
          <Link
            href="/enroll"
            className="mt-4 inline-block bg-teal text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal/80 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © {new Date().getFullYear()} Move Active Academy. All rights reserved.
      </div>
    </footer>
  );
}

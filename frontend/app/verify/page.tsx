"use client";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

type VerifyResult = {
  found: boolean;
  status: string;
  message?: string;
  student_name?: string;
  certificate_id?: string;
  course_name?: string;
  issue_date?: string;
  valid_till?: string;
  academy_name?: string;
};

export default function Verify() {
  const [certId, setCertId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [error, setError] = useState("");

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!certId.trim()) return;
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const res = await fetch(`${API}/certificates/verify/${certId.trim()}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setError("Unable to reach the verification server. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <section className="bg-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Verify Certificate</h1>
          <p className="text-white/70 text-lg">Confirm the authenticity of a Move Active Academy certificate</p>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-xl mx-auto px-4">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-navy mb-2">Enter Certificate ID</h2>
            <p className="text-charcoal/60 text-sm mb-6">Certificate IDs follow the format: 1-001</p>
            <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="e.g. 1-001"
                className="flex-1 border border-charcoal/20 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-teal text-sm"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-navy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-navy/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Checking..." : "Verify"}
              </button>
            </form>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">{error}</div>
          )}

          {/* Result: Found */}
          {result?.found && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-teal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <p className="font-bold text-navy">Certificate Verified</p>
                  <p className="text-teal text-sm font-semibold">{result.status}</p>
                </div>
              </div>
              <dl className="space-y-3">
                {[
                  { label: "Student Name", value: result.student_name },
                  { label: "Certificate ID", value: result.certificate_id },
                  { label: "Course Name", value: result.course_name },
                  { label: "Issue Date", value: result.issue_date },
                  { label: "Valid Till", value: result.valid_till },
                  { label: "Academy", value: result.academy_name },
                  { label: "Status", value: result.status },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 border-b border-charcoal/10 pb-2">
                    <dt className="text-xs text-teal font-semibold w-32 shrink-0">{f.label}</dt>
                    <dd className="text-charcoal font-medium text-sm">{f.value || "—"}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Result: Not Found */}
          {result && !result.found && (
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-charcoal/20">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center text-2xl mx-auto mb-4">🔍</div>
                <h3 className="font-bold text-navy mb-2">Certificate Not Found</h3>
                <p className="text-charcoal/60 text-sm">{result.message}</p>
                <p className="text-charcoal/40 text-xs mt-3">Please double-check the ID or contact the academy for assistance.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

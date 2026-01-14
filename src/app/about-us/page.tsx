import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
        <div className="section grid gap-10 py-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
              About Us
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Award winning & certified landscaping company in GTA
            </h1>
            <p className="text-lg text-emerald-100">
              For over 15 years we have been exceeding expectations with high-quality
              landscaping, stonework, and wood solutions. Quality work is our passion
              and the proof is in our projects.
            </p>
            <p className="text-emerald-100">
              Our team of landscape technicians, managers, and designers collaborate
              with you to create builds that can be enjoyed for decades. No matter the
              size or complexity, we deliver with precision, care, and communication.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
              >
                Get a free quote
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View our gallery
              </Link>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section grid gap-6 lg:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900">Built on trust</h3>
          <p className="text-sm text-slate-600">
            Hundreds of 5-star reviews and 5,000+ completed projects demonstrate our
            commitment to transparency, reliability, and craftsmanship.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900">Safety & insurance</h3>
          <p className="text-sm text-slate-600">
            Up to 5-year warranty, full liability coverage, and WSIB to protect your
            home and project from start to finish.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-slate-900">One team, zero stress</h3>
          <p className="text-sm text-slate-600">
            In-house design, permitting, and construction teams streamline timelines
            and keep communication clear at every step.
          </p>
        </div>
      </section>
    </div>
  );
}



import Link from "next/link";

const galleryItems = [
  "Interlocking driveway & entry steps",
  "Backyard pool with integrated lighting",
  "Custom pergola with seating zone",
  "Tiered steps with retaining wall",
  "Modern deck with privacy screen",
  "Flagstone walkway and garden beds",
];

export default function GalleryPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-slate-900 text-white">
        <div className="section flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Gallery
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Our portfolio of outdoor transformations
            </h1>
            <p className="text-lg text-slate-100">
              Explore recent projects across landscaping, stonework, woodwork, and pool builds in the GTA.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
          >
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="section space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 p-5 shadow-sm"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),transparent)]" />
              <div className="relative space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Project</p>
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                <p className="text-sm text-slate-600">
                  Premium materials, clean detailing, and expert craftsmanship tailored to each property.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-slate-800">
          Ready to see more? Contact us for a walkthrough of additional projects and materials we recommend for your space.
        </div>
      </section>
    </div>
  );
}



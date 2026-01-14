import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import {
  awards,
  hero,
  servicesOverview,
  testimonials,
  reasons,
  stats,
  locations,
  mediaReasons,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="section grid items-center gap-10 py-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
              Toronto & GTA
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-emerald-100">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {hero.bullets.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-emerald-50 ring-1 ring-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero.ctaPrimary.href}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
              >
                {hero.ctaPrimary.label}
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white"
                >
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              The most preferred & certified landscaping company in GTA
            </h2>
            <p className="text-slate-600">
              Recognized for leadership, client satisfaction, and years of service.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-200 hover:text-emerald-800"
          >
            View our gallery
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="card">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">
                Award
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {award.title}
              </h3>
              <p className="text-sm text-slate-600">
                {award.source} · {award.years}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-900">Our fields of expertise</h2>
          <p className="text-slate-600">
            Landscaping, stonework, woodwork, swimming pools, and supporting services tailored to every property.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesOverview.map((service) => (
            <div key={service.slug} className="card flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-emerald-700"
                >
                  Learn more
                </Link>
              </div>
              <p className="text-sm text-slate-600">{service.description}</p>
              <div className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                {service.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section grid gap-6 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">
            Why landscaping services in Toronto?
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Landscaping services that support your goals
          </h2>
          <p className="text-slate-600">
            We design and build outdoor spaces that add value, create comfort, and protect your property.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {mediaReasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{reason.title}</h3>
                <p className="text-sm text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-a-quote"
              className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Request a FREE estimate
            </Link>
            <Link
              href="/contacts"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-emerald-200 hover:text-emerald-800"
            >
              Call us
            </Link>
          </div>
        </div>
        <QuoteForm />
      </section>

      <section className="section space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-900">Why choose Avanti Landscaping</h2>
          <p className="text-slate-600">
            Make the right investment with a team trusted across the Greater Toronto Area.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="card">
              <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
              <p className="text-sm text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-900">Testimonials</h2>
          <p className="text-slate-600">
            Homeowners choose Avanti for transparency, professionalism, and exceptional results.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card flex flex-col gap-3">
              <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
              <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-xs text-slate-500">{testimonial.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-900">Our service locations</h2>
          <p className="text-slate-600">
            If you don’t see your area listed, call (647) 930-1440 to check coverage.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div key={location.region} className="card">
              <h3 className="text-sm font-semibold text-slate-900">{location.region}</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {location.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card flex flex-col items-start gap-4 bg-gradient-to-r from-emerald-700 to-emerald-600 p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
              Ready to build
            </p>
            <h2 className="text-3xl font-semibold">Transform your outdoor space</h2>
            <p className="text-emerald-100">
              Schedule a consultation today. Whether you need a backyard makeover or full hardscape restoration, we have you covered.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-a-quote"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
            >
              Get a free quote
            </Link>
            <Link
              href="/contacts"
              className="rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

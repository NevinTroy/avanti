import { notFound } from "next/navigation";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { servicesOverview, serviceDetailCopy } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesOverview.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetailCopy[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-10 pb-16">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="section grid gap-10 py-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Services
            </p>
            <h1 className="text-4xl font-semibold leading-tight">{service.title}</h1>
            <p className="text-lg text-slate-100">{service.intro}</p>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {service.bullets.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {service.extra && (
              <p className="text-sm text-slate-200">{service.extra}</p>
            )}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400"
              >
                Get a free quote
              </Link>
              <Link
                href="/contacts"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call us
              </Link>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section">
        <div className="card space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            Built for projects of any size or complexity
          </h2>
          <p className="text-slate-600">
            With the right people, tools, and systems in place, our team delivers
            high-quality work across tight city lots and sprawling estate builds.
            We pair design, permitting, and construction expertise under one roof
            to keep your project moving smoothly.
          </p>
          <p className="text-slate-600">
            Expect clear communication, jobsite cleanliness, and craftsmanship that
            stands the test of time across the Greater Toronto Area.
          </p>
        </div>
      </section>
    </div>
  );
}



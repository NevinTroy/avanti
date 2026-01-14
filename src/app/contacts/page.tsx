import { QuoteForm } from "@/components/QuoteForm";
import { contactInfo, locations } from "@/lib/content";

export default function ContactsPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-slate-900 text-white">
        <div className="section grid gap-10 py-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Contact us
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Let’s talk about your project
            </h1>
            <p className="text-lg text-slate-100">
              Call, email, or send a message. We’ll respond quickly and schedule a free in-home estimate.
            </p>
            <div className="space-y-2 text-sm text-slate-100">
              <div className="font-semibold text-white">Phone</div>
              <a href={`tel:${contactInfo.primaryPhone}`} className="block">
                {contactInfo.primaryPhone}
              </a>
              <a href={`tel:${contactInfo.secondaryPhone}`} className="block">
                {contactInfo.secondaryPhone}
              </a>
            </div>
            <div className="space-y-2 text-sm text-slate-100">
              <div className="font-semibold text-white">Email</div>
              <a href={`mailto:${contactInfo.email}`} className="block">
                {contactInfo.email}
              </a>
            </div>
            <div className="space-y-2 text-sm text-slate-100">
              <div className="font-semibold text-white">Locations</div>
              {contactInfo.addresses.map((address) => (
                <div key={address}>{address}</div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Service coverage</h2>
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
    </div>
  );
}



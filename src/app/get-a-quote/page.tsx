import { QuoteForm } from "@/components/QuoteForm";
import { contactInfo } from "@/lib/content";

export default function GetAQuotePage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white">
        <div className="section grid gap-10 py-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
              Free estimate
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Get a free quote for your project
            </h1>
            <p className="text-lg text-emerald-100">
              Tell us about your landscaping goals. We’ll reach out to confirm details and schedule a visit.
            </p>
            <div className="space-y-1 text-sm text-emerald-100">
              <div className="font-semibold text-white">Prefer to call?</div>
              <a href={`tel:${contactInfo.primaryPhone}`} className="block">
                {contactInfo.primaryPhone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="block">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}



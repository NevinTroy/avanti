import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-xl space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">
          Thank you for contacting us
        </h1>
        <p className="text-slate-600">
          We received your request and will be in touch shortly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            Back to home
          </Link>
          <Link
            href="/gallery"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-emerald-200 hover:text-emerald-800"
          >
            View gallery
          </Link>
        </div>
      </div>
    </div>
  );
}



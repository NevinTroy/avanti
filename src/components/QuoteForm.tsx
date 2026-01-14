"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

export function QuoteForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!values.name.trim()) nextErrors.name = "Name is required";
    if (!values.phone.trim()) nextErrors.phone = "Phone is required";
    if (!values.email.trim() || !values.email.includes("@"))
      nextErrors.email = "Valid email is required";
    if (!values.address.trim()) nextErrors.address = "Full address is required";
    if (!values.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong");
      }

      setValues(initialState);
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setServerError(
        err instanceof Error ? err.message : "Unable to submit right now.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-slate-900">Get a free quote</h3>
        <p className="text-sm text-slate-600">
          Landscaping services that support your goals. Tell us about your project and we’ll respond shortly.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">Name</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
            required
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">Phone</label>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
            required
          />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
            required
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800">Full Address</label>
          <input
            type="text"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
            required
          />
          {errors.address && <p className="text-xs text-red-600">{errors.address}</p>}
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-800">Message</label>
        <textarea
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          rows={4}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none"
          required
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
      </div>
      {serverError && (
        <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {serverError}
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Request a FREE estimate"}
      </button>
    </form>
  );
}



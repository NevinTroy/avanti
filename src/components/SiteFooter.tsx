import Link from "next/link";
import { contactInfo } from "@/lib/content";
import { navLinks } from "@/lib/nav";

export function SiteFooter() {
  const primaryNav = navLinks.filter((link) => !link.children);

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="section grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-emerald-800">
            Avanti Landscaping
          </h3>
          <p className="text-sm text-slate-600">
            Award-winning landscaping company serving Toronto and the Greater
            Toronto Area.
          </p>
          <div className="space-y-1 text-sm text-slate-700">
            <a href={`tel:${contactInfo.primaryPhone}`} className="block font-semibold text-emerald-800">
              {contactInfo.primaryPhone}
            </a>
            <a href={`tel:${contactInfo.secondaryPhone}`} className="block">
              {contactInfo.secondaryPhone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="block">
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-700">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/get-a-quote" className="font-semibold text-emerald-700">
                Get a free quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Our Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {navLinks
              .filter((link) => link.children)
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-700">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Locations</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {contactInfo.addresses.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="section flex flex-col gap-2 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© Landscaping Company - avantilandscaping.ca. All rights reserved.</span>
          <div className="flex gap-3">
            <Link href="/privacy-policy" className="hover:text-emerald-700">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-emerald-700">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



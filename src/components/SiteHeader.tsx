"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, type NavLink } from "@/lib/nav";
import { contactInfo } from "@/lib/content";

function NavItem({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <div className="group relative">
      <Link
        href={link.href}
        className={`text-sm font-medium transition hover:text-emerald-700 ${isActive ? "text-emerald-700" : "text-slate-800"}`}
      >
        {link.label}
      </Link>
      {link.children && link.children.length > 0 && (
        <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 min-w-[240px] rounded-xl border border-slate-200 bg-white p-3 opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:opacity-100">
          <div className="grid grid-cols-1 gap-2">
            {link.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold text-emerald-800">
            Avanti Landscaping
          </Link>
          <span className="hidden text-sm text-slate-500 sm:inline">
            Award-winning landscaping company in Toronto & GTA
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <a href={`tel:${contactInfo.primaryPhone}`} className="font-semibold text-emerald-700">
            {contactInfo.primaryPhone}
          </a>
          <Link
            href="/get-a-quote"
            className="hidden rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:inline"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </div>
      <nav className="border-t border-slate-200">
        <div className="section hidden items-center gap-6 overflow-x-auto py-3 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </div>
        {open && (
          <div className="section flex flex-col gap-2 py-3 md:hidden">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-1">
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-emerald-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="grid grid-cols-1 gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-sm text-slate-600"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/get-a-quote"
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}



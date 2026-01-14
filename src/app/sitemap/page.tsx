import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function SitemapPage() {
  const links = [
    { label: "Home", href: "/" },
    ...navLinks.map((link) => ({ label: link.label, href: link.href })),
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "Thank You", href: "/thank-you" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <div className="section space-y-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Site Map</h1>
      <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-emerald-700">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



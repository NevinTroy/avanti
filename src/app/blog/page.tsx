import Link from "next/link";

const posts = [
  {
    title: "How interlocking boosts curb appeal and durability",
    tag: "Stonework",
  },
  {
    title: "Designing multi-functional backyards for hosting",
    tag: "Landscaping",
  },
  {
    title: "Choosing the right pool type for your property",
    tag: "Swimming Pools",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="section py-14">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">
              Blog & Insights
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Insights from Avanti Landscaping
            </h1>
            <p className="text-lg text-emerald-100">
              Tips on design, materials, and maintenance to get the most from your outdoor spaces.
            </p>
            <div className="prose prose-invert max-w-none">
              <p className="text-emerald-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-emerald-50">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
                className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="card space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {post.tag}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
            <p className="text-sm text-slate-600">
              Coming soon: read more about this topic and how we help homeowners across the GTA.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}



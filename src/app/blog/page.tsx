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
      <section className="bg-emerald-900 text-white">
        <div className="section flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Blog
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Insights from Avanti Landscaping
            </h1>
            <p className="text-lg text-emerald-100">
              Tips on design, materials, and maintenance to get the most from your outdoor spaces.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            Get a free quote
          </Link>
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



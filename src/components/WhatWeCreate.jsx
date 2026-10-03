function WhatWeCreate() {
  const categories = [
    {
      title: "AI UGC",
      description:
        "Short, authentic-feeling videos designed to blend into social feeds and drive engagement.",
      tags: ["Under 60s", "Vertical", "Edited with music"],
      link: "/portfolio#ugc",
    },
    {
      title: "AI Products",
      description:
        "Polished product videos and photography that showcase your product in the best possible light.",
      tags: ["Video & Photography", "Landscape or vertical"],
      link: "/portfolio#products",
    },
    {
      title: "AI Pixar",
      description:
        "Playful, animated-style visuals with a distinct storytelling feel",
      tags: ["Character animation", "Under 60s"],
      link: "/portfolio#pixar",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-white">
        What We Create
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.title}
            href={category.link}
            className="group rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-colors hover:border-amber-500/50"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400">
              {category.title}
            </h3>
            <p className="mt-3 text-gray-400">{category.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default WhatWeCreate;

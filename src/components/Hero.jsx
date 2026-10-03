function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-medium tracking-[0.3em] text-amber-400 uppercase">
        Ephvex Studio
      </p>
      <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Elevating Vision Into Experience
      </h1>
      <p className="mt-6 max-w-xl text-lg text-gray-400">
        AI-powered video production for brands that want to stand out.
      </p>

      <a
        href="/portfolio"
        className="mt-10 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 px-8 py-3 font-semibold text-black hover:from-amber-400 hover:to-yellow-500"
      >
        View Our Work
      </a>
    </section>
  );
}

export default Hero;

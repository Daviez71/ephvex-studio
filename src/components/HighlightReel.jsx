function HighlightReel({ videoUrl }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20">
      <h2 className="text-center text-3xl font-bold text-white">
        Highlight Reel
      </h2>
      <div className="mt-10 flex justify-center">
        <video
          src={videoUrl}
          controls
          className="max-h-[70vh] w-auto rounded-xl border border-gray-800"
          poster=""
        />
      </div>
    </section>
  );
}

export default HighlightReel;

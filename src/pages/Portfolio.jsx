import { useState } from "react";
import { videos } from "../data/video";
import VideoGrid from "../components/VideoGrid";
import VideoModal from "../components/VideoModal";

function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const ugcVideos = videos.filter((v) => v.category === "ugc");
  const productVideos = videos.filter((v) => v.category === "product-video");
  const productPhotos = videos.filter((v) => v.category === "product-photo");
  const pixarVideos = videos.filter((v) => v.category === "pixar");

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold text-white">Portfolio</h1>
      <p className="mt-4 text-center text-gray-400">
        A selection of our AI-powered video work.
      </p>

      <section id="ugc" className="mt-20 scroll-mt-24">
        <h2 className="text-3xl font-bold text-white">AI UGC</h2>
        <div className="mt-8">
          <VideoGrid videos={ugcVideos} onPlay={setActiveVideo} />
        </div>
      </section>

      <section id="products" className="mt-24 scroll-mt-24">
        <h2 className="text-3xl font-bold text-white">AI Product</h2>
        <div className="mt-8 space-y-12">
          <VideoGrid
            title="Video"
            videos={productVideos}
            onPlay={setActiveVideo}
          />
          <VideoGrid
            title="Photography"
            videos={productPhotos}
            onPlay={setActiveVideo}
          />
        </div>
      </section>

      <section id="pixar" className="mt-24 scroll-mt-24">
        <h2 className="text-3xl font-bold text-white">AI Pixar</h2>
        <div className="mt-8">
          <VideoGrid videos={pixarVideos} onPlay={setActiveVideo} />
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}

export default Portfolio;

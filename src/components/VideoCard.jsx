function VideoCard({ video, onPlay }) {
  const hasContent = video.url !== "";
  const posterUrl =
    video.type === "video" ? video.url.replace(/\.mp4$/, ".jpg") : video.url;

  return (
    <div
      onClick={() => hasContent && onPlay(video)}
      className={`group relative aspect-video overflow-hidden rounded-xl border border-gray-800 bg-gray-900 ${
        hasContent
          ? "cursor-pointer hover:border-amber-500/50"
          : "cursor-default opacity-50"
      }`}
    >
      {hasContent ? (
        video.type === "image" ? (
          <img
            src={video.url}
            className="h-full w-full object-cover"
            alt={video.title}
          />
        ) : (
          <video
            src={video.url}
            poster={posterUrl}
            className="h-full w-full object-cover"
            muted
          />
        )
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
          Coming Soon
        </div>
      )}

      {hasContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-black">
            {video.type === "image" ? "🔍" : "▶"}
          </div>
        </div>
      )}

      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-sm font-medium text-white">
        {video.title}
      </p>
    </div>
  );
}

export default VideoCard;

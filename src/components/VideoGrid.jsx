import VideoCard from "./VideoCard";

function VideoGrid({ title, videos, onPlay }) {
  return (
    <div>
      {title && (
        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
      )}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;

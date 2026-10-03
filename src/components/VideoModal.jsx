function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-white hover:text-amber-400"
        aria-label="Close"
      >
        ✕
      </button>
      {video.type === "image" ? (
        <img
          src={video.url}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-full rounded-lg"
          alt={video.title}
        />
      ) : (
        <video
          src={video.url}
          controls
          autoPlay
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-full rounded-lg"
        />
      )}
    </div>
  );
}

export default VideoModal;

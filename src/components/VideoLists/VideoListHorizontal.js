import { VideoCard } from "../VideoCard/VideoCard";
import "./VideoListHorizontal.css";

export const VideoListHorizontal = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
};

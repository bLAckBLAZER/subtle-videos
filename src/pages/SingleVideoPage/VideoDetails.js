import { MdPlaylistPlay, MdThumbUp, MdWatchLater } from "react-icons/md";

export const VideoDetails = ({ videoDetails }) => {
  const { title, dateAdded, description, views, channel } = videoDetails;

  return (
    <div className="video-details">
      <div className="h3">{title}</div>
      <div className="video-detail-card flex flex-wrap gap-1 justify-between">
        <small>{`${views} views | ${dateAdded}`}</small>
        <div className="video-actions-container flex gap-1">
          <div className="video-action flex justify-between gap-half align-ctr">
            <MdThumbUp size={20} />
            Like
          </div>
          <div className="video-action flex justify-between gap-half align-ctr">
            <MdWatchLater size={20} />
            Watch later
          </div>
          <div className="video-action flex justify-between gap-half align-ctr">
            <MdPlaylistPlay size={20} />
            Add to Playlist
          </div>
        </div>
      </div>
      <div className="video-detail-card flex justify-between align-ctr gap-1">
        <img src="https://picsum.photos/200" alt="" className="avatar" />
        <div className="flex-1">
          <div className="h3">{channel}</div>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

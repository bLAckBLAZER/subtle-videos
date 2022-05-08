import { MdPlaylistPlay, MdThumbUp, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import {
  toggleLikeVideo,
  toggleWatchLater,
} from "../../utils/videoServerCalls";
import { useState, useEffect } from "react";
import { isPresentInList } from "../../utils/helperFunctions";
export const VideoDetails = ({ videoDetails }) => {
  const { title, dateAdded, description, views, channel } = videoDetails;
  const { dataState, dispatchData } = useData();
  const { authState } = useAuth();

  const navigate = useNavigate();

  const [isVideoLiked, setIsVideoLiked] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    setIsVideoLiked(isPresentInList(videoDetails._id, dataState.likedVideos));
    setIsWatchLater(
      isPresentInList(videoDetails._id, dataState.watchLaterVideos)
    );
  });

  return (
    <div className="video-details">
      <div className="h3">{title}</div>
      <div className="video-detail-card flex flex-wrap gap-1 justify-between align-ctr">
        <small>{`${views} views | ${dateAdded}`}</small>
        <div className="video-actions-container flex gap-1">
          <div
            className="video-action flex justify-between gap-half align-ctr"
            onClick={() =>
              authState.token
                ? toggleLikeVideo(
                    videoDetails,
                    dispatchData,
                    authState.token,
                    isVideoLiked
                  )
                : navigate("/login")
            }
          >
            <MdThumbUp size={20} color={isVideoLiked ? "red" : ""} />
            Like
          </div>
          <div
            className="video-action flex justify-between gap-half align-ctr"
            onClick={() =>
              authState.token
                ? toggleWatchLater(
                    videoDetails,
                    dispatchData,
                    authState.token,
                    isWatchLater
                  )
                : navigate("/login")
            }
          >
            <MdWatchLater size={20} color={isWatchLater ? "red" : ""} />
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

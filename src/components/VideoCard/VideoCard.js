import "./VideoCard.css";
import { MdWatchLater } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toggleWatchLater } from "../../utils/videoServerCalls";
import { useAuth, useData } from "../../contexts";
import { isPresentInList } from "../../utils/helperFunctions";
import { useEffect, useState } from "react";

export const VideoCard = ({ video }) => {
  const { authState } = useAuth();
  const { dataState, dispatchData } = useData();
  const [isWatchLater, setIsWatchLater] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsWatchLater(isPresentInList(video._id, dataState.watchLaterVideos));
  });

  return (
    <div className="video-card">
      <div className="card">
        <div className="card-body">
          <Link to={`/watch/${video._id}`}>
            <div className="card-img">
              <img
                src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                alt=""
                className="img-res"
              />
            </div>
          </Link>
          <div className="card-heading">
            <div>
              <h2 className="card-title" aria-label={video.title}>
                {video.title}
              </h2>
              <p className="card-text">{video.channel}</p>
            </div>

            <i
              onClick={() =>
                authState.token
                  ? toggleWatchLater(
                      video,
                      dispatchData,
                      authState.token,
                      isWatchLater
                    )
                  : navigate("/login")
              }
            >
              {<MdWatchLater size={20} color={isWatchLater ? "red" : ""} />}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

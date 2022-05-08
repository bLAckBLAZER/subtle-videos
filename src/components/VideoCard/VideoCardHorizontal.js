import "./VideoCardHorizontal.css";
import { MdWatchLater } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toggleWatchLater } from "../../utils/videoServerCalls";
import { useAuth, useData } from "../../contexts";
import { isPresentInList } from "../../utils/helperFunctions";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export const VideoCardHorizontal = ({ video, closeAction }) => {
  const { authState } = useAuth();
  const { dataState, dispatchData } = useData();
  // const [isWatchLater, setIsWatchLater] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="video-card">
      <div className="card card-horizontal flex-1">
        <div className="card-body flex-1 align-ctr">
          <Link to={`/watch/${video._id}`}>
            <div className="card-img">
              <img
                src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                alt=""
                className="img-res"
              />
            </div>
          </Link>
          <div className="card-heading flex-1">
            <Link to={`/watch/${video._id}`}>
              <div>
                <h2 className="card-title" aria-label={video.title}>
                  {video.title}
                </h2>
                <p className="card-text">{video.channel}</p>
              </div>
            </Link>

            <i
              onClick={() =>
                authState.token
                  ? closeAction(video, dispatchData, authState.token)
                  : navigate("/login")
              }
            >
              {<MdClose size={20} />}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

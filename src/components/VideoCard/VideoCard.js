import "./VideoCard.css";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="card">
        <div className="card-body">
          <Link to="/">
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

            <i>{<MdWatchLater size={20} />}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

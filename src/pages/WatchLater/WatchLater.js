import { useNavigate } from "react-router-dom";
import { VideoCardHorizontal } from "../../components";
import { useData } from "../../contexts";
import { removeWatchLater } from "../../utils/videoServerCalls";

export const WatchLater = () => {
  const { dataState } = useData();
  const navigate = useNavigate();

  return (
    <div className="page flex flex-col">
      <div className="flex justify-between">
        <div className="h3">Watch Later</div>
      </div>
      {dataState.watchLaterVideos.length ? (
        dataState.watchLaterVideos.map((video) => (
          <VideoCardHorizontal
            video={video}
            closeAction={removeWatchLater}
            key={video._id}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col align-ctr justify-ctr">
          <div className=" h3 txt-center">
            {" "}
            You don't have any videos added to watch later.
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
        </div>
      )}
    </div>
  );
};

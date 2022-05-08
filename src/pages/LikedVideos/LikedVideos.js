import { useNavigate } from "react-router-dom";
import { VideoCardHorizontal } from "../../components";
import { useData } from "../../contexts";
import { dislikeVideo } from "../../utils/videoServerCalls";

export const LikedVideos = () => {
  const { dataState } = useData();
  const navigate = useNavigate();

  return (
    <div className="page flex flex-col">
      <div className="flex justify-between">
        <div className="h3">Liked Videos</div>
      </div>
      {dataState.likedVideos.length ? (
        dataState.likedVideos.map((video) => (
          <VideoCardHorizontal
            video={video}
            closeAction={dislikeVideo}
            key={video._id}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col align-ctr justify-ctr">
          <div className=" h3 txt-center">
            {" "}
            You don't have any liked videos.
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

import { useNavigate } from "react-router-dom";
import { VideoCard } from "../../components";
import { useData } from "../../contexts";

export const HistoryPage = () => {
  const { dataState } = useData();
  const navigate = useNavigate();

  return (
    <div className="page flex flex-wrap">
      {dataState.userHistory.length ? (
        dataState.userHistory.map((video) => <VideoCard video={video} />)
      ) : (
        <div className="flex-1 flex flex-col align-ctr justify-ctr">
          <div className=" h3 txt-center">
            {" "}
            You don't have any watch history.
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

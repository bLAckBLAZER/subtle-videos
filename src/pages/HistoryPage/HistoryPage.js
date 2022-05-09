import { useNavigate } from "react-router-dom";
import { VideoCardHorizontal } from "../../components";
import { useData, useAuth } from "../../contexts";
import { deleteFromHistory, clearHistory } from "../../utils/videoServerCalls";

export const HistoryPage = () => {
  const { dataState, dispatchData } = useData();
  const { authState } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="page flex flex-col">
      <div className="flex justify-between">
        <div className="h3">History</div>
        <div className="flex align-ctr justify-between">
          <button
            className="btn btn-secondary"
            onClick={() => clearHistory(dispatchData, authState.token)}
          >
            Clear History
          </button>
        </div>
      </div>
      {dataState.userHistory.length ? (
        dataState.userHistory.map((video) => (
          <VideoCardHorizontal
            video={video}
            closeAction={deleteFromHistory}
            key={video._id}
          />
        ))
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

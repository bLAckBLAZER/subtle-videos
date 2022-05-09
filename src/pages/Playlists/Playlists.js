import { useNavigate } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import { useState } from "react";
import { PlaylistModal } from "./PlaylistModal";

export const Playlists = () => {
  const { dataState, dispatchData } = useData();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page flex flex-col">
      <div className="flex justify-between">
        <div className="h3">Playlists</div>
        <div className="flex align-ctr justify-between">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(true)}
          >
            Add new playlist
          </button>
        </div>
      </div>
      {dataState.userPlaylists.length ? (
        dataState.userPlaylists.map((playlist) => <div>{playlist.name}</div>)
      ) : (
        <div className="flex-1 flex flex-col align-ctr justify-ctr">
          <div className=" h3 txt-center"> You don't have any Playlists.</div>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
        </div>
      )}
      {showModal && <PlaylistModal setShowModal={setShowModal} />}
    </div>
  );
};

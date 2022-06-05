import { useNavigate } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import { useState } from "react";
import { PlaylistModal } from "./PlaylistModal";
import "./Playlists.css";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { deletePlaylist } from "../../utils/videoServerCalls";

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
        dataState.userPlaylists.map((playlist) => (
          <div className="playlist-item" key={playlist._id}>
            <Link
              className="playlist-details"
              to={`/playlists/${playlist._id}`}
            >
              <div className="h3">{playlist.title}</div>
              <small>{playlist.description}</small>
              <small>{`No. of videos: ${playlist.videos.length}`}</small>
            </Link>
            <i
              onClick={() =>
                deletePlaylist(playlist, dispatchData, authState.token)
              }
            >
              {<MdClose size={20} />}
            </i>
          </div>
        ))
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

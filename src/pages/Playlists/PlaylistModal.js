import "./PlaylistModal.css";
import { useState } from "react";
import { addPlaylist } from "../../utils/videoServerCalls";
import { useAuth, useData } from "../../contexts";

export const PlaylistModal = ({ setShowModal }) => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
  });

  const { dispatchData } = useData();
  const { authState } = useAuth();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    addPlaylist(playlistData, dispatchData, authState.token);

    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <form className="modal" onSubmit={(e) => formSubmitHandler(e)}>
        <input
          type="text"
          className="modal-input"
          placeholder="Name"
          value={playlistData.name}
          onChange={(e) =>
            setPlaylistData({ ...playlistData, name: e.target.value })
          }
          required
        />
        <textarea
          type="text"
          id="playlist-desc"
          className="modal-input"
          placeholder="Description..."
          value={playlistData.description}
          onChange={(e) =>
            setPlaylistData({ ...playlistData, description: e.target.value })
          }
        />
        <div className="flex justify-ard">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

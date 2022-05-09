import "./PlaylistModal.css";
import { useState } from "react";

export const PlaylistModal = ({ setShowModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");

  return (
    <div className="modal-container">
      <form className="modal">
        <input
          type="text"
          className="modal-input"
          placeholder="Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <textarea
          type="text"
          id="playlist-desc"
          className="modal-input"
          placeholder="Description..."
          value={playlistDesc}
          onChange={(e) => setPlaylistDesc(e.target.value)}
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

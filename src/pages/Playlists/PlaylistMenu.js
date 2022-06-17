import { MdClose, MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import "./PlaylistMenu.css";
import { useAuth, useData } from "../../contexts";
import {
  getAllPlaylists,
  addPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
} from "../../utils/videoServerCalls";
import { isPresentInList } from "../../utils/helperFunctions";

export const PlaylistMenu = ({ setShowPlaylistMenu, videoDetails }) => {
  const [playlists, setPlaylists] = useState([]);
  const { authState } = useAuth();
  const { dataState, dispatchData } = useData();

  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
  });

  const [showAddOption, setShowAddOption] = useState(false);

  useEffect(() => {
    getAllPlaylists(setPlaylists, authState.token);
  }, [dataState]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addPlaylist(playlistData, dispatchData, authState.token, videoDetails);

    setShowPlaylistMenu(false);
  };

  return (
    <div className="playlist-menu modal-container">
      <div className="modal">
        <div
          className="flex justify-between align-ctr"
          style={{ marginBottom: "1rem" }}
        >
          <h3>Save to...</h3>
          <i onClick={() => setShowPlaylistMenu(false)}>
            {<MdClose size={20} />}
          </i>
        </div>
        <ul>
          {playlists.map((playlist) => {
            const isVideoAdded = isPresentInList(
              videoDetails._id,
              playlist.videos
            );

            return (
              <li className="pd-1" key={playlist._id}>
                <input
                  type="checkbox"
                  id={playlist._id}
                  checked={isVideoAdded}
                  onChange={() =>
                    isVideoAdded
                      ? deleteVideoFromPlaylist(
                          videoDetails,
                          playlist,
                          dispatchData,
                          authState.token
                        )
                      : addVideoToPlaylist(
                          videoDetails,
                          playlist,
                          dispatchData,
                          authState.token
                        )
                  }
                />
                <label htmlFor={playlist._id}> {playlist.title}</label>
              </li>
            );
          })}
        </ul>

        {!showAddOption && (
          <div
            className="flex justify-between align-ctr"
            style={{ marginTop: "1rem" }}
            onClick={() => setShowAddOption(true)}
            id="add-playlist"
          >
            <MdAdd size={20} />
            <h3>Create new playlist</h3>
          </div>
        )}

        {showAddOption && (
          <form
            className="flex flex-col gap-1"
            onSubmit={(e) => formSubmitHandler(e)}
          >
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
                setPlaylistData({
                  ...playlistData,
                  description: e.target.value,
                })
              }
            />
            <div className="flex justify-ard">
              <button
                className="btn btn-secondary"
                onClick={() => setShowPlaylistMenu(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

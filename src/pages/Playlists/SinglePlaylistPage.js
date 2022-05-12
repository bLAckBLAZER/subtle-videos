import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import {
  deletePlaylist,
  getPlaylist,
  deleteVideoFromPlaylist,
} from "../../utils/videoServerCalls";
import { VideoCardHorizontal } from "../../components";

export const SinglePlaylistPage = () => {
  const { authState } = useAuth();
  const { dataState, dispatchData } = useData();
  const [playlistDetails, setPlaylistDetails] = useState({});
  const { playlistId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPlaylist(playlistId, setPlaylistDetails, authState.token);
  }, [dataState]);

  return (
    <div className="page flex flex-col">
      <div className="flex justify-between">
        <div className="h3">{playlistDetails?.title}</div>
        <div className="flex align-ctr justify-between">
          <button
            className="btn btn-secondary"
            onClick={() => {
              deletePlaylist(
                playlistDetails,
                dispatchData,
                authState.token,
                navigate
              );
            }}
          >
            Delete Playlist
          </button>
        </div>
      </div>
      {playlistDetails?.videos?.length ? (
        playlistDetails?.videos?.map((video) => (
          <VideoCardHorizontal
            video={video}
            closeAction={() =>
              deleteVideoFromPlaylist(
                video,
                playlistDetails,
                dispatchData,
                authState.token
              )
            }
            key={video._id}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col align-ctr justify-ctr">
          <div className=" h3 txt-center">
            {" "}
            You don't have any videos in this playlist.
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

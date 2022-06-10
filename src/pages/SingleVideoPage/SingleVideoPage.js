import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./SingleVideoPage.css";
import { VideoDetails } from "./VideoDetails";
import { useState, useEffect } from "react";
import {
  getVideo,
  getAllVideos,
  updateHistory,
} from "../../utils/videoServerCalls";
import { VideoCard } from "../../components";
import { useAuth, useData } from "../../contexts";

export const SingleVideoPage = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  // const [videos, setVideos] = useState([]);
  const {
    dataState: { allVideos },
  } = useData();
  const { dataState, dispatchData } = useData();
  const { authState } = useAuth();

  useEffect(() => {
    getVideo(videoId, setVideoDetails);
    // getAllVideos(setVideos);
  }, [videoId]);
  const relatedVideos = allVideos.slice(1, 10);

  return (
    <div className=" page flex gap-1 single-video">
      <section className="video-container">
        <div className="video-player">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoId}`}
            controls={true}
            width={"100%"}
            height={"100%"}
            onStart={() =>
              authState.token
                ? updateHistory(
                    videoDetails,
                    dataState.userHistory,
                    dispatchData,
                    authState.token
                  )
                : null
            }
          />
        </div>

        <VideoDetails videoDetails={videoDetails} />
      </section>
      <section id="related-videos" className="flex flex-col align-ctr">
        <div className="h3">Related videos</div>
        <div id="related-videos-list">
          {relatedVideos.map((video) =>
            video._id !== videoId ? (
              <VideoCard video={video} key={video._id} />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
};

import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./SingleVideoPage.css";
import { VideoDetails } from "./VideoDetails";
import { useState, useEffect } from "react";
import { getVideo, getAllVideos } from "../../utils/videoServerCalls";
import { VideoCard } from "../../components";

export const SingleVideoPage = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo(videoId, setVideoDetails);
    getAllVideos(setVideos);
  }, []);

  const relatedVideos = videos.slice(1, 10);

  return (
    <div className=" page flex gap-1 single-video">
      <section className="video-container">
        <div className="video-player">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoId}`}
            controls={true}
            width={"100%"}
            height={"100%"}
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

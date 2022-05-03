import { useEffect, useState } from "react";
import { getAllVideos } from "../../utils/videoServerCalls";
import { VideoCard } from "../../components";
import "./Explore.css";

export const Explore = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos(setVideos);
  }, []);

  return (
    <div className="explore page flex flex-col gap-1">
      <section>Categories</section>
      <section className="grid-3-col">
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </section>
    </div>
  );
};

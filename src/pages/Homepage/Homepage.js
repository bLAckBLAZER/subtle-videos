import { useEffect, useState } from "react";
import "./Homepage.css";
import { getAllVideos } from "../../utils/videoServerCalls";
import { HeroSection } from "./HeroSection";
import { VideoListHorizontal } from "../../components";

export const Homepage = () => {
  const [videos, setVideos] = useState([]);

  const trendingVideos = videos.slice(1, 6);

  useEffect(() => {
    getAllVideos(setVideos);
  }, []);

  return (
    <div className="page flex flex-col gap-1">
      <HeroSection />

      <section className="video-section">
        <h1>Trending videos</h1>
        <VideoListHorizontal videos={trendingVideos} />
      </section>
    </div>
  );
};

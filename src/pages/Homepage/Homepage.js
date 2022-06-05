import "./Homepage.css";
import { HeroSection } from "./HeroSection";
import { VideoListHorizontal } from "../../components";
import { useData } from "../../contexts";

export const Homepage = () => {
  const { dataState } = useData();

  const trendingVideos = dataState.allVideos.slice(1, 6);

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

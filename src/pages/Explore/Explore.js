import { useEffect, useState } from "react";
import { VideoCard, Chip } from "../../components";
import "./Explore.css";
import { useData } from "../../contexts";
import { getAllCategories } from "../../utils/videoServerCalls";

export const Explore = () => {
  const { dataState } = useData();
  const [filteredVideos, setFilteredVideos] = useState(dataState.allVideos);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  const filterByCategory = (selectedCategory, videos) => {
    switch (selectedCategory) {
      case "All":
        return videos;

      default:
        return videos.filter((video) => video.category === selectedCategory);
    }
  };

  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  useEffect(() => {
    setFilteredVideos(filterByCategory(selectedCategory, dataState.allVideos));
  }, [dataState, selectedCategory]);

  return (
    <div className="explore page flex flex-col gap-1">
      <section className="flex flex-wrap gap-1 mg-y-1">
        {categories.map((category) => (
          <Chip
            text={category.categoryName}
            onChipClick={setSelectedCategory}
            active={selectedCategory === category.categoryName}
            key={category._id}
          />
        ))}
      </section>
      <section className="grid-3-col">
        {filteredVideos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </section>
    </div>
  );
};

import axios from "axios";

export const getAllVideos = async (setVideos) => {
  try {
    const res = await axios.get("/api/videos");
    setVideos(res.data.videos);
  } catch {
    console.error("Error getting all videos");
  }
};

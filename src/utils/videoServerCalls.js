import axios from "axios";

export const getAllVideos = async (setVideos) => {
  try {
    const res = await axios.get("/api/videos");
    setVideos(res.data.videos);
  } catch {
    console.error("Error getting all videos");
  }
};

export const getVideo = async (videoId, setVideoDetails) => {
  try {
    const res = await axios.get(`/api/video/${videoId}`);
    setVideoDetails(res.data.video);
    console.log("Single Video Data: ", res);
  } catch {
    console.error("Error getting single videos");
  }
};

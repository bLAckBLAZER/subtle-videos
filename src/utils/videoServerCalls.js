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
  } catch {
    console.error("Error getting single videos");
  }
};

export const likeVideo = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/user/likes",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "LIKE_VIDEO", payload: video });
    } else {
      console.error("Like video call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error liking video", err);
  }
};

export const dislikeVideo = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/likes/${video._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "DISLIKE_VIDEO", payload: video });
    } else {
      console.error("DISLIKE video call failed with status: ", res.status);
    }
  } catch {
    console.error("Error disliking video");
  }
};

export const toggleLikeVideo = (video, dispatchData, token, isVideoLiked) => {
  if (!isVideoLiked) {
    likeVideo(video, dispatchData, token);
  } else {
    dislikeVideo(video, dispatchData, token);
  }
};

export const addWatchLater = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/user/watchlater",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "ADD_WATCH_LATER", payload: video });
    } else {
      console.error("add watch later call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error adding video to watch later", err);
  }
};

export const removeWatchLater = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/watchlater/${video._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "REMOVE_WATCH_LATER", payload: video });
    } else {
      console.error("remove watch later call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error removing video from watch later", err);
  }
};

export const toggleWatchLater = (video, dispatchData, token, isWatchLater) => {
  if (!isWatchLater) {
    addWatchLater(video, dispatchData, token);
  } else {
    removeWatchLater(video, dispatchData, token);
  }
};

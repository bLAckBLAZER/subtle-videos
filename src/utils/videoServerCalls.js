import axios from "axios";
import { isPresentInList } from "./helperFunctions";

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

export const addToHistory = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/user/history",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "ADD_TO_HISTORY", payload: video });
    } else {
      console.error("add to history failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error adding video to history", err);
  }
};

export const deleteFromHistory = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/history/${video._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "REMOVE_FROM_HISTORY", payload: video });
    } else {
      console.error(
        "remove from history call failed with status: ",
        res.status
      );
    }
  } catch (err) {
    console.error("Error removing video from history", err);
  }
};

export const deleteAndAddToHistory = async (video, dispatchData, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/history/${video._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "REMOVE_FROM_HISTORY", payload: video });
      addToHistory(video, dispatchData, token);
    } else {
      console.error(
        "remove from history call failed with status: ",
        res.status
      );
    }
  } catch (err) {
    console.error("Error removing video from history", err);
  }
};

export const updateHistory = (video, userHistory, dispatchData, token) => {
  if (isPresentInList(video._id, userHistory)) {
    deleteAndAddToHistory(video, dispatchData, token);
  } else {
    addToHistory(video, dispatchData, token);
  }
};

export const clearHistory = async (dispatchData, token) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/history/all`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "CLEAR_HISTORY" });
    } else {
      console.error("clear history call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error clearing user history", err);
  }
};

export const getUserLikedVideos = async (dispatchData, token) => {
  try {
    const res = await axios({
      method: "get",
      url: "/api/user/likes",
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_LIKE_VIDEOS", payload: res.data.likes });
    } else {
      console.error("set like videos failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error setting liked videos", err);
  }
};

export const getUserWatchHistory = async (dispatchData, token) => {
  try {
    const res = await axios({
      method: "get",
      url: "/api/user/history",
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_HISTORY", payload: res.data.history });
    } else {
      console.error("set history failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error setting user history", err);
  }
};

export const getUserWatchLater = async (dispatchData, token) => {
  try {
    const res = await axios({
      method: "get",
      url: "/api/user/watchlater",
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_WATCH_LATER", payload: res.data.watchlater });
    } else {
      console.error("set watchlater failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error setting user watchlater", err);
  }
};

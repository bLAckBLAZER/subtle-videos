import axios from "axios";
import { isPresentInList } from "./helperFunctions";
import toast from "react-hot-toast";

export const getAllVideos = async (dispatchData) => {
  try {
    const res = await axios.get("/api/videos");
    dispatchData({ type: "SET_ALL_VIDEOS", payload: res.data.videos });
  } catch {
    console.error("Error getting all videos");
  }
};

export const getAllCategories = async (setCategories) => {
  try {
    const res = await axios.get("/api/categories");
    if (res.status === 200) {
      setCategories(res.data.categories);
    } else {
      console.error("Error getting all categories");
    }
  } catch {
    console.error("Error getting all categories");
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
      toast.success("Video added to liked videos!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to like the video. Please try again!", {
        position: "bottom-center",
      });
      console.error("Like video call failed with status: ", res.status);
    }
  } catch (err) {
    toast.error("Oops! Failed to like the video. Please try again!", {
      position: "bottom-center",
    });
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
      toast.success("Video removed from liked videos!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to dislike the video. Please try again!", {
        position: "bottom-center",
      });
      console.error("DISLIKE video call failed with status: ", res.status);
    }
  } catch {
    toast.error("Oops! Failed to dislike the video. Please try again!", {
      position: "bottom-center",
    });
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
      toast.success("Video added to watch later!", {
        position: "bottom-center",
      });
    } else {
      toast.error(
        "Oops! Failed to add the video to watch later. Please try again!",
        {
          position: "bottom-center",
        }
      );
      console.error("add watch later call failed with status: ", res.status);
    }
  } catch (err) {
    toast.error(
      "Oops! Failed to add the video to watch later. Please try again!",
      {
        position: "bottom-center",
      }
    );
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
      toast.success("Video removed from watch later!", {
        position: "bottom-center",
      });
    } else {
      toast.error(
        "Oops! Failed to remove the video from watch later. Please try again!",
        {
          position: "bottom-center",
        }
      );
      console.error("remove watch later call failed with status: ", res.status);
    }
  } catch (err) {
    toast.error(
      "Oops! Failed to remove the video from watch later. Please try again!",
      {
        position: "bottom-center",
      }
    );
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
      toast.success("Video removed from history!", {
        position: "bottom-center",
      });
    } else {
      toast.error(
        "Oops! Failed to remove the video from history. Please try again!",
        {
          position: "bottom-center",
        }
      );
      console.error(
        "remove from history call failed with status: ",
        res.status
      );
    }
  } catch (err) {
    toast.error(
      "Oops! Failed to remove the video from history. Please try again!",
      {
        position: "bottom-center",
      }
    );
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
      toast.success("History cleared!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to clear history. Please try again!", {
        position: "bottom-center",
      });
      console.error("clear history call failed with status: ", res.status);
    }
  } catch (err) {
    toast.error("Oops! Failed to clear history. Please try again!", {
      position: "bottom-center",
    });
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

export const addPlaylist = async (playlistData, dispatchData, token, video) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/user/playlists",
      data: {
        playlist: {
          title: playlistData.name,
          description: playlistData.description,
        },
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({
        type: "ADD_NEW_PLAYLIST",
        payload: res.data.playlists,
      });

      if (video) {
        addVideoToPlaylist(
          video,
          res.data.playlists[res.data.playlists.length - 1],
          dispatchData,
          token
        );
      }

      toast.success("New playlist created!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to add new playlist. Please try again!", {
        position: "bottom-center",
      });
      console.error("create playlist failed with status: ", res.status);
    }
  } catch (err) {
    toast.error("Oops! Failed to add new playlist. Please try again!", {
      position: "bottom-center",
    });
    console.error("Error creating new playlist", err);
  }
};

export const deletePlaylist = async (
  playlist,
  dispatchData,
  token,
  navigate
) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/playlists/${playlist._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "DELETE_PLAYLIST", payload: playlist });
      navigate && navigate("/playlists");
      toast.success("Playlist deleted!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to delete playlist. Please try again!", {
        position: "bottom-center",
      });
      console.error("delete playlist failed with status: ", res.status);
    }
  } catch (err) {
    toast.error("Oops! Failed to delete playlist. Please try again!", {
      position: "bottom-center",
    });
    console.error("Error deleting playlist", err);
  }
};

export const getPlaylist = async (playlistId, setVideoDetails, token) => {
  try {
    const res = await axios({
      method: "get",
      url: `/api/user/playlists/${playlistId}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      setVideoDetails(res.data.playlist);
    } else {
      console.error("get single playlist failed with status: ", res.status);
    }
  } catch {
    console.error("Error getting single playlist");
  }
};

export const getAllPlaylists = async (setPlaylists, token) => {
  try {
    const res = await axios({
      method: "get",
      url: `/api/user/playlists/`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      setPlaylists(res.data.playlists);
    } else {
      console.error("get all playlists failed with status: ", res.status);
    }
  } catch {
    console.error("Error getting all playlists");
  }
};

export const addVideoToPlaylist = async (
  video,
  playlistData,
  dispatchData,
  token
) => {
  try {
    const res = await axios({
      method: "post",
      url: `/api/user/playlists/${playlistData._id}`,
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: res.data.playlist,
      });
      toast.success(`Video added to ${playlistData.title}!`, {
        position: "bottom-center",
      });
    } else {
      toast.error("Oops! Failed to add video to playlist. Please try again!", {
        position: "bottom-center",
      });
      console.error("add to playlist failed with status: ", res.status);
    }
  } catch (err) {
    toast.error("Oops! Failed to add video to playlist. Please try again!", {
      position: "bottom-center",
    });
    console.error("Error adding video to playlist", err);
  }
};

export const deleteVideoFromPlaylist = async (
  video,
  playlist,
  dispatchData,
  token
) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/playlists/${playlist._id}/${video._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({
        type: "DELETE_VIDEO_FROM_PLAYLIST",
        payload: res.data.playlist,
      });
      toast.success(`Video removed from ${playlist.title}!`, {
        position: "bottom-center",
      });
    } else {
      toast.error(
        "Oops! Failed to remove video from playlist. Please try again!",
        {
          position: "bottom-center",
        }
      );
      console.error(
        "delete video from playlist failed with status: ",
        res.status
      );
    }
  } catch (err) {
    toast.error(
      "Oops! Failed to remove video from playlist. Please try again!",
      {
        position: "bottom-center",
      }
    );
    console.error("Error deleting video from playlist", err);
  }
};

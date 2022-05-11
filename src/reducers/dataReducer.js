export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "LIKE_VIDEO":
      return { ...state, likedVideos: state.likedVideos.concat(payload) };

    case "DISLIKE_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (video) => video._id !== payload._id
        ),
      };

    case "SET_LIKE_VIDEOS":
      return {
        ...state,
        likedVideos: payload,
      };

    case "ADD_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.concat(payload),
      };

    case "REMOVE_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video._id !== payload._id
        ),
      };
    case "SET_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: payload,
      };
    case "ADD_TO_HISTORY":
      return { ...state, userHistory: state.userHistory.concat(payload) };

    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        userHistory: state.userHistory.filter(
          (video) => video._id !== payload._id
        ),
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        userHistory: [],
      };

    case "SET_HISTORY":
      return {
        ...state,
        userHistory: payload,
      };

    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        userPlaylists: payload, // payload contains entire updated array
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        userPlaylists: state.userPlaylists.filter(
          (playlist) => playlist._id !== payload._id
        ),
      };

    case "ADD_VIDEO_TO_PLAYLIST":
      const temp = state.userPlaylists.filter(
        (playlist) => playlist._id !== payload._id
      );

      const updatedAllPlaylists = temp.concat(payload);

      return {
        ...state,
        userPlaylists: updatedAllPlaylists,
      };

    default:
      return state;
  }
};

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
    default:
      return state;
  }
};

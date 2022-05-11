import { Routes, Route } from "react-router-dom";
import { NavBar, SideNavBar } from "./components";
import {
  Explore,
  PageNotFound,
  Homepage,
  Login,
  Signup,
  SingleVideoPage,
  LikedVideos,
  WatchLater,
  HistoryPage,
  Playlists,
  SinglePlaylistPage,
} from "./pages";
import { PrivateRoute } from "./router/PrivateRoute";

const App = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex flex-1 gap-1">
        <SideNavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watch/:videoId" element={<SingleVideoPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route
              path="/playlists/:playlistId"
              element={<SinglePlaylistPage />}
            />
            <Route path="/likedVideos" element={<LikedVideos />} />
            <Route path="/watchLater" element={<WatchLater />} />
          </Route>

          <Route
            path="*"
            element={
              <PageNotFound
                errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
                gotoMsg="Go to Homepage"
                gotoPath="/"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

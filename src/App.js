import { Routes, Route } from "react-router-dom";
import { NavBar, SideNavBar } from "./components";
import { PageNotFound, Homepage } from "./pages";

const App = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex flex-1 gap-1">
        <SideNavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/signup" element={<h1>Signup</h1>} />

          <Route path="/history" element={<h1>History</h1>} />
          <Route path="/playlists" element={<h1>playlists</h1>} />
          <Route path="/likedVideos" element={<h1>likedVideos</h1>} />
          <Route path="/watchLater" element={<h1>watchLater</h1>} />

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

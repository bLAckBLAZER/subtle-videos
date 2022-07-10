import "./SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

export const SideBar = ({
  setShowSideBar,
  userLogout,
  dispatchAuth,
  authState,
}) => {
  const navigate = useNavigate();

  return (
    <div className="modal-container">
      <aside className="mob-aside" onClick={() => setShowSideBar(false)}>
        <div className="side-bar-item">
          <MdClose size={20} onClick={() => setShowSideBar(false)} />
        </div>
        <div className="side-bar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/explore">Explore</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/history">History</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/playlists">Playlists</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/likedVideos">Liked Videos</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/watchLater">Watch Later</Link>
        </div>
        <div className="side-bar-item" style={{ justifySelf: "flex-end" }}>
          {authState.token ? (
            <div onClick={() => userLogout(dispatchAuth, navigate)}>Logout</div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </aside>
    </div>
  );
};

import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/subtle-videos-logo.png";
import { Input, Hamburger, SearchBar } from "../../components";
import { useAuth } from "../../contexts";
import { userLogout } from "../../utils/authenticationCalls";
import { useState } from "react";
import { SideBar } from "./SideBar";

export const NavBar = () => {
  const { authState, dispatchAuth } = useAuth();
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="navbar fixed">
      <Link to="/">
        <div className="flex align-ctr justify-ctr">
          <div className="nav-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-heading">
            <span>Subtle</span>Videos
          </div>
        </div>
      </Link>
      <SearchBar />

      <ul className="nav-actions">
        <li className="nav-action-item">
          {authState.token ? (
            <button
              className="btn btn-primary"
              onClick={() => userLogout(dispatchAuth, navigate)}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </li>

        <li className="nav-action-item">
          <Hamburger onClickAction={() => setShowSideBar(!showSideBar)} />
        </li>
      </ul>
      {showSideBar && (
        <SideBar
          setShowSideBar={setShowSideBar}
          userLogout={userLogout}
          dispatchAuth={dispatchAuth}
          authState={authState}
        />
      )}
    </nav>
  );
};

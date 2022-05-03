import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/subtle-videos-logo.png";
import { Input, Hamburger } from "../../components";
import { useAuth } from "../../contexts";
import { userLogout } from "../../utils/authenticationCalls";

export const NavBar = () => {
  const { authState, dispatchAuth } = useAuth();
  const navigate = useNavigate();

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
      <Input id="search-bar" placeholder="What do you want to watch today?" />
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
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
};

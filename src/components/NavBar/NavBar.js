import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/subtle-videos-logo.png";
import { Input, Hamburger } from "../../components";

export const NavBar = () => {
  const authState = {
    token: null,
  };

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
            <Link to="/logout">
              <button className="btn btn-primary">Logout</button>
            </Link>
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

import {
  MdHome,
  MdExplore,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";

import { NavLink } from "react-router-dom";

import { SideNavBarItem } from "./SideNavBarItem";

export const SideNavBar = () => {
  return (
    <aside className="side-navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem itemName="Home" itemIcon={<MdHome size={28} />} />
      </NavLink>
      <NavLink
        to="/explore"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem itemName="Explore" itemIcon={<MdExplore size={28} />} />
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem itemName="History" itemIcon={<MdHistory size={28} />} />
      </NavLink>
      <NavLink
        to="/playlists"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem
          itemName="Playlists"
          itemIcon={<MdPlaylistPlay size={28} />}
        />
      </NavLink>

      <NavLink
        to="/likedVideos"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem
          itemName="Liked videos"
          itemIcon={<MdThumbUp size={28} />}
        />
      </NavLink>

      <NavLink
        to="/watchLater"
        style={({ isActive }) => {
          return { backgroundColor: isActive && "#ff0000" };
        }}
      >
        <SideNavBarItem
          itemName="Watch later"
          itemIcon={<MdWatchLater size={28} />}
        />
      </NavLink>
    </aside>
  );
};

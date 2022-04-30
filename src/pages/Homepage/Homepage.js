import { NavBar, SideNavBar } from "../../components";
import { Outlet, useLocation } from "react-router-dom";

import "./Homepage.css";

export const Homepage = () => {
  const location = useLocation();
  console.log("location: ", location.pathname);

  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex flex-1 gap-1">
        <SideNavBar />
        {location.pathname === "/" && (
          <div className="flex-1" style={{ backgroundColor: "#181818" }}>
            Videos
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};

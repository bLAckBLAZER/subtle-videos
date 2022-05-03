import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

export const PrivateRoute = () => {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

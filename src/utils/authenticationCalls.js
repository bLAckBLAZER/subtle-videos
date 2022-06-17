import axios from "axios";
import { removeLocalStorage, setLocalStorage } from "./localStorageCalls";
import toast from "react-hot-toast";

export const userLogin = async (
  event,
  dispatch,
  email,
  password,
  navigate,
  gotoPath,
  dispatchData
) => {
  event.preventDefault();

  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (res?.status === 200 || res?.status === 201) {
      const { foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      setLocalStorage("token", encodedToken);
      setLocalStorage("user", foundUser, true);

      dispatchData({ type: "SET_LIKE_VIDEOS", payload: foundUser.likes });
      dispatchData({ type: "SET_HISTORY", payload: foundUser.history });
      dispatchData({ type: "SET_WATCH_LATER", payload: foundUser.watchlater });
      // getUserPlaylists()

      navigate(gotoPath);
      toast.success("Login successful!", {
        position: "bottom-center",
      });
    }
  } catch {
    toast.error("Oops! Login failed. Please check your credentials!", {
      position: "bottom-center",
    });
    throw new Error("Error in loggin in!");
  }
};

export const userLogout = (dispatchAuth, navigate) => {
  try {
    removeLocalStorage("token");
    removeLocalStorage("user");

    dispatchAuth({ type: "LOGOUT" });
    navigate("/");
    toast.success("Logout successful!", {
      position: "bottom-center",
    });
  } catch {
    toast.error("Oops! Logout failed. Please try again!", {
      position: "bottom-center",
    });
    throw new Error("Logout failed");
  }
};

export const userSignup = async (
  event,
  { firstName, lastName, email, password },
  dispatch,
  navigate,
  dispatchData
) => {
  event.preventDefault();

  try {
    const res = await axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    if (res?.status === 200 || res?.status === 201) {
      const { createdUser: foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      setLocalStorage("token", encodedToken);
      setLocalStorage("user", foundUser, true);

      dispatchData({ type: "SET_LIKE_VIDEOS", payload: foundUser.likes });
      dispatchData({ type: "SET_HISTORY", payload: foundUser.history });
      dispatchData({ type: "SET_WATCH_LATER", payload: foundUser.watchlater });

      navigate("/");
      toast.success("Signup successful!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    toast.error("Oops! Signup failed. Please check the details entered!", {
      position: "bottom-center",
    });
    console.error(err);
  }
};

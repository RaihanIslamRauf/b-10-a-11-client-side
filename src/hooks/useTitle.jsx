import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - RunTrack",
      "/register": "Register - RunTrack",
      "/signIn": "Sign In - RunTrack",
      "/marathons": "Marathons - RunTrack",
      "/dashboard": "Dashboard - RunTrack",
      "/dashboard/add-marathon": "Add Marathon - RunTrack",
      "/dashboard/my-marathons": "My Marathons - RunTrack",
      "/dashboard/my-apply-list": "My Apply List - RunTrack"
    };

    if (location.pathname.startsWith("/marathons/")) {
      document.title = "Marathon Details - RunTrack";
    } else if (location.pathname.startsWith("/register/")) {
      document.title = "Marathon Register - RunTrack";
    } else {
      document.title = titles[location.pathname] || "RunTrack";
    }
  }, [location]);
};

export default useTitle;

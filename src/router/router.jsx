import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/DashBoard/Dashboard";
import AddMarathon from "../pages/AddMarathon/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList/MyMarathonList";
import MyApplyList from "../pages/MyApplyList/MyApplyList";
import Marathons from "../pages/Marathons/Marathons";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MarathonDetails from "../pages/Marathons/MarathonDetails";
import MarathonRegister from "../pages/Marathons/MarathonRegister";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "signIn",
          element: <SignIn></SignIn>
        },
        {
          path: "marathons",
          element: <PrivateRoute><Marathons></Marathons></PrivateRoute>
        },
        {
          path: "/marathons/:id",
          element: <PrivateRoute><MarathonDetails></MarathonDetails></PrivateRoute>,
        },
        {
          path: "/register/:id",
          element: <PrivateRoute><MarathonRegister></MarathonRegister></PrivateRoute>,
        },
        
        {
          path: "dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: "add-marathon",
              element: <AddMarathon></AddMarathon>
            },
            {
              path: "my-marathons",
              element: <MyMarathonList></MyMarathonList>
            },
            {
              path: "my-apply-list",
              element: <MyApplyList></MyApplyList>
            }
          ]
        }
      ]
    },
  ]);

export default router;
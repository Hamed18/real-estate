import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/UserProfile/Login";
import Register from "../Pages/UserProfile/Register";
import PrivateRoute from "./PrivateRoutes";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>,
			loader: () => fetch('/estates.json')
		},
		{
			path: "/estate/:id",  // dynamic route
			element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
			loader: () => fetch('estates.json')
		},
		{
			path: '/login',
			element: <Login></Login>
		},
		{
			path: '/register',
			element: <Register></Register>
		},
		{
			path: '/updateProfile',
			element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
		}
	  ]
	},
  ]);

  export default routes;
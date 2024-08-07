import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import EstateDetails from "../Pages/EstateDetails";
import Login from "../Pages/UserProfile/Login";
import Register from "../Pages/UserProfile/Register";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>,
			loader: () => fetch('estates.json')
		},
		{
			path: "/estates/:id",
			element: <EstateDetails></EstateDetails>
		},
		{
			path: '/login',
			element: <Login></Login>
		},
		{
			path: '/register',
			element: <Register></Register>
		},
	  ]
	},
  ]);

  export default routes;
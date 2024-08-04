import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import EstateDetails from "../Pages/EstateDetails";

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
		}
	  ]
	},
  ]);

  export default routes;
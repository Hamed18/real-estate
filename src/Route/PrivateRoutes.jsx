import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
	const {user,loading} = useContext(AuthContext);

	if (loading){
		// console.log("loading happens");
		return <span className="bg-green-700"></span>
	}

	if (user){
		return children;
	}

	return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
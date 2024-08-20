import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="text-center">
			<h2 className="text-center font-extrabold text-2xl">404 route/not found!!</h2>
			<Link to="/" className="btn text-center font-bold p-2 rounded-xl flex justify-center">Go Back To Home</Link>
		</div>
	);
};

export default ErrorPage;
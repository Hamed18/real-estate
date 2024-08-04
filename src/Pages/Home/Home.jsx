import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";

const Home = () => {
	const estates = useLoaderData();
	console.log(estates);
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Header></Header>
			<p className="text-center font-Poppins">This is Main Section</p>
			<Footer></Footer>
		</div>
	);
};

export default Home;
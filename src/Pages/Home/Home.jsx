import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";

const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Header></Header>
			<p className="text-center font-Poppins">This is Home Page</p>
		</div>
	);
};

export default Home;
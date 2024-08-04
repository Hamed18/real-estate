import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import EstateCard from "../Home/EstateCard";

const Home = () => {
	const estates = useLoaderData();
	console.log(estates);

	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Header></Header>
			<p className="text-center font-Poppins">This is Main Section</p>

			{/* main section */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div>
					<p>left side bar</p>
				</div>

				{/* news container */}
				<div className="md:col-span-2">
					{
						/* estates.map(estate => <EstateCard
						    key = {estate._id}
							estates = {estate}
						></EstateCard>) */
						estates.map(estate => <EstateCard
							key= {estates.id}
							estates={estate} >
						</EstateCard> )
					}
					<h2 className="text-4xl">News Coming Soon</h2>
				</div>

				<div>
					<p>Right Side bar</p>
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Home;
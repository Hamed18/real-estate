import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const EstateDetails = () => {
	const estateDetail = useLoaderData();
	const {id} = useParams();
	console.log(estateDetail);

	const idInt = parseInt(id);
    const estate = estateDetail.find((estate) => estate.id === idInt);
	const {estate_title,location} = estate;

	return (
		<div>
			<Header></Header>
			<Navbar></Navbar>
			<p>estate details</p>
			<h3 className="text-center">{estate_title}</h3>
			<h3 className="text-center">{location}</h3>
			<p>{id}</p>
		</div>
	);
};

export default EstateDetails;
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const EstateDetails = () => {
  const estateDetail = useLoaderData();
  const { id } = useParams();
  console.log(estateDetail);

  const idInt = parseInt(id);
  const estate = estateDetail.find((estate) => estate.id === idInt);
  const {
    estate_title,
    location,
    view_property,
    facilities,
    image,
    price,
    status,
    area,
    segment_name,
    description,
  } = estate;

  return (
    <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <p className="text-3xl font-bold text-center my-4">{estate_title}</p>
        <div className="card bg-base-100 bg-gray-200 max-w-2xl mx-auto">
          <figure>
            <img
              src={image}
              alt="Estate Image"
              className="h-[564px] w-[425px] bg-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {estate_title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="card-title">Location: {location}</p>
            <h4 className="font-bold text-3xl ">Properties: {view_property}</h4>
            <div className="card-actions justify-end my-2">
              <div className="badge badge-outline">{segment_name}</div>
              <div className="badge badge-outline">{price}</div>
              <div className="badge badge-outline">{status}</div>
              <div className="badge badge-outline">{area}</div>
            </div>
            <h4 className="card-title">Exclusive Facilities!</h4>
            {
              <ul className="grid grid-cols-2">
                {facilities.map((facility, index) => (
                  <li
                    key={index}
                    className="border p-1 rounded-lg bg-green-500 text-yellow-300 text-center mx-4 my-1"
                  >
                    {facility}
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
    </div>
  );
};

export default EstateDetails;

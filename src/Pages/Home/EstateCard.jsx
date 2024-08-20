import { Link } from "react-router-dom";

const estateCard = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    image,
    price,
    status,
    area,
    location,
    facilities,
    view_property,
  } = estate;
  return (
    <div className="card bg-base-100 w-150 bg-gray-200">
      <figure>
        <img src={image} alt="Estate Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h4 className="card-title">Location: {location}</h4>
        <p>{description}</p>
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
        <Link to={`/estate/${id}`} className="text-blue-600 font-bold flex justify-center">
          <button className="btn btn-success flex justify-center p-2 text-white-500">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default estateCard;

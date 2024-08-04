import { Link } from "react-router-dom";

const estateCard = ({ estates }) => {
  const { id,estate_title,segment_name,description,image,price,status,area,location,facilities,view_property } = estates;
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border rounded-lg overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={estate_title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{estate_title}</h2>
        <h3 className="text-xl text-gray-600 mb-2">{segment_name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-xl font-bold text-gray-900 mb-2">{price}</p>
        <p
          className={`text-lg mb-2 ${
            status === "sale" ? "text-green-500" : "text-blue-500"
          }`}
        >
          {status === "sale" ? "For Sale" : "For Rent"}
        </p>
        <p className="text-gray-700 mb-2">{area}</p>
        <p className="text-gray-700 mb-2">{location}</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
		<button>
          <Link to={`/estates/${id}`} className="text-blue-600 font-bold">View Property</Link>
		</button>
      </div>
    </div>
  );
};

export default estateCard;

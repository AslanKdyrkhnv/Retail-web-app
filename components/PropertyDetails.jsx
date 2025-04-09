import {
  FaCheck,
  FaXmark,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  const {
    name,
    type,
    description,
    location,
    beds,
    baths,
    square_feet,
    amenities,
    rates,
  } = property;
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{type}</div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
          {/* <FaLocationDot className="text-lg text-orange-700 mr-2" /> */}
          <FaMapMarkerAlt className="text-lg text-orange-700 mr-1 mt-1" />
          <p className="text-orange-700">
            {`${location.street} ${location.city}, ${location.state} ${location.zipcode}`}{" "}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold text-xl">Nightly</div>
            {rates.nightly ? (
              <div className="text-2xl font-bold text-blue-500">
                {`$${rates.nightly.toLocaleString()}`}
              </div>
            ) : (
              <div className="text-2xl font-bold">
                <FaXmark className=" text-red-700" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold text-xl">Weekly</div>
            {rates.weekly ? (
              <div className="text-2xl font-bold text-blue-500">
                {`$${rates.weekly.toLocaleString()}`}
              </div>
            ) : (
              <div className="text-2xl font-bold">
                <FaXmark className=" text-red-700" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold text-xl">Monthly</div>
            {rates.monthly ? (
              <div className="text-2xl font-bold text-blue-500">
                {`$${rates.monthly.toLocaleString()}`}
              </div>
            ) : (
              <div className="text-2xl font-bold">
                <FaXmark className=" text-red-700" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <FaBed className="inline mb-1" /> {beds}
            <span className=" sm:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mb-1" /> {baths}
            <span className=" sm:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mb-1" />
            {square_feet} <span className=" sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className="text-green-600 mr-2 mb-1 inline" />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;

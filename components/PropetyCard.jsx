import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarked,
  FaMoneyBill,
} from "react-icons/fa";
import Image from "next/image";

const PropertyCard = ({ property }) => {
  const getRated = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `$${rates.monthly}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly}/day`;
    } else {
      return `$Call for info`;
    }
  };
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRated()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline" /> {property.beds} <span> Beds</span>
          </p>
          <p>
            <FaBath className="inline" /> {property.baths} <span> Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline" />
            1,500 <span> sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FaMoneyBill className="inline mb-1" /> Weekly
          </p>
          <p>
            <FaMoneyBill className="inline mb-1" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarked className="text-red-700 mt-1" />
            <span className="text-orange-700">
              {" "}
              {property.location.city} {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

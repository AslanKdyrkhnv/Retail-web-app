// import properties from "@/properties.json";
import PropertyCard from "./PropetyCard";
import Link from "next/link";
import Property from "@/model/Property";
import connectDB from "@/config/database";

const HomeProperties = async () => {
  await connectDB();
  const recentlyProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
  // const recentlyProperties = properties.slice(0, 3);
  return (
    <>
      <h2 className="mt-12 text-blue-500 text-center text-3xl font-bold">
        Recent Properties
      </h2>
      <section className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto container gap-6 px-3 py-4">
          {recentlyProperties.length === 0 ? (
            <p>Not Found Properteis</p>
          ) : (
            recentlyProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </section>

      <section className="m-auto max-w-lg my-6 px-6 ">
        <Link
          href={"/properties"}
          className="text-white bg-black px-16 block py-4 text-center rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;

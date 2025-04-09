// import properties from "@/properties.json";
import PropertyCard from "@/components/PropetyCard";
import connectDB from "@/config/database";
import Property from "@/model/Property";

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).sort({ createdAt: -1 }).lean();
  return (
    <section className="px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto container gap-6 px-3 py-4">
        {properties.length === 0 ? (
          <p>Not Found Properteis</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;

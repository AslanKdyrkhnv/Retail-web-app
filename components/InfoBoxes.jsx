import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            InfoTitle={"For Renters"}
            ButtonInfo={{
              textInfo: "Browse Properties",
              pathname: "/properties",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            InfoTitle={"For Properties Owners"}
            backgroundColor="bg-blue-100"
            ButtonInfo={{
              color: "bg-blue-400",
              textInfo: "Add Property",
              pathname: "/properties/add",
            }}
          >
            List you properties and reach potential tenats. Rent as an airbnb or
            long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

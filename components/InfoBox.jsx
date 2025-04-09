import Link from "next/link";
const InfoBox = ({
  children,
  backgroundColor = "bg-gray-100",
  ButtonInfo,
  InfoTitle,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className="text-2xl font-bold">{InfoTitle}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={ButtonInfo.pathname}
        className={`inline-block ${
          ButtonInfo.color || "bg-black"
        } text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {ButtonInfo.textInfo}
      </Link>
    </div>
  );
};

export default InfoBox;

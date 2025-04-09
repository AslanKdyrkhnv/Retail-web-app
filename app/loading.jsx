"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  margin: "100px auto",
  display: "block",
};

const LoadingPage = () => {
  return (
    <div className="flex w-[85vw] h-[85vh] items-center justify-center mx-auto">
      <ClipLoader
        className="text-blue-500 "
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingPage;

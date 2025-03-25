"use client";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-3xl">Welcome to homePage</h2>
      <Link
        href={{
          pathname: "properties/100",
          query: {
            name: "SayHello",
          },
        }}
      >
        Add page
      </Link>
    </div>
  );
};

export default HomePage;

"use client";

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertiesID = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  return (
    <div>
      <h2>Properties Page ID: {params.slug}</h2>
      <p>SearchParams: name = {searchParams.get("name")}</p>
      <p>Pathname of URN: {pathName} </p>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertiesID;

import requests from "../utils/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex justify-center bg-gray-600">
      {Object.entries(requests).map(([key, { title, url }]) => {
        return (
          <h1
            className="select-none m-6 cursor-pointer text-xl text-gray-300 hover:text-white active:text-red-400 lg:text-2xl "
            key={key}
            onClick={() => router.push(`?genre=${key}`)}
          >
            {title}
          </h1>
        );
      })}
    </nav>
  );
}

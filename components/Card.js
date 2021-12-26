import Image from "next/image";
export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  console.log(result);
  return (
    <div className="text-gray-200 p-4 cursor-pointer active:text-red-400 lg:hover:scale-105 transition-transform duration-200">
      <Image
        key={result.id}
        src={`${BASE_URL}${result.backdrop_path}`}
        layout="responsive"
        width={200}
        height={100}
        className=""
      />
      <div className="p-2 select-none lg:select-auto">
        <p className="text-lg truncate">{result.overview}</p>
        <h2 className="my-1 text-xl font-bold">
          {result.title || result.name}
        </h2>
        <p>{result.release_date || result.first_air_date}</p>
      </div>
    </div>
  );
}

import Card from "./Card";

export default function Results({ results }) {
  return (
    <main className="bg-gray-700 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </main>
  );
}
